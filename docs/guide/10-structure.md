---
layout: default
title: "Application structure"
permalink: /guide/appstructure/
excerpt: "How an Ontimize Web app is organized and what all of the files are for."
parent: Guide
nav_order: 1
---

{% include base_path %}
{% include toc %}

## Overview

The QuickStart application has the structure of an Ontimize Web application. This structure is based on the structure of a regular Angular app but with the specification needed by the **OntimizeWeb** framework.

The QuickStart has been developed to help people learn how to start programming with **OntimizeWeb**.

In these following sections we will explain in detail this structure and what each file is used for.

## Application structure

Here is the default root directory structure of an Ontimize Web application:

```bash
ontimize-web-ngx-quickstart
|──  src/
|  ├──  app/                          # Contains all application code
|  |  ├──  login/                     # Login module folder
|  |  |  |──  login-routing.module.ts # Login routing module
|  |  |  |──  login.component.html
|  |  |  |──  login.component.scss
|  |  |  |──  login.component.ts
|  |  |  |──  login.module.ts         # Login module definition
|  |  |  └──  login.theme.scss
|  |  |
|  |  ├──  main/                              # Contains application main module
|  |  |  ├──  customers/                      # Customes module folder
|  |  |  |  ├──  detail/
|  |  |  |  ├──  home/
|  |  |  |  ├──  new/
|  |  |  |  |──  customers-routing.module.ts  # Customers routing module
|  |  |  |  └──  customers.module.ts          # Customer module definition
|  |  |  |
|  |  |  |──  ...
|  |  |  |
|  |  |  |──  main.routing.module.ts  # Main routing module
|  |  |  |──  main-theme.scss
|  |  |  |──  main.component.html
|  |  |  |──  main.component.scss
|  |  |  |──  main.component.ts
|  |  |  └──  main.modules.ts         # Main module definition
|  |  |
|  |  |──  shared/                            # Shared module folder.
|  |  |  ├──  accounts-card/                  # Custom component used on de accounts home page card
|  |  |  ├──  ...
|  |  |  ├──  movement-types-renderer/        # Custom component (cell renderer) definition
|  |  |  |──  style-manager/                  # Class for managing stylesheets
|  |  |  |──  app.menu.config.ts              # Application menu definition
|  |  |  |──  app.services.config.ts          # Ontimize JEE services path configuration file
|  |  |  |──  constant.ts                     # File used to store constant variables on the app like the primary color code
|  |  |  └──  shared.modules.ts               # Shared module definition
|  |  |
|  |  |──  app-routing.module.ts  # Application routing module
|  |  |──  app.component.html
|  |  |──  app.component.scss
|  |  |──  app.component.spec.ts
|  |  |──  app.component.ts       # Application bootstrap component
|  |  |──  app.config.ts          # Application configuration file
|  |  └──  app.module.ts          # Application module definition
|  |
|  |──  assets/     # Application assets folder
|  |  ├──  css/     # Application css/scss files
|  |  |──  i18n/    # JSON bundle files
|  |  |──  icons/   # Icons used in the application
|  |  |──  images/  # Images used in the application
|  |  └──  js/      # Application javascript code files
|  |
|  |──  environments/
|  |
|  |──  favicon.ico
|  |──  index.html           # Web page that hosts the application
|  |──  main.ts              # File that bootstraps the application and compiles the application with the JIT compiler
|  |──  polyfills.ts         # File that help normalize the different browsers have different levels of support of the web standards
|  |──  styles.scss          # Global styles file
|  |──  test.ts              # Entry point for your unit tests. It has some custom configuration that might be unfamiliar, but it's not something you'll need to edit.
|  └──  manifest.webmanifest # The web app manifest is a file that tells the browser about your Progressive Web App (app name, icons, URL)
|
|──  angular.json               # Angular CLI configuration
|──  browserlist                # Config file to share target browsers between different front-end tools.
|──  karma.conf.js              # Karma configuration file. More information here: https://karma-runner.github.io/1.0/config/configuration-file.html
|──  ngsw-config.json           # Specifies which files and data URLs the Angular service worker should cache and how it should update the cached files and data for PWA.
|──  package.json               # npm package dependencies for the project
|──  sonar-project.properties   # SonarCloud UI properties file
|──  tsconfig.app.json          # TypeScript Application configuration
|──  tsconfig.json              # TypeScript General configuration
└──  tsconfig.spec.json         # TypeScript compiler configuration for the unit tests
```

