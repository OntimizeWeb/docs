---
title: "Create new account and insert a customer"
layout: default
permalink: /tutorial-web/exercise18/
nav_order: 18
# has_children: false
# has_toc: false
# nav_exclude: true
# grand_parent: Title grand_parent
parent: Tutorial OWeb
---

{% include base_path %}
{% include toc %}

# Crear una nueva cuenta e insertar un cliente
## Introducción
En este tutorial, permitiremos que se pueda crear una nueva cuenta asociada al cliente actual.

## Modificar el formulario para la nueva opción
En este caso, modificaremos el formulario existente para incluir un botón que permita añadir una nueva cuenta e insertar
ese cliente. Será necesario tanto modificar el html para el botón, como el ts para pasarle los datos a un nuevo 
componente

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
        
{{"**customers-detail.component.html**" | markdownify }}
{% highlight xml %}
<o-form #form attr="customerDetail" service="customers" entity="customer" keys="CUSTOMERID" header-actions="R;I;U;D"
    show-header-navigation="no" class="fill-form">
    <o-text-input attr="CUSTOMERID" sql-type="INTEGER" enabled="no"></o-text-input>
    <div fxFlex fxLayout="row" fxLayoutGap="8px">
        <div>
            <o-image id="CUSTOMER_PHOTO" attr="PHOTO" empty-image="assets/images/no-image.png"
                sql-type="OTHER"></o-image>
        </div>
        <mat-tab-group fxFlex>
            <mat-tab label="{% raw %}{{ 'CUSTOMER_PERSONAL_INFORMATION' | oTranslate }{% endraw %}}">
                <div fxLayout="row" fxLayoutGap="8px">
                    <o-text-input fxFlex="40" attr="NAME" required="yes"></o-text-input>
                    <o-text-input fxFlex="40" attr="SURNAME" required="yes"></o-text-input>
                    <o-date-input fxFlex="20" attr="STARTDATE"></o-date-input>
                </div>
                <div fxLayout="row" fxLayoutGap="8px">
                    <o-nif-input fxFlex="40" attr="ID" required="yes"></o-nif-input>
                    <o-integer-input fxFlex="40" attr="PHONE" step="0" thousand-separator=" "></o-integer-input>
                    <o-combo fxFlex="20" attr="CUSTOMERTYPEID" service="customers" entity="customerType"
                        keys="CUSTOMERTYPEID" columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION"
                        value-column="CUSTOMERTYPEID"></o-combo>
                </div>
                <o-email-input attr="EMAIL"></o-email-input>
                <o-text-input attr="ADDRESS"></o-text-input>
                <div fxLayout="row" fxLayoutGap="8px">
                    <o-real-input fxFlex="50" attr="LONGITUDE" decimal-separator="," max-decimal-digits="10"
                        min-decimal-digits="0"></o-real-input>
                    <o-real-input fxFlex="50" attr="LATITUDE" decimal-separator="," max-decimal-digits="10"
                        min-decimal-digits="0"></o-real-input>
                </div>
                <o-textarea-input attr="COMMENTS"></o-textarea-input>
            </mat-tab>
            <mat-tab label="{% raw %}{{ 'ACCOUNTS' | oTranslate }}{% endraw %}">
                <o-table #accountCustomerTable attr="accountsTable" service="customers" entity="vCustomerAccount"
                    keys="ACCOUNTID" parent-keys="CUSTOMERID" insert-button="no" refresh-button="yes"
                    detail-mode="dblclick" delete-button="no" query-rows="20"
                    columns="CUSTOMERID;ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;STARTDATE;ENDDATE;INTERESRATE;ACCOUNTTYP"
                    visible-columns="ACCOUNTNUMBER;STARTDATE;ENDDATE;INTERESRATE;INTERESRATE_MONTHLY;ACCOUNTTYP">
                    <o-table-button attr="openAccount" (onClick)="openAccountDetailSelected()"
                        label="{% raw %}{{ 'OPEN_ACCOUNT_SELECTED' | oTranslate }}{% endraw %}" icon="credit_card"></o-table-button>
                    <o-table-button attr="createAccount" (onClick)="createNewAccount()"
                        label="{% raw %}{{ 'CREATE_ACCOUNT' | oTranslate }}{% endraw %}" icon="add_card"></o-table-button>
                    <o-table-column attr="STARTDATE" title="STARTDATE" type="date" format="LL"></o-table-column>
                    <o-table-column attr="ENDDATE" title="ENDDATE" type="date" format="LL"></o-table-column>
                    <o-table-column attr="INTERESRATE" title="INTERESRATE" type="percentage" width="150px"
                        decimal-separator="," content-align="center"></o-table-column>
                    <o-table-column attr="ACCOUNTNUMBER" title="ACCOUNTNUMBER" content-align="center">
                        <app-account-number-render></app-account-number-render>
                    </o-table-column>
                    <o-table-column-calculated attr="INTERESRATE_MONTHLY" title="INTERESRATE_MONTHLY"
                        [operation-function]="intRateMonthly" type="percentage" decimal-separator=","
                        content-align="center">
                    </o-table-column-calculated>
                </o-table>
            </mat-tab>
        </mat-tab-group>
    </div>
</o-form>
{% endhighlight %}

