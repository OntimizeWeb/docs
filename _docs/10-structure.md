---
title: "Structure"
permalink: /docs/structure/
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
quick-start
|──  config/
|──  dist/
|──  nodes_modules/
|──  src/
|    ├──  app/                              # contains all application stuff.
|    |   ├──  login/                        # login block.
|    |   |   |──  login-routing.module.ts   # register routing of login block
|    |   |   |──  login.component.html
|    |   |   |──  login.component.scss
|    |   |   |──  login.component.ts
|    |   |   |──  login.module.ts           # define login module
|    |   |   └──  login.theme.scss
|    |   |
|    |   ├──  main/                         # contains all blocks of application.
|    |   |   ├──  customers/                # customers block.
|    |   |   |   ├──  detail/
|    |   |   |   ├──  edit/
|    |   |   |   ├──  home/
|    |   |   |   ├──  new/
|    |   |   |   |──  customers-routing.module.ts     # register routing of  customers block.
|    |   |   |   └──  customers.module.ts             # routes of customers block.
|    |   |   |
|    |   |   |
|    |   |   |──  ...
|    |   |   |
|    |   |   |──  main.routing.module.ts      # routes of app private section.
|    |   |   |──  main.component.html
|    |   |   |──  main.component.scss
|    |   |   |──  main.component.ts
|    |   |   └──  main.modules.ts             # define the main section, also import and export necessary modules
|    |   |
|    |   |
|    |   |──  shared/                               # contains all stuff (components, services, ...) for sharing on whole app.
|    |   |   |──  app.menu.config.ts                # app menu configuration parameters.
|    |   |   |──  app.services.config.ts            # app services configuration parameters.
|    |   |   |──  movement-types-cell-renderer.ts   # services for renderer cell
|    |   |   └──  shared.modules.ts                 # directives of shared block.
|    |   |
|    |   |──  app-routing.module.ts     # app routes definition.
|    |   |──  app.component.html
|    |   |──  app.component.scss
|    |   |──  app.component.ts
|    |   |──  app.config.ts             # app configuration parameters.
|    |   └──  app.module.ts             # app main module.
|    |
|    |──  assets/                       # contains application assets.
|    |    ├──  css/                     # custom application css files.
|    |    |──  i18n/                    # json files for translations.
|    |    |──  images/                  # extra images used by the application.
|    |    └──  js/                      # custom JavaScript application files.
|    |
|    |──  environments/
|    |
|    |──  favicon.ico
|    |──  index.html                    # defines the web page that hosts the application.
|    |──  main.ts                       # file that bootstraps the application and compiles the application with the JIT compiler
|    |──  main-aot.ts                   # file that bootstraps the application and compiles the application with the AOT compiler
|    |──  polyfills.ts                  # file that help normalize the different browsers have different levels of support of the web standards
|    |──  styles-aot.scss               # global styles to compile with AOT COMPILER
|    |──  styles.scss                   # global styles to compile with JIT COMPILER
|    |──  test.ts                       # main entry point for your unit tests. It has some custom configuration that might be unfamiliar, but it's not something you'll need to edit.
|    |──  tsconfig.app.json             # typeScript compiler configuration for the Angular app
|    |──  tsconfig.spec.json            # typeScript compiler configuration for the unit tests
|    |──  typings.d.ts                  # systemJS module definition
|    └──  vendor-aot.ts                 # only includes what need
|

|──  .editorconfig
|──  angular-cli.json                   # configuration for Angular CLI, in this file you can set several defaults and also configure what files are included when your project is built. Check out the official documentation if you want to know more.
|──  karma.conf.js                      # Unit test configuration for the Karma test runner, used when running ng test.
|──  package.json                       # npm package dependencies for the project.
|──  protractor.conf.js                 # End-to-end test configuration for Protractor, used when running ng e2e. See link for more information https://github.com/angular/protractor/blob/master/lib/config.ts
|──  tsconfig.aot.json                  # TypeScript AOT compiler configuration for your IDE to pick up and give you helpful tooling.
|──  tsconfig.json                      # TypeScript JIT compiler configuration for your IDE to pick up and give you helpful tooling.
└──  tslint.json                        # Linting configuration for TSLint together with Codelyzer, used when running ng lint. Linting helps keep your code style consistent.

```

## Project configuration

### Configuration files

Our typical project needs several configuration files:

* **[package.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/package.json)** identifies npm package dependencies for the project.
* **[tsconfig.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/tsconfig.json)** and **[tsconfig.aot.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/tsconfig.aot.json)** defines how the TypeScript compiler generates JavaScript  from the project's files depending compile the project (JIT o AOT)
* **[angular-cli.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/.angular-cli.json)** provides information to the angular-cli tool about building the application.
* **[tslint.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/tslint.json)** helps keep your code style consistent.

>Although we use *SystemJS*, it's only one option for loading modules. Use the module loader that you prefer.
For *Webpack* and Angular, see [Webpack: an Introduction](https://angular.io/docs/ts/latest/guide/webpack.html). Or, learn more about *SystemJS* configuration in general
[here](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md).

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

* The *o-app* tag in the *body* which is where your app lives!

## Application module

Angular apps are formed by blocks of functionality that are called [modules](https://angular.io/docs/ts/latest/guide/ngmodule.html). Ontimize Web apps keep this characteristic
and every application has at least one module: the root module, which is named AppModule by convention.

The file that defines the root module is placed in *app/app.module.ts* with the following content:

```bash
import { NgModule } from '@angular/core';
import {
  Injector,
  APP_INITIALIZER
} from '@angular/core';

import {
  APP_CONFIG,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS
} from 'ontimize-web-ngx';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';

// Defining custom providers (if needed)...
export const customProviders: any = [
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    MainModule,
    LoginModule,
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


As a rule, our app will be conformed by different logic blocks which may or may not interact with each. Returning to our example customer management and accounts,
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
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app/app.module.ngfactory';

import { ontimizePostBootstrap } from 'ontimize-web-ngx';

enableProdMode();

const promise = platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
promise.then(ontimizePostBootstrap).catch(err => {
  console.error(err.message);
});

```

The AOT approach changes application bootstrapping.

Instead of bootstrapping AppModule,the bootstrap application with the generated module factory, AppModuleNgFactory.

Switch from the platformBrowserDynamic.bootstrap used in JIT compilation to platformBrowser().bootstrapModuleFactory and pass in the AOT-generated AppModuleNgFactory.


## Build and run your application

Open a terminal window and enter this command:

```bash
npm start
```
> **NOTE:** Run this command with administrator privileges.

That command runs the following two parallel node processes:

* The TypeScript compiler in watch mode.
* A static file server that loads *index.html* in a browser and refreshes the browser when application files change.

In a browser tab enters [http://localhost:4209](http://localhost:4209) and the application should be displayed.