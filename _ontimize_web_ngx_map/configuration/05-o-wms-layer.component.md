---
permalink: /map/configuration/o-wms-layer/overview
title: "WMS Layer"
comp: owmslayer
layout: o-component

---


## Introduction


You can add multiple WMS layers to your map.


## Basic Example

This is a basic example of a *Map* using the component *o-map-layer* inside to add new WMS layers to the map.
You can check a working example of WMS layers [here](https://try.imatia.com/ontimizeweb/v8/map/main/wms)

*HTML*

```html
<o-map #oMapWMS center="40.712784,-74.005941" zoom="10" min-zoom="6" max-zoom="20" base-layer-ids="basemap.nationalmap.gov"
zoom-control="yes" search-control="no" layer-panel-visible="no" fxFlex>
  <o-map-layer layer-type="WMS" layer-id="wms-example-airports" layer-base-url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSHydroCached/MapServer/tile/{z}/{y}/{x}"
    [layer-options]="getWMSLayerOptions()" layer-menu-label="National Hydrography Dataset" layer-menu-label-secondary="USGS The National Map: National Hydrography Dataset.">
  </o-map-layer>
  <o-map-layer layer-type="WMS" layer-id="wms-example-mediumcities" layer-base-url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
  [layer-options]="getWMSLayerOptions()" layer-visible="no" layer-menu-label="National Boundaries Dataset" layer-menu-label-secondary="USGS TNM Topo Base Map.">
  </o-map-layer>

  <o-map-layer layer-type="WMS" layer-id="wms-example-largecities" layer-base-url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}"
  [layer-options]="getWMSLayerOptions()" layer-menu-label="Orthoimagery and US Topo" layer-menu-label-secondary="USGS ImageryTopo.">
  </o-map-layer>
</o-map>
```

*TYPESCRIPT*

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'wms-layer',
  templateUrl: './wms-layer.component.html'
})
export class WMSLayerComponent  {

  constructor(){ }


  getWMSLayerOptions() {
    return {
      "maxZoom": "18",
      "attribution": "<a href='https:usgs.gov'>USGS</a> National Map Data"
    };
  }
```

In the API tab you can check all inputs and outputs allowed.
