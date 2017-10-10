---
title: "Maps"
permalink: /maps/
excerpt: ""
modified: 2016-12-12T18:25:30-04:00
---

# Ontimize Web Map
An implementation of leaflet map library for Ontimize Web.

* [Examples](#examples)
* [Installation](#installation)
* [Usage](#usage)

## Examples

Check out examples demo:
<div><a href="https://ontimizeweb.github.io/ontimize-web-ng2-map" target="_blank" class="btn btn--success">
    <i class="fa fa-play"></i>
    live demo</a></div>

## Installation

First you need to install map module dependencies (leaflet and plugin libraries):

```bash
npm install leaflet@1.0.1 leaflet-providers@1.1.16 leaflet-draw@0.3.2 dragula@3.7.2 ng2-dragula@1.2.2-0 --save
```

Do not forget to add typings as well

```bash
typings install leaflet --ambient -DA
```
> Ensure that you have installed 'typings' node module globally with the same version of the one saved into the package.json of the 
application.  
For checking the version : typings -v  
For installing globally: npm install -g typings@0.8.1

After that, install the npm map module:

```bash
npm install ontimize-web-ng2-map --save
```

## Usage

Finally, you can use ontimize-web-ng2-map in your Ontimize Web project.

### Configure third party dependencies and map module (Angular-cli & SystemeJS)

Configure third party dependencies like this:

**system-config.ts**

```bash
const cliSystemConfigPackages: any = {
};
// ontimize map module
cliSystemConfigPackages['ontimize-web-ng2-map'] = { main: 'o-map' };
// third party dependencies
cliSystemConfigPackages['leaflet'] = { main: 'dist/leaflet' };
cliSystemConfigPackages['leaflet-providers'] = { main: 'leaflet-providers', defaultExtension: 'js' };
cliSystemConfigPackages['leaflet-draw'] = { main: 'dist/leaflet.draw' };
cliSystemConfigPackages['ng2-dragula'] = { main: 'ng2-dragula', defaultExtension: 'js' };
cliSystemConfigPackages['dragula'] = { main: 'dragula', defaultExtension: 'js' };
cliSystemConfigPackages['contra'] = { main: 'contra', defaultExtension: 'js' };
cliSystemConfigPackages['atoa'] = { main: 'atoa', defaultExtension: 'js' };
cliSystemConfigPackages['ticky'] = { main: 'ticky', defaultExtension: 'js' };
cliSystemConfigPackages['crossvent'] = { main: 'crossvent', defaultExtension: 'js' };
cliSystemConfigPackages['custom-event'] = { main: 'index', defaultExtension: 'js' };

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    ...

    'ontimize-web-ng2-map': 'vendor/ontimize-web-ng2-map',

    'leaflet': 'vendor/leaflet',
    'leaflet-providers': 'vendor/leaflet-providers',
    'leaflet-draw': 'vendor/leaflet-draw',
    'ng2-dragula': 'vendor/ng2-dragula',
    'dragula': 'vendor/dragula',
    'contra': 'vendor/contra',
    'atoa': 'vendor/atoa',
    'ticky': 'vendor/ticky',
    'crossvent': 'vendor/crossvent/src',
    'custom-event': 'vendor/custom-event'
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

      'ontimize-web-ng2-map/*.js',
      'ontimize-web-ng2-map/src/**/*.js',

      'leaflet/**/*.js',
      'leaflet-providers/**/*.js',
      'leaflet-draw/**/*.js',
      'ng2-dragula/**/*.js',
      'dragula/*.js',
      'contra/*.js',
      'atoa/*.js',
      'ticky/*.js',
      'crossvent/src/*.js',
      'custom-event/*.js',

      'ontimize-web-ng2-map/**/*.css',
      'leaflet/**/*.css',
      'leaflet/dist/images/*.*',
      'leaflet-draw/**/*.css'
     ]
  });
};
```

**index.html**
Do not forget to include CSS style sheets

```bash
  <link rel="stylesheet" type="text/css" href="./vendor/leaflet/dist/leaflet.css">
  <link rel="stylesheet" type="text/css" href="./vendor/leaflet-draw/dist/leaflet.draw.css">
  <link rel="stylesheet" type="text/css" href="./vendor/ontimize-web-ng2-map/o-map.css">
```

**app.module.ts**
Include the library map module into your app.

```bash
...
import { OMapModule } from 'ontimize-web-ng2-map/o-map';
...

@NgModule({
  imports: [ ONTIMIZE_MODULES, routing, OMapModule],
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



