---
permalink: /charts/configuration/linebarchart/overview
title: "Line + Bar Chart"
comp: linebarchart
layout: o-component

---

{% include base_path %}

## Introduction

You can check a running example of this *Line + Bar Chart*  [here](https://try.imatia.com/ontimizeweb/v8/charts/main/line-chart/lineplusbar){:target="_blank"}.

All chart parameters for the *Line + Bar Chart* can be checked in the API tab.


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
