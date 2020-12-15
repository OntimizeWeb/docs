---
title: "Make some changes"
permalink: /make-changes/
excerpt: ""
---

{% include base_path %}
{% include toc %}

## Overview

In this section we are going to make some simple changes in the code of the QuickStart app. We are going to see how to add a [form field]({{ base_path }}/components/input/overview/overview/){:target="_blank"} into a [form]({{ base_path }}/components/form/overview/){:target="_blank"}. Once added, we are going to learn how to listen the component events. Finally, we are going to navigate to another screen of the application.

## Add a field

We are going to add two [real fields]({{ base_path }}/components/input/real/overview/){:target="_blank"} into the detail form of a client. First of all, we are going take a look at the layout of this form. After logging in, click on the menu item *Views -> Customers*. A table with several clients information will be shown. At this point, we will prefilter the results and select an client and going to the detail form (clicking on the magnifying glass row button). The aspect of the detail form is like this picture (check it on [live example](https://try.imatia.com/ontimizeweb/quickstart/main/customers){:target="_blank"}):

<img src="{{ base_path }}/images/main_customers_detail.png" alt="customer detail">

For adding the field we have to open the HTML definition file of the form
under the location *src/app/main/customers/detail/customers-detail.component.html*. The content of this file is something like this:

```html
<mat-tab-group fxFill>

  <mat-tab label="{{ 'DATA' | oTranslate }}">
    <o-form attr="customers_form_edit" service="customers" entity="customer" fxLayout="column" show-header="yes" header-actions="R;I;U;D" #oDetailForm keys="CUSTOMERID" keys-sql-types="INTEGER" columns="ID_DMS_DOC" show-header-navigation="yes">

      <o-row attr="row1" title="CUSTOMER_DATA" icon="person_pin">
        <div fxLayout="row wrap" fxLayoutGap="14px" fxFill>
          <o-image attr="PHOTO" empty-image="./assets/images/no-image.png" width="350px" height="250px"></o-image>
          <div fxLayout="row wrap" fxLayoutAlign="start start" fxFlex fxLayoutGap="14px">
            <o-nif-input attr="ID" width="160px" class="form-field"></o-nif-input>
            <o-text-input attr="NAME" width="160px" class="form-field"></o-text-input>
            <o-text-input attr="SURNAME" width="160px" class="form-field"></o-text-input>
            <o-date-input attr="STARTDATE" width="160px" class="form-field"></o-date-input>
            <o-combo attr="CUSTOMERTYPEID" query-on-init="no" query-on-bind="yes" filter="yes" value-column="CUSTOMERTYPEID" service="customers"
              entity="customerType" keys="CUSTOMERTYPEID" columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION" separator=" - "
              width="160px" class="form-field"></o-combo>
          </div>
        </div>
      </o-row>

      <o-column title="CONTACT_DATA" icon="info" class="vertical-margin-10">
        <div fxLayout="row wrap" fxLayoutGap="14px">
          <o-text-input attr="ADDRESS" width="374px" class="form-field"></o-text-input>
          <o-text-input attr="COUNTRY" class="form-field"></o-text-input>
          <o-text-input attr="STATE" class="form-field"></o-text-input>
          <o-text-input attr="ZIPCODE" class="form-field"></o-text-input>
        </div>
        <div fxLayout="row wrap" fxLayoutGap="14px">
          <o-email-input attr="EMAIL" width="374px" class="form-field"></o-email-input>
          <o-text-input attr="PHONE" class="form-field"></o-text-input>
        </div>
      </o-column>

      <o-column title="COMMENTS" icon="message" attr="row3" layout-align="start stretch">
        <o-textarea-input attr="COMMENTS" rows="4"></o-textarea-input>
      </o-column>
    </o-form>
  </mat-tab>

  <mat-tab label="{{ 'ACCOUNTS' | oTranslate }}">
    <o-form attr="customers_accounts_form_edit" service="customers" entity="customer" fxLayout="column" show-header="no" keys="CUSTOMERID"
      keys-sql-types="INTEGER">
      <o-table #accountsTable attr="customer_accounts" service="customers" entity="customerAccount" parent-keys="CUSTOMERID" keys="ACCOUNTID"
        detail-form-route="accounts" edit-form-route="accounts"
        columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;ACCOUNT;BALANCE;CUSTOMERID;STARTDATE;ENDDATE"
        visible-columns="ACCOUNT;BALANCE;STARTDATE;ENDDATE" title="ACCOUNTS" sort-columns="STARTDATE" query-on-init="false" query-rows="6"
        quick-filter="yes" pageable="no" insert-button="no" row-height="medium" class="vertical-padding-8">
        <o-table-column attr="ACCOUNT" title="ACCOUNT" class="o-table-column-centered"></o-table-column>
        <o-table-column attr="STARTDATE" title="STARTDATE" type="date" format="LL"></o-table-column>
        <o-table-column attr="BALANCE" title="BALANCE" type="currency" currency-symbol="€" currency-symbol-position="right" thousand-separator="."
          decimal-separator=",">
        </o-table-column>
        <o-table-column attr="ENDDATE" title="ENDDATE" type="date" format="LL"></o-table-column>
      </o-table>
    </o-form>
  </mat-tab>

  <mat-tab label="{{ 'DOCUMENTS' | oTranslate }}">
    <o-form attr="customers_documents_form_edit" service="customers" entity="customer" fxLayout="column" show-header="no" keys="CUSTOMERID"
      keys-sql-types="INTEGER" columns="ID_DMS_DOC">
      <o-filemanager-table service="customers" workspace-key="ID_DMS_DOC" new-folder-button="yes"></o-filemanager-table>
    </o-form>
  </mat-tab>

</mat-tab-group>
```

Analyzing the code, we can see the first `o-form` that contains several fields that take value from the entity `customer` specified. The parameter `attr` of each field corresponds with an attribute (field name) that exists into the response of the service of the entity `customer`.

We will add our real fields after the zip code field with `attr='ZIPCODE'`. So, we add the code below:

```html
<o-real-input attr="LONGITUDE" class="form-field" min-decimal-digits="6" max-decimal-digits="10" decimal-separator="."></o-real-input>
<o-real-input attr="LATITUDE" class="form-field" min-decimal-digits="6" max-decimal-digits="10" decimal-separator="."></o-real-input>
```
The real input field corresponds to *o-real-input*, the rest of div's and o-row are simply used to place the field according to the others. We set the `attr='LONGITUDE'` and `attr='LATITUDE'` because we know that the entity contains this attribute which corresponds with longitude and latitude of the customer's address.

If you reload the page on the browser you will see the latitude and longitude field placed to the right of 'Zip code' field.

You can find all available fields and all of their configuration parameters into the [Components]({{ base_path }}/components/) section.

## Listen to an event

The next change that we will perform will be to listen to the value change event of a form field. In this case we choose a date field (`STARTDATE`) which value change event will be triggered every time the user changes its value.

Just a little clarification before continuing: the fields are only modifiable when the form is in 'edit' or 'insert' mode.
So, taking that in consideration, we have to use the form defined in the file *src/app/main/customers/detail/customers-detail.component.html*. The content of this file will be like this:

```html
<o-form attr="customers_form_edit" service="customers" entity="customer" fxLayout="column" show-header="yes"
  header-actions="R;I;U;D" #oDetailForm keys="CUSTOMERID" keys-sql-types="INTEGER" columns="ID_DMS_DOC"
  show-header-navigation="yes">

  <o-row attr="row1" title="CUSTOMER_DATA" icon="person_pin">
    <div fxLayout="row wrap" fxLayoutGap="14px" fxFill>
      <o-image attr="PHOTO" empty-image="./assets/images/no-image.png" width="350px" height="250px"></o-image>
      <div fxLayout="row wrap" fxLayoutAlign="start start" fxFlex fxLayoutGap="14px">
        <o-nif-input attr="ID" width="160px" class="form-field"></o-nif-input>
        <o-text-input attr="NAME" width="160px" class="form-field"></o-text-input>
        <o-text-input attr="SURNAME" width="160px" class="form-field"></o-text-input>
        <o-date-input attr="STARTDATE" width="160px" class="form-field" (onChange)="onDateChange($event)"></o-date-input>
        <o-combo attr="CUSTOMERTYPEID" query-on-init="no" query-on-bind="yes" filter="yes"
          value-column="CUSTOMERTYPEID" service="customers" entity="customerType" keys="CUSTOMERTYPEID"
          columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION" separator=" - " width="160px"
          class="form-field"></o-combo>
      </div>
    </div>
  </o-row>

  <o-column title="CONTACT_DATA" icon="info" class="vertical-margin-10">
    <div fxLayout="row wrap" fxLayoutGap="14px">
      <o-text-input attr="ADDRESS" width="374px" class="form-field"></o-text-input>
      <o-text-input attr="COUNTRY" class="form-field"></o-text-input>
      <o-text-input attr="STATE" class="form-field"></o-text-input>
      <o-text-input attr="ZIPCODE" class="form-field"></o-text-input>
      <o-real-input attr="LONGITUDE" class="form-field" min-decimal-digits="6" max-decimal-digits="10" decimal-separator="."></o-real-input>
      <o-real-input attr="LATITUDE" class="form-field" min-decimal-digits="6" max-decimal-digits="10" decimal-separator="."></o-real-input>
    </div>
    <div fxLayout="row wrap" fxLayoutGap="14px">
      <o-email-input attr="EMAIL" width="374px" class="form-field"></o-email-input>
      <o-text-input attr="PHONE" class="form-field"></o-text-input>
    </div>
  </o-column>

  <o-column title="COMMENTS" icon="message" attr="row3" layout-align="start stretch">
    <o-textarea-input attr="COMMENTS" rows="4"></o-textarea-input>
  </o-column>
</o-form>
```

We also need to modify the file *customers-detail.component.ts* to include the callback for the event:

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'customers-detail',
  styleUrls: ['./customers-detail.component.scss'],
  templateUrl: './customers-detail.component.html'
})
export class CustomersEditComponent {

