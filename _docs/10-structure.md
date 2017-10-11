---
title: "Structure"
permalink: /structure/
excerpt: "How an ontimize web app is organized and what all of the files are for."
modified: 2016-08-08T16:25:30-04:00
---

{% include base_path %}
{% include toc %}

## Overview

The QuickStart application has the structure of an Ontimize Web application. This structure is based on the structure
of a real-world Angular app but with the specification needed by the Ontimize Web framework.

The QuickStart has been developed for teaching purposes about how to start programming with Ontimize Web.

In following sections of this documents will be explained in detail how is this structure and how each file is used for.

---

## Application structure

Here it is shown default Ontimize Web application's root directory:

```bash
ontimize-web-ngx-quickstart
|──  aot-config/    #Contains files needed for AoT compilation
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
|  |  |  |  ├──  edit/
|  |  |  |  ├──  home/
|  |  |  |  ├──  new/
|  |  |  |  |──  customers-routing.module.ts  # Customers routing module
|  |  |  |  └──  customers.module.ts          # Customer module definition
|  |  |  |
|  |  |  |
|  |  |  |──  ...
|  |  |  |
|  |  |  |──  main.routing.module.ts  # Main routing module
|  |  |  |──  main.component.html
|  |  |  |──  main.component.scss
|  |  |  |──  main.component.ts
|  |  |  └──  main.modules.ts         # Main module definition
|  |  |
|  |  |
|  |  |──  shared/                            # Shared module folder.
|  |  |  |──  app.menu.config.ts              # Application menu definition
|  |  |  |──  app.services.config.ts          # Ontimize JEE services path configuration file
|  |  |  |──  movement-types-cell-renderer.ts # Custom component (cell renderer) definition
|  |  |  └──  shared.modules.ts               # Shared module definition
|  |  |
|  |  |──  app-routing.module.ts  # Application routing module
|  |  |──  app.component.html
|  |  |──  app.component.scss
|  |  |──  app.component.ts       # Application bootstrap component
|  |  |──  app.config.ts          # Application configuration file
|  |  └──  app.module.ts          # Application module definition
|  |
|  |──  assets/     # Application assets folder
|  |  ├──  css/     # Application css/scss files
|  |  |──  i18n/    # JSON bundle files
|  |  |──  images/  # Images used in the application.
|  |  └──  js/      # Application javascript code files
|  |
|  |──  environments/
|  |
|  |──  favicon.ico
|  |──  index.html          # Web page that hosts the application
|  |──  main.ts             # File that bootstraps the application and compiles the application with the JIT compiler
|  |──  polyfills.ts        # File that help normalize the different browsers have different levels of support of the web standards
|  |──  styles.scss         # Global styles file
|  |──  test.ts             # Entry point for your unit tests. It has some custom configuration that might be unfamiliar, but it's not something you'll need to edit.
|  |──  tsconfig.app.json   # TypeScript compiler configuration for the Angular app
|  |──  tsconfig.spec.json  # TypeScript compiler configuration for the unit tests
|  └──  typings.d.ts        # systemJS module definition
|
|──  angular-cli.json       # Angular CLI configuration
|──  karma.conf.js          # Unit test configuration for the Karma test runner, used when running ng test
|──  package.json           # npm package dependencies for the project
|──  protractor.conf.js     # End-to-end test configuration for Protractor, used when running ng e2e. See link for more information https://github.com/angular/protractor/blob/master/lib/config.ts
|──  tsconfig.aot.json      # TypeScript AOT compiler configuration
|──  tsconfig.json          # TypeScript JIT compiler configuration
└──  tslint.json            # Linting configuration for TSLint together with Codelyzer, used when running ng lint. Linting helps keep your code style consistent.

```

## Project configuration

### Configuration files

Our typical project needs several configuration files:

