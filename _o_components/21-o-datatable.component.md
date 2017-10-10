---
permalink: /components/o-datatable.component/
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

## Table buttons

{% capture tableButtonCapture %}
{% include o-component-single.md comp="tableButton" %}
{% endcapture %}
{{ tableButtonCapture | replace: '    ', ''}}

<h3 class="grey-color">Example</h3>

```html
<o-datatable attr="customers" entity="ECustomers" title="CUSTOMERS" 
  columns="CUSTOMERID;PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY" 
  visible-columns="PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY" 
  editable-columns="NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY" 
  sort-columns="SURNAME" keys="CUSTOMERID" parent-keys="n:NAME;CUSTOMERTYPEID" 
  query-on-init="true" query-rows="6" quick-filter="yes" insert-table="yes">

  <o-datatable-button label="My button" icon="account_circle"></o-datatable-button>

  <o-datatable-column attr="NAME" title="NAME"></o-datatable-column>

  ...

</o-datatable>
```

<h3 class="grey-color">Typescript code</h3>

```javascript
  ...
  import { ODataTableButtonComponent } from 'ontimize-web-ng2';
  ...
  @ViewChild('myButton')
  protected myButton: ODataTableButtonComponent;
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
<o-datatable attr="customers" entity="ECustomers" title="CUSTOMERS" 
  columns="CUSTOMERID;PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY" 
  visible-columns="PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY" 
  editable-columns="NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY" 
  sort-columns="SURNAME" keys="CUSTOMERID" parent-keys="n:NAME;CUSTOMERTYPEID" 
  query-on-init="true" query-rows="6" quick-filter="yes" insert-table="yes">

  <o-datatable-option #myOption label="My option" icon="account_circle" icon-position="after">
  </o-datatable-option>

  <o-datatable-column attr="NAME" title="NAME"></o-datatable-column>

  ...

</o-datatable>
```

<h3 class="grey-color">Typescript code</h3>

```javascript
  ...
  import { ODataTableOptionComponent } from 'ontimize-web-ng2';
  ...
  @ViewChild('myOption')
  protected myOption: ODataTableOptionComponent;
  ...
  ngAfterViewInit() {
    this.myOption.click.subscribe(event => {
      alert('my option click');
    });
  }
```

  

## Columns

Using default renderer (*o-datatable-cell-renderer-string*) if column attr is present in *visible-columns* attribute from its parent *o-datatable* directive. 
In the same way, using the defualt editor (*o-datatable-cell-editor-string*) if column attr is contained 
in  the *editable-columns* attribute from its parent *o-datatable*.

If *o-datatable* directive contains inner *o-datatable-column* elements, using renderers and editors 
defined on them.

{% capture tableColumnCapture %}
{% include o-component-single.md comp="tableColumn" %}
{% endcapture %}
{{ tableColumnCapture | replace: '    ', ''}}



<h3 class="grey-color">Example</h3>

```html
<o-datatable attr="customers" entity="ECustomers" title="CUSTOMERS" 
  columns="CUSTOMERID;PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY" 
  visible-columns="PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY" 
  editable-columns="NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY" 
  sort-columns="SURNAME" keys="CUSTOMERID" parent-keys="n:NAME;CUSTOMERTYPEID" 
  query-on-init="true" query-rows="6" quick-filter="yes" insert-table="yes">

  <o-datatable-column attr="PHOTO" orderable="no" searchable="no" type="image" 
    image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
  </o-datatable-column>

  <o-datatable-column attr="NAME" title="NAME"></o-datatable-column>

  <o-datatable-column attr="STARTDATE" title="STARTDATE" type="date" 
    format="MM/DD/YYYY HH:mm:ss">
  </o-datatable-column>

  <o-datatable-column attr="CUSTOMERTYPEID" title="TYPE" editable="true">
    <o-datatable-cell-renderer-service entity="ECustomerTypes" 
      value-column="CUSTOMERTYPEID" 
      columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION">
    </o-datatable-cell-renderer-service>
    <o-datatable-cell-editor-combo entity="ECustomerTypes" 
      value-column="CUSTOMERTYPEID" separator=" - "
      columns="CUSTOMERTYPEID;DESCRIPTION" 
      visible-columns="CUSTOMERTYPEID;DESCRIPTION">
    </o-datatable-cell-editor-combo>
  </o-datatable-column>

  <o-datatable-column attr="BOOLEAN" title="BOOLEAN" type="boolean" 
    true-value-type="string" true-value="YES"
    false-value-type="icon" false-value="not_interested">
  </o-datatable-column>

  <o-datatable-column attr="INTEGER" title="INTEGER" type="integer" grouping="yes" 
    thousand-separator=".">
  </o-datatable-column>

  <o-datatable-column attr="REAL" title="REAL" type="real" grouping="yes" 
    thousand-separator="." decimal-separator="," decimal-digits="4">
  </o-datatable-column>

  <o-datatable-column attr="CURRENCY" title="CURRENCY" type="currency" 
    currency-symbol="€" currency-symbol-position="right" grouping="yes" 
    thousand-separator="." decimal-separator="," decimal-digits="2">
  </o-datatable-column>
  
</o-datatable>
```

{% for post in site.o_datatable_components %}
  {% include archive-single.html %}
{% endfor %}

