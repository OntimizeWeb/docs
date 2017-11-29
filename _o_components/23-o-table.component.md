---
permalink: /components/o-table.component/
title: "Table"
comp: table
---

{% include base_path %}


<div class="notice--warning" markdown="1">

**WARNING:** table is storing changes made by user (order changes, filters, etc.) in the browser local storage. That values will take precedence over table html definition.
For example: if a *ID* column is not in the *sort-columns* attribute but the user has ordered
other column it manually, it will be order in future loads. For restoring initial state is enough to
delete it *com.ontimize.web.quickstart* entries in browser local storage.

</div>

## Table paginator

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


## Table buttons

{% capture tableButtonCapture %}
{% include o-component-single.md comp="tableButton" %}
{% endcapture %}
{{ tableButtonCapture | replace: '    ', ''}}

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

</o-table>
```

<h3 class="grey-color">Typescript code</h3>

```javascript
  ...
  import { OTableButtonComponent } from 'ontimize-web-ngx';
  ...
  @ViewChild('myButton')
  protected myButton: OTableButtonComponent;
  ...
  ngAfterViewInit() {
    this.myButton.click.subscribe(event => {
      alert('my button click');
    });
  }
```

## Table options

{% capture tableOptionCapture %}
{% include o-component-single.md comp="tableOption" %}
{% endcapture %}
{{ tableOptionCapture | replace: '    ', ''}}

<h3 class="grey-color">Example</h3>

```html
<o-table attr="customers" entity="ECustomers" title="CUSTOMERS"
  columns="CUSTOMERID;PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  visible-columns="PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  sort-columns="SURNAME" keys="CUSTOMERID" parent-keys="n:NAME;CUSTOMERTYPEID"
  query-on-init="true" query-rows="6" quick-filter="yes" >

  <o-table-option label="My option"></o-table-button>

  <o-table-column attr="NAME" title="NAME"></o-table-column>

  ...

</o-table>
```

<h3 class="grey-color">Typescript code</h3>

```javascript
  ...
  import { OTableOptionComponent } from 'ontimize-web-ngx';
  ...
  @ViewChild('myOption')
  protected myOption: OTableOptionComponent;
  ...
  ngAfterViewInit() {
    this.myButton.click.subscribe(event => {
      alert('my option click');
    });
  }
```

## Columns Aggregate


{% capture tableColumnCapture %}
{% include o-component-single.md comp="tableColumnAggregate" %}
{% endcapture %}
{{ tableColumnCapture | replace: '    ', ''}}


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
    <o-table-column-aggregate attr="BALANCE" title="sum;">
    <o-table-column-aggregate attr="INTERESRATE" [function-aggregate]="custonm"></o-table-column-aggregate>
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

{% for post in site.o_table_components %}
  {% include archive-single.html %}
{% endfor %}

## Columns filters

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

## Demo

You can interact with different options of the table in <a href="https://ontimizeweb.github.io/ontimize-web-ngx-playground/">this live demo</a> in the section *Data->Table*.