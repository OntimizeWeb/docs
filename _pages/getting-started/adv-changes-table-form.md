---
title: "Add a table form"
permalink: /getting-started/adv-changes-table-form/
excerpt: "Advanced changes. Add a table form"
author_profile: false
sidebar:
        nav: "docs"
---

{% include base_path %}

In this section we are going to explain how to create the inital form that contains a table with
all employees of the Bank.

In the previous step it was configured into *employees.routes.ts* that if the url was *'employees'* the system have to render the component *EmployeesHomeComponent*. So, it
is time to create this component.

Inside the *employees/home* directory we have to create the following files:

* **employees-home.component.html:** Contains the html template definition of our screen.
* **employees-home.component.scss:** Contains specific screen css styles (saas definition), if needed.
* **employees-home.component.ts:** Contains the logic of the screen.

So, the contents of these files are shown below:

**employees-home.component.html**

```html
<div layout="column" layout-align="center top" layout-margin>

  <o-table attr="employees" entity="EEmployees" title="EMPLOYEES"
      columns="EMPLOYEEID;EMPLOYEEPHOTO;EMPLOYEENAME;EMPLOYEESURNAME;EMPLOYEEADDRESS;EMPLOYEESTARTDATE;EMPLOYEEEMAIL"
      visible-columns="EMPLOYEEPHOTO;EMPLOYEENAME;EMPLOYEESURNAME;EMPLOYEEADDRESS;EMPLOYEESTARTDATE;EMPLOYEEEMAIL"
      sort-columns="SURNAME" keys="EMPLOYEEID" query-on-init="true" query-rows="10" quick-filter="yes">
    <o-table-column attr="EMPLOYEEPHOTO" orderable="no" searchable="no" type="image" image-type="base64" empty-image="assets/images/no-image.png" avatar="yes"></o-table-column>
    <o-table-column attr="EMPLOYEENAME" title="EMPLOYEENAME"></o-table-column>
    <o-table-column attr="EMPLOYEESURNAME" title="EMPLOYEESURNAME"></o-table-column>
    <o-table-column attr="EMPLOYEEADDRESS" title="EMPLOYEEADDRESS"></o-table-column>
    <o-table-column attr="EMPLOYEESTARTDATE" title="EMPLOYEESTARTDATE" type="date" format="LL"></o-table-column>
    <o-table-column attr="EMPLOYEEEMAIL" title="EMPLOYEEEMAIL"></o-table-column>
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
Into the html template is defined a table that is connected through an Ontimize service that provides the information of all employees.
You can find further information about *o-table* configuration parameters into [Components]({{ base_path }}/components/o-table.component/){:target="_blank"} section.

Into the logic file nothing special is done, only the paths of css and html files are defined.

With this two simple files, the initial form of our *Employees* module is defined. The form that is going to show the sheet with the details of each employee
is explained [here]({{ base_path }}/getting-started/adv-changes-drill-down/).