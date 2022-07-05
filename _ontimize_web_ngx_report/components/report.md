---
title: "Reports store"
permalink: /report/components/report/overview
---
To add that in your application run a reports with jasper template you have to follow the following steps


1. To add new menu option `Reports` in `src/app/shared/app.menu.config.ts`

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

{:start="2"}
2. In `src/app/main/main-routing.module.ts`, add a route for new report management module p.e with `path` of `reports`

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      ...
      { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportModule) }
      ...
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
```

{:start="3"}
3. Create the new report management module `ReportModule` and import `OReportRoutingModule` module

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OReportModule, OReportRoutingModule } from 'ontimize-web-ngx-report';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OReportRoutingModule,
    OReportModule
  ]
})

export class ReportModule{}
```

{:start="4"}
4. To add/remove/update report

Now you should a new option similar to where you can management the reports

![Report management module ]({{ "/images/report/report_management.png" | absolute_url }}){: .comp-example-img}

When you add a report, you must add a .zip file that contains a .jrxml file.

![New report ]({{ "/images/report/newReportStore.png" | absolute_url }}){: .comp-example-img}

In the report detail view, the report can be generated and if you decide to use the parameters, they will appear in the detail report as an option.

![Detail report ]({{ "/images/report/reportDetailStore.png" | absolute_url }}){: .comp-example-img}

{:start="5"}
5. Add a button and on its click event generate the PDF document. The method `openFillReport` takes as parameter the `UUID`, the parameters values and the filter of the report.

```html
  <o-button (click)="generateReport()" label="Generate report" type="STROKED" icon="description" [matTooltip]="Generate report"></o-button>
```

```ts
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OReportService } from 'ontimize-web-ngx-report';

constructor( private reportService: OReportStoreService) {}
  public id;
  public onFormDataLoaded(data: any): void {
      this.id = data.ACCOUNTID;
  }
  getParameters() {
    const params = {
      'id': this.id
    }
    return params;
  }

  generateReport(){
    const params = this.getParameters();
    this.reportService.openFillReport("e34fd752-8093-4c86-a223-4004bc13ae0f", params, {});
  }
```

| openFillReport  |
| --------------  |
| Generate the stored report     |
| Parameters     |
| reportId: string, parametersValues: object, filter: object       |

