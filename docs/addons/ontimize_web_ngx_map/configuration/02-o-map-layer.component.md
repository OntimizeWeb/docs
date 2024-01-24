---
permalink: /addons/map/layer/overview
title: "Layer"
comp: omaplayer
layout: o-component
parent: Map
grand_parent: Addons
nav_order: 5
---


## Introduction


The component *o-map-layer* is used to add a new layer to the map.


## Basic Example

This is a basic example of a *Map* using the component *o-map-layer* inside to create a new marker.
You can check a working example of *o-map-layer* component [here](https://try.imatia.com/ontimizeweb/v15/map/main/marker)

*HTML*

```html
<o-map #oMapMarker center="42.940599, -7.120727" zoom="8" min-zoom="3" max-zoom="20"
zoom-control="yes" search-control="no" layer-panel-visible="no" fxFlex>
    <o-map-layer layer-type="marker" layer-id="office_marker" layer-center="42.240599;-8.720727" layer-menu-label="Office headquarters" layer-menu-label-secondary="Location of office headquarters"></o-map-layer>
</o-map>

```

In the API tab you can check all inputs and outputs allowed.
