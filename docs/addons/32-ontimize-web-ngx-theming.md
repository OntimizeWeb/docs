---
layout: default
permalink: /theming/
title: "OntimizeWeb Theming"
excerpt: ""
parent: Addons
nav_order: 2
---

{% include base_path %}

Ontimize Web Theming is a module for applications loading predefined themes in your applications through '*scss*' files.

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

* If you only want to load a pre-built theme load one of the following files:

  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-indigo-pink.scss';`
  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-deeppurple-amber.scss';`
  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-pink-bluegrey.scss';`
  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-purple-green.scss';`
  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize-black-yellow.scss';`
  * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';`

* Finally if you want to use the default ontimize theme and styles, just load:

    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';`

In other case you can define your own theme, and, if you want, use the ontimize styles for a better component rendering including the following lines:

@include ontimize-theme-styles($theme);
  * `@import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss';`
  * `@include ontimize-theme-styles($theme);`

> **Lite Theme:** The *Lite Theme* defines compact styles for the OntimizeWeb components. You can read more about this theme [here]({{ base_path }}/customize/lite/){:target="_blank"}.
