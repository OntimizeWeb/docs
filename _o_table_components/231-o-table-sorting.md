---
permalink: /components/table/paginator/
title: "Sorting"
---

Since this functionality is built-in, all you have to do is to set the sorting configuration via `sort-columns` input in the selector `o-table` using [ ASC or DESC ] format.

By default, *all columns are searchable*, if you don't want to used a column as searchable you add  `orderable= "no"` in this columns.


<h3 class="grey-color">Example</h3>

```html
<o-table attr="customers" entity="ECustomers" keys="CUSTOMERID" sort-columns="SURNAME:DESC"
  columns="CUSTOMERID;PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  visible-columns="PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  query-on-init="true" query-rows="6" quick-filter="yes" insert-table="yes">
...
  <o-table-column attr="SURNAME" orderable="yes" searchable="no" type="string">
  </o-table-column>
</o-table>
```
