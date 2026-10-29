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
<o-form show-header="yes" label-header="EMPLOYEES" header-actions="R;U;D" service="employees"
  entity="employee" keys="EMPLOYEEID" #oForm keys-sql-types="INTEGER">

  <div class="rounded-panel" style="padding: 1rem">
    <div class="o-flex-row">
      <div style="flex: 0 0 75%">
        <o-text-input attr="EMPLOYEENAME" style="padding: 0.5rem"></o-text-input>
        <o-text-input attr="EMPLOYEESURNAME" style="padding: 0.5rem"></o-text-input>
      </div>
      <div style="flex: 0 0 25%; display:flex; align-items:center; justify-content:center">
        <o-image attr="EMPLOYEEPHOTO" emptyimage="./assets/images/no-image.png"></o-image>
      </div>
    </div>

    <div class="o-flex-row">
      <o-date-input attr="EMPLOYEESTARTDATE" style="padding: 0.5rem"></o-date-input>
      <o-email-input attr="EMPLOYEEEMAIL" style="padding: 0.5rem; flex: 1"></o-email-input>
    </div>

    <div class="o-flex-row">
      <o-text-input attr="EMPLOYEEADDRESS" style="flex: 1; padding: 0.5rem"></o-text-input>
    </div>

    <div class="o-flex-row">
      <o-combo attr="EMPLOYEETYPEID" style="flex: 1; padding: 0.5rem" query-on-init="no" query-on-bind="yes" enabled="yes"
        value-column="EMPLOYEETYPEID" service="employees" entity="employeeType" keys="EMPLOYEETYPEID"
        columns="EMPLOYEETYPEID;EMPLOYEETYPENAME" visible-columns="EMPLOYEETYPENAME">
      </o-combo>

      <o-list-picker attr="OFFICEID" style="flex: 1; padding: 0.5rem" query-on-init="no" query-on-bind="yes" enabled="yes"
        filter="yes" value-column="OFFICEID" service="branches" entity="branch" keys="OFFICEID" columns="OFFICEID;NAME"
        visible-columns="NAME">
      </o-list-picker>
    </div>

  </div>

</o-form>
```

**employees-detail.component.ts**

```typescript
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'employees-detail',
  styleUrls: ['employees-detail.component.scss'],
  templateUrl: 'employees-detail.component.html'
})
export class EmployeesDetailComponent {}
```
We have now defined the form that contains the information of a determined employee in the html template. This data is provided through the configured Ontimize service. You can find further information about component configuration parameters in the [Components]({{ base_path }}/components/){:target="_blank"} section.

In the logic file nothing special is done, we simply define the paths of the css and html files.

