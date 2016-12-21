---
title: "Charts"
permalink: /docs/charts/
excerpt: ""
modified: 2016-12-12T18:25:30-04:00
---

# Ontimize Web Charts
An implementation of nvD3 and d3 charts library for Ontimize Web.

* [Examples](#examples)
* [Installation](#installation)
* [Usage](#usage)

## Examples

Check out examples demo:
<div><a href="https://ontimizeweb.github.io/ontimize-web-ng2-charts" target="_blank" class="btn btn--success">
    <i class="fa fa-play"></i>
    live demo</a></div>

## Installation

First you need to install chart module dependencies (d3 and nvD3 libraries):

```bash
npm install d3@3.5.6 nvd3@1.8.4 ng2-nvd3@1.1.3 --save
```

Do not forget to add typings as well

```bash
typings install d3 nvd3 --ambient -DA
```
> Ensure that you have installed 'typings' node module globally with the same version of the one saved into the package.json of the 
application.  
For checking the version : typings -v  
For installing globally: npm install -g typings@0.8.1

After that, install the npm chart module:

```bash
npm install ontimize-web-ng2-charts --save
```

## Usage

Finally, you can use ontimize-web-ng2-charts in your Ontimize Web project.

### Configure third party dependencies and chart module (Angular-cli & SystemeJS)

Configure third party dependencies like this:

**system-config.ts**

```bash
const cliSystemConfigPackages: any = {
};
// ontimize chart module
cliSystemConfigPackages['ontimize-web-ng2-charts'] = { main: 'o-chart' };
// third party dependencies
cliSystemConfigPackages['d3'] = { main: 'd3.min' };
cliSystemConfigPackages['nvd3'] = { main: 'build/nv.d3.min' };
cliSystemConfigPackages['ng2-nvd3'] = { main: 'ng2-nvd3' };

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    ...

    'ontimize-web-ng2-charts': 'vendor/ontimize-web-ng2-charts',

    'd3': 'vendor/d3',
    'nvd3': 'vendor/nvd3',
    'ng2-nvd3': 'vendor/ng2-nvd3/build/lib',
    },
  packages: cliSystemConfigPackages
});

```

**angular-cli-build.js**

```bash
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      ....

      'ontimize-web-ng2-charts/*.js',
      'ontimize-web-ng2-charts/src/**/*.js',

      'd3/*min.js',
      'nvd3/build/*min.js',
      'ng2-nvd3/build/lib/*.js',

      'ontimize-web-ng2-charts/**/*.css',
      'nvd3/build/*.+(css|css.map)'
     ]
  });
};
```
**index.html**

Do not forget to include CSS style sheets

```bash
<link rel="stylesheet" type="text/css" href="./vendor/nvd3/build/nv.d3.min.css"/>
```

**app.module.ts**

Include the library chart module into your app.

```bash
...
import { OChartModule } from 'ontimize-web-ng2-charts/o-chart';
...

@NgModule({
  imports: [ ONTIMIZE_MODULES, routing, OChartModule],
  declarations: [
    AppComponent,
    ONTIMIZE_DIRECTIVES,
    ...APP_DIRECTIVES
  ],
  bootstrap: [ AppComponent ],
  providers: [
    ...standardProviders,
    ...customProviders
  ]
})
export class AppModule { }

```




