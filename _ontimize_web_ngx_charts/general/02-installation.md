---
permalink: /chart/installation/
title: "Installation"
---

{% include base_path %}

## Installation

```bash
  npm install ontimize-web-ngx-charts --save
```

## Usage

### Import the File Manager into your application

You can use `ontimize-web-ngx-charts` in your Ontimize Web project.

### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-charts/styles.scss",
  ....
],
...
```

### Import in an application module

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
