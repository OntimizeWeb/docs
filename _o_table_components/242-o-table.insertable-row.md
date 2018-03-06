---
permalink: /components/table/insertableRow/
title: "Insertable row"
---

In this section we are specifing how to define an insertable row.

{% capture tableInsertableRowCapture %}
{% include o-component-single.md comp="tableInsertableRow" %}
{% endcapture %}
{{ tableInsertableRowCapture | replace: '    ', ''}}


<h3 class="grey-color">Example</h3>

In the following example the table has a insertable row where the user may introduce the name, surname or email for inserting a new customer. Name column is required.

```html
<o-table fxFlex attr="customers" title="CUSTOMERS" service="customers" entity="customer" keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL"
  visible-columns="NAME;SURNAME;STARTDATE;EMAIL;ADDRESS" sort-columns="SURNAME" query-rows="10" quick-filter="yes"
  pageable="no" row-height="medium" select-all-checkbox="true" pagination-controls="yes">

  <o-table-insertable-row columns="NAME;SURNAME;EMAIL" required-columns="NAME"></o-table-insertable-row>

  <o-table-column attr="NAME" title="NAME" orderable="no"></o-table-column>
  <o-table-column attr="STARTDATE" title="STARTDATE" type="date" format="LL"></o-table-column>
</o-table>
```
