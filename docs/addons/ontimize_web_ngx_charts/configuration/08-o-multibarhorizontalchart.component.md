---
permalink: /addons/charts/multibarhorizontalchart/overview
title: "Multi Bar Horizontal Chart"
comp: multibarhorizontalchart
layout: o-component
parent: Charts
grand_parent: Addons
nav_order: 11
---

{% include base_path %}

## Introduction

You can check a running example of this *Multi Bar Horizontal Chart* [here](https://try.imatia.com/ontimizeweb/v15/charts/main/bar-chart/multi-bar-horizontal){:target="_blank"}.

All chart parameters for the *Multi Bar Horizontal Chart* can be checked in the API tab.

## Basic Example

*HTML*

```html
<o-chart type="multiBarHorizontalChart" x-label="Time" y-label="Amount (€)" service="movements" entity="EMovementPercent" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE" x-data-type="time" [color]="colorScheme"></o-chart>
```

## Custom Configuration Example

*HTML*

```html
<o-chart type="multiBarHorizontalChart" x-label="Time" y-label="Amount (€)" service="movements" entity="EMovements" x-axis="DATE_" y-axis="MOVEMENT" [chart-parameters]="chartParameters" x-data-type="time"></o-chart>
```

*TS*

```ts
import { Component } from '@angular/core';
import { StackedAreaChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'multi-bar-horizontal-chart',
  templateUrl: './multibarhorizontalchart.component.html'
})
export class MultiBarHorizontalComponent {
  chartParameters: MultiBarHorizontalChartConfiguration;

  constructor() {
      this.chartParameters = new MultiBarHorizontalChartConfiguration();
      this.chartParameters.showLegend = false;
      this.chartParameters.interactive = false;
      this.chartParameters.useInteractiveGuideline = false;
  }
}
```
