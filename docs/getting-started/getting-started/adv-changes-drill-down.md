---
title: "Employee details form"
permalink: /getting-started/adv-changes-drill-down/
excerpt: "Advanced changes. Employee details form"
author_profile: false
sidebar:
        nav: "docs"
nav_exclude: true
layout: default
---

{% include base_path %}

In this section we will define the form that will show the table that contains the details of a determined employee.

The *employees.routes.ts* file was configured that if the url was *'employees/:EMPLOYEEID'* the system renders the component *EmployeesDetailComponent*. We will now create this component.

Inside the *employees/detail* directory we have to create the following files:

* **employees-detail.component.html:** Contains the html template definition of our screen.
* **employees-detail.component.scss:** Contains specific screen css styles (saas definition), if needed.
* **employees-detail.component.ts:** Contains the logic of the screen.

The contents of these files are shown below:

**employees-detail.component.html**

```html
<o-form fxLayout="column" show-header="yes" label-header="EMPLOYEES" header-actions="R;U;D" service="employees"
  entity="employee" keys="EMPLOYEEID" #oForm keys-sql-types="INTEGER">

  <div fxLayout="column" layout-padding class="rounded-panel">
    <div fxLayout="row" fxFill>
      <div fxLayout="column" fxFlex="75">
        <o-text-input attr="EMPLOYEENAME" fxFlex layout-padding></o-text-input>
        <o-text-input attr="EMPLOYEESURNAME" fxFlex layout-padding></o-text-input>
      </div>
      <div fxFlex="25" fxLayoutAlign="center center">
        <o-image attr="EMPLOYEEPHOTO" emptyimage="./assets/images/no-image.png"></o-image>
      </div>
    </div>

    <div fxLayout="row" fxFill>
      <o-date-input attr="EMPLOYEESTARTDATE" layout-padding></o-date-input>
      <o-email-input attr="EMPLOYEEEMAIL" fxFlex layout-padding></o-email-input>
    </div>

    <div fxLayout="row" fxFill>
      <o-text-input attr="EMPLOYEEADDRESS" fxFlex layout-padding></o-text-input>
    </div>

    <div fxLayout="row" fxFill>
      <o-combo attr="EMPLOYEETYPEID" fxFlex layout-padding query-on-init="no" query-on-bind="yes" enabled="yes"
        value-column="EMPLOYEETYPEID" service="employees" entity="employeeType" keys="EMPLOYEETYPEID"
        columns="EMPLOYEETYPEID;EMPLOYEETYPENAME" visible-columns="EMPLOYEETYPENAME">
      </o-combo>

      <o-list-picker attr="OFFICEID" fxFlex layout-padding query-on-init="no" query-on-bind="yes" enabled="yes"
        filter="yes" value-column="OFFICEID" service="branches" entity="branch" keys="OFFICEID" columns="OFFICEID;NAME"
        visible-columns="NAME">
      </o-list-picker>
    </div>

  </div>

</o-form>
```

**employees-detail.component.ts**

```bash
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'employees-detail',
  styleUrls: ['employees-detail.component.css'],
  templateUrl: 'employees-detail.component.html'
})
export class EmployeesDetailComponent {

}

```
We have now defined the form that contains the information of a determined employee in the html template. This data is provided through the configured Ontimize service. You can find further information about component configuration parameters in the [Components]({{ base_path }}/components/){:target="_blank"} section.

In the logic file nothing special is done, we simply define the paths of the css and html files.

