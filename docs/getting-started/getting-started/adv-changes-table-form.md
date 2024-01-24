---
title: "Add a table form"
permalink: /getting-started/adv-changes-table-form/
excerpt: "Advanced changes. Add a table form"
author_profile: false
sidebar:
        nav: "docs"
nav_exclude: true
layout: default
---

{% include base_path %}

In this section we are going to explain how to create the initial form that contains a table with
all the employees of the Bank.

In the previous step *employees.routes.ts* was configured so that if the url was *'employees'* the system rendered the component *EmployeesHomeComponent*. It is now time to create this component.

Inside the *employees/home* directory we have to create the following files:

* **employees-home.component.html:** Contains the html template definition of our screen.
* **employees-home.component.scss:** Contains specific screen css styles (saas definition), if needed.
* **employees-home.component.ts:** Contains the logic of the screen.

The contents of these files are shown below:

**employees-home.component.html**

```html
<div layout="column" layout-align="center top" layout-margin>

  <o-table attr="employees" service="employees" entity="employee" title="EMPLOYEES"
      columns="EMPLOYEEID;EMPLOYEEPHOTO;EMPLOYEENAME;EMPLOYEESURNAME;EMPLOYEEADDRESS;EMPLOYEESTARTDATE;EMPLOYEEEMAIL"
      visible-columns="EMPLOYEEPHOTO;EMPLOYEENAME;EMPLOYEESURNAME;EMPLOYEEADDRESS;EMPLOYEESTARTDATE;EMPLOYEEEMAIL"
      sort-columns="EMPLOYEESURNAME" keys="EMPLOYEEID" query-on-init="true" query-rows="10" quick-filter="yes">
    <o-table-column attr="EMPLOYEEPHOTO" orderable="no" searchable="no" type="image" image-type="base64" empty-image="assets/images/no-image.png" avatar="yes"></o-table-column>
    <o-table-column attr="EMPLOYEESTARTDATE" title="EMPLOYEESTARTDATE" type="date" format="LL"></o-table-column>
    <o-table-column attr="EMPLOYEETYPEID" title="EMPLOYEETYPEID">
      <o-table-cell-renderer-service service="employees" entity="employeeType" columns="EMPLOYEETYPEID;EMPLOYEETYPENAME" value-column="EMPLOYEETYPENAME"></o-table-cell-renderer-service>
    </o-table-column>
  </o-table>

</div>
```

**employees-home.component.ts**

```bash
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'employees-home',
  styleUrls: ['employees-home.component.css'],
  templateUrl: 'employees-home.component.html'
})
export class EmployeesHomeComponent {

  constructor() {
  }

}
```
The table is defined within the html template, and is connected through an Ontimize service that provides the information of all employees. You can find further information about the o-table configuration parameters in the [Components]({{ base_path }}/components/data/table/overview/){:target="_blank"} section.

In the logic file nothing special is done, we simply define the paths of the css and html files.

With these two simple files, we have defined the initial form of our *Employees* module. The form that will show the table with the details of each employee is explained [here]({{ base_path }}/getting-started/adv-changes-drill-down/).