* **[package.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/package.json){:target="_blank"}** identifies npm package dependencies for the project.
* **[tsconfig.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/tsconfig.json)** and **[tsconfig.aot.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/tsconfig.aot.json)** defines how the TypeScript compiler generates JavaScript  from the project's files depending compile the project (JIT o AOT).
* **[angular-cli.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/.angular-cli.json)** provides information to the angular-cli tool about building the application. In this file you can set several defaults and also configure what files are included when your project when is built. Check out the official [documentation](https://github.com/angular/angular-cli/wiki/angular-cli) if you want to know more.
* **[tslint.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/tslint.json)** helps keep your code style consistent.

### Web app

Define the web app that hosts your application in the file *index.html*.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ontimize Web QuickStart</title>

    <base href="/">

    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Styling -->
    <link rel="stylesheet" type="text/css" href="./assets/css/loader.css">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">

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

  </body>
</html>

```
The noteworthy sections here are:

* The *loader-wrapper* element. Which in addition with *loader.css* will load a spinner loader, visible during application load.
* The *o-app* tag in the *body* which is where your app lives!

## Application module

Angular apps are formed by blocks of functionality that are called [modules](https://angular.io/docs/ts/latest/guide/ngmodule.html). Ontimize Web apps keep this characteristic and every application has at least one module: the root module, which is named AppModule by convention.

The file that defines the root module is placed in *app/app.module.ts* with the following content:

```bash
import { NgModule } from '@angular/core';
import { Injector, APP_INITIALIZER } from '@angular/core';

import {
  APP_CONFIG,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule
} from 'ontimize-web-ngx';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Defining custom providers (if needed)...
export const customProviders: any = [
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ],
})
export class AppModule { }
```

The *NgModule* decorator uses the following metadata:

* **imports:** An array of modules that you want to use in your application. *ONTIMIZE_MODULES* includes standard Angular Modules (HttpLoader
, Http and TranslateHttpLoader).
* **declarations:** The root component.
* **boostrap:** The root component of your app.
* **providers:** Services that you want to make available module-wide. *customProviders* includes framework services customized with application parameters.

The noteworthy variables here are:

* **CONFIG:** An object with application configuration parameters. Learn more [here]({{ base_path }}/guide/app-config/).


As a rule, our app will be conformed by different logic blocks (modules) which may or may not interact with each. Returning to our example customer management and accounts,
it makes sense to have a block containing the logic related to the creation, editing, deleting .. customer and one with the logic of the accounts.

As it is shown into the structure schema, the minimum logic blocks that every Ontimize Web app must contain are:

* **login:** This is a public block (always accesible) responsible of login process.
* **main:** This is a container for all private logic blocks of our application (e.g. customers, accounts, ...)

You can find more information about logic blocks [here]({{ base_path }}/guide/logic-blocks).

## Start up your application

Now it is time to start up your application, that is, tells to Angular to start the app. You can find more information about Angular bootstraping [here](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#bootstrap).

The file responsible of starting up the app is *'app/main-aot.ts'* and the content is the following:


```bash
import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ontimizePostBootstrap } from 'ontimize-web-ngx';

if (environment.production) {
  enableProdMode();
}

const promise = platformBrowserDynamic().bootstrapModule(AppModule);
promise.then(ontimizePostBootstrap).catch(err => {
  console.error(err.message);
});
```

## Build and run your application

Open a terminal window and enter this command:

```bash
npm start
```
> **NOTE:** Run this command with administrator privileges.

That command runs the following two parallel node processes:

* The TypeScript compiler in watch mode.
* A static file server that loads *index.html* in a browser and refreshes the browser when application files change.

In a browser tab enters [http://localhost:4200](http://localhost:4200) and the application should be displayed.

### Generate a distribution version

There are two ways to generate an ontimize web application distribution version: JIT and AoT.

####JIT

Compile TypeScript just in time for executing it.
  * Compiled in the browser.
  * Each file compiled separately.
  * No need to build after changing your code and before reloading the browser page.
  * Suitable for local development.

You can generate your application JIT distribution version adding and running this script to your package.json

  ```bash
  "production": "ng build --aot=false --target -prod"
  ```
####AoT

Compile TypeScript during build phase.
  * Compiled by the machine itself, via the command line (Faster).
  * All code compiled together, inlining HTML/CSS in the scripts.
  * No need to deploy the compiler (Half of Angular size).
  * More secure, original source not disclosed.
  * Suitable for production builds.

Ontimize web has its own plugin for the AoT distribution version creation, you can see more details [here]({{ base_path }}/add-ons/ontimize-web-ngx/). So you can generate your application AoT distribution version installing '*ontimize-web-ngx-tools*' and adding and running this script (with no parameters in this example) to your package.json.

  ```bash
  "production-aot": "ontimize-web-ngx production-aot"
  ```
