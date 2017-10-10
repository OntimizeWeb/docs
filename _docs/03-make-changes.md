---
title: "Make some changes"
permalink: /docs/make-changes/
excerpt: ""
modified: 2016-12-12T16:25:30-04:00
---

{% include base_path %}
{% include toc %}

## Overview

In this section we are going to make some simple changes on Quickstart app code. We are going to see
how to add new field into a form. Once added, we are going to learn how to apply our validation logic over this field,
and finally, we are going to navigate to other screen of the application.  

# Add a field.

We are going to add a date field into the detail form of a client. So, first of all, we are going to see the aspect of this form. After
logged in, click on the menu *Views -> Customers*. A table with several clients information will be shown. At this point, we will prefilter 
the results and select an client and going to the detail form (clicking on the magnifying glass row button). The aspect of the detail form is like this picture 
(check it on [live example](https://ontimizeweb.github.io/ontimize-web-ngx-quickstart)):

<img src="{{ base_path }}/images/main_customers_detail.png" alt="customer detail">

For adding the field we have to open the HTML definition file of the form
under the location *src/app/main/customers/detail/customers-detail.component.html*. The content of this file is something like this:

```html
<o-form entity="ECustomers" keys="CUSTOMERID" fxLayout="column" show-header="yes" header-actions="R;I;U" #oForm>

  <md-tab-group fxFill>

    <md-tab label="{{ 'DATA' | oTranslate }}">
      <div fxLayout="column" layout-padding>

        <o-row attr="row1" layout-align="space-between center">

          <o-column title-label="CUSTOMER_DATA" layout-align="start stretch" fxFlex="60" layout-padding>

            <div fxLayout="row" fxLayoutAlign="start center">
              <o-nif-input attr="ID" fxFlex="30" class="margin-right-24"></o-nif-input>
              <o-date-input attr="STARTDATE" fxFlex="30"></o-date-input>
            </div>

            <div fxLayout="row" fxLayoutAlign="start center">
              <o-text-input attr="NAME" fxFlex="30" class="margin-right-24"></o-text-input>
              <o-text-input attr="SURNAME" fxFlex="50"></o-text-input>
            </div>

            <div fxLayout="row" fxLayoutAlign="start center">
              <o-list-picker fxFlex="30" attr="CUSTOMERTYPEID" query-on-init="no" query-on-bind="yes" enabled="yes" filter="yes" value-column="CUSTOMERTYPEID"
                entity="ECustomerTypes" keys="CUSTOMERTYPEID" columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION"
                separator=" - " class="margin-right-24">
              </o-list-picker>
            </div>
          </o-column>

          <o-column fxFlex="40" layout-align="center center">
            <o-image attr="PHOTO" fxFill class="customer-picture" empty-image="./assets/images/no-image.png"></o-image>
          </o-column>
        </o-row>

        <div layout-padding></div>

        <o-column attr="other_data" title-label="CONTACT_DATA" layout-padding layout-align="start stretch">
          <o-text-input attr="ADDRESS"></o-text-input>
          <o-email-input attr="EMAIL"></o-email-input>
          <o-textarea-input attr="COMMENTS" rows="4"></o-textarea-input>
        </o-column>

      </div>
    </md-tab>

    <md-tab label="{{ 'ACCOUNTS' | oTranslate }}">
      <div fxLayout="column" layout-padding>
        <o-datatable #accountsTable entity="ECustomerAccountBalance" parent-keys="CUSTOMERID" keys="ACCOUNTID" detail-button-in-row="yes"
          detail-form-route="accounts" edit-button-in-row="yes" edit-form-route="accounts" columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;ACCOUNT;BALANCE;CUSTOMERID;CUSTOMER;STARTDATE;ENDDATE"
          visible-columns="ACCOUNT;BALANCE;STARTDATE;ENDDATE" title="ACCOUNTS" sort-columns="STARTDATE" select-all-checkbox="no"
          query-on-init="false" query-rows="6" quick-filter="yes" pageable="yes" delete-button="false" insert-button="no">

          <o-datatable-button (onClick)="onAddAccount()" label="ADD_ACCOUNT" icon="add"></o-datatable-button>

          <o-datatable-column attr="ACCOUNT" title="ACCOUNT" class="o-datatable-column-centered"></o-datatable-column>
          <o-datatable-column attr="STARTDATE" title="STARTDATE" type="date" format="LL"></o-datatable-column>
          <o-datatable-column attr="BALANCE" title="BALANCE" type="currency" currency-symbol="€" currency-symbol-position="right" thousand-separator="."
            decimal-separator=",">
          </o-datatable-column>
          <o-datatable-column attr="ENDDATE" title="ENDDATE" type="date" format="LL"></o-datatable-column>
        </o-datatable>

        <o-list-picker class="display-none" (onChange)="onNewAccountSelected($event)" #accountListPicker query-on-init="no" automatic-binding="no"
          query-on-bind="no" [static-data]="availableAccountsToAdd" required="no" enabled="yes" filter="yes" keys="ACCOUNTID"
          value-column="ACCOUNTID" columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;BALANCE;ACCOUNTTYP" visible-columns="ACCOUNT;BALANCE"
          separator=" - " dialog-width="600px">
        </o-list-picker>
      </div>

    </md-tab>
  </md-tab-group>
</o-form>
```

Analyzing the code, we can see a *o-form* that contains several fields that take value from the entity *ECustomers* specified. The parameter *attr* of each
field corresponds with an attribute (field name) that exists into the response of the service of the entity *ECustomers*.

We will add our date field after the customer type field with *attr='CUSTOMERTYPEID'*. So, we add the code below:

```html
<o-text-input attr="PHONE" fxFlex="30"></o-text-input>
```
The text input field corresponds to *o-text-input*, the rest of div's and o-row are simply used to place the field according to the others. We set the *attr='PHONE'*
because we know that the entity contains this attribute which corresponds with customer phone number.

If you reload the page on the browser you will see the phone field placed to the right of 'Customer type' field. 

You can find all available fields and all of their configuration parameters into the [Components]({{ base_path }}/components-collection/) section.

---

# Validate a field.

The next change that we will perform will be to validate the value of a form field. In this case we choose a date field (*STARTDATE*) which value will be validated when user changes its value. If the date entered is greater than
today's date it will shown an alerte message.

Just a little clarification before continuing, the fields are only modifiable when the form is in 'edit' or 'insert' mode. 
So, taking that in consideration, we have to use the form defined in the file *src/app/main/customers/edit/customers-edit.component.html*. The content of this file will be like this:

```html
<o-form entity="ECustomers" keys="CUSTOMERID"
  fxLayout="column" show-header="yes" label-header="CUSTOMERS" header-actions="R;U;D" #oForm>


  <div fxLayout="column" layout-padding class="rounded-panel">

    <o-row attr="row1" layout-align="start stretch">

      <o-column title-label="CUSTOMER_DATA" layout-align="start stretch" fxFlex="60" layout-padding>

        <div fxLayout="row" fxLayoutAlign="start center">
          <o-nif-input attr="ID" fxFlex="30" class="margin-right-24" required="yes"></o-nif-input>
          <o-date-input attr="STARTDATE" fxFlex="30" required="yes"></o-date-input>
        </div>

        <div fxLayout="row" fxLayoutAlign="start center">
          <o-text-input attr="NAME" fxFlex="30" class="margin-right-24" required="yes"></o-text-input>
          <o-text-input attr="SURNAME" fxFlex="50" required="yes"></o-text-input>

        </div>

        <div fxLayout="row" fxLayoutAlign="start center">
          <o-list-picker fxFlex="30" attr="CUSTOMERTYPEID" query-on-init="no" query-on-bind="yes" required="yes" enabled="yes" filter="yes"
            value-column="CUSTOMERTYPEID" entity="ECustomerTypes" keys="CUSTOMERTYPEID" columns="CUSTOMERTYPEID;DESCRIPTION"
            visible-columns="DESCRIPTION" separator=" - " class="margin-right-24"></o-list-picker>
        </div>

      </o-column>

      <o-column fxFlex="40" layout-align="center center">
        <o-image attr="PHOTO" fxFill class="customer-picture" empty-image="./assets/images/no-image.png"></o-image>
      </o-column>
    </o-row>

    <div layout-padding></div>

    <o-column attr="other_data" title-label="CONTACT_DATA" layout-padding fxLayoutAlign="start stretch">
      <o-text-input attr="ADDRESS"></o-text-input>
      <o-email-input attr="EMAIL"></o-email-input>
      <o-textarea-input attr="COMMENTS" rows="4"></o-textarea-input>
    </o-column>

  </div>

</o-form>
```

We also need to modify the file *customers-edit.component.ts* to include our validation code:

```javascript

import { Component, ViewEncapsulation } from '@angular/core';

import { DialogService } from 'ontimize-web-ng2';

@Component({
  selector: 'customers-edit',
  styleUrls: ['./customers-edit.component.scss'],
  templateUrl: './customers-edit.component.html',
  encapsulation : ViewEncapsulation.None
})
export class CustomersEditComponent {

  constructor(protected dialogService: DialogService) {
  }

  onDateChange(evt: number) {
    console.log(evt);
    //evt contains the date selected in millis.
    let today = new Date();
    let todayMillis = today.getTime();
    if (todayMillis < evt) {
      this.dialogService.alert('Error', 'Selected date is greater than today\'s date');
    }
  }

}
```
---

# Open a form.

The last test we will do is navigate to another screen of the application. For doing that, we are going to add a button to our screen and, when we click on it,
we navigato to other screen.

Continuing with the example, in the file *customers-edit.component.html* we will place anywhere the code of our button.

```html
<o-button type="RAISED" label="Navigate to 'About'" (click)="onButtonClick()"></o-button>
```
And we will modify the file *customers-edit.component.ts* like this:

```javascript
import { Component, ViewEncapsulation } from '@angular/core';
import { DialogService } from 'ontimize-web-ng2';
import { Router } from '@angular/router';

@Component({
  selector: 'customers-edit',
  styleUrls: ['./customers-edit.component.scss'],
  templateUrl: './customers-edit.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CustomersEditComponent {

  constructor(
    protected dialogService: DialogService,
    protected router: Router) {
  }

  onButtonClick() {
    this.router.navigate(['about']);
  }

  onDateChange(evt: number) {
    console.log(evt);
    // evt contains the date selected in millis.
    const today = new Date();
    const todayMillis = today.getTime();
    if (todayMillis < evt) {
      this.dialogService.alert('Error', 'Selected date is greater than today\'s date');
    }
  }

}
```
Analyzing the code we have to pay attention in a few things:

* We use the Router component for navigating, so, we need to import it and then inject it
in the constructor of our CustomersEditComponent.
* We add the callback function *onButtonClick* that will be executed when user clicks on button.

As we can see, in the callback function we call *navigate* method of router to navigate to other screen of our application. It is important
to take into account that *"about"* route was previously defined as a route of our application. For further information about routing check this
[link]({{ base_path }}/docs/routing/). 

That's all, you do not need anything else. When user clicks the button it will navigate to the 'About' page.
