---
permalink: /charts/configuration/piechart/overview
title: "Pie Chart"
comp: piechart
layout: o-component
nav_exclude: true
---

{% include base_path %}


## Introduction

You can check a running example of this *Pie Chart* [here](https://try.imatia.com/ontimizeweb/v8/charts/main/other-charts/pie){:target="_blank"}.

All chart parameters for the *Pie Chart* can be checked in the API tab.


## Basic Example

*HTML*

```html
<o-chart type="pie" layout-fill entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES" y-axis="MOVEMENT"></o-chart>
```


## Custom Configuration Example

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


## Custom Service Example

*HTML*

```html
<o-chart #pieChart type="pie" [data]="data" layout-fill></o-chart>
```

*TS*

```ts
import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html'
})
export class PieComponent  {
  protected data: Array<Object>;

  constructor(protected http: Http) { }


  ngAfterViewInit() {
    this.loadJSONData().subscribe(data => {
      this.data = data;
    })
  }

 protected loadJSONData() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');

    let url = './assets/dummy-data/dummy-pie-data.json';

    var self = this;
    let innerObserver: any;
    let dataObservable = Observable.create(observer =>
      innerObserver = observer).pipe(share());

    this.http
      .get(url, { headers: headers })
      .subscribe(res => {
        let data: any = res;
        self.serviceResponse = JSON.stringify(data, undefined, 2);
        innerObserver.next(data.values);
      }, error => innerObserver.error(error));
    return dataObservable;
  }
}
```
