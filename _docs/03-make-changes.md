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

We are going to add a date field into the detail form of an account. So, first of all, we are going to see the aspect of this form. After
logged in, click on the menu *Views -> Accounts*. A table with several account numbers will be shown. To work all with the same data, we will prefilter 
the results and select the account that ends in '0010'. The aspect of the detail form is like this picture 
(check it on [live example](https://ontimizeweb.github.io/ontimize-web-ng2-quickstart)):

<img src="{{ base_path }}/images/main_accounts_detail.png" alt="account detail">

For adding the field we have to open the HTML definition file of the form
under the location *src/app/+main/+accounts/detail/accounts-detail.component.html*. The content of this file is something like this:

```html
<div layout="column" layout-align="center top" layout-fill>
    <o-form layout="column" show-header="yes" label-header="ACCOUNTS" header-actions="R;U;D" entity="EAccounts"
      keys="ACCOUNTID" #oForm>
      <div layout="column" layout-fill>

        <div layout="row" layout-padding>

          <o-row attr="row1" title-label="ACCOUNT_NUMBER" elevation="1" flex>
            <o-text-input attr="ENTITYID" layout-padding class="account align-right"></o-text-input>
            <o-text-input attr="OFFICEID" layout-padding class="account align-right"></o-text-input>
            <o-text-input attr="CDID" layout-padding class="account align-right"></o-text-input>
            <o-text-input attr="ANID" layout-padding class="align-right"></o-text-input>
          </o-row>

          <div layout="row" layout-padding></div>

          <o-row attr="row2" title-label="BALANCE" elevation="1" flex>
            <o-currency-input attr="BALANCE" flex layout-padding class="align-right"></o-currency-input>
          </o-row>

          <div layout="row" flex></div>

        </div>

        <div layout="row" flex layout-padding>
          <o-table entity="EMovements" title="MOVEMENTS" columns="MOVEMENTID;DATE_;CONCEPT;MOVEMENT;MOVEMENTTYPES"
            visible-columns="DATE_;CONCEPT;MOVEMENT;MOVEMENTTYPES"
            keys="MOVEMENTID" parent-keys="ACCOUNTID" sort-columns="DATE_" query-on-init="false" query-rows="6"
            quick-filter="yes" detail-form-route="transactions">
            <o-table-column attr="DATE_" title="DATE_" type="date" format="LL"></o-table-column>
            <o-table-column attr="CONCEPT" title="CONCEPT"></o-table-column>
            <o-table-column attr="MOVEMENT" title="MOVEMENT" type="currency" currency-symbol="€" currency-symbol-position="right" thousand-separator="." decimal-separator=","></o-table-column>
            <o-table-column attr="MOVEMENTTYPES" title="MOVEMENTTYPES"></o-table-column>
          </o-table>
        </div>

      </div>
    </o-form>
</div>
```
Analyzing the code, we can see a *o-form* that contains several fields that take value from the entity *EAccounts* specified. The parameter *attr* of each
field corresponds with an attribute that exists into the response of the service of the entity *EAccounts*.

We will add our date field after the row with *attr='row2'*. So, we add the code below:

```html
<div layout="row" layout-padding></div>
<o-row attr="row3" title-label="STARTDATE" elevation="1" flex>
    <o-date-input attr="STARTDATE" flex layout-padding class="align-right"></o-date-input>
</o-row>
```
The date field corresponds to *o-date-input*, the rest of div's and o-row are simply used to place the field according to the others. We set the *attr='STARTDATE'*
because we know that the entity contains this attribute which corresponds with the opening date of the account.

If you reload the page on the browser you will see the date field placed to the right of 'Balance' field. 

You can find all available fields and all of their configuration parameters into the [Components]({{ base_path }}/components-collection/) section.

---

# Validate a field.

The next change that we will perform will be to validate the value of our date field when user changes its value. If the date entered is greater than
today's date it will shown an alerte message.

Just a little clarification before continuing, the fields are only modifiable when the form is in 'edit' or 'insert' mode. 
So, taking that in consideration, we have to repeat the step before and add the
date field, but this time into the file *src/app/+main/+accounts/edit/accounts-edit.component.html*. The content of this file will be like this:

```html
<div layout="row" layout-padding layout-align="center center">

  <div layout="column" flex="50" layout-align="center top">
    <o-form layout="column" show-header="yes" label-header="ACCOUNTS" entity="EAccounts"
      keys="ACCOUNTID" #oForm >
      <div layout="column">

        <div layout="row" flex>
          <o-text-input attr="ENTITYID" flex layout-padding enabled="false"></o-text-input>
          <o-text-input attr="OFFICEID" flex layout-padding></o-text-input>
          <o-text-input attr="CDID" flex layout-padding></o-text-input>
          <o-text-input attr="ANID" flex layout-padding></o-text-input>
        </div>

        <o-row attr="row3" title-label="STARTDATE" elevation="1" flex>
            <o-date-input attr="STARTDATE" flex layout-padding class="align-right"
              (onChange)="onDateChange($event)"></o-date-input>
        </o-row>

      </div>
    </o-form>
  </div>
</div>
```
We also need to modify the file *accounts-edit.component.ts* to include our validation code:

```bash
import { Component } from '@angular/core';

import { DialogService } from 'ontimize-web-ng2/ontimize';

@Component({
  moduleId: module.id,
  selector: 'accounts-edit',
  styleUrls: ['accounts-edit.component.css'],
  templateUrl: 'accounts-edit.component.html'
})
export class AccountsEditComponent {

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

Continuing with the example, in the file *accounts-edit.component.html* we will place anywhere the code of our button.

```html
<o-button type="RAISED" label="Navigate to 'About'" (click)="onButtonClick()"></o-button>
```
And we will modify the file *accounts-edit.component.ts* like this:

```bash
import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'accounts-edit',
  styleUrls: ['accounts-edit.component.css'],
  templateUrl: 'accounts-edit.component.html'
})
export class AccountsEditComponent {

  constructor(protected router:Router) {
  }

  onButtonClick() {
    this.router.navigate(["about"]);
  }

}
```
Analyzing the code we have to pay attention in a few things:

* We use the Router component for navigating, so, we need to import it and then inject it
in the constructor of our AccountsEditComponent.
* We add the callback function *onButtonClick* that will be executed when user clicks on button.

As we can see, in the callback function we call *navigate* method of router to navigate to other screen of our application. It is important
to take into account that *"about"* route was previously defined as a route of our application. For further information about routing check this
[link]({{ base_path }}/docs/routing/). 

That's all, you do not need anythingelse. When user clicks the button it will navigate to the 'About' page.