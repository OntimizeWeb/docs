---
layout: default
permalink: /ontimize-web-ngx-dynamicform/
title: "Dynamicform"
excerpt: ""
nav_exclude: true
---

# Ontimize Web Dynamicform

Ontimize Web Dynamicform is a web dynamic form implementation.

* [Github repository](#github)
* [Installation](#installation)
* [Usage](#usage)

## Github
Ontimize Web Dynamic Form module is stored in [github](https://github.com/OntimizeWeb/ontimize-web-ngx-dynamicform){:target="_blank"} where you can also see/add todos, bugs or feature requests in the [issues](https://github.com/OntimizeWeb/ontimize-web-ngx-dynamicform/issues){:target="_blank"} section.


## Installation

```bash
  npm install ontimize-web-ngx-dynamicform --save
```

## Usage

### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-dynamicform/styles.scss",
  ....
],
...
```

### Import in an application module

Include the dynamic form module into your app in the module where you want to use it.

```bash
...
import { DynamicFormModule } from 'ontimize-web-ngx-dynamicform';
...

@NgModule({
  imports: [
    DynamicFormModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```


