---
permalink: /ontimize-web-ngx-map/
title: "Maps"
excerpt: ""
---

# Ontimize Web Map

An implementation of leaflet map library for Ontimize Web.

* [Github repository](#github)
* [Examples](#examples)
* [Installation](#installation)
* [Usage](#usage)

## Github
Ontimize Web Map module is stored in [github](https://github.com/OntimizeWeb/ontimize-web-ngx-map){:target="_blank"} where you can also see/add todos, bugs or feature requests in the [issues](https://github.com/OntimizeWeb/ontimize-web-ngx-map/issues){:target="_blank"} section.


## Examples

Check out examples demo:
<p>
  <a href="https://ontimizeweb.github.io/ontimize-web-ngx-map" target="_blank" class="btn btn--success">
    <i class="fa fa-play"></i>
    live demo
  </a>
</p>

## Installation

```bash
  npm install ontimize-web-ngx-map --save
```

## Usage

Finally, you can use ontimize-web-ngx-map in your Ontimize Web project.

### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-map/styles.scss",
  ....
],
...
```

### Update your webpack AoT generation file
*pending*

### Import in an application module

Include the library map module into your app in the module where you want to use it.

```bash
...
import { OMapModule } from 'ontimize-web-ngx-map';
...

@NgModule({
  imports: [
    OMapModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```



