---
title: "Report store"
permalink: /addons/report/components/report-store/overview
layout: default
parent: Report
grand_parent: Addons
nav_order: 3
---

Report store supports **OntimizeEE** and  **JSON:API** standards.

{: .note}
>Remember, if you are implementing **OntimizeEE**, to complete the steps you need to perform on your backend server to complete the report store configuration following this [link](https://ontimize.github.io/ontimize-boot/basics/reports/report-store){:target="_blank"}

{: .note}
>Additionally, if you are implementing **JSON:API**, ensure your backend is configured accordingly by following the guidelines provided [here]({{ base_path }}/jsonapi){:target="_blank"}

To add that in your application run a reports with jasper template you have to follow the following steps

1. To configure the report store service, you can configure the path in `servicesConfiguration`.
The default path for requests to
* **OntimizeEE** is `/reportstore` ,
* **JSON:API** is `/Report` .

```ts
export const SERVICE_CONFIG =
{
  'reportoarameter': {
    'path': '/ReportParameter'
    },
  'reportstore': {
    'path': '/Report'
    },
  ...
}
```

2. To add new menu option `Reports` in `src/app/shared/app.menu.config.ts`

    ```ts
    ..

    export const MENU_CONFIG: MenuRootItem[] = [
    ...
          {
            id: 'reports',
            name: 'REPORTS',
            tooltip: 'REPORTS_CONTENT',
            route: '/main/reports',
            icon: 'description',
            image: 'assets/images/ic_informes.png'
          }
        ]
      }
    ```

3. In `src/app/main/main-routing.ts`, add a route for the new report management module with `path` of `reports`

    ```ts
    import { Routes } from '@angular/router';

    import { MainComponent } from './main.component';

    export const routes: Routes = [
      {
        path: '', component: MainComponent,
        children: [
          ...
          { path: 'reports', loadChildren: () => import('./reports/reports.routes').then(m => m.REPORT_ROUTES) }
          ...
        ]
      }
    ];
    ```

4. Create the new report routes file `REPORT_ROUTES` and import `OReportRoutingModule`

    ```ts
    import { Routes } from '@angular/router';
    import { OReportModule, OReportRoutingModule } from 'ontimize-web-ngx-report';

    export const REPORT_ROUTES: Routes = OReportRoutingModule.routes;
    ```

5. To add/remove/update report

    Now you should a new option similar to where you can management the reports

    ![Report management module ]({{ "/assets/images/report/report_management.png" | absolute_url }}){: .comp-example-img}

    When you add a report, you must add a .zip file that contains a .jrxml file.

    ![New report ]({{ "/assets/images/report/newReportStore.png" | absolute_url }}){: .comp-example-img}

    In the report detail view, the report can be generated and if you decide to use the parameters, they will appear in the detail report as an option.

    ![Detail report ]({{ "/assets/images/report/reportDetailStore.png" | absolute_url }}){: .comp-example-img}

6. Add a button and on its click event generate the PDF document. The method `openFillReport` takes as parameter the `UUID`, the parameters values and the filter of the report.

    ```html
      <o-button (click)="generateReport()" label="Generate report" type="STROKED" icon="description" [matTooltip]="Generate report"></o-button>
    ```

There is a method called `fillReport` wich have the following parameters:
* uuid: a string representing the unique identifier of the report.
* reportStoreParam: an object of type OReportStoreParam containing the parameters needed to fill the report. This object has two optional properties:
  * filters: an object of type OFilterParameter representing the filters to be applied to the report.
  * parameters: an array of objects of type OReportStoreParamValue containing the values of the report parameters. Each object in this array has the following properties:
    * name: a string representing the name of the parameter.
    * value: the value of the parameter.
    * sqlType: (optional) a number representing the SQL type of the parameter.

```ts
public fillReport(uuid: string, reportStoreParam: OReportStoreParam, entity?: string, _sqltypes?: Object): Observable<any>
```

Code example:

```ts
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OReportService } from 'ontimize-web-ngx-report';

constructor( private reportService: OReportStoreService) {}
  public id;
  public onFormDataLoaded(data: any): void {
      this.id = data.ACCOUNTID;
  }

  getParameters(): Array<OReportStoreParamValue> {
    const params: Array<OReportStoreParamValue> = [
      {
        'name': 'id',
        'value': this.officeId.getValue()
      }
    ];
    return params;
  }

  fillReport(e: Event) {
    this.reportStoreService.openFillReport("1c272846-0693-42c3-b2a3-7f10c611ad6c", this.getParameters());
  }
```
