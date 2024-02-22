---
title: "Report on-demand"
permalink: /addons/report/components/report-on-demand/overview
layout: default
parent: Report
grand_parent: Addons
nav_order: 4
---
## Introduction

The module **Ontimize Web Report on-demand** allow the final users of the applications developed with Ontimize to define, view and store reports from any table available in the application.

This visual tool will allow users to define parameters of the report such as:

1.- Title and subtitle

2.- Orientation (vertical or horizontal)

3.- Style (draw grid, row numbers, column names, background on odd rows, hide group details, group in page and first group in page)

4.- Columns to print (allowing to order them and select for each column a title, a width and an alignment)

5.- Order by (allows sorting of report rows)

6.- Groups (allow grouping by columns)

7.- Functions (allows to perform functions on numerical values ​​(maximum, minimum, sum and average) and the total function)

8.- Preferences (allows to save a configuration, apply an existing one or update it)

{: .note}
>Remember to complete the steps you need to perform on your backend server to complete the report on-demand configuration following this [link](https://ontimize.github.io/ontimize-boot/basics/reports/report-on-demand){:target="_blank"}

>**IMPORTANT:** In the case of dates, the reports will take the format of the table but the jasperreport library only accepts the formats of the following table.

| Letter | Date or Time Component | Presentation       | Examples                          |
|--------|------------------------|--------------------|-----------------------------------|
| G      | Era designator         | Text               | AD                                |
| y      | Year                   | Year               | 1996; 96                          |
| M      | Month in year          | Month              | July; Jul; 07                     |
| w      | Week in year           | Number             | 27                                |
| W      | Week in month          | Number             | 2                                 |
| D      | Day in year            | Number             | 189                               |
| d      | Day in month           | Number             | 10                                |
| F      | Day of week in month   | Number             | 2                                 |
| E      | Day in week            | Text               | Tuesday; Tue                      |
| a      | Am/pm marker           | Text               | PM                                |
| H      | Hour in day (0-23)     | Number             | 0                                 |
| k      | Hour in day (1-24)     | Number             | 24                                |
| K      | Hour in am/pm (0-11)   | Number             | 0                                 |
| h      | Hour in am/pm (1-12)   | Number             | 12                                |
| m      | Minute in hour         | Number             | 30                                |
| s      | Second in minute       | Number             | 55                                |
| S      | Millisecond            | Number             | 978                               |
| z      | Time zone              | General time zone  | Pacific Standard Time; PST; GMT-08:00 |
| Z      | Time zone              | RFC 822 time zone  | -0800                             |


| Date and Time Pattern                 | Result                                 |
|---------------------------------------|----------------------------------------|
| `yyyy.MM.dd G 'at' HH:mm:ss z`        | 2001.07.04 AD at 12:08:56 PDT          |
| `EEE, MMM d, ''yy`                    | Wed, Jul 4, '01                        |
| `h:mm a`                              | 12:08 PM                               |
| `hh 'o''clock' a, zzzz`               | 12 o'clock PM, Pacific Daylight Time   |
| `K:mm a, z`                           | 0:08 PM, PDT                           |
| `yyyyy.MMMMM.dd GGG hh:mm aaa`        | 02001.July.04 AD 12:08 PM              |
| `EEE, d MMM yyyy HH:mm:ss Z`          | Wed, 4 Jul 2001 12:08:56 -0700         |
| `yyMMddHHmmssZ`                       | 010704120856-0700                      |
| `yyyy-MM-dd'T'HH:mm:ss.SSSZ`          | 2001-07-04T12:08:56.235-0700           |


## Menu option

![Report on demand menu option]({{ "/assets/images/report/menuOption.PNG" | absolute_url }}){: .comp-example-img}

## Basic example

This basic example shows a report with four columns, title and subtitle

![Report on-demand example ]({{ "/assets/images/report/basicReportOnDemand.PNG" | absolute_url }}){: .comp-example-img}

## Grouping example

This example shows a report with four columns, grouped by one of them (customer type) and ordered by its name. In addition, a style with a background was added in the odd rows.

![Report on-demand grouping example]({{ "/assets/images/report/reportGrouped.PNG" | absolute_url }}){: .comp-example-img}

## Aggregate functions example

This example shows a report with four columns, performing sum and average operations on two of them and showing the total number of rows. A style with row numbers and with a grid in the cells was also added

![Report on-demand aggregate functions example ]({{ "/assets/images/report/reportNumericFunctions.PNG" | absolute_url }}){: .comp-example-img}

## Save and load configuration

The example shows the dialog to save a configuration of a report

![Report on-demand save configuration ]({{ "/assets/images/report/saveConfiguration.PNG" | absolute_url }}){: .comp-example-img}


The example shows the dialog to select a previously stored configuration and perform a faster report

![Report on-demand load configuration ]({{ "/assets/images/report/loadConfiguration.PNG" | absolute_url }}){: .comp-example-img}