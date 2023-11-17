---
title: "Overview"
permalink: /map/overview/
layout: default
nav_exclude: true
---
{% include base_path %}
{% include toc %}

## Introduction

The **OntimizeWeb** map allows you to manage maps your application like creating markers, managing events, using GeoJson and integrating WMS service, etc.


![Basic map]({{ "/images/map/basic-map.png" | absolute_url }}){: .comp-example-img width='60%'}


## Draw controls
The `o-map` allow to add the draw toolbar into the map with the `o-map-draw-controls` component into `o-map`. You can *catch* events with the `onDrawEvent` output.

```html
<o-map #oMap center="42.940599, -7.120727" zoom="8" min-zoom="3" max-zoom="20" zoom-control="yes" search-control="no"
    layer-panel-visible="no" fxFlex draw-control="no" (onDrawEvent)="addDrawEvent($event)">
    <!-- [crs-configuration]="objeto" -->
    <o-map-crs crs="EPSG4326"></o-map-crs>
    <o-map-draw-controls></o-map-draw-controls>
</o-map>
```

![Map Draw Controls]({{ "/images/map/draw-controls.png" | absolute_url }}){: .comp-example-img }

## Markers

The `o-map` allow to put a custom marker beside tile layers, you can easy create a marker adding `layer-type="marker"` attribute into `o-map-layer`.

```
<o-map #oMapMarker center="42.940599, -7.120727" zoom="8" min-zoom="3" max-zoom="20" zoom-control="yes"
    search-control="no" layer-panel-visible="no" fxFlex>
    <o-map-layer layer-type="marker" layer-id="office_marker" layer-center="42.240599;-8.720727" layer-menu-label="Office headquarters "
    layer-menu-label-secondary="Location of office headquarters"></o-map-layer>
</o-map>
```


![Adding Marker]({{ "/images/map/map-marker.png" | absolute_url }}){: .comp-example-img }

## Using GeoJSON

GeoJSON is becoming a very popular data format among many GIS technologies and services and the `o-map` allow to create and interact with map vectors created from GeoJSON objects adding `layer-type="geoJSON"` and configuring the service in `layer-service` attribute.

```
<o-map #oMapGeoJSON center="42.940599, -7.120727" zoom="8" min-zoom="3" max-zoom="20" zoom-control="yes"
    search-control="yes" layer-panel-visible="no" fxFlex>
    <o-map-layer layer-type="geoJSON" layer-service="geojson-train-lines" layer-id="train-lines" layer-menu-label="Train lines"
    layer-menu-label-secondary="Spain's' train lines."></o-map-layer>
    <o-map-layer layer-type="geoJSON" layer-service="geojson-train-stations" layer-id="train-stations"
    layer-menu-label="Train stations" layer-menu-label-secondary="Spain's train stations."></o-map-layer>
    <o-map-layer layer-type="geoJSON" layer-service="geojson-municipality" layer-id="municipality" layer-menu-label="Municipality"
    layer-menu-label-secondary="Pontevedra's municipalities" [layer-options]="getTrainLinesLayerStyle()"></o-map-layer>
</o-map>
```

```
    /*configure provide*/
    { provide: 'geojson-train-lines', useClass: GeoServerService, deps: [Injector] },
    { provide: 'geojson-train-stations', useClass: GeoServerService, deps: [Injector] },
    { provide: 'geojson-municipality', useClass: GeoServerService, deps: [Injector] }
```

![Map Draw Controls]({{ "/images/map/geojson.png" | absolute_url }}){: .comp-example-img }

## Integrating WMS

To use a WMS service in `o-map`, we can use `o-map-layer` component that provide the base WMS URL with `layer-base-url` and `layer-base-url` attribute specify whatever WMS options you need.

```
 <o-map #oMapWMS center="40.712784,-74.005941" zoom="10" min-zoom="6" max-zoom="20" base-layer-ids="BasemapAT.basemap"
      zoom-control="yes" search-control="yes" layer-panel-visible="no" fxFlex>
      <o-map-layer layer-type="WMS" layer-id="wms-example-airports" layer-base-url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSHydroCached/MapServer/tile/{z}/{y}/{x}"
        [`layer-base-url`]="getWMSLayerOptions()" layer-menu-label="National Hydrography Dataset"
        layer-menu-label-secondary="USGS The National Map: National Hydrography Dataset.">
      </o-map-layer>
      <o-map-layer layer-type="WMS" layer-id="wms-example-mediumcities" layer-base-url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
        [layer-options]="getWMSLayerOptions()" layer-visible="no" layer-menu-label="National Boundaries Dataset"
        layer-menu-label-secondary="USGS TNM Topo Base Map.">
      </o-map-layer>

      <o-map-layer layer-type="WMS" layer-id="wms-example-largecities" layer-base-url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}"
        [layer-options]="getWMSLayerOptions()" layer-menu-label="Orthoimagery and US Topo" layer-menu-label-secondary="USGS ImageryTopo.">
      </o-map-layer>
    </o-map>
```


![Integrating WMS]({{ "/images/map/wms.png" | absolute_url }}){: .comp-example-img }
