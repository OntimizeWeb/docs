---
title: "Create new module"
permalink: /getting-started/adv-changes-new-module/
excerpt: "Advanced changes. Create new module"
modified: 2016-12-19T08:25:30-04:00
author_profile: false
sidebar:
        nav: "docs"
---

{% include base_path %}

In this section we are going to add a new module for managing the employees of the Bank. We are going to explain step by step how to achieve the goal of adding new module.

The module that we are going to create is only allowed for those users that have credentials, that is, users that have been logged in. So, into Quickstart structure directories, we have to 
create new folder *+employees* inside *+main* folder (at the same level of *+accounts* and *+customers*). Please, take into account that we create the folder 
preceded by the symbol *+*. This symbol indicates to Angular that it is a lazy loaded module.

Inside the *+employees* directory we have to create the following files and folders:

* **index.ts:** List of all involved files in this module (to facilitate the loading of components from external modules).
* **employees.directives.ts:** List of directive that have to be imported into main app module.
* **employees.routes.ts:** Router configuration for this module.
* **home and detail folders:** Folders that contains the resources of all employees and the detail of each record.
* **edit and new folders (optional):** Create these ones if you want to create specific forms for these operations.

The contents of these files are shown below:

**index.ts**

```bash
export {EmployeesHomeComponent} from './home/employees-home.component';
export {EmployeesDetailComponent} from './detail/employees-detail.component';

/* Uncomment this if you are using specific insert form
export {NewEmployeeComponent} from './new/new-employee.component';*/

/* Uncomment this if you are using specific edit form
export {EmployeesEditComponent} from './edit/employees-edit.component';*/

export {EMPLOYEES_DIRECTIVES} from './employees.directives';
```

**employees.directives.ts**

```bash
import {
  EmployeesHomeComponent,
  EmployeesDetailComponent
  //NewEmployeeComponent,
  //EmployeesEditComponent
} from '../+employees';

export const EMPLOYEES_DIRECTIVES: any = [
  EmployeesHomeComponent,
  EmployeesDetailComponent
  //NewEmployeeComponent,
  //EmployeesEditComponent
];
```

**employees.routes.ts**

```bash
import { Routes } from '@angular/router';

import {
  EmployeesHomeComponent,
  EmployeesDetailComponent
  //NewEmployeeComponent,
  //EmployeesEditComponent
} from '../+employees';

export const EmployeesRoutes: Routes = [
  {
    path: 'employees', component: EmployeesHomeComponent,
  },
  {
    path: 'employees/:EMPLOYEEID', component: EmployeesDetailComponent
  }
  //{
  //  path: 'employees/new', component: NewEmployeeComponent
  //},
  //{
  //  path: 'employees/:EMPLOYEEID/edit', component: EmployeesEditComponent
  //}
];

```

Before configure the content of the forms for this module, it is necessary to tell the Quickstart app that a new module exists
and configure it modifying some files:

* **main.routes.ts:** Include the routes of *Employees* module.
* **app.directives.ts:** Include the directives of *Employees* module.
* **system-config.ts:** Include the barrel *'app/+main/+employees'* for managing lazy loaded module.
* **bar-menu.component.html (optional):** Include a menu item into the menu of the app.


So, the content of these files after been modified, is something like this:

**main.routes.ts**

```bash
import { Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ng2/ontimize';

import {
  CustomerRoutes
} from './+customers/customers.routes';
import {MainComponent} from './main.component';
import {AccountsRoutes} from './+accounts/accounts.routes';
import {EmployeesRoutes} from './+employees/employees.routes';

export const PrivateAppRoutes: Routes = [
  {
    path: 'main', component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      ...CustomerRoutes,
      ...AccountsRoutes,
      ...EmployeesRoutes,
      { path: '', redirectTo: 'customers', pathMatch: 'full' }
    ]
  }
];
```

**app.directives.ts**

```bash
import { LOGIN_DIRECTIVES } from './+login';
import { MainComponent } from './+main';
import { ABOUT_DIRECTIVES } from './+main/+about';
import { ACCOUNTS_DIRECTIVES } from './+main/+accounts';
import { CUSTOMERS_DIRECTIVES } from './+main/+customers';

import { EMPLOYEES_DIRECTIVES } from './+main/+employees';

import { HELP_DIRECTIVES } from './+main/+help';
import { HOME_DIRECTIVES } from './+main/+home';
import { SHARED_DIRECTIVES } from './shared';


// All directives of the application
export const APP_DIRECTIVES: any = [
  LOGIN_DIRECTIVES,
  MainComponent,
  ABOUT_DIRECTIVES,
  ACCOUNTS_DIRECTIVES,
  CUSTOMERS_DIRECTIVES,

  EMPLOYEES_DIRECTIVES,

  HELP_DIRECTIVES,
  HOME_DIRECTIVES,
  SHARED_DIRECTIVES
];
```
**system-config.ts**

```bash
const barrels: string[] = [
  // App specific barrels.
  'app',
  'app/shared',
  'app/+login',
  'app/+main/+customers',
  'app/+main/+accounts',
  'app/+main/+employees',
  'app/+main/+home',
  'app/+main/+help',
  'app/+main/+about',
  'app/+main'
  /** @cli-barrel */
];
```

**bar-menu.component.html

```html
...
  <o-bar-menu-group title="VIEW">
    <o-bar-menu-item title="CUSTOMERS" icon="people" route="/main/customers"></o-bar-menu-item>
    <o-bar-menu-item title="ACCOUNTS" icon="credit_card" route="/main/accounts"></o-bar-menu-item>
    <o-bar-menu-item title="EMPLOYEES" icon="airline_seat_recline_normal" route="/main/employees"></o-bar-menu-item>
  </o-bar-menu-group>
...
```

The last step of our process of adding new module is to create the inital form that contains a table with
all employees of the Bank, and the form that is going to show sheet with the details of each employee. This is 
going to be explained into next sections:

* [Add a table form]({{ base_path }}/getting-started/adv-changes-table-form/).
* [Drill-down to detail form]({{ base_path }}/getting-started/adv-changes-drill-down/)