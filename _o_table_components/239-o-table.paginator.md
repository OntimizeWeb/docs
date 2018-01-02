---
permalink: /components/table/paginator/
title: "Table paginator"
---

In this section we are specifing how to define a paginator for the table.

{% capture paginatorFileCapture %}
  {% include o-component-single.md comp="tablePaginator"  %}
{% endcapture %}
{{ paginatorFileCapture | replace: '    ', ''}}


<h3 class="grey-color">Example</h3>

```html
<o-table attr="customers" entity="ECustomers" title="CUSTOMERS"
  columns="CUSTOMERID;PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  visible-columns="PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  sort-columns="SURNAME" keys="CUSTOMERID" parent-keys="n:NAME;CUSTOMERTYPEID"
  query-on-init="true" query-rows="6" quick-filter="yes" >

  <o-table-button label="My button" icon="account_circle"></o-table-button>

  <o-table-column attr="NAME" title="NAME"></o-table-column>

  ...
  <o-table-paginator page-size="20"></o-table-paginator>
</o-table>
```
