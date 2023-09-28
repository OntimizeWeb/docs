---
layout: default
permalink: /ontimize-web-ngx-dynamicform-builder/
title: "Dynamicform Builder"
excerpt: ""
parent: Addons
nav_order: 7
---

# Ontimize Web Dynamicform builder

Ontimize Web Dynamicform Builder is a web form builder using the [Ontimize Web Dynamic Form](https://github.com/OntimizeWeb/ontimize-web-ngx-dynamicform){:target="_blank"}.

* [Github repository](#github)
* [Installation](#installation)
* [Usage](#usage)

## Github
Ontimize Web Dynamic Form Builder module is stored in [github](https://github.com/OntimizeWeb/ontimize-web-ngx-dynamicform-builder){:target="_blank"} where you can also see/add todos, bugs or feature requests in the [issues](https://github.com/OntimizeWeb/ontimize-web-ngx-dynamicform-builder/issues){:target="_blank"} section.


## Installation

```bash
  npm install ontimize-web-ngx-dynamicform-builder --save
```

## Usage

### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-dynamicform-builder/styles.scss",
  ....
],
...
```

### Import in an application module

Include the dynamic form builder module into your app in the module where you want to use it.

```bash
...
import { DynamicFormBuilderModule } from 'ontimize-web-ngx-dynamicform-builder';
...

@NgModule({
  imports: [
    DynamicFormBuilderModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```