## Project configuration

### Configuration files

A typical project needs the following configuration files:

* **[package.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/15.x.x/package.json){:target="_blank"}** identifies npm package dependencies for the project.
* **[tsconfig.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/15.x.x/tsconfig.json){:target="_blank"}** define how the TypeScript compiler generates JavaScript from the project's files depending on type of compilation.
* **[angular.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/15.x.x/angular.json){:target="_blank"}** provides information to the angular-cli tool about building the application. In this file you can set several defaults and also configure what files are included when your project when is built. Check out the official [documentation](https://github.com/angular/angular-cli/wiki/angular-cli){:target="_blank"} if you want to know more.
* **[ngsw-config.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/15.x.x/ngsw-config.json){:target="_blank"}** specifies which files and data URLs the Angular service worker should cache and how it should update the cached files and data for PWA

### Web app

Define the web app that hosts your application in the file *index.html*.

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Ontimize Web Quickstart</title>

  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <!-- Styling -->
  <link rel="stylesheet" type="text/css" href="./assets/css/loader.css">
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">

  <!-- PWA -->
  <link rel="manifest" href="manifest.webmanifest">
  <meta name="theme-color" content="#242424">
</head>

<body>
  <!-- Loader -->
  <div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
  <!-- The application tag-->
  <o-app></o-app>
  <noscript>Please enable JavaScript to continue using this application.</noscript>
</body>

</html>

```
The noteworthy sections here are:

* The `loader-wrapper` element. Which in addition with *loader.css* file will load a spinner loader, visible during application load and hidden by Ontimize Web when the application is loaded.
* The `o-app` tag in the `body` which is where your app lives!

## Application module

Angular apps are formed by blocks of functionality that are called [modules](https://angular.io/docs/ts/latest/guide/ngmodule.html){:target="_blank"}. Ontimize Web apps keep this characteristic and every application has at least one module: the root module, which is named `AppModule` by convention.

The root module definition is placen in the file *app/app.module.ts* and contains the following content:

```javascript
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  APP_CONFIG,
  AppearanceService,
  O_INPUTS_OPTIONS,
  O_MAT_ERROR_OPTIONS,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule
  } from 'ontimize-web-ngx';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';

// Defining custom providers (if needed)...
export const customProviders: any = [
  { provide: O_MAT_ERROR_OPTIONS, useValue: { type: 'lite' } },
  { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'accent' } },
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OntimizeWebModule.forRoot(CONFIG),
    OntimizeWebModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    AppearanceService,
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

The `NgModule` decorator uses the following metadata:

* **imports:** An array of modules that you want to use in your application. `ONTIMIZE_MODULES` includes standard Angular Modules (`HttpLoader`, `Http` and `TranslateHttpLoader`).
* **declarations:** Specifies a list of directives/pipes that belong to this module.
* **boostrap:** Defines the components that should be bootstrapped when this module is bootstrapped.
* **providers:** Define the set of injectable objects that are available in the injector of this module. You will include here all the services that you want to make available module-wide. Use the variable `customProviders` for including your application providers.

The noteworthy variables here are:

* **CONFIG:** An object containing the application configuration. Learn more [here]({{ base_path }}/guide/appconfig/){:target="_blank"}.

The Ontimize Web applications are comprised of different logic blocks or modules, which may or may not interact with each other. Returning to our example about customers and accounts: it makes sense to have different blocks containing the logic related to creation, editing, or deletion of customers; and another with the logic related to the accounts.

As was specified in the structure schema, the basic logic blocks that every Ontimize Web application contains are:

* **login:** This is a public block (always accessible), responsible for the login process.
* **main:** This is a container for all private logic blocks of our application (e.g. customers, accounts ...)

You can find more information about logic blocks [here]({{ base_path }}/app-modules){:target="_blank"}.

## Start up your application

Now we are going to start up the application using Angular. You can find more information about Angular bootstrapping [here](https://angular.io/guide/bootstrapping){:target="_blank"}.

The file responsible for starting up the app is *app/main.ts*, with the content:

```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ontimizePostBootstrap } from 'ontimize-web-ngx';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const promise = platformBrowserDynamic().bootstrapModule(AppModule);
promise.then(ontimizePostBootstrap).catch(err => {
  console.error(err.message);
});

```
