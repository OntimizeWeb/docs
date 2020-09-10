---
permalink: /charts/configuration/multibarchart/
title: "Multi Bar Chart"
comp: multibarchart
layout: o-component
---

{% include base_path %}

## Introduction

You can check a running example of this *Multi Bar Chart* [here](https://try.imatia.com/ontimizeweb/v8/charts/main/bar-chart/multi-bar){:target="_blank"}.

All chart parameters for the *Multi Bar Chart* can be checked in the API tab or in the [official documentation](https://nvd3-community.github.io/nvd3/examples/documentation.html#multiBarChart){:target="_blank"}.

## Basic Example

*HTML*

```html
<o-chart type="multiBar" x-label="Time" y-label="Amount (€)" layout-fill entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE" x-data-type="time"></o-chart>
```


## Custom Configuration Example

*HTML*

```html
<o-chart #multiBar type="multiBar" x-label="Time" y-label="Amount (€)" [data]="data" x-data-type="time" layout-fill></o-chart>
```

*TS*

```ts
import { Component, Injector, ViewChild } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { OChartComponent, ChartService } from 'ontimize-web-ngx-charts';

declare var d3: any;
@Component({
  selector: 'multi-bar',
  templateUrl: './multi-bar.component.html'
})
export class MultiBarComponent {

  @ViewChild('multiBar', {static: false})
  protected multiBar: OChartComponent;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'DATE_';

  protected data: Array<Object>;

  constructor(protected injector: Injector) {  }


  ngAfterViewInit() {

    if (this.multiBar) {
      let chartService: ChartService = this.multiBar.getChartService();
      if (chartService) {
        let chartOps = chartService.getChartOptions();

        // Configuring x axis...
        chartOps['xAxis']['tickFormat'] =
          function (d) {
            return d3.time.format('%d/%m/%y')(new Date(d));
          };
          chartOps['yAxis']['tickFormat'] = function (d) {
            return d3.format(',f')(d) + '€';
          };


        // Configuring y axis...
        var yScale = d3.scale.linear();
        chartOps['yScale'] = yScale;
        chartOps['yDomain'] = [-1000, 6000];
      }
    }

    // Ontimize service query...
    let service: OntimizeService = this.injector.get(OntimizeService);
    let conf = service.getDefaultServiceConfiguration();
    conf['entity'] = 'EMovements';
    service.configureService(conf);

    let filter = {
      'ACCOUNTID': 7310
    }
    service.query(filter, []).subscribe((resp) => {
      if (resp.code === 0) {
        this.adaptResult(resp.data);
      }
    });
  }

  adaptResult(data: Array<any>) {
    if (data && data.length) {
      let values = this.processValues(data);
      this.data = [
        {
          'key': 'Movement',
          'values': values['movement'],
          'color': '#3498db'
        },
        {
          'key': 'Average Balance',
          'values': values['average'],
          'color': '#e74c3c'
        },
        {
          'key': 'Total Balance',
          'values': values['total'],
          'color': '#f9c922'
        }
      ];
    }
  }

  processValues(data: Array<Object>): Object {
    let values = {
      'movement': [],
      'average': [],
      'total': []
    };
    var self = this;
    let balance = 0.0;
    let average = 0.0;
    data.forEach((item: any, index: number) => {
      let val = {
        'x': item[self.xAxis],
        'y': item[self.yAxis]
      };

      balance += val.y;
      let val2 = {
        'x': val.x,
        'y': balance
      };

      average += balance;
      let val3 = {
        'x': val.x,
        'y': (average / (index + 1))
      };

      values['movement'].push(val);
      values['average'].push(val3);
      values['total'].push(val2);
    });
    return values;
  }
}
```

*JSON* (Custom Data)

```json
[
  {
    "key": "Movement",
    "values": [
      {
        "x": 1235490657851,
        "y": 951
      },
      {
        "x": 1236110357961,
        "y": -80
      },
      {
        "x": 1236402213822,
        "y": 653
      },
      {
        "x": 1236611284898,
        "y": -548
      },
      {
        "x": 1242673437363,
        "y": -949
      },
      {
        "x": 1245260962425,
        "y": 552
      },
      {
        "x": 1246875825338,
        "y": 432
      },
      {
        "x": 1254322811810,
        "y": 1756
      },
      {
        "x": 1254388791367,
        "y": -169
      },
      {
        "x": 1255948329905,
        "y": -23
      }
    ]
  },
  {
    "key": "Average Balance",
    "values": [
      {
        "x": 1235490657851,
        "y": 951
      },
      {
        "x": 1236110357961,
        "y": 911
      },
      {
        "x": 1236402213822,
        "y": 1115.3333333333333
      },
      {
        "x": 1236611284898,
        "y": 1080.5
      },
      {
        "x": 1242673437363,
        "y": 869.8
      },
      {
        "x": 1245260962425,
        "y": 821.3333333333334
      },
      {
        "x": 1246875825338,
        "y": 848.4285714285714
      },
      {
        "x": 1254322811810,
        "y": 1088.25
      },
      {
        "x": 1254388791367,
        "y": 1256
      },
      {
        "x": 1255948329905,
        "y": 1387.9
      }
    ]
  },
  {
    "key": "Total Balance",
    "values": [
      {
        "x": 1235490657851,
        "y": 951
      },
      {
        "x": 1236110357961,
        "y": 871
      },
      {
        "x": 1236402213822,
        "y": 1524
      },
      {
        "x": 1236611284898,
        "y": 976
      },
      {
        "x": 1242673437363,
        "y": 27
      },
      {
        "x": 1245260962425,
        "y": 579
      },
      {
        "x": 1246875825338,
        "y": 1011
      },
      {
        "x": 1254322811810,
        "y": 2767
      },
      {
        "x": 1254388791367,
        "y": 2598
      },
      {
        "x": 1255948329905,
        "y": 2575
      }
    ]
  }
]
```