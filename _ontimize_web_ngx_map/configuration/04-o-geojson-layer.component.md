---
permalink: /map/configuration/o-geojson-layer/overview
title: "GeoJson Layer"
layout: o-component

---


## Introduction


You can add multiple WMS layers to your map.


## Basic Example

This is a basic example of a *Map* using the component *o-map-layer* inside to add new WMS layers to the map.
You can check a working example of GeoJson layers [here](https://try.imatia.com/ontimizeweb/v8/map/main/geojson)

*HTML*

```html
<o-map #oMapGeoJSON center="42.940599, -7.120727" zoom="8" min-zoom="3" max-zoom="20"
zoom-control="yes" search-control="no" layer-panel-visible="no" fxFlex>
  <o-map-layer layer-type="geoJSON" layer-service="geojson-train-lines" layer-id="train-lines"
    layer-menu-label="Train lines" layer-menu-label-secondary="Spain's' train lines.">
  </o-map-layer>
  <o-map-layer layer-type="geoJSON" layer-service="geojson-train-stations" layer-id="train-stations"
    layer-menu-label="Train stations" layer-menu-label-secondary="Spain's train stations.">
  </o-map-layer>
  <o-map-layer layer-type="geoJSON" layer-service="geojson-municipality" layer-id="municipality"
    layer-menu-label="Municipality" layer-menu-label-secondary="Pontevedra's municipalities"
    [layer-options]="getTrainLinesLayerStyle()">
  </o-map-layer>
</o-map>
```

*TYPESCRIPT*

```ts
import { Component, OnInit } from '@angular/core';
import { OMapLayerOptions } from 'ontimize-web-ngx-map';

@Component({
  selector: 'geojson-layer',
  templateUrl: './geojson-layer.component.html'
})
export class GeoJSONLayerComponent implements OnInit {

  public trainLinesStyle: OMapLayerOptions;
  constructor() { }


  ngOnInit(): void {
    this.trainLinesStyle = {
      layerStyles: {
        'color': '#388E3C',
        'weight': 2,
        'opacity': 0.65
      }
    };
  }

  getTrainLinesLayerStyle() {
    return this.trainLinesStyle;
  }

}
```

In the API tab you can check all inputs and outputs allowed.
