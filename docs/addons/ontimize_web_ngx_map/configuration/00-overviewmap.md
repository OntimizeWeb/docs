---
permalink: /map/configuration/overview/overview
title: "Overview"
comp: overviewmap
layout: o-component
nav_exclude: true
---

{% include base_path %}
{% include toc %}

## Introduction


The configuration is used to change how the map behaves. There are properties to control the type of map displayed, styling, fonts, the legend, etc.
You can use inputs and outputs to configure your map and to catch events when are triggered.


## Basic Example

This is a basic example of a *Map* using inputs to display data.

*HTML*

```html
<o-map #oMapBasic attr="basic-usage-map" center="42.240599, -8.720727" zoom="11" min-zoom="3" max-zoom="20" zoom-control="yes" search-control="no" fxFlex>
</o-map>
```

In the API tab you can check all inputs and outputs allowed.


## Basic Example with base layers

This is an example of a *Map* with the base layers of the map indicated in the attribute. By default, if none is provided it is used 'OpenStreetMap' base layer.

*HTML*

```html
<o-map #oMapBaseLayers attr="base-layers-map" center="42.240599, -8.720727" zoom="11" min-zoom="3" max-zoom="20"
base-layer-ids="CartoDB.Positron;Esri;OpenStreetMap.HOT;OpenStreetMap.BlackAndWhite" zoom-control="yes" search-control="no" fxFlex>
</o-map>
```

You can check every *map parameter* available for the *o-map* in the API tab section.
