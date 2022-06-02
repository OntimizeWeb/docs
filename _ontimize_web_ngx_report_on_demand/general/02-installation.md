---
permalink: /report-on-demand/installation/
title: "Installation"
---

{% include base_path %}

## Installation

```bash
  npm install ontimize-web-ngx-report-on-demand --save
```

## Usage

### Import the Ontimize Web Report on-Demand module into your application

Import the `OReportModule ` into the main module of your application.

```javascript
import { OReportModule } from 'ontimize-web-ngx-keycloak';

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
            "input": "node_modules/ngx-extended-pdf-viewer/assets",
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