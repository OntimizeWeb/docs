---
permalink: /ontimize-web-ngx-datatable/
title: "DataTable (Deprecated)"
excerpt: ""
---

# Ontimize Web DataTable

An implementation of DataTable library for Ontimize Web.

* [Github repository](#github)
* [Installation](#installation)
* [Usage](#usage)

## Github
Ontimize Web DataTable module is stored in [github](https://github.com/OntimizeWeb/ontimize-web-ngx-datatable){:target="_blank"} where you can also see/add todos, bugs or feature requests in the [issues](https://github.com/OntimizeWeb/ontimize-web-ngx-datatable/issues){:target="_blank"} section.


## Installation

```bash
  npm install ontimize-web-ngx-datatable --save
```

## Usage

Finally, you can use '*ontimize-web-ngx-datatable*' in your Ontimize Web project.

### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-datatable/styles.scss",
  ....
],
...
```

### Add the ontimize-web-ngx-datatable theme

You should also add the theme depending module styles. For that, you have to import module theme in your '*app.scss*' file after the '*$theme*' definition:

```bash
@import 'node_modules/ontimize-web-ngx-datatable/o-datatable-theme.scss';
@include o-datatable-theme($theme);
```

### Import in an application module

Include the datatable module into your app in the module where you want to use it.

```bash
...
import { ODataTableModule } from 'ontimize-web-ngx-datatable';
...

@NgModule({
  imports: [
    ODataTableModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```

