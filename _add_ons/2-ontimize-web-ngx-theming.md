---
permalink: /ontimize-web-ngx-theming/
title: "Theming"
excerpt: ""
---

# Ontimize Web Theming

Ontimize Web module for applications theming through '*scss*' files loading.

* [Github repository](#github)
* [Installation](#installation)
* [Usage](#usage)

## Github

Ontimize Web Theming module is stored in [github](https://github.com/OntimizeWeb/ontimize-web-ngx-theming){:target="_blank"} where you can also see/add todos, bugs or feature requests in the [issues](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/issues){:target="_blank"} section.


## Installation

```bash
  npm install ontimize-web-ngx-theming
```

## Usage

In your application main style file ('*app.scss*' if you are using ontimize-web pre-built apps) import one of the available themes file for loading its content:

* If you only want to load a pre-built theme of '*@angular/material*', load one of the following files:

  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/md-indigo-pink.scss';`
  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/md-deeppurple-amber.scss';`
  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/md-pink-bluegrey.scss';`
  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/md-purple-green.scss';`

* Otherwise, if you to load a pre-built theme of '*@angular/material*' and the default preconfigured ontimize style, load one of the following files:

    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/o-indigo-pink.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/o-deeppurple-amber.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/o-pink-bluegrey.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/o-purple-green.scss';`

* Finally if you want to use the default ontimize theme and styles, just load:

    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';`

In other case you can define your own theme, and, if you want, use the ontimize styles for a better component rendering including the following lines:

  * `@import '../styles/ontimize-theme-styles.scss';`
  * `@include ontimize-theme-styles($theme);`


Also, if you want to use compact styles for *'Ontimize Web'* components, you have to load the following file:
  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize-lite.scss';`
