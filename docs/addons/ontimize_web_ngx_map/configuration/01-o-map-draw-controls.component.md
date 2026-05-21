---
permalink: /addons/map/drawcontrols/overview
title: "Draw controls"
comp: omapdrawcontrols
layout: o-component
parent: Map
grand_parent: Addons
nav_order: 4
---

## Introduction


The component *o-map-draw-controls* is used to show a draw toolbar into the map. You can catch the events triggered with the outputs described in API section.


## Basic Example

This is a basic example of a *Map* using the component *o-map-draw-controls* inside.

*HTML*

```html
<o-map #oMapMarker center="42.940599, -7.120727" zoom="8" min-zoom="3" max-zoom="20" zoom-control="yes"
    search-control="no" layer-panel-visible="no" (onDrawEvent)="addDrawEvent($event)" fxFlex>
    <o-map-crs crs="EPSG4326"></o-map-crs>
    <o-map-draw-controls></o-map-draw-controls>
    <o-map-layer layer-type="marker" layer-id="office_marker" layer-center="42.240599;-8.720727" layer-menu-label="Office headquarters "
    layer-menu-label-secondary="Location of office headquarters"></o-map-layer>
</o-map>
```

*TYPESCRIPT*

```ts
@Component({
  selector: 'map-events',
  templateUrl: './map-events.component.html'
})
export class MapEventsComponent {
  _eventsArray: Array<any> = [];

  @ViewChild('oMap')
  protected oMap: OMapComponent;

  constructor() { }


  ngAfterViewInit() {
    this.getDrawLayer();
  }

  getDrawLayer() {
    console.log(this.oMap.getMapService().getDrawLayer());
  }

  addDrawEvent(arg) {
    this._eventsArray.push(arg);
  }

  get eventsArray(): Array<any> {
    return this._eventsArray;
  }

  set eventsArray(arg: Array<any>) {
    this._eventsArray = arg;
  }
}

```

In the API tab you can check all inputs and outputs allowed.


![Map Draw Controls]({{ "/assets/images/map/draw-controls.png" | absolute_url }}){: .comp-example-img }