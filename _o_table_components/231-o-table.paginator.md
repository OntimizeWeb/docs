---
permalink: /components/table/paginator/
title: "Pagination"
---

By default, the table is paginating  but if you want it not to be, add `pagination-controls= "no"` in `o-table` selector.

You can configure the pagination by adding the selector `o-table-paginator` inside the table. For more information see the API.

Below is an example of how to define a paginator for the table.

<h3 class="grey-color">Example</h3>

```html
<o-table attr="customers" entity="ECustomers" title="CUSTOMERS"
  columns="CUSTOMERID;PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  visible-columns="PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  sort-columns="SURNAME" keys="CUSTOMERID" parent-keys="n:NAME;CUSTOMERTYPEID"
  query-on-init="true" query-rows="6" quick-filter="yes" >

  <o-table-button label="My button" icon="account_circle"></o-table-button>
  <o-table-column attr="NAME" title="NAME"></o-table-column>

  <o-table-paginator page-size="20"></o-table-paginator>
</o-table>
```
