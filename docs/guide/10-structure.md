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
|  |  ├──  login/                     # Login feature folder (standalone)
|  |  |  |──  login.component.html
|  |  |  |──  login.component.scss
|  |  |  |──  login.component.ts      # Standalone component
|  |  |  |──  login.routes.ts         # Feature routes array
|  |  |  └──  login.theme.scss
|  |  |
|  |  ├──  main/                              # Application main area (standalone)
|  |  |  ├──  customers/                      # Customers feature folder
|  |  |  |  ├──  detail/
|  |  |  |  ├──  home/
|  |  |  |  ├──  new/
|  |  |  |  └──  customers.routes.ts          # Feature routes array
|  |  |  |
|  |  |  |──  ...
|  |  |  |
|  |  |  |──  main.routes.ts          # Main routes array
|  |  |  |──  main-theme.scss
|  |  |  |──  main.component.html
|  |  |  |──  main.component.scss
|  |  |  └──  main.component.ts       # Standalone component
|  |  |
|  |  |──  shared/                            # Shared utilities / components
|  |  |  ├──  accounts-card/                  # Custom standalone component
|  |  |  ├──  ...
|  |  |  ├──  movement-types-renderer/        # Custom standalone cell renderer
|  |  |  |──  style-manager/                  # Class for managing stylesheets
|  |  |  |──  app.menu.config.ts              # Application menu definition
|  |  |  └──  app.services.config.ts          # Ontimize JEE or JSON:API services path configuration
|  |  |
|  |  |──  app.component.html
|  |  |──  app.component.scss
|  |  |──  app.component.spec.ts
|  |  |──  app.component.ts       # Root standalone component (bootstrapped)
|  |  |──  app.config.ts          # ApplicationConfig — provideOntimizeWeb() + providers
|  |  └──  app.routes.ts          # Root routes array
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
|  |──  main.ts              # Bootstraps the application via bootstrapApplication()
|  |──  styles.scss          # Global styles file
|  └──  manifest.webmanifest # The web app manifest is a file that tells the browser about your Progressive Web App (app name, icons, URL)
|
|──  angular.json               # Angular CLI configuration
|──  ngsw-config.json           # Specifies which files and data URLs the Angular service worker should cache and how it should update the cached files and data for PWA.
|──  package.json               # npm package dependencies for the project
|──  tsconfig.app.json          # TypeScript Application configuration
|──  tsconfig.json              # TypeScript General configuration
└──  tsconfig.spec.json         # TypeScript compiler configuration for the unit tests
```

## Project configuration

### Configuration files

A typical project needs the following configuration files:

* **[package.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/18.x.x/package.json){:target="_blank"}** identifies npm package dependencies for the project.
* **[tsconfig.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/18.x.x/tsconfig.json){:target="_blank"}** define how the TypeScript compiler generates JavaScript from the project's files depending on type of compilation.
* **[angular.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/18.x.x/angular.json){:target="_blank"}** provides information to the angular-cli tool about building the application. In this file you can set several defaults and also configure what files are included when your project when is built. Check out the official [documentation](https://angular.dev/tools/cli){:target="_blank"} if you want to know more.
* **[ngsw-config.json](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/18.x.x/ngsw-config.json){:target="_blank"}** specifies which files and data URLs the Angular service worker should cache and how it should update the cached files and data for PWA

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
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
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

## Application configuration

From Angular 18, Ontimize Web applications use the **standalone bootstrap** model. There is no root `AppModule`; instead the application is configured through `ApplicationConfig` and `provideOntimizeWeb()`.

The configuration is split across two files:

**`app/app.config.ts`** — declares providers and passes the Ontimize configuration:

```typescript
import { ApplicationConfig } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  O_INPUTS_OPTIONS,
  O_MAT_ERROR_OPTIONS,
  provideOntimizeWeb
} from 'ontimize-web-ngx';

import { CONFIG } from './app.config.ontimize';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideOntimizeWeb(CONFIG, appRoutes),
    provideAnimationsAsync(),
    { provide: O_MAT_ERROR_OPTIONS, useValue: { type: 'lite' } },
    { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'accent' } },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ]
};
```

The noteworthy elements here are:

* **`provideOntimizeWeb(CONFIG, routes)`:** Registers all Ontimize services and passes the application configuration and root routes. Learn more about CONFIG [here]({{ base_path }}/guide/appconfig/){:target="_blank"}.
* **Providers:** Angular and application-wide providers are declared here, not in a module.

The Ontimize Web applications are comprised of different feature areas, which may or may not interact with each other. Returning to our example about customers and accounts: it makes sense to have different blocks containing the logic related to creation, editing, or deletion of customers; and another with the logic related to the accounts.

As was specified in the structure schema, the basic feature areas that every Ontimize Web application contains are:

* **login:** A public area (always accessible), responsible for the login process.
* **main:** A container for all private areas of the application (e.g. customers, accounts …)

You can find more information about feature routing [here]({{ base_path }}/app-modules){:target="_blank"}.

## Start up your application

Now we are going to start up the application using Angular. You can find more information about Angular standalone bootstrap [here](https://angular.dev/guide/ngmodules/standalone-migration){:target="_blank"}.

The file responsible for starting up the app is *main.ts*, with the content:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { ontimizePostBootstrap } from 'ontimize-web-ngx';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .then(ontimizePostBootstrap)
  .catch(err => console.error(err));
```
