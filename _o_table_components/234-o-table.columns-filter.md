---
permalink: /components/table/columnsfilter/
title: "Columns filter"
---

In this section we are specifing how to define a filter for the table.

{% capture tableColumnsFilters %}
{% include o-component-single.md comp="tableColumnsFilters" %}
{% endcapture %}
{{ tableColumnsFilters | replace: '    ', ''}}

<h3 class="grey-color">Example</h3>

```html
<o-table service="branches" entity="account" keys="ACCOUNTID"
    columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;BALANCE;STARTDATE;ENDDATE;INTERESRATE;ACCOUNTTYP"
    visible-columns="ENTITYID;OFFICEID;CDID;ANID;ACCOUNTTYP;BALANCE,INTERESRATE"
    fxFlex layout-padding attr="accounts" title="ACCOUNTS"
    sort-columns="ANID:DESC"  query-on-init="true"
    quick-filter="yes"   filter-case-sensitive="true" >

    <o-table-columns-filter columns="OFFICEID;ACCOUNTTYP" ></o-table-columns-filter>

    ...

</o-table>
```
