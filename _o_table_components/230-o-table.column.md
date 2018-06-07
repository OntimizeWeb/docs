---
permalink: /components/table/column/
title: "Define columns"
---

To define a table, it is necessary to define the columns

They can be defined as follows:
- In the input `columns` separated by ';'.
- Using the `o-table-column` selector. For more information see the API. If *o-table* component contains inner *o-table-column* elements, using renderers and editors defined in them.

With `visible-columns` you can indicate which columns we want to be visible

Using default renderer (*o-table-cell-renderer-string*) if column attr is present in *visible-columns* attribute from its parent *o-table*.
In the same way, using the defualt editor (*o-table-cell-editor-string*) if column attr is contained
in  the *editable-columns* attribute from its parent *o-table*.



<h3 class="grey-color">Example</h3>

```html
<o-table attr="customers" entity="ECustomers" title="CUSTOMERS"
  columns="CUSTOMERID;PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  visible-columns="PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  editable-columns="NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  sort-columns="SURNAME" keys="CUSTOMERID" parent-keys="n:NAME;CUSTOMERTYPEID"
  query-on-init="true" query-rows="6" quick-filter="yes" insert-table="yes">

  <o-table-column attr="PHOTO" orderable="no" searchable="no" type="image"
    image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
  </o-table-column>

  <o-table-column attr="NAME" title="NAME"></o-table-column>

  <o-table-column attr="STARTDATE" title="STARTDATE" type="date"
    format="MM/DD/YYYY HH:mm:ss">
  </o-table-column>

  <o-table-column attr="CUSTOMERTYPEID" title="TYPE" editable="true">
    <o-table-cell-renderer-service entity="ECustomerTypes"
      value-column="CUSTOMERTYPEID"
      columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION">
    </o-table-cell-renderer-service>
    <o-table-cell-editor-combo entity="ECustomerTypes"
      value-column="CUSTOMERTYPEID" separator=" - "
      columns="CUSTOMERTYPEID;DESCRIPTION"
      visible-columns="CUSTOMERTYPEID;DESCRIPTION">
    </o-table-cell-editor-combo>
  </o-table-column>

  <o-table-column attr="BOOLEAN" title="BOOLEAN" type="boolean"
    true-value-type="string" true-value="YES"
    false-value-type="icon" false-value="not_interested">
  </o-table-column>

  <o-table-column attr="INTEGER" title="INTEGER" type="integer" grouping="yes"
    thousand-separator=".">
  </o-table-column>

  <o-table-column attr="REAL" title="REAL" type="real" grouping="yes"
    thousand-separator="." decimal-separator="," decimal-digits="4">
  </o-table-column>

  <o-table-column attr="CURRENCY" title="CURRENCY" type="currency"
    currency-symbol="€" currency-symbol-position="right" grouping="yes"
    thousand-separator="." decimal-separator="," decimal-digits="2">
  </o-table-column>

</o-table>
```


