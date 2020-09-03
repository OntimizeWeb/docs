---
permalink: /charts/configuration/piechart/
title: "Pie Chart"
---

{% include base_path %}

## Introduction

You can check a running example of this *Pie Chart* [here](https://try.imatia.com/ontimizeweb/v8/charts/main/other-charts/pie){:target="_blank"}.

### HTML

```html
<o-chart type="pie" layout-fill entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES" y-axis="MOVEMENT" [chart-parameters]="chartParameters"></o-chart>
```

### TS

```ts
import { Component } from '@angular/core';
import { PieChartConfiguration } from 'ontimize-web-ngx-charts'

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html'
})

export class PieComponent{
  chartParameters: PieChartConfiguration;

  constructor() {
    this.chartParameters = new PieChartConfiguration();
    this.chartParameters.cornerRadius = 20;
    this.chartParameters.legendPosition = "bottom";
    this.chartParameters.labelType = "value";
  }
}
```
