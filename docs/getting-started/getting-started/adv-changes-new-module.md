---
title: "Create a new module"
permalink: /getting-started/adv-changes-new-module/
excerpt: "Advanced changes. Create a new module"
author_profile: false
sidebar:
        nav: "docs"
nav_exclude: true
layout: default
---

{% include base_path %}

In this section we are going to add a new feature area for managing the employees of the Bank (the employees area already exists in the quickstart, but we think it is useful to explain the steps to create it from scratch). We will explain step by step how to add the new feature area.

The feature area that we are going to create will be accessible only to users with credentials. To do
this, we need to create a new folder *employees* inside the *main* directory of the QuickStart directory
structure, at the same level as *accounts* and *customers*.

Inside the *employees* directory we have to create the following files and folders:

* **employees.routes.ts:** Routes array for this feature area (no NgModule needed).
* **home and detail folders:** Folders that contain the components for all employees and the details of each record.
* **edit and new folders (optional):** Create these if you want specific forms for these operations.

For creating the component files we use the Angular CLI.

* Creating standalone components (working directory is *src/app/main/employees*):

```bash
ng g component employees-home --standalone
ng g component employees-detail --standalone
ng g component employees-edit --standalone
```

At this point the created files should look like:

**employees.routes.ts**

Create a plain routes file — no `NgModule` wrapper is required:

```typescript
import { Routes } from '@angular/router';

import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';

export const employeesRoutes: Routes = [
  { path: '',  component: EmployeesHomeComponent },
  { path: 'new', component: EmployeesEditComponent },
  { path: ':EMPLOYEEID', component: EmployeesDetailComponent },
  { path: ':EMPLOYEEID/edit', component: EmployeesEditComponent }
];
```


Before configuring the content of the forms for this feature area, it is necessary to tell the QuickStart app that a new route exists and configure it by modifying the following files:

* **main.routes.ts:** Include the routes of the *Employees* feature.
* **app.menu.config (optional):** Include a menu item into the app menu.

The content of these files after being modified should look like this:

**main.routes.ts**

```typescript
...
export const mainRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes) },
      { path: 'about', loadChildren: () => import('./about/about.routes').then(m => m.aboutRoutes) },
      { path: 'settings', loadChildren: () => import('./settings/settings.routes').then(m => m.settingsRoutes) },
      { path: 'customers', loadChildren: () => import('./customers/customers.routes').then(m => m.customersRoutes) },
      { path: 'accounts', loadChildren: () => import('./accounts/accounts.routes').then(m => m.accountsRoutes) },
      { path: 'branches', loadChildren: () => import('./branches/branches.routes').then(m => m.branchesRoutes) },
      { path: 'employees', loadChildren: () => import('./employees/employees.routes').then(m => m.employeesRoutes) }
    ]
  }
];
...
```

**app.menu.config.ts**

```javascript
{ id: 'home', name: 'HOME', icon: 'dashboard', route: '/main/home' },
  {
    id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
    items: [
      {
        id: 'customers',
        name: 'CUSTOMERS',
        tooltip: 'CUSTOMERS_CONTENT',
        route: '/main/customers',
        icon: 'people',
        image: 'assets/images/ic_clientes.png',
        component: CustomersCardComponent
      },
      {
        id: 'accounts',
        name: 'ACCOUNTS',
        tooltip: 'ACCOUNTS_CONTENT',
        route: '/main/accounts',
        icon: 'credit_card',
        image: 'assets/images/ic_cuentas.png',
        component: AccountsCardComponent
      },
      {
        id: 'branches',
        name: 'BRANCHES',
        tooltip: 'BRANCHES_CONTENT',
        route: '/main/branches',
        icon: 'account_balance',
        image: 'assets/images/ic_sucursales.png',
        component: BranchesCardComponent
      },
      {
        id: 'employees',
        name: 'EMPLOYEES',
        tooltip: 'EMPLOYEES_CONTENT',
        route: '/main/employees',
        icon: 'person',
        image: 'assets/images/ic_empleados.png',
        component: EmployeesCardComponent
      }
    ]
  },
```

The last step of our process of adding new module is to create the initial form that contains a table with all employees of the Bank, and the form contains a table with the details of each employee.
This is explained in the following sections:

* [Add a table form]({{ base_path }}/getting-started/adv-changes-table-form/).
* [Drill-down to detail form]({{ base_path }}/getting-started/adv-changes-drill-down/)