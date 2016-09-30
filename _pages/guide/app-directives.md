---
title: "Application directives file"
permalink: /guide/app-directives/
excerpt: "Directives of an Ontimize Web app."
modified: 2016-09-29T08:25:30-04:00
author_profile: false
sidebar:
        nav: "docs"
---

As it was said before, every Ontimize Web as every Angular application has at least one module called, by convention, *AppModule*. This module
has to be notified about all components, directives or pipes for being used along the whole app.  

It is done with the parameter *'declarations'* into *NgModule* definition of *app/app.module.ts*:

```bash
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
```

*ONTIMIZE_DIRECTIVES* contains all components, directives and pipes of the framework. So, for using framework components, etc. this variable must be
included into *'declarations'* parameter.  

Evenly, all new components, directives or pipes that you create into the application have to be declared here, for being able to use them along the whole app.  
For doing this, it has beeen stablished a convention in what each logic block of the app export its directives and all of them are collected into one unique file
called *app.directives.ts*.  

This file is placed at *app/app.directives.ts* and its content would be similar to this:

```bash
// Importing directives from each logic block...
import { LOGIN_DIRECTIVES } from './+login';
import { MainComponent } from './+main';
import { ACCOUNTS_DIRECTIVES } from './+main/+accounts';
import { CUSTOMERS_DIRECTIVES } from './+main/+customers';
import { SHARED_DIRECTIVES } from './shared';

// Exporting all directives of the application...
export const APP_DIRECTIVES: any = [
  LOGIN_DIRECTIVES,
  MainComponent,
  ACCOUNTS_DIRECTIVES,
  CUSTOMERS_DIRECTIVES,
  SHARED_DIRECTIVES
];
```
Working this way allows you to have nested and organized the components of each logic blocks, so delete a block of logic involves removing a single line.
