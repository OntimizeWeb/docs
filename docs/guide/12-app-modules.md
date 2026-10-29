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

## Build your own feature area

A simple way to create application feature areas is to use the [Angular CLI](https://angular.dev/tools/cli){:target="_blank"}.
With this tool you can generate standalone [components](https://angular.dev/tools/cli/generate#component-command){:target="_blank"}.

Here you can see an example of how to add a new '*employees*' feature area with components in our '*QuickStart*' example:

This new area will be located in a folder as a sibling of '*customers*' and '*accounts*' in the application hierarchy (see [structure]({{ base_path }}/guide/appstructure/){:target="_blank"} section).

### Create the components

While in '*src/app/main*', run the following commands:

```bash
ng g component employees/employees-home --standalone
ng g component employees/employees-detail --standalone
```

These commands create standalone component files inside the '*employees*' folder. You then add a routes file manually.

```bash
ontimize-web-ngx-quickstart
|──  src/
|  ├──  app/
|  |  |  |   ...
|  |  |  ├──  employees/
|  |  |  |  ├──  employees-detail/
|  |  |  |  |  |──  employees-detail.component.html
|  |  |  |  |  |──  employees-detail.component.scss
|  |  |  |  |  └──  employees-detail.component.ts
|  |  |  |  ├──  employees-home/
|  |  |  |  |  |──  employees-home.component.html
|  |  |  |  |  |──  employees-home.component.scss
|  |  |  |  |  └──  employees-home.component.ts
|  |  |  |  └──  employees.routes.ts   # Feature routes array (no NgModule)
...
```

### Define the routes

Create *employees/employees.routes.ts* with a plain `Routes` array — no `NgModule` needed:

```typescript
import { Routes } from '@angular/router';

import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';

export const employeesRoutes: Routes = [
  { path: '', component: EmployeesHomeComponent },
  { path: 'new', component: EmployeesDetailComponent },
  { path: ':EMPLOYEEID', component: EmployeesDetailComponent }
];
```

Then register the feature in *main/main.routes.ts* using `loadChildren` with the routes array directly:

```typescript
import { Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'employees',
        loadChildren: () => import('./employees/employees.routes').then(m => m.employeesRoutes)
      },
      ...
    ]
  }
];
```