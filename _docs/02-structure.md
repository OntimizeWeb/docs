---
title: "Structure"
permalink: /docs/structure/
excerpt: "How an ontimize web app is organized and what all of the files are for."
modified: 2016-08-08T16:25:30-04:00
---

{% include base_path %}

## Application structure

Here it is shown default Ontimize Web application's root directory:

```bash
quick-start
|──  config/
|──  dist/
|──  nodes_modules/
|──  src/
|    ├──  app/                              # contains all application stuff.
|    |   ├──  +login/                       # login block.
|    |   |   ├──  shared/
|    |   |   |──  login.component.html
|    |   |   |──  login.component.scss
|    |   |   |──  login.component.ts
|    |   |   |──  login.directives.ts
|    |   |   └──  index.ts
|    |   |
|    |   ├──  +main/                            # contains all blocks of application.
|    |   |   ├──  +customers/                   # customers block.
|    |   |   |   ├──  detail/
|    |   |   |   ├──  edit/
|    |   |   |   ├──  home/
|    |   |   |   ├──  new/
|    |   |   |   ├──  shared/
|    |   |   |   |──  customers.directives.ts    # directives of customers block.
|    |   |   |   |──  customers.routes.ts        # routes of customers block.
|    |   |   |   └── index.ts
|    |   |   | 
|    |   |   |──  ...
|    |   |   | 
|    |   |   |──  shared/
|    |   |   |──  main.component.html
|    |   |   |──  main.component.scss
|    |   |   |──  main.component.ts
|    |   |   |──  main.routes.ts            # routes of app private section.
|    |   |   └──  index.ts
|    |   |
|    |   |──  shared/                       # contains all stuff (components, services, ...) for sharing on app.
|    |   |   |──  ...
|    |   |   |──  app.services.config.ts    # app services configuration parameters.
|    |   |   |──  shared.directives.ts      # directives of shared block.
|    |   |   └── index.ts
|    |   |   
|    |   |──  app.component.html
|    |   |──  app.component.scss
|    |   |──  app.component.ts
|    |   |──  app.config.ts             # app configuration parameters.
|    |   |──  app.directives.ts         # all directives of application.
|    |   |──  app.modules.ts            # app main module.
|    |   |──  app.routes.ts             # app routes definition.
|    |   |──  environment.ts
|    |   └──  index.ts
|    |
|    |──  assets/                       # contains application assets.
|    |    ├──  css/                     # custom application css files.
|    |    |──  i18n/                    # json files for translations.
|    |    |──  images/                  # extra images used by the application.
|    |    └──  js/                      # custom JavaScript application files.
|    |
|    |──  favicon.ico
|    |──  index.html                    # defines the web page that hosts the application.
|    |──  main.ts                       # file that bootstraps the application.
|    |──  system-config.ts              # provides information to a module loader about where to find application modules, and registers all the necessary packages.
|    |──  tsconfig.json                 # defines how the TypeScript compiler generates JavaScript from the project's files.
|    └──  typings.d.ts                  
|
|──  typings/
|──  .editorconfig
|──  angular-cli.json                   
|──  angular-cli-build.js
|──  package.json                       # npm package dependencies for the project.
|──  tslint.json                        # is used to configure which rules get run by the linter.
└──  typings.json                       # provides additional definition files for libraries that the TypeScript compiler doesn't natively recognize.
```

## Project configuration

### Configuration files

Our typical project needs several configuration files:

