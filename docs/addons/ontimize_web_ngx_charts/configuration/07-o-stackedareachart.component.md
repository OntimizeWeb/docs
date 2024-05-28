---
permalink: /addons/charts/stackedareachart/overview
title: "Stacked Area Chart"
comp: stackedareachart
layout: o-component
parent: Charts
grand_parent: Addons
nav_order: 10
---

{% include base_path %}

## Introduction

You can check a running example of this *Stacked Area Chart* [here](https://try.imatia.com/ontimizeweb/v15/charts/main/area/stackedArea){:target="_blank"}.

All chart parameters for the *Stacked Area Chart* can be checked in the API tab.

## Basic Example

*HTML*

```html
<o-chart type="stackedAreaChart" x-label="Time" y-label="Amount (€)" service="movements" entity="EMovementPercent" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE" x-data-type="time" [color]="colorScheme"></o-chart>
```


## Custom Configuration Example

*HTML*

```html
<o-chart type="stackedAreaChart" x-label="Time" y-label="Amount (€)" service="movements" entity="EMovements" x-axis="DATE_" y-axis="MOVEMENT" [chart-parameters]="chartParameters" x-data-type="time"></o-chart>
```

*TS*

```ts
import { Component } from '@angular/core';
import { StackedAreaChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'stacked-area-chart',
  templateUrl: './stackedareachart.component.html'
})
export class StackedAreaComponent {
  chartParameters: StackedAreaChartConfiguration;

  constructor() {
      this.chartParameters = new StackedAreaChartConfiguration();
      this.chartParameters.showLegend = false;
      this.chartParameters.interactive = false;
      this.chartParameters.useInteractiveGuideline = false;
  }
}
```
