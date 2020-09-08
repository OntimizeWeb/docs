---
permalink: /charts/configuration/linebarchart/
title: "Line + Bar Chart"
---

{% include base_path %}

## Introduction

You can check a running example of this *Line + Bar Chart*  [here](https://try.imatia.com/ontimizeweb/v8/charts/main/line-chart/lineplusbar){:target="_blank"}.

All chart parameter for the Line + Bar Chart are described [here](https://nvd3-community.github.io/nvd3/examples/documentation.html#linePlusBarChart){:target="_blank"}.

## Basic Example

*HTML*

```html
<o-chart type="linePlusBarWithFocusChart" entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;BALANCE" x-data-type="time" [chart-parameters]="chartParameters" chart-height="500"></o-chart>
```

*TS*

```ts
import { Component } from '@angular/core';
import { LinePlusBarFocusChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-lineplusbar',
  templateUrl: './lineplusbar.component.html'
})

export class LineplusbarComponent {

  chartParameters: LinePlusBarFocusChartConfiguration;

  constructor() {
    this.chartParameters = new LinePlusBarFocusChartConfiguration();
    this.chartParameters.bars = [true, false];
  }
}
```

## Custom Configuration Example

*HTML*

```html
<o-chart type="linePlusBarWithFocusChart" entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;BALANCE" x-data-type="time" [chart-parameters]="chartParameters" chart-height="500"></o-chart>
```

*TS*

```ts
import { Component } from '@angular/core';
import { LinePlusBarFocusChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-lineplusbar',
  templateUrl: './lineplusbar.component.html'
})
export class LineplusbarComponent {
  chartParameters: LinePlusBarFocusChartConfiguration;

  constructor() {
    this.chartParameters = new LinePlusBarFocusChartConfiguration();
    this.chartParameters.bars = [ true, false];
    this.chartParameters.to_zero = [true, false];
    this.chartParameters.to_previusValue = [false, true];
    this.chartParameters.colors = ["blue", "red"]
  }
}
```
