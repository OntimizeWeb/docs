---
permalink: /report/installation/
title: "Installation"
layout: default
nav_exclude: true
---

{% include base_path %}

## Installation

```bash
  npm install ontimize-web-ngx-report --save
```

## Usage

### Import the Ontimize Web Report module into your application

Import the `OReportModule ` into the main module of your application.

```javascript
import { OReportModule } from 'ontimize-web-ngx-report';

@NgModule({
  imports: [
    OReportModule ,
    ...
  ],
  declarations: ...
  providers: ...
})
export class AppModule { }
```


###  Configure angular.json dependencies

You must add the module styles definition in your '*.angular.json*' file styles array:

```bash
...
 "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        ...
        "assets": [
          ...
          {
            "glob": "**/*",
            "input": "node_modules/ontimize-web-ngx-report/assets",
            "output": "/assets"
          }
          ...
        ]
      }
      ...
    }
 }
...
```