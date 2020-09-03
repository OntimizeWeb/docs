---
permalink: /charts/configuration/discretebarchart/
title: "Discrete Bar Chart"
---

{% include base_path %}

## Introduction

You can check a running example of this *Discrete Bar Chart* [here](https://try.imatia.com/ontimizeweb/v8/charts/main/bar-chart/discrete-bar){:target="_blank"}.

### HTML

```html
<o-chart type="discreteBar" x-label="Axis x" y-label="Axis Y" [data]="data" layout-fill></o-chart>
```

### TS

```ts
import { Component, ViewChild, Injector } from '@angular/core';
import { OntimizeService, ChartService } from 'ontimize-web-ngx';
declare var d3: any;

@Component({
  selector: 'discrete-bar',
  templateUrl: './discrete-bar.component.html',
  styleUrls: ['./discrete-bar.component.scss']
})

export class DiscreteBarComponent {

  protected data: Array<Object>;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'MOVEMENTTYPES';

  @ViewChild('discreteBar', {static: false})
  protected discreteBar: OChartComponent;

  constructor() {}

  ngAfterViewInit() {
    // Configuring Ontimize service instance...
    let service: OntimizeService = this.injector.get(OntimizeService);
    /*
    * 'getDefaultServiceConfiguration' method provides session, endpoint,.. data from
    * application configuration object.
    */
    let conf = service.getDefaultServiceConfiguration();
    conf['entity'] = 'EMovementTypes';
    service.configureService(conf);

    // Performing ontimize query...
    let filter = {
      'ACCOUNTID': 7310
    };
    let columns = ['MOVEMENT', 'MOVEMENTTYPES'];
    service.query(filter, columns).subscribe((resp) => {
      // response ok
      if (resp.code === 0) {
        this.adaptResult(resp.data);
      } else {
        alert('Impossible to query data!');
      }
    });

    let chartService: ChartService = this.discreteBar.getChartService();
    let chartOps = chartService.getChartOptions();
    // Configuring x axis...
    chartOps['yAxis']['tickFormat'] = function (d) {
      return d3.format(',f')(d) + '€';
    };

  }

  /**
   * Creates chart data grouping movements by category 'Movement type'
   *  */
  adaptResult(data: Array<any>) {
    if (data && data.length) {
      let values = this.processValues(data);
      // chart data
      this.data = [
        {
          'key': 'Discrete serie',
          'values': values
        }
      ]
    }
  }

  processValues(data: Array<Object> ) : Array<Object> {
    let values = [];
    var self = this;
    data.forEach((item: any, index: number) => {
      let filtered = self.filterCategory(item[self.xAxis], values);
      if (filtered && filtered.length === 0) {
        let val = {
          'x': item[self.xAxis],
          'y': item[self.yAxis]
        };
        values.push(val);
      } else {
        filtered[0]['y'] += item[self.yAxis];
      }
    });
    return values;
  }

  filterCategory(category: string, values: Array<Object>) {
    let filtered = [];
    if (values && values.length) {
      filtered = values.filter((val: Object) => {
        if (val['x'] === category) {
          return true;
        }
      });
    }
    return filtered;
  }

}
```
