---
permalink: /map/configuration/o-geojson-layer/overview
title: "GeoJson Layer"
layout: default
parent: Map
grand_parent: Addons
nav_order: 7
---


## Introduction


You can add multiple WMS layers to your map.


## Basic Example

This is a basic example of a *Map* using the component *o-map-layer* inside to add new GeoJson layers to the map.
You can check a working example of GeoJson layers [here](https://try.imatia.com/ontimizeweb/v15/map/main/geojson)

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
*Providers*
```ts
  /*configure provide*/
  { provide: 'geojson-train-lines', useClass: GeoServerService, deps: [Injector] },
  { provide: 'geojson-train-stations', useClass: GeoServerService, deps: [Injector] },
  { provide: 'geojson-municipality', useClass: GeoServerService, deps: [Injector]
```

*GeoServerService*
```ts
import { Injector } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { APP_CONFIG, Config } from 'ontimize-web-ngx';
import { IFeature, IGeoJSONLayerService, LayerConfiguration } from 'ontimize-web-ngx-map';
import { Observable, Observer } from 'rxjs';
import { map, share } from 'rxjs/operators';

export class GeoServerService implements IGeoJSONLayerService {

  private dataObservable: Observable<IFeature[]>;
  private innerObserver: Observer<IFeature[]>;
  public dataStore: {
    features: IFeature[];
  };

  public test: string;

  private appConfig: Config;
  private http: Http;

  constructor(
    protected injector: Injector
  ) {
    this.http = this.injector.get(Http);
    this.appConfig = this.injector.get(APP_CONFIG);

    this.dataStore = { features: [] };

    this.test = new Date().toISOString();
  }

  public load(ctxt: [LayerConfiguration]): Observable<IFeature[]> {
    let [layerConf] = ctxt;

    this.dataObservable = new Observable<IFeature[]>(observer =>
      this.innerObserver = observer
    ).pipe(share());

    this.loadFeaturesFrom(
      this.initHeaders(),
      this.getBaseUrl(layerConf)
    );

    return this.dataObservable;
  }

  public getBaseUrl(layerConf: LayerConfiguration): string {
    let baseUrl = './assets/dummy-data/';
    return baseUrl + layerConf.type + '/' + layerConf.layerId + '.json';
  }

  private loadFeaturesFrom(headers: Headers, url: string) {
    this.http.get(url, { headers: headers })
      .pipe(map(response => response.json()))
      .subscribe(data => {

        let features = data.features;
        if (features) {
          // Filtering features to show only Galician features...
          features.forEach((feature: any, index: number) => {
            if (feature && feature.geometry) {
              let type = feature.geometry.type;
              if (type === 'MultiPoint') {
                let coordX = feature.geometry.coordinates[0][0];
                let coordY = feature.geometry.coordinates[0][1];
                if (coordX <= -6.0 && coordX >= -10.0
                  && coordY >= 41.75) {
                  this.dataStore.features.push(feature);
                }
              } else if (type === 'MultiLineString') {
                let coordX = feature.geometry.coordinates[0][0][0];
                let coordY = feature.geometry.coordinates[0][0][1];
                if (coordX <= -6.0 && coordX >= -10.0
                  && coordY >= 41.75) {
                  this.dataStore.features.push(feature);
                }
              } else {
                this.dataStore.features.push(feature);
              }
            }
          });
        }

        // this.dataStore.features = data.features;
        this.innerObserver.next(this.dataStore.features);
      }, error => console.log('Could not load features.'));
  }

  private initHeaders(): Headers {
    var headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    return headers;
  }

}
```


![Map Draw Controls]({{ "/assets/images/map/geojson.png" | absolute_url }}){: .comp-example-img }
