---
title: "Application routing"
permalink: /docs/routing/
excerpt: "Configuration of routing for an Ontimize Web app."
modified: 2016-09-29T08:25:30-04:00
---

## Overview 

As a general rule, our application will have more than one screen. So, it is necessary to tell the application how it has to proceed when the user interacts with it. 

As good starting point is highly recommended, for getting familiar with the vocabulary and the notations, to have a look at the documentation on the ['Router' Angular 2](https://angular.io/docs/ts/latest/guide/router.html) 

There is a file where you may have to describe all routes available in your application and it is called and placed into *app/app.routes.ts*. The content of this file looks like:

```bash
//app.routes.ts

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './+login';
import { HomeComponent } from './+main/+home';
import { HelpComponent } from './+main/+help';
import { AboutComponent } from './+main/+about';
import { PrivateAppRoutes } from './+main/main.routes';

const LoginRoutes: Routes = [
  { path: 'login', component: LoginComponent}];

const PublicAppRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'help', component: HelpComponent },
    { path: 'about', component: AboutComponent }];

// All routes of the application
const routes: Routes = [
  ...LoginRoutes,
  ...PublicAppRoutes,
  ...PrivateAppRoutes,
  { path: '', redirectTo: 'main', pathMatch: 'prefix' }
];

let opt = {
  enableTracing: false // true if you want to print navigation routes
};
export const routing = RouterModule.forRoot(routes, opt);

```

The most important aspect of this file reside on last line, where it is being exported the constant *'routing'* that contains all rotues availables for the app collected
into the constant *routes*. Let me show you how to configure these routes.  

>By convention each logic block of the app exports its own routes. It is the way of having nested and organized application routes.  

As you can see in this example, the routes of the application are composed by arrays of subroutes, in this case:

* LoginRoutes. It contains the routes of the login logic block.
* PublicAppRoutes. It contains a group of public routes, that is, routes that can be accesed without being logged into the app.
* PrivateRoutes. It contains routes accessible only when you have logged into the application. If someone tries to access to a route defined into this array and has not logged in
it will be redirected automatically to login page. These routes are defined into *app/+main/main.routes.ts*
* and default route when none is specified.


## How to specify a route?

A route maps a URL path to a component which is responsible of rendering determinate view. According to the example:

```bash
const LoginRoutes: Routes = [
  { path: 'login', component: LoginComponent}];
```
Here it is mapping when browser reaches '/login' url the component *LoginComponent* will display its associated view.

## Organizing the routes

As it was said before, each logic block exports its app routes. Into the previous file *app.routes.ts* we saw how it was imported private routes from *app/+main/main.routes.ts*.
The content of this file is shown here:

```bash
//main.routes.ts

import { Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ng2/ontimize';

import {
  CustomerRoutes
} from './+customers/customers.routes';
import {MainComponent} from './main.component';
import {AccountsRoutes} from './+accounts/accounts.routes';

export const PrivateAppRoutes: Routes = [
  {
    path: 'main', component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      ...CustomerRoutes,
      ...AccountsRoutes,
      { path: '', redirectTo: 'customers', pathMatch: 'full' }
    ]
  }
];
```
Noteworthies aspects here are:

* We are exporting an array constant with private app routes.
* It is set up that our url path of private section is '/main' and the component responsible of rendering is MainComponent.
* It is set up a gardian to check user session by *'canActivate'* parameter.
* It is defined subroutes by *'children'* parameter (the routes of each logic block) and set up default route ('customers') when empty path is specified. 

So, let's organize all this stuff on our minds. Basically, we are exporting an array of private routes, that are composed by subroutes (the routes of each logic block), telling
the system that there will be a guard responsible of checking user authentication (AuthGuardService) and setting which will be default route when empty path is specified.  

If we continue with the organizational hierarchy of routes, we need to explore the routes exported by a logical block. 
The content of the file *app/+main/+customers/customers.routes.ts* is shown here:

```bash
// customers.routes.ts

import { Routes } from '@angular/router';

import {
  CustomersHomeComponent,
  NewCustomerComponent,
  CustomersEditComponent,
  CustomersDetailComponent
} from '../+customers';

export const CustomerRoutes: Routes = [
  {
    path: 'customers', component: CustomersHomeComponent,
  },
  {
    path: 'customers/:CUSTOMERID', component: CustomersDetailComponent
  },
  {
    path: 'customers/new', component: NewCustomerComponent
  },
  {
    path: 'customers/:CUSTOMERID/edit', component: CustomersEditComponent
  }
];
```
In this file are defined typical routes related with a logical block, that is:

* **'customers':** entry point of this logical block. Typically it will contain a list or table of all elments of the block, in this case, a table with all customers. The view 
will be rendered by *CustomersHomeComponent*.
* **'customers/:CUSTOMERID':** detail of selected item. The *:CUSTOMERID* is the token for a route parameter. In a URL such as "/customers/22", "22" is the value
of :CUSTOMERID parameter that, as general rule, will be the primary key. The component *CustomersDetailComponent* will render the view (usually a form) with the details of selected item.  
When displaying detail data of an item into a form, all inputs contained on it are in **read only** mode, that is, the inputs only displays data but can not be edited.
* **'customers/new':** view for inserting new item of the collection. *NewCustomerComponent* is the responsible of rendering this view.
NOTE: if you do not need specific logic when inserting new item, you can reuse the detail component (CustomersDetailComponent).
* **'customers/:CUSTOMERID/edit':** view for editing values of the item. In this mode, the inputs contained into the form are ready for edition, so you can type, change, select, etc for changing values.  
As in the case before, you can reuse detail component CustomersDetailComponent.


