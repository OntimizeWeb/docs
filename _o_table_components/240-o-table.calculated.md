---
permalink: /components/table/calculated/
title: "Calculated columns"
---

In this section we are specifing how to define an calculated column.

{% capture tableColumnCapture %}
{% include o-component-single.md comp="tableColumnCalculated" %}
{% endcapture %}
{{ tableColumnCapture | replace: '    ', ''}}


<h3 class="grey-color">Example</h3>

In the following example, two calculated columns are defined that perform the same operation but one uses the operation attribute  *(BALANCExINTERESRATE)* and the other the function *calculateBenefit*.

```html
  <o-table
    service="branches" entity="account" keys="ACCOUNTID"
    columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;BALANCE;STARTDATE;ENDDATE;INTERESRATE;ACCOUNTTYP"
    visible-columns="ENTITYID;OFFICEID;CDID;ANID;ACCOUNTTYP;BALANCE;INTERESRATE;BENEFIT;BENEFIT2"
    attr="accounts" title="ACCOUNTS"
    layout-padding 
    sort-columns="ANID" query-rows="15" pageable="no" >
  
    <o-table-column attr="ENTITYID" title="ENTITYID"></o-table-column>
    <o-table-column attr="CDID" title="CDID"></o-table-column>
    <o-table-column attr="ANID" title="ANID"></o-table-column>
    <o-table-column attr="BALANCE" title="BALANCE" currency-symbol="€" type="currency" grouping="yes" thousand-separator=","> </o-table-column>
    <o-table-column attr="INTERESRATE" title="INTERESRATE" type="percentage" decimal-separator=","></o-table-column> 

  <!--calculated column-->
    <o-table-column-calculated attr="BENEFIT" title="BENEFIT" type="currency" thousand-separator="." decimal-separator="," currency-symbol="€"
      currency-symbol-position="right" operation="(BALANCE*INTERESRATE)" > </o-table-column-calculated>
    <o-table-column-calculated attr="BENEFIT2" title="BENEFIT2"  type="currency" thousand-separator="." decimal-separator="," currency-symbol="€"
      currency-symbol-position="right" [function-operation]="calculateBenefit" > </o-table-column-calculated>

 
  </o-table>
```


<h3 class="grey-color">Typescript code</h3>

```javascript

  ...


  calculateBenefit(rowData: any[]): number {

    return (rowData['BALANCE'] * rowData['INTERESRATE']);
  }

 
```
