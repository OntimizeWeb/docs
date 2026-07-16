---
title: "Overview"
permalink: /addons/report/overview/
layout: default
parent: Report
grand_parent: Addons
nav_order: 1
---

{% include base_path %}

## Introduction

The module **Ontimize Web Report**  is a set of reporting tools for web applications based in [OntimizeWeb](https://github.com/OntimizeWeb/ontimize-web-ngx/tree/18.x.x){:target="_blank"}.

From version **18.0.0**, the library requires `ontimize-web-ngx ^18.0.0-next.0`, Angular `^18.2.0`, and `ngx-extended-pdf-viewer ^21.0.0`. All 10 report components are now **standalone**. Icons have migrated from the Ontimize SVG set to **Material Symbols Outlined**.

**Ontimize Web Report** implements reporting with:

* Report **store**: A jasper template can store and be generated from anywhere in the application, for this you have to follow a series of steps listed in this [link]({{ base_path }}/addons/report/components/report-store/overview). Ontimize is version [v6.17.0](https://community.jaspersoft.com/project/jaspersoft-studio/releases){:target="_blank"} compatible

* Report **on-demand**: Allow the final users of the applications developed with Ontimize to define, view and store reports from any table available in the application.
This visual tool will allow users to define parameters of the report such as **title, subtitle, columns to display, styling options, sorting, grouping and data aggregate functions** of the report. With these parameters and the data of the table, this component will dynamically generate the report and present it to the user. In addition, all these settings are stored automatically in database by Ontimize services.

You need to configure your backend server and you can consult the documentation in this [link](https://ontimize.github.io/ontimize-boot/basics/reports/){:target="_blank"}

{: .note}
>What is JasperReports Library?
JasperReports Library is an *open source reporting engine, written entirely in Java*. JasperReports Library is able to use data coming from any kind of data source and produce documents that can viewed, printed, or exported in a variety of document formats, including HTML, PDF, Excel, OpenOffice and Word.

