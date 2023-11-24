---
layout: default
title: "Application modules"
permalink: /app-modules/
excerpt: "Logic blocks of an Ontimize Web app."
author_profile: false
sidebar:
        nav: "docs"
parent: Guide
nav_order: 3
---

{% include base_path %}

## Build your own module

A simple way to create application logic blocks is to use the [Angular CLI](https://cli.angular.io/){:target="_blank"}.
With this tool the user can generate [modules](https://angular.io/cli/generate#module-command){:target="_blank"} or [components](https://angular.io/cli/generate#component){:target="_blank"}.

Here you can see a example of how to add a new '*employees*' module with an inner component in our '*QuickStart*' example:

This new module will be located in a folder as a sibling of '*customers*' and '*accounts*' in the application hierachy (see [structure]({{ base_path }}/guide/appstructure/){:target="_blank"} section).

### Create the module

While in '*src/app/main*', run the following command:

```bash
 ng g module --routing employees
```

This command creates a '*employees*' folder containing the new module and its associated routing module (which import is already done).

```bash
ontimize-web-ngx-quickstart
|──  src/
|  ├──  app/
|  |  |  |   ...
|  |  |  ├──  employees/
|  |  |  |  ├──  employees-routing.module.ts
|  |  |  |  ├──  employees.module.ts
...
```

### Create the component

Now, while in the new folder '*src/app/main/employees*', execute the following command:

```bash
 ng g component employees-home
```

This command creates the '*employees-home*' folder that contains the component definition along its template and styles definition files. The component is also added automatically to the '*EmployeesModule*' declarations.

```bash
ontimize-web-ngx-quickstart
|──  src/
|  ├──  app/
|  |  |  |   ...
|  |  |  ├──  employees/
|  |  |  |  ├──  employees-detail/
|  |  |  |  ├──  employees-home/
|  |  |  |  |  |──  employees-home.component.html
|  |  |  |  |  |──  employees-home.component.scss
|  |  |  |  |  |──  employees-home.component.ts
|  |  |  |  ├──  employees-routing.module.ts
|  |  |  |  ├──  employees.module.ts
|  |  |  |  ├──  employees.theme.scss
...
```

After this you will only need to do the routing:

  * First in the *employees-routing.module.ts*, associating a path to the new component:

```bash
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';

const routes: Routes = [
  { path: '', component: EmployeesHomeComponent },
  { path: 'new', component: EmployeesDetailComponent },
  { path: ':EMPLOYEEID', component: EmployeesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
```

  * Finally linking the *employees.module.ts* to the rest of the application routes, adding a route path in the *main-routing.module.ts* as you can see in the [routing section]({{ base_path }}/routing/){:target="_blank"}.

```bash
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
      ...
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
```