* **[package.json](https://github.com/OntimizeWeb/ontimize-web-ng2-quickstart/blob/master/package.json)** identifies npm package dependencies for the project.
* **[tsconfig.json](https://github.com/OntimizeWeb/ontimize-web-ng2-quickstart/blob/master/src/tsconfig.json)** defines how the TypeScript compiler generates JavaScript from the project's files.
* **[typings.json](https://github.com/OntimizeWeb/ontimize-web-ng2-quickstart/blob/master/typings.json)** provides additional definition files for libraries that the TypeScript compiler doesn't natively recognize.
* **[systemjs.config.ts](https://github.com/OntimizeWeb/ontimize-web-ng2-quickstart/blob/master/src/system-config.ts)** provides information to a module loader about where to find application modules, and registers all the necessary packages. It also contains other packages that will be needed by later documentation examples.
* **[angular-cli.json](https://github.com/OntimizeWeb/ontimize-web-ng2-quickstart/blob/master/angular-cli.json)** and **[angular-cli-build.js](https://github.com/OntimizeWeb/ontimize-web-ng2-quickstart/blob/master/angular-cli-build.js)** provides information to the angular-cli tool about building the application.

>Although we use *SystemJS*, it's only one option for loading modules. Use the module loader that you prefer. 
For *Webpack* and Angular, see [Webpack: an Introduction](https://angular.io/docs/ts/latest/guide/webpack.html). Or, learn more about *SystemJS* configuration in general 
[here](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md).

### Web app

Define the web app that hosts your application in the file *index.html*.

```bash
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Ontimize Web QuickStart</title>

  <script>
    document.write('<base href="/" />');
  </script>

  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Styling -->
  <link rel="stylesheet" type="text/css" href="./assets/css/loader.css">
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" type="text/css" href="./vendor/ontimize-web-ng2/ontimize.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/app.css">


  <script type="text/javascript" src="./assets/js/domchange.js" ></script>
  <script type="text/javascript" src="./assets/js/keyboard.js" ></script>

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

  <!-- Load libraries -->
  <!-- Polyfill(s) for older browsers -->
  <script src="./vendor/core-js/client/shim.min.js"></script>

  <script src="./vendor/zone.js/dist/zone.js"></script>
  <script src="./vendor/reflect-metadata/Reflect.js"></script>
  <script src="./vendor/systemjs/dist/system.src.js"></script>

  <!-- Configure SystemJS -->
  <script>
    System.import('system-config.js').then(function () {
      System.import('main');
    }).catch(console.error.bind(console));
  </script>
</body>
</html>

```
The noteworthy sections here are:

* JavaScript libraries: *core-js* polyfills for older browsers, the *zone.js* and *reflect-metadata* libraries needed by Angular 2, and the *SystemJS* library for module loading.
* Configuration file for *SystemJS*, and a script where you import and run the app module which refers to the main file that you just wrote.
* The *o-app* tag in the *body* which is where your app lives!

## Application module

Angular 2 apps are formed by blocks of functionality that are called [modules](https://angular.io/docs/ts/latest/guide/ngmodule.html). Ontimize Web apps keep this characteristic
and every application has at least one module: the root module, which is named AppModule by convention.

The file that defines the root module is placed in *app/app.module.ts* with the following content:

```bash
import { NgModule }      from '@angular/core';

import {
  ONTIMIZE_MODULES,
  ONTIMIZE_DIRECTIVES,
  ontimizeProviders } from 'ontimize-web-ng2/ontimize';

import { CONFIG } from './app.config';
import { AppComponent }  from './app.component';
import { routing } from './app.routes';
import { APP_DIRECTIVES } from './app.directives';

// Standard providers...
let standardProviders = ontimizeProviders({
  'config': CONFIG
});
// Defining custom providers (if needed)...
// let customProviders = [
// ];

@NgModule({
  imports: [ ONTIMIZE_MODULES, routing],
  declarations: [
    AppComponent,
    ONTIMIZE_DIRECTIVES,
    ...APP_DIRECTIVES
  ],
  bootstrap: [ AppComponent ],
  providers: [
    ...standardProviders
    // ...customProviders
  ]
})
export class AppModule { }

```

The *NgModule* decorator uses the following metadata:

* **imports:** An array of modules that you want to use in your application. *ONTIMIZE_MODULES* includes standard Angular 2 Modules (Browser, Forms, ReactiveForms and Http).
* **declarations:** The root component and directives that are part of your application. In addition, *ONTIMIZE_DIRECTIVES*.
* **boostrap:** The root component of your app.
* **providers:** Services that you want to make available module-wide. *standardProviders* includes framework services customized with application parameters.

The noteworthy variables here are:

* **CONFIG:** An object with application configuration parameters. Learn more [here]({{ base_path }}/guide/app-config/).
* **routing:** The definition of all application routes. Learn more here.
* **APP_DIRECTIVES:** An array of component and directives of yout application. Lear more here. 


## Start up your application

Now it is time to start up your application, that is, tells to Angular 2 to start the app. You can find more information about Angular 2 bootstraping [here](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#bootstrap).

The file responsible of starting up the app is *'app/main.ts'* and the content is the following:


```bash
import { enableProdMode } from '@angular/core';
import { ontimizeBootstrap } from 'ontimize-web-ng2/ontimize/MainLauncher';
import { AppModule, CONFIG } from './app/';

enableProdMode();

// Boostraping app...
ontimizeBootstrap(AppModule, CONFIG).then(appRef => {
  console.log('initialized... ');
});

```

This code calls framework launcher to bootstrap your AppModule.


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