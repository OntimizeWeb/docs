---
title: "Create a new module"
permalink: /getting-started/adv-changes-new-module/
excerpt: "Advanced changes. Create a new module"
author_profile: false
sidebar:
        nav: "docs"
---

{% include base_path %}

In this section we are going to add a new module for managing the employees of the Bank. We are going to explain step by step how to add the new module.

The module that we are going to create is going to be accessible only to users with credentials. To do
this, we need to create a new folder *employees* inside the *main* directory of the QuickStart directory
structure, at the same level as *accounts* and *customers*.

Inside the *employees* directory we have to create the following files and folders:

* **employees.module.ts:** Module configuration.
* **employees-routing.module.ts:** Router configuration for this module.
* **home and detail folders:** Folders that contains the resources of all employees and the details of each record.
* **edit and new folders (optional):** Create these ones if you want to create specific forms for these operations.

For creating the above files we use the angular-cli tools.

* Creating module and routing module (working directory is *src/app/main*):

```javascript
  ng g module employees --routing
```

* Creating screen component (working directory is *src/app/main/employees*):

```javascript
  ng g component --spec=false --flat=false --routing=employees employees-home
  ng g component --spec=false --flat=false --routing=employees employees-detail
  ng g component --spec=false --flat=false --routing=employees employees-edit
```

At this point the created files should look like:

**employees.module.ts**

We need to change the default *CommonModule* for *SharedModule* and to add *OntimizeWebModule*.

```javascript
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    EmployeesRoutingModule
  ],
  declarations: [
    EmployeesHomeComponent,
    EmployeesDetailComponent,
    EmployeesEditComponent
  ]
})
export class EmployeesModule { }
```


**employees-routing.module.ts**

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';

const routes: Routes = [
  { path: '',  component: EmployeesHomeComponent },
  { path: 'new', component: EmployeesEditComponent },
  { path: ':EMPLOYEEID', component: EmployeesDetailComponent },
  { path: ':EMPLOYEEID/edit', component: EmployeesEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
```


Before configuring the content of the forms for this module, it is necessary to tell the QuickStart app that a new module exists and configure it by modifying the following files:

* **main-routing.module.ts:** Include the routes of *Employees* module.
* **app.menu.config (optional):** Include a menu item into the app menu.

The content of these files after been modified should be like this:

**main-routing.module.ts**

```javascript
...

import { EmployeesModule } from './employees/employees.module';

export function loadEmployeesModule() {
  return EmployeesModule;
}
...

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: loadHomeModule },
      { path: 'about', loadChildren: loadAboutModule },
      { path: 'settings', loadChildren: loadSettingsModule },
      { path: 'customers', loadChildren: loadCustomersModule },
      { path: 'accounts', loadChildren: loadAccountsModule },
      { path: 'branches', loadChildren: loadBranchesModule },
      { path: 'employees', loadChildren: loadEmployeesModule }
    ]
  }
];
...
```

**app.menu.config.ts**

```javascript
{
id: 'views',
name: 'VIEW',
icon: 'remove_red_eye',
opened: true,
items: [
  { id: 'customers', name: 'CUSTOMERS', route: '/main/customers', icon: 'people' },
  { id: 'accounts', name: 'ACCOUNTS', route: '/main/accounts', icon: 'credit_card' },
  { id: 'branches', name: 'BRANCHES', route: '/main/branches', icon: 'account_balance' },
  { id: 'employees', name: 'EMPLOYEES', route: '/main/employees', icon: 'person' }
]
},
```

The last step of our process of adding new module is to create the initial form that contains a table with all employees of the Bank, and the form contains a table with the details of each employee. 
This is explained in the following sections:

* [Add a table form]({{ base_path }}/getting-started/adv-changes-table-form/).
* [Drill-down to detail form]({{ base_path }}/getting-started/adv-changes-drill-down/)