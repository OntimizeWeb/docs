---
title: "Report store"
permalink: /addons/report/components/report-store/jsonapi
layout: default
parent: Report store
grand_parent: Report
nav_order: 4
---
# Introduction
The *Report Store** system will allow you to store, manage and export all kinds of reports designed and implemented via the JasperReports API. This module will let you use your Ontimize application data as data sources for your reports, allowing you to fully customize its layout with tables, charts, graphs… and also visualize, export, print and download your reports.


# Previous concepts
* Report: It is the generic representation of a report. One report can have one or multiple custom report parameters, or have none.
* Main report file: The file containing all the information regarding the report layout, along with the data sources, connections and other configuration directives. Written in .jrxml format.
* Report parameter: It is the generic representation of a custom report parameter. They are used for defining filters, implementing pagination, or even specifying the report data source.

# Steps
```ts
 {
    "REPORTUUID": string
    "REPORTNAME": string
    "REPORTTYPE": string
    "REPORTDESCRIPTION": string
    "REPORTFILENAME":string

  };
  {
    REPORTPARAMETERID:number, INTEGER PRIMARY KEY AUTOINCREMENT,
    REPORTPARAMETERNAME:string,
    REPORTPARAMETERDESCRIPTION: string,
    REPORTPARAMETERNESTEDTYPE: string,
    REPORTPARAMETERVALUECLASS: string,
    REPORTUUID:string
  }


