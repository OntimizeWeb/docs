---
permalink: /components/table/options/
title: "Data binding"
---

The o-table component supports data binding and you can command the component to display data either from *local* or *remote* data storage

## Binding to local data

For local data binding you simply need to supply an array of Typpescript objects/JSON via the `static-data` property. Adicional, you need to set `query-on-init="false"` in `o-table` component.

<h3 class="grey-color">Example</h3>

```html
<o-table fxFill #table attr="accounts" columns="CARDID;CARDTYPE;NUMCARD;TOTALCREDIT;TOTALREADY;BALANCE" visible-columns="NUMCARD;TOTALCREDIT;TOTALREADY;BALANCE"  layout-padding title="ACCOUNTS" [static-data]="getTableData()" sort-columns="ACCOUNT:DESC" query-on-init="false" quick-filter="yes"
      insert-button="no" delete-button="no" refresh-button="no" pagination-controls="no" export-button="no">
      <o-table-columns-filter columns="NUMCARD;TOTALCREDIT;TOTALREADY;BALANCE"></o-table-columns-filter>
      <o-table-column attr="NUMCARD" title="NUMCARD">
        <o-table-column-renderer-cardtype></o-table-column-renderer-cardtype>
      </o-table-column>
      <o-table-column attr="TOTALCREDIT" type="currency" title="TOTALCREDIT" thousand-separator="." decimal-separator="," currency-symbol="€"
        currency-symbol-position="right"></o-table-column>
      <o-table-column attr="TOTALREADY" title="TOTALREADY">
        <o-table-column-renderer-totalready></o-table-column-renderer-totalready>
      </o-table-column>
      <o-table-column attr="BALANCE" title="BALANCE">
        <o-table-column-renderer-balance></o-table-column-renderer-balance>
      </o-table-column>
</o-table>
```

```javascript
getTableData(){
  const account =  [
    { PRODUCTID: 1, 'PRODUCTNAME': 'Alice Mutton', UNITPRICE: 39, UNITSINORDER: 0, UNITSINSTOCK: 1 },
    { PRODUCTID: 2, 'PRODUCTNAME': 'Gorgonzola Telino', UNITPRICE: 12.5, UNITSINORDER: 70, UNITSINSTOCK: 2 },
    { PRODUCTID: 3, 'PRODUCTNAME': 'Louisiana Hot Spiced Okra', UNITPRICE: 17, UNITSINORDER: 100, UNITSINSTOCK: 4 },
    { PRODUCTID: 4, 'PRODUCTNAME': 'Sir Rodney Scones', UNITPRICE: 10, UNITSINORDER: 40, UNITSINSTOCK: 3 },
    { PRODUCTID: 5, 'PRODUCTNAME': 'Alice Mutton', UNITPRICE: 39, UNITSINORDER: 0, UNITSINSTOCK: 0 }
    ];
    return account;
}
```

If you need the data query to be performed after the `parent-keys` is updated, `query-on-init = false` and `query-on-bind = true` must be changed

## Binding to remote data 

To manage server data, it is necessary to configure the `service` and the `entity` attributes. You may need configure the `service-type` attribute in case you don't use the default **OntimizeWebService** to manage. For more information see in [App configuration ]({{ base_path }}/guide/appconfig/){:target="_blank"}. 

<h3 class="grey-color">Example</h3>

```html
<o-table fxFlex attr="customers" title="CUSTOMERS" service="customers" entity="customer" 
keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL" visible-columns="PHOTO;NAME;SURNAME;STARTDATE;EMAIL;ADDRESS" sort-columns="SURNAME" query-rows="10" quick-filter="yes" row-height="medium" select-all-checkbox="true">
  <o-table-columns-filter columns="STARTDATE;SURNAME"></o-table-columns-filter>
  <o-table-column async-load="true" width="48px" attr="PHOTO" orderable="no" searchable="no" type="image" image-type="base64"
    empty-image="assets/images/no-image.png" avatar="yes">
  </o-table-column>
  <o-table-column attr="NAME" title="NAME" orderable="no"></o-table-column>
  <o-table-column attr="STARTDATE" title="STARTDATE" type="date" format="LL"></o-table-column>
</o-table>
```

You can configure the methods by default with the `ìnsert-method`,`update-method`,`deleted-method`




