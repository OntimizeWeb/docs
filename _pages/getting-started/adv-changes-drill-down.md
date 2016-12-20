---
title: "Drill-down to detail form"
permalink: /getting-started/adv-changes-drill-down/
excerpt: "Advanced changes. Drill-down to detail form"
modified: 2016-12-19T08:25:30-04:00
author_profile: false
sidebar:
        nav: "docs"
---

{% include base_path %}

In this section we are going to define the form that is going to show the sheet with the details of a determined employee.

Into *employees.routes.ts* file was configured that if the url was *'employees/:EMPLOYEEID'* the system have to render the component *EmployeesDetailComponent*. So, it
is time to create this component.

Inside the *+employees/detail* directory we have to create the following files: 

* **employees-detail.component.html:** Contains the html template definition of our screen.
* **employees-detail.component.scss:** Contains specific screen css styles (saas definition), if needed.
* **employees-detail.component.ts:** Contains the logic of the screen.

So, the contents of these files are shown below:

**employees-detail.component.html**

```html
<div layout="row" layout-padding layout-align="center center">

  <o-form layout="column" show-header="yes" label-header="EMPLOYEES" header-actions="R;U;D" entity="EEmployees" keys="EMPLOYEEID"
    #oForm>

      <div layout="column">
        <div layout="row" flex>
          <div layout="column" flex="75">
            <o-text-input attr="EMPLOYEENAME" flex layout-padding></o-text-input>
            <o-text-input attr="EMPLOYEESURNAME" flex layout-padding></o-text-input>
          </div>
          <div flex="25" layout-aling="center center">
            <o-image attr="EMPLOYEEPHOTO" emptyimage="./assets/images/no-image.png"></o-image>
          </div>
        </div>

        <div layout="row">
          <o-date-input attr="EMPLOYEESTARTDATE" layout-padding></o-date-input>-->
          <o-email-input attr="EMPLOYEEEMAIL" flex layout-padding></o-email-input>
        </div>

        <o-text-input attr="EMPLOYEEADDRESS" flex layout-padding></o-text-input>

        <div layout="row" flex >
          <o-combo attr="EMPLOYEETYPEID" flex layout-padding
            query-on-init="no" query-on-bind="yes" enabled="yes" value-column="EMPLOYEETYPEID"
            entity="EEmployeeTypes" keys="EMPLOYEETYPEID" columns="EMPLOYEETYPEID;EMPLOYEETYPENAME"
            visible-columns="EMPLOYEETYPENAME"></o-combo>

          <o-list-picker attr="OFFICEID" flex layout-padding
            query-on-init="no" query-on-bind="yes" enabled="yes" filter="yes" value-column="OFFICEID"
            entity="EBranches" keys="OFFICEID" columns="OFFICEID;NAME"
            visible-columns="NAME"></o-list-picker>
        </div>

      </div>

  </o-form>
</div>
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
Into the html template is defined the form that contains several fields with the information of a determined employee. This data is provided through the Ontimize service 
configured. You can find further information about components configuration parameters into [Components]({{ base_path }}/components-collection/) section.

Into the logic file nothing special is done, only the paths of css and html files are defined.

