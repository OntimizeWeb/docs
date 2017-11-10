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

## Columns

If column attr is present in *visible-columns* attribute from its parent *o-table* directive or 
*o-table* directive contains inner *o-table-column* elements then this data will appear in the content of the table.

The o-table directive can contains inner o-table-column elements, using renderers define on them.

{% capture tableColumnCapture %}
{% include o-component-single.md comp="tableColumn" %}
{% endcapture %}
{{ tableColumnCapture | replace: '    ', ''}}



<h3 class="grey-color">Example</h3>

```html
<o-table service="branches" entity="account" keys="ACCOUNTID" 
    columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;BALANCE;STARTDATE;ENDDATE;INTERESRATE;ACCOUNTTYP"
    visible-columns="ENTITYID;OFFICEID;CDID;ANID;ACCOUNTTYP"
    fxFlex layout-padding attr="accounts" title="ACCOUNTS"
    sort-columns="ANID:DESC"  query-on-init="true"
    quick-filter="yes"   filter-case-sensitive="true" >

    <o-table-column async-load="true" width="10px" attr="PHOTO" orderable="no" searchable="no">
      <o-table-cell-renderer-image  image-type="base64"
      empty-image="assets/images/no-image.png" avatar="yes">
      </o-table-cell-renderer-image>
    </o-table-column>
    <o-table-column attr="STARTDATE" title="STARTDATE" >
      <o-table-cell-renderer-date  format="L"></o-table-cell-renderer-date>
    </o-table-column>
</o-table>
```

{% for post in site.o_table_components %}
  {% include archive-single.html %}
{% endfor %}

## Demo
In next link the usage of this component are available <a href="https://ontimizeweb.github.io/ontimize-web-ngx-playground/main/table">https://ontimizeweb.github.io/ontimize-web-ngx-playground/main/table</a>