{{"**customers-detail.component.ts**" | markdownify }}
{% highlight typescript %}
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OFormComponent, OTableComponent } from 'ontimize-web-ngx';
import { intRateMonthlyFunction } from 'src/app/shared/shared.module';
import { AddAccountComponent } from './add-account/add-account.component';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.css']
})
export class CustomersDetailComponent {

  @ViewChild('accountCustomerTable') accountTable: OTableComponent;
  @ViewChild('form') form: OFormComponent;
  public intRateMonthly = intRateMonthlyFunction;

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  public openAccountDetailSelected() {
    let selected = this.accountTable.getSelectedItems();
    if (selected.length === 1) {
      let accountId = selected[0]['ACCOUNTID'];
      let customerId = selected[0]['CUSTOMERID'];
      this.router.navigate(['main/customers/' + customerId + '/' + accountId], { queryParams: { isdetail: true } });
    }
  }

  public createNewAccount() {
    let customerId = this.form.getFieldValue('CUSTOMERID');
    let date = new Date().getTime();
    this.dialog.open(AddAccountComponent, {
      data: {
        CUSTOMERID: customerId,
        STARTDATE: date
      }, disableClose: false
    })
  }

}
{% endhighlight %}
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  ontimize-web-tutorial
  <ul>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          accounts
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              movement-column-renderer
              <ul>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.css</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.html</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              account-number-render
              <ul>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.css</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.html</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-new
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            add-customer
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            add-movement
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          branches
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-new
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.css</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.html</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              customertype-column-renderer
              <ul>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.css</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.html</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-new
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          employees
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            employees-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            employees-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          service-ex
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            service-ex-details
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            service-ex-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          account-card
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.css</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          branch-card
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.css</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customer-card
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.css</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          employee-card
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.css</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          service-ex-card
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.css</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>star-wars-response-adapter.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>star-wars.service.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>normal_24.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>other_24.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>vip_24.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

## Creación del nuevo componente
Crearemos el nuevo componente para crear una nueva cuenta. Para ello ejecutamos el siguiente comando dentro de la
carpeta **customers-detail**

```
npx ng g c --skip-tests add-account
```

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
        
{{"**add-account.component.html**" | markdownify }}
{% highlight xml %}
<div mat-dialog-content>
    <o-form #form (onFormModeChange)="forceInsertMode($event)" (onInsert)="closeDialog($event)" service="branches"
        entity="account" show-header="yes" after-insert-mode="new" undo-button="no" ignore-default-navigation="yes">
        <o-combo attr="OFFICEID" label="OFFICEID" service="branches" entity="branch" value-column="OFFICEID"
            columns="OFFICEID;NAME" visible-columns="NAME" read-only="no" required="yes"></o-combo>
        <o-integer-input oHidden attr="CUSTOMERID"></o-integer-input>
        <o-date-input attr="STARTDATE"></o-date-input>
    </o-form>
</div>
{% endhighlight %}

{{"**add-account.component.ts**" | markdownify }}
{% highlight typescript %}
import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {

  @ViewChild('form') form: OFormComponent;
  public dialog: MatDialogModule;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddAccountComponent>
  ) { }

  public forceInsertMode(event: any) {
    if (event != OFormComponent.Mode().INSERT) {
      this.form.setInsertMode();
      this.form.setFieldValues(this.data)
    }
  }

  public closeDialog(event: any) {
    this.dialogRef.close();
  }

}
{% endhighlight %}

<p>Añadimos este nuevo componente al array de declaraciones del módulo de cliente.</p>

{{"**customers.module.ts**" | markdownify }}
{% highlight typescript %}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersNewComponent } from './customers-new/customers-new.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAccountComponent } from './customers-detail/add-account/add-account.component';


@NgModule({
  declarations: [
    CustomersHomeComponent,
    CustomersDetailComponent,
    CustomersNewComponent,
    AddAccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OntimizeWebModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
{% endhighlight %}

<p>Por último añadimos las nuevas traducciones</p>

{{"**en.json**" | markdownify }}
{% highlight json %}
{
  ...
  "CREATE_ACCOUNT": "Create account"
}
{% endhighlight %}

{{"**es.json**" | markdownify }}
{% highlight json %}
{
  ...
  "CREATE_ACCOUNT": "Crear cuenta"
}
{% endhighlight %}
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  ontimize-web-tutorial
  <ul>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          accounts
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              movement-column-renderer
              <ul>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.css</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.html</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              account-number-render
              <ul>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.css</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.html</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-new
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            add-customer
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            add-movement
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          branches
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-new
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              add-account
              <ul>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-account.component.css</li>
                <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-account.component.html</li>
                <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-account.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              customertype-column-renderer
              <ul>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.css</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.html</li>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-new
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-routing.module.ts</li>
            <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          employees
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            employees-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            employees-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          service-ex
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            service-ex-details
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            service-ex-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          account-card
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.css</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          branch-card
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.css</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customer-card
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.css</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          employee-card
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.css</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          service-ex-card
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.css</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>star-wars-response-adapter.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>star-wars.service.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>normal_24.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>other_24.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>vip_24.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>



[<span style="display: flex; align-items: center;"><span class="material-symbols-outlined">arrow_back</span> Tutorial anterior</span>]({{ base_path }}/tutorial-web/exercise17){: .btn }
[<span style="display: flex; align-items: center;">Próximo tutorial <span class="material-symbols-outlined">arrow_forward</span></span>]({{ base_path }}/tutorial-web/exercise19){: .btn }