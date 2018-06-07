---
permalink: /components/table/options/
title: "Filtering"
---

By default the filtering is *local*, you can be enabled filtering *remote* with `pageable="yes"`.

## Quick filter.

By default this option is enabled, the filter is visible in the top right. You can be disabled with `quick-filter="no"` property.

You can also configure filtering to be case sensitive with `filter-case-sensitive="no"`. By default, It is disabled

Additionally, you can specify default filter function to be applied when the user enters value in the filter textbox in `quick-filter-function` property.



## Filtering by columns 

It is posible to configure filtering by columns with `o-table-columns-filter` selector adding filterable columns separated by ‘;’ in `columns` property. 


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