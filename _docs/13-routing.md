---
title: "Application routing"
permalink: /routing/
excerpt: "Configuration of routing for an Ontimize Web app."
modified: 2016-09-29T08:25:30-04:00
---
{% include base_path %}

## Overview

Our application will normally have more than one screen. We need to tell the application what to do when the user interacts with it.

To familiarise yourself with the terminology, methods, and usage; it is highly recommended to take a look at the documentation for the ['Router' Angular](https://angular.io/api/router/Router){:target="_blank"} class in Angular.

By convention each logic block (module) defines its own routes. This allows for nested and organized application routes. In a Ontimize Web application, the routes are loaded in routing modules. Each of these modules must be imported into an application block module. You can see this in the app  [structure schema]({{ base_path }}/guide/appstructure/){:target="_blank"} below where the login and main modules follow this structure.

As you can see in the '*AppModule*' definition [here]({{ base_path }}/guide/appstructure/){:target="_blank"}, an '*AppRoutingModule*' is in the imports array. This module is defined in '*src\app\app-routing.module.ts*' and contains:

```bash
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'main',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

const opt = {
  enableTracing: false
  // true if you want to print navigation routes
};

@NgModule({
  imports: [RouterModule.forRoot(routes, opt)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
```

In this module, the most important configuration items are:

* There are two main routes:  '*main*' and '*login*'. Both paths have their respective routes defined with a function in the '*loadChildren*' property which *needs* to be a function returning the corresponding module reference. Each routing module is responsible for managing its matching routes.
* In the '*main*' route definition there is a '*canActivate*' property referencing to Ontimize Web '*AuthGuardService* service'. This establishes a privacy policy for the ontimize services so that the application flow will be redirected to the '*login*' module if some of the main module internal routes are loaded with no previous permissions granted.
* An empty path redirects the user to the '*main*' module, which is the default application behaviour.


## Login module

Below is the definition of the login module and its associated routing module.

```bash
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
```

The routing module:

```bash
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

```

As you can see, the empty route triggers the loading of the '*LoginComponent*'. From '*AppRoutingModule*', then we can see that '*LoginModule*' is loaded under the ‘*login*’ path, and therefore the absolute path for loading the login component is '*login/*'.


## Main module - Organizing new inner modules

Here is the '*MainRoutingModule*', which manages the redirection to other inner modules such as customers, accounts, branches, etc.

```bash
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
      { path: 'branches', loadChildren: () => import('./branches/branches.module').then(m => m.BranchesModule) },
      { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
      { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
```

Subroutes of inner modules are defined using *'loadChildren'* property giving an entry point (that matches with the common url path) for that module.

## Customers routing module

This is the routing for the customers module:

```bash
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersDetailComponent } from './detail/customers-detail.component';
import { CustomersEditComponent } from './edit/customers-edit.component';
import { CustomersHomeComponent } from './customers-home.component';
import { CustomersNewComponent } from './new/customers-new.component';
import { AccountsModule } from '../accounts/accounts.module';

export function loadAccountsModule() { return AccountsModule; }

export const routes: Routes = [
  { path: '', component: CustomersHomeComponent },
  { path: 'new', component: CustomersNewComponent },
  { path: ':CUSTOMERID', component: CustomersDetailComponent },
  { path: ':CUSTOMERID/edit', component: CustomersEditComponent },
  { path: ':CUSTOMERID/accounts', loadChildren: loadAccountsModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
```

In this file some of the more typical routes related with a logic block are defined, such as:

* **Important**: Remember that all of these routes are below the '*customer*' route defined in the '*AppRoutingModule*'.

* **'':** Entry point of this logical block. Typically contains a list or table of all elments of the block. In this case, it contains a table with all of the customers. This will be rendered by *CustomersHomeComponent*.
* **'new':** View for inserting a new item into the collection. Uses *CustomersNewComponent*.
* **':CUSTOMERID':** Details of selected item. The *:CUSTOMERID* is the token for a route parameter. For example, in a URL such as "/customers/22", "22" is the value of :CUSTOMERID parameter that is generally the customer’s entity primary key. The component *CustomersDetailComponent* will render the view  usually a form) with the details of the selected item. When the detailed data is displayed in a form all inputs contained in it are in read only mode and  cannot be edited.
When the detail data is displayed into a form all inputs contained in it are in **read only** mode, that is, the inputs only displays data but can not be edited.
* **':CUSTOMERID/accounts':** Entry point for loading the '*AccountsModule*'.
