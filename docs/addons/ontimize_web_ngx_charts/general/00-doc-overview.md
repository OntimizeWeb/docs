---
title: "Overview"
permalink: /charts/overview/
layout: default
parent: Charts
grand_parent: Addons
nav_order: 1
---
{% include base_path %}
{% include toc %}

## Introduction

The **Ontimize Web Charts** is an implementation of the [swimlane ngx-charts](https://www.npmjs.com/package/@swimlane/ngx-charts){:target="_blank"} library integrated with [OntimizeWeb](https://github.com/OntimizeWeb/ontimize-web-ngx/tree/18.x.x){:target="_blank"}.

From version **18.0.0**, the library requires `ontimize-web-ngx ^18.0.0-next.0`, Angular `^18.2.0` and `luxon ^3.4.0`. Both `OChartComponent` and `OChartOnDemandComponent` are now **standalone**. See the [installation guide]({{ base_path }}/charts/installation/) for details.

Below you can see a list with all available chart types:

* **Line Charts**
    * [Line Chart]({{ base_path }}/addons/charts/linechart/overview)

* **Bar Charts**
    * [Discrete Bar Chart]({{ base_path }}/addons/charts/discretebarchart/overview)
    * [Multi Bar Chart]({{ base_path }}/addons/charts/multibarchart/overview)
    * Multi Bar Horizontal Chart

* **Area Charts**
    * Stacked Area Chart

* **Other Charts**
    * [Donut Chart]({{ base_path }}/addons/charts/donutchart/overview)
    * [Pie Chart]({{ base_path }}/addons/charts/piechart/overview)


You can check running examples of each chart type [here](https://try.imatia.com/ontimizeweb/v18/charts/main/home){:target="_blank"}.