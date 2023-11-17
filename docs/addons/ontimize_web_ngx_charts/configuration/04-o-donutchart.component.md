---
permalink: /charts/configuration/donutchart/overview
title: "Donut Chart"
comp: donutchart
layout: o-component
nav_exclude: true
---

{% include base_path %}
{% include toc %}

## Introduction

You can check a running example of this *Donut Chart* [here](https://try.imatia.com/ontimizeweb/v8/charts/main/other-charts/donut){:target="_blank"}.

All chart parameters for the *Donut Chart* can be checked in the API tab.


## Basic Example

*HTML*

```html
<o-chart type="donutChart" entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES" y-axis="MOVEMENT" chart-height="400"></o-chart>
```


## Custom Configuration Example

*HTML*

```html
<o-chart type="donutChart" chart-height="400"  entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES" y-axis="MOVEMENT" [chart-parameters]="chartParameters"></o-chart>
```

*TS*

```ts
import { Component, ViewChild} from '@angular/core';
import { OChartComponent, DonutChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'donut',
  templateUrl: './donut.component.html'
})
export class DonutComponent {

  chartParameters: DonutChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new DonutChartConfiguration();
    this.chartParameters.showLabels = false;
    this.chartParameters.cornerRadius = 15;
    this.chartParameters.donutRatio = 0.5;
  }
}
```
