---
permalink: /charts/configuration/linechart/
title: "Line Chart"
---

{% include base_path %}

## Introduction

You can check a running example of this *Line Chart* [here](https://try.imatia.com/ontimizeweb/v8/charts/main/line-chart/line){:target="_blank"}.

All chart parameter for the Line Chart are described [here](https://nvd3-community.github.io/nvd3/examples/documentation.html#lineChart){:target="_blank"}.


## Basic Example

*HTML*

```html
<o-chart type="line" x-label="Time" y-label="Amount (€)" entity="EMovements" x-axis="DATE_" y-axis="MOVEMENT" x-data-type="time"></o-chart>
```

## Custom Configuration Example

*HTML*

```html
<o-chart #lineChartBasic type="line" x-label="Time" y-label="Amount (€)" entity="EMovements" x-axis="DATE_" y-axis="MOVEMENT" [chart-parameters]="chartParameters" x-data-type="time"></o-chart>
```

*TS*

```ts
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, LineChartConfiguration, ChartService } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'line',
  templateUrl: './line.component.html'
})
export class LineComponent {
  chartParameters: LineChartConfiguration;

  constructor() {
      this.chartParameters = new LineChartConfiguration();
      this.chartParameters.isArea = [true];
      this.chartParameters.interactive = false;
      this.chartParameters.useInteractiveGuideline = false;
  }
}
```
