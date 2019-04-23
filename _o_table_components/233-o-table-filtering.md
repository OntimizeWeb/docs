---
permalink: /components/table/options/
title: "Filtering"
---
{% include base_path %}


By default the filtering is *local*, you can enable *remote* filtering setting `pageable="yes"`.

## Quick filter.

This option is enabled by default, the filter is visible in the top right. You can disable it setting `quick-filter="no"`.

You can also configure filtering to be case sensitive with `filter-case-sensitive="yes"`. By default, it's disabled.

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

## Custom filter

**OntimizeWeb** allows to customize the table data filtering by building your own filters. You can build complex filtering structures by adding the [`o-filter-builder`]({{ base_path }}/components/filterbuilder/){:target='_blank'} component to you application.

The `o-filter-builder` component uses the `IExpression` inserface that represents a filtering expression. You can read more about how to build complex filtering expressions [here]({{ base_path }}/guide/filterexpression/){:target='_blank'}.
