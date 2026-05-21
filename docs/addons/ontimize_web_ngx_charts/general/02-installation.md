---
permalink: /charts/installation/
title: "Installation"
layout: default
parent: Charts
grand_parent: Addons
nav_order: 2
---

{% include base_path %}

## Installation


### Step 1 - Install the module

```bash
  npm install ontimize-web-ngx-charts --save
```


### Step 2 - Import in an application module

Include the library chart module into your app in the module where you want to use it.

```bash
...
import { OChartModule } from 'ontimize-web-ngx-charts';
...

@NgModule({
  imports: [
    OChartModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```


### Step 3 - Configure angular.json dependencies

You must add the module styles definition in your '*.angular.json*' file styles array:

```bash
...
"styles": [
  ...
  "node_modules/ontimize-web-ngx-charts/styles.scss",
  ....
],
"assets": [
  ...
{
  "glob": "**/*",
  "input": "node_modules/ontimize-web-ngx-charts/assets",
  "output": "/assets"
},
  ...
]
...
```
