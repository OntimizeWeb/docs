---
permalink: /charts/configuration/overview/overview
title: "Overview"
comp: overviewchart
layout: o-component
tab: overview
---

{% include base_path %}
{% include toc %}

## Introduction


The configuration is used to change how the chart behaves. There are properties to control the type of chart displayed, styling, fonts, the legend, etc.
You can use inputs and outputs to configure your charts and to catch events when are triggered.


## Basic Example

This is a basic example of a *Line Chart* using inputs to display data.

*HTML*

```html
<o-chart type="line" x-label="Time" y-label="Amount (€)" entity="EMovements" x-axis="DATE_" y-axis="MOVEMENT" x-data-type="time"></o-chart>
```

In the API tab you can check all inputs and outputs allowed.


## Basic Example (Custom Configuration)

This is an example of a *Pie Chart* that shows to use the chart parameters to change the styles, margins, legend and its position, label type etc.

*HTML*

```html
<o-chart type="pie" layout-fill entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES" y-axis="MOVEMENT" [chart-parameters]="chartParameters"></o-chart>
```

*TS*

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

You can check every *chart parameter* available for the *Pie Chart* in the API tab section.


## Basic Example (Custom Data)

This is an example of the *Candlestick Chart* with custom data provided through an Ontimize service.

*HTML*

```html
<o-chart #candlestick type="ohlcBarChart" chart-height="600" x-data-type="time" [chart-parameters]="chartParameters"></o-chart>
```

*TS*

```ts
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, CandlestickChartConfiguration, DataAdapterUtils } from 'ontimize-web-ngx-charts';;

@Component({
  selector: 'app-ohlc',
  templateUrl: './candlestick.component.html'
})
export class CandlestickComponent {

  @ViewChild('candlestick')
  protected candlestick: OChartComponent;

  chartParameters: CandlestickChartConfiguration;

  constructor() { }

  ngAfterViewInit() {
    let data = [
      { "date": 1511111115707, "open": 145.11, "high": 146.15, "low": 144.73, "close": 146.06, },
      { "date": 1511111115708, "open": 145.99, "high": 146.37, "low": 145.34, "close": 145.73 },
      { "date": 1511111115709, "open": 145.97, "high": 146.61, "low": 145.67, "close": 146.37 },
      { "date": 1511111115712, "open": 145.85, "high": 146.11, "low": 145.43, "close": 145.97 },
      { "date": 1511111115713, "open": 145.71, "high": 145.91, "low": 144.98, "close": 145.55 },
      { "date": 1511111115714, "open": 145.87, "high": 146.32, "low": 145.64, "close": 145.92 },
      { "date": 1511111115715, "open": 146.73, "high": 147.09, "low": 145.97, "close": 147.08 },
      { "date": 1511111115716, "open": 147.04, "high": 147.15, "low": 146.61, "close": 147.07 },
      { "date": 1511111115719, "open": 146.89, "high": 147.07, "low": 146.43, "close": 146.97 },
      { "date": 1511111115720, "open": 146.29, "high": 147.21, "low": 146.2, "close": 147.07 },
      { "date": 1511111115721, "open": 146.77, "high": 147.28, "low": 146.61, "close": 147.05 },
      { "date": 1511111115722, "open": 147.7, "high": 148.42, "low": 147.15, "close": 148 },
      { "date": 1511111115723, "open": 147.97, "high": 148.49, "low": 147.43, "close": 148.33 },
      { "date": 1511111115727, "open": 148.33, "high": 149.13, "low": 147.98, "close": 149.1 },
      { "date": 1511111115728, "open": 149.13, "high": 149.5, "low": 148.86, "close": 149.37 },
      { "date": 1511111115729, "open": 149.15, "high": 150.14, "low": 149.01, "close": 149.41 }
    ];

    this.chartParameters = new CandlestickChartConfiguration();
    this.chartParameters.xColumn = 'date';
    this.chartParameters.openAxis = 'open';
    this.chartParameters.highAxis = 'high';
    this.chartParameters.lowAxis = 'low';
    this.chartParameters.closeAxis = 'close';

    DataAdapterUtils.createDataAdapter(this.chartParameters);
    this.candlestick.setDataArray(DataAdapterUtils.adapter.adaptResult(data));
  }
}
```