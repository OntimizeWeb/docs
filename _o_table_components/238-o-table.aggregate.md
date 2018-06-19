---
permalink: /components/table/aggregate/
title: "Aggregates"
---
Oftentimes when displaying numbers in the table, users would like to be able to see the results from aggregate calculations at the bottom of the table columns. O-table has support for the mostly used aggregate functions (count,sum,avg,min,max).


<h3 class="grey-color">Example</h3>

```html
<o-table service="branches" entity="account" keys="ACCOUNTID"
    columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;BALANCE;STARTDATE;ENDDATE;INTERESRATE;ACCOUNTTYP"
    visible-columns="ENTITYID;OFFICEID;CDID;ANID;ACCOUNTTYP;BALANCE,INTERESRATE"
    fxFlex layout-padding attr="accounts" title="ACCOUNTS"
    sort-columns="ANID:DESC"  query-on-init="true"
    quick-filter="yes"   filter-case-sensitive="true" >
    <o-table-column attr="BALANCE" title="BALANCE" type="currency" currency-symbol="€" thousand-separator=","></o-table-column>
    <o-table-column attr="INTERESRATE" title="INTERESRATE" type="real" ></o-table-column>
    <o-table-column-aggregate attr="BALANCE" title="sum">
    <o-table-column-aggregate attr="INTERESRATE" [function-aggregate]="custom"></o-table-column-aggregate>
</o-table>
```


<h3 class="grey-color">Typescript code</h3>

```javascript

  ...

  custom(data:any[]):number{
    let result = 0;
    for(var i=0;i<data.length;i++){
      if(i%2==0) result+=data[i];
    }
    return result;
  }
```
