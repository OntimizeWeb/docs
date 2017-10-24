---
permalink: /components/o-table.component/
title: "Table"
comp: table
---

{% include base_path %}


<div class="notice--warning" markdown="1">

**WARNING:** table is storing changes made by user (show/hide columns, order changes, filters, etc.) in the browser local storage. That values will take precedence over table html definition.
For example: if a *ID* column is not in the *visible-columns* attribute but the user has chosen
to display it manually, it will be visible in future loads. For restoring initial state is enough to
delete it *DataTables* entries in browser local storage.

</div>


## Columns

If column attr is present in *visible-columns* attribute from its parent *o-table* directive or 
*o-table* directive contains inner *o-table-column* elements then this data will appear in the content of the table.

{% capture tableColumnCapture %}
{% include o-component-single.md comp="tableColumn" %}
{% endcapture %}
{{ tableColumnCapture | replace: '    ', ''}}



<h3 class="grey-color">Example</h3>

```html
<o-table  service="branches" entity="account" keys="ACCOUNTID" 
    columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;BALANCE;STARTDATE;ENDDATE;INTERESRATE;ACCOUNTTYP"
    visible-columns="ENTITYID;OFFICEID;CDID;ANID;ACCOUNTTYP"
    fxFlex layout-padding attr="accounts" title="ACCOUNTS"
    sort-columns="ANID:DESC"  query-on-init="true" query-rows="15"
    quick-filter="yes" pageable="no"  filter-case-sensitive="true" >

   <o-column attr="ENTITYID" title="ENTITYID" searchable="no"></o-column>
   <o-column attr="OFFICEID" title="OFFICEID" orderable="no"></o-column>
   <o-column attr="CDID" title="CDID" ></o-column>
   <o-column attr="ANID" title="ANID" ></o-column>
</o-table>
```

{% for post in site.o_table_components %}
  {% include archive-single.html %}
{% endfor %}

