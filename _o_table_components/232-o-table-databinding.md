---
permalink: /components/table/options/
title: "Data binding"
---

The o-table component supports data binding and you can command the component to display data either from *local* or *remote* data storage

## Binding to local data

For local data binding you simply need to supply an array of Typpescript objects/JSON via the `static-data` property. Adicional, you need to set `query-on-init="false"` in `o-table` component.

If you need the data query to be performed after the `parent-keys` is updated, `query-on-init = false` and `query-on-bind = true` must be changed

## Binding to remote data 

To manage server data, it is necessary to configure the `service` and the `entity` attributes. You may need configure the `service-type` attribute in case you don't use the default **OntimizeWebService** to manage.

You can configure the methods by default with the `ìnsert-method`,`update-method`,`deleted-method`





