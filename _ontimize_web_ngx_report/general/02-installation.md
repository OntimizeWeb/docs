---
permalink: /report/installation/
title: "Installation"
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

### `O_REPORT_DATA_SERVICE`
Use the injection token `O_REPORT_DATA_SERVICE` that can be used to configure the server to generate a report other than the default.

In our example we want the boolean columns to return the values ​​TRUE/FALSE instead of YES/NO

```ts
...
import { CustomOntimizeReportDataProvider } from './shared/custom-report-data-provider.service';
import { O_REPORT_DATA_SERVICE } from 'ontimize-web-ngx-report';

// Defining custom providers (if needed)...
export const customProviders: any = [
  ...
  { provide: O_REPORT_DATA_SERVICE, useValue: CustomOntimizeReportDataProvider }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

```

```ts
import { Injectable, Injector } from '@angular/core';
import { OTableComponent } from 'ontimize-web-ngx';
import { OntimizeReportDataBaseProvider, OReportParam, OReportPreferences } from 'ontimize-web-ngx-report';


@Injectable()
export class CustomOntimizeReportDataProvider extends OntimizeReportDataBaseProvider{

  constructor(
    public injector: Injector
  ) {
    super(injector)
  }

  getReportConfiguration(currentPreference: OReportPreferences, table: OTableComponent): OReportParam {

    let reportParam = super.getReportConfiguration(currentPreference, table);
    reportParam.columns = reportParam.columns.map(col => {
      if (col.columnStyle && col.columnStyle.renderer.type === 'boolean') {
        col.columnStyle.renderer = { "type": "boolean", "renderType": "string", "trueValue": "VERDADERO", "falseValue": "FALSO" };
      }
      return col;
    });
    return reportParam;
  }


```