  onDateChange(evt: number) {
    /*
      do whatever you want
    */
  }

}
```

## Open a form

The last test we will do is navigate to another screen of the application. To do that, we are going to add a button to our screen and when we click on it, we navigate to the other screen.

Continuing with the example, we will place the code of our button in the file *customers-detail.component.html*.

```html
<o-button type="RAISED" label="Navigate to 'About'" (click)="onButtonClick()"></o-button>
```
And we will modify the file *customers-detail.component.ts* like this:

```javascript
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DialogService } from 'ontimize-web-ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.customers-detail]': 'true'
  }
})

export class CustomersDetailComponent implements OnInit {

  constructor(
    protected dialogService: DialogService,
    protected router: Router) {
  }

  onButtonClick() {
    this.router.navigate(['/main/about']);
  }

  onDateChange(evt: number) {
    /*
      do whatever you want
    */
  }

}
```
Analyzing the code we have to pay attention in a few things:

* We use the Router component for navigating, so we need to import it and reference it in the
constructor of our CustomersDetailComponent.
* We add the callback function *onButtonClick* that will be executed when user clicks on button.

As we can see, in the callback function we call *navigate* method of router to navigate to other screen of our application. It is important
to take into account that *"/main/about"* route was previously defined as a route of our application. For further information about routing check this
[link]({{ base_path }}/routing/).

That's all, you do not need anything else. When user clicks the button it will navigate to the 'About' page.
