---
permalink: /components/datatable/overview
title: "DataTable"
comp: datatable
tab: overview
---

{% include base_path %}
{% include toc %}

<div class="notice--danger align-center" style="margin: 0;">
This component is **deprecated** and will be removed in following versions.
</div>

<div class="notice--warning" markdown="1">

**WARNING:** table is storing changes made by user (show/hide columns, order changes, filters, etc.) in the browser local storage. That values will take precedence over table html definition.
For example: if a *ID* column is not in the *visible-columns* attribute but the user has chosen
to display it manually, it will be visible in future loads. For restoring initial state is enough to
delete it *DataTables* entries in browser local storage.

</div>

## Table buttons

{% capture tableButtonCapture %}
{% include o-component-single-api.md component="tableButton" %}
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
  import { ODataTableButtonComponent } from 'ontimize-web-ngx';
  ...
  @ViewChild('myButton', {static: false})
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
{% include o-component-single-api.md component="tableOption" %}
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

  <o-datatable-option #myOption label="My option" icon="account_circle" icon-position="after"></o-datatable-option>

  <o-datatable-column attr="NAME" title="NAME"></o-datatable-column>
  ...
</o-datatable>
```

<h3 class="grey-color">Typescript code</h3>

```javascript
  ...
  import { ODataTableOptionComponent } from '';
  ...
  @ViewChild('myOption', {static: false})
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
{% include o-component-single-api.md component="tableColumn" %}
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

## Renderers

Specifies how to render a column cell content. A table column has the attribute *type* that indicates how its cells will be rendered.

For example:

```html
<o-datatable-column attr="PHOTO" orderable="no" searchable="no" type="image"
  image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
</o-datatable-column>
```

It would be equivalent to define:

```html
<o-datatable-column attr="PHOTO" orderable="no" searchable="no">
  <o-datatable-cell-renderer-image image-type="base64"
    empty-image="assets/images/no-image.png" avatar="yes">
  </o-datatable-cell-renderer-image>
</o-datatable-column>
```

### Default renderers

The `o-datatable` component provides default renderers you can include in your application.

#### Cell renderer: string

The `o-datatable-cell-renderer` is the default renderer.

#### Cell renderer: boolean

The `o-datatable-cell-renderer-boolean` renders a boolean value into the table cell.

#### Cell renderer: real

The `o-datatable-cell-real-boolean` renders a real value into the table cell.

#### Cell renderer: currency

The `o-datatable-cell-currency-boolean` renders a real value formated and with a currency symbol into the table cell.

#### Cell renderer: date

The `o-datatable-cell-date-boolean` renders a date value into the table cell.

#### Cell renderer: image

The `o-datatable-cell-image-boolean` renders a image into the table cell.

#### Cell renderer: service

The `o-datatable-cell-service-boolean` gets the values to render from a service.

#### Cell renderer: action

The `o-datatable-cell-action-boolean` is a special renderer that allows the insertion of columns for handling some kind of action to be excecuted over the entire row: go to detail, edit, delete, etc.

<div class="notice--info" markdown="1">

**IMPORTANT:** `o-datatable-column` directives including this renderer must not have a `attr` attribute, because its not rendering a cell value.

</div>

```html
  <o-datatable attr="customers" entity="ECustomers" title="CUSTOMERS"
    columns="CUSTOMERID;SURNAME;NAME;STARTDATE;ADDRESS;EMAIL;CUSTOMERTYPEID;PHOTO;LATITUDE;LONGITUDE"
    visible-columns="PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL;CUSTOMERTYPEID;LATITUDE;LONGITUDE"
    editable-columns="NAME;SURNAME;ADDRESS;STARTDATE;EMAIL;LATITUDE;LONGITUDE"
    sort-columns="SURNAME" keys="CUSTOMERID"
    query-on-init="true" query-rows="10" quick-filter="yes"
    insert-table="yes" detail-mode="none" edit-on-focus="no">

    <o-datatable-column>
      <o-datatable-cell-renderer-action action="detail" render-type="button" render-value="DETAIL"></o-datatable-cell-renderer-action>
    </o-datatable-column>

    <o-datatable-column attr="PHOTO" orderable="no" searchable="no"type="image" image-type="base64" avatar="yes" empty-image="assets/images/no-image.png"></o-datatable-column>

    <o-datatable-column attr="NAME" title="NAME"></o-datatable-column>

    <o-datatable-column attr="SURNAME" title="SURNAME"></o-datatable-column>

    <o-datatable-column attr="ADDRESS" title="ADDRESS"></o-datatable-column>

    <o-datatable-column attr="STARTDATE" title="STARTDATE" type="date" format="LL" date-model-type="string" date-model-format="YYYY-MM-DD HH:mm:ss"></o-datatable-column>

    <o-datatable-column attr="EMAIL" title="EMAIL"></o-datatable-column>

    <o-datatable-column attr="CUSTOMERTYPEID" title="CUSTOMERTYPEID" editable="true">
      <o-datatable-cell-renderer-service entity="ECustomerTypes" value-column="CUSTOMERTYPEID" columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION"></o-datatable-cell-renderer-service>
      <o-datatable-cell-editor-combo entity="ECustomerTypes" value-column="CUSTOMERTYPEID" columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION"></o-datatable-cell-editor-combo>
    </o-datatable-column>

    <o-datatable-column attr="LATITUDE" title="LATITUDE" type="real" grouping="no" decimal-separator="," decimal-digits="6"></o-datatable-column>

    <o-datatable-column attr="LONGITUDE" title="LONGITUDE" type="real" grouping="no" decimal-separator="," decimal-digits="6"></o-datatable-column>

    <o-datatable-column>
      <o-datatable-cell-renderer-action action="edit"></o-datatable-cell-renderer-action>
    </o-datatable-column>

    <o-datatable-column>
      <o-datatable-cell-renderer-action action="delete"></o-datatable-cell-renderer-action>
    </o-datatable-column>

  </o-datatable>
```

### Custom renderer

To create a custom renderer is necessary to create a component implementing
 the **ITableCellRenderer** interface or extending another renderer component.

```javascript
interface ITableCellRenderer {
  init(parameters: any);
  render(cellData: any, rowData: any): string;
  handleCreatedCell(cellElement: any, rowData: any);
}
```

<div style="font-size:15px;" markdown="1">
 * *init(parameters: any)*: used for initialization from ODataTableColumn in default
 renderers (passing *o-datatable-column* attributes to renderer).
 It is not necesary to implement in the renderers, initialization should be done in
 constructor or in *ngOnInit* method.
 * *render(data: any): string*: code for rendering received data.
 * *handleCreatedCell(cellElement: any, rowData: any)*: this method receives cell HTML code.
 Useful for registering event listeners over that code.
</div>

For example: *movement-types-cell-renderer.component.ts*

```javascript
import { Component, Inject, forwardRef } from '@angular/core';
import { ITableCellRenderer, ODataTableColumnComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'movement-types-cell-renderer',
  template: ''
})
export class MovementTypesCellRendererComponent implements ITableCellRenderer {

  constructor(@Inject(forwardRef(() => ODataTableColumnComponent))
    tableColumn: ODataTableColumnComponent) {

    tableColumn.registerRenderer(this);
  }

  public init(parameters: any) {
    // nothing to initialize here
  }

  public render(cellData: any, rowData: any): string {
    return (typeof(cellData) !== 'undefined') ?
      ('<md-icon class="material-icons">filter_' +
      String(cellData) + '</md-icon>') : '';
  }

  public handleCreatedCell(cellElement: any, rowData: any) {
    // nothing to do here
  }

}
```

Using example

<div class="notice--warning" markdown="1">
**WARNING:** do not forget to include *MovementTypesCellRendererComponent* in the component directives
</div>

```html
<o-datatable entity="EMovements" title="MOVEMENTS" keys="MOVEMENTID"
  columns="MOVEMENTID;CONCEPT;MOVEMENTTYPEID" parent-keys="ACCOUNTID"
  visible-columns="CONCEPT;MOVEMENTTYPEID"  detail-form-route="transactions"
  query-on-init="false" query-rows="6" quick-filter="yes">

  <o-datatable-column attr="CONCEPT" title="CONCEPT"></o-datatable-column>

  <o-datatable-column attr="MOVEMENTTYPEID" title="MOVEMENTTYPES" type="integer">
    <movement-types-cell-renderer></movement-types-cell-renderer>
  </o-datatable-column>

</o-datatable>
```

## Editors

As in the cell renderers, a column can have an *type* attribute indicating which editor will be used for its value edition.

For example:

```html
<o-datatable-column attr="DATE_" title="DATE_" editable="yes" type="date" format="LL"
  date-model-type="string" date-model-format="YYYY-MM-DD HH:mm:ss">
</o-datatable-column>
```

It would be equivalent to define:

```html
<o-datatable-column attr="DATE_" title="DATE_" editable="yes">

  <o-datatable-cell-renderer-date format="LL"></o-datatable-cell-renderer-date>

  <o-datatable-cell-editor-date date-model-type="string" date-model-format="YYYY-MM-DD HH:mm:ss">
  </o-datatable-cell-editor-date>

</o-datatable-column>
```

### Default editors

The `o-datatable` component provides default cell editors you can include in your application.

#### Cell editor: string

The `o-table-cell-editor-string` is the default cell edito for the table.

#### Cell editor: boolean

The `o-datatable-cell-editor-boolean` allows to modify a boolean value in the table cell.

#### Cell editor: integer

The `o-datatable-cell-editor-integer` allows to modify a integer value in the table cell.

#### Cell editor: real

The `o-datatable-cell-editor-real` allows to modify a real value in the table cell.

#### Cell editor: date

The `o-datatable-cell-editor-date` allows to modify a date value in the table cell.

#### Cell editor: combo

The `o-datatable-cell-editor-combo` allows to modify a value in a table cell that is provided by a service.

## Creating a custom editor

To create a custom renderer is necessary to create a component implementing the **IDataTableCellEditor**
interface or extending another existing editor.

```javascript
interface IDataTableCellEditor {
  onFocus: EventEmitter< any >;
  onBlur: EventEmitter< any >;
  onSubmit: EventEmitter< any >;
  init(parameters: any);
  getHtml(data: any): string;
  handleCellFocus(cellElement: any, data: any);
  handleCellBlur(cellElement: any);
  create(cellElement: any, data: any);
  destroy(cellElement: any);
  performInsertion(cellElement: any);
  createEditorForInsertTable(cellElement: any, data: any);
  getInsertTableValue(): any;
}
```

The implementation of this interface is more complex than the renderers interface,
so it is recommended using existing editors as reference.

<div style="font-size:15px;" markdown="1">
  * *onFocus*: event triggered when the editor gets focused.
  * *onBlur*: event triggered when the editor lost its focus.
  * *onSubmit*: event triggered when the editor submits its value.
  * *init(parameters: any)*: used for initialization from *ODataTableColumn* in default editors
  (passing *o-datatable-column* attributes to renderer).
  It is not necesary to implement in the new editors, initialization should be done in constructor or in *ngOnInit* method.
  * *getHtml(data: any): string*: string containing editor HTML code.
  * *handleCellFocus(cellElement: any, data: any)*: handler executed when the editable column cell receives the focus.
  Receiving the HTML cell code (<td></td>) to append the editor HTML code in it and current cell data.
  * *handleCellBlur(cellElement: any)*: handler executed when the editable column cell losts focus.
  Receiving the HTML cell code (<td></td>) for deleting the editor code from it.
  * *create(cellElement: any, data: any)*: method for creating the editor.
  * *destroy(cellElement: any)*: method for deleting the editor.
  * *performInsertion(cellElement: any)*: method for updating the cell with the editor value.
  It should invoke *this.tableColumn.update* method.
  * *createEditorForInsertTable(cellElement: any, data: any)*: method for creating the editor in the table fast insert
  row (*insert-table="yes"*).
  * *getInsertTableValue(): any*: method for obtaining the value inserted in the editor in a fast insert row (*insert-table="yes"*).
</div>

For example, a editor extending *o-datatable-cell-editor-string* and hiding its content: *password-cell-editor.ts*

```javascript
import { Component, Inject, forwardRef } from '@angular/core';

import { ODataTableColumnComponent,
  ODataTableCellEditorStringComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'password-cell-editor',
  template: ''
})
export class PasswordCellEditorComponent extends ODataTableCellEditorStringComponent {

  constructor(@Inject(forwardRef(() => ODataTableColumnComponent))
  tableColumn: ODataTableColumnComponent) {
    super(tableColumn);
  }

  public getHtml(data: any): string {
    let html = '<input type="password" ';
    if (typeof(data) !== 'undefined') {
      html += 'value="' + data + '" ';
    }
    html += 'onclick="event.stopPropagation();" ';
    html += 'ondblclick="event.stopPropagation();" />';
    return html;
  }

}
```

Using example
<div class="notice--warning" markdown="1">
**WARNING:** do not forget to include *PasswordCellEditorComponent* in the component directives
</div>

```html
<o-datatable entity="EMovements" title="MOVEMENTS" columns="MOVEMENTID;CONCEPT"
  visible-columns="CONCEPT" keys="MOVEMENTID" parent-keys="ACCOUNTID"
  query-on-init="false" query-rows="6" quick-filter="yes">

  <o-datatable-column attr="CONCEPT" title="CONCEPT" editable="yes">
    <password-cell-editor></password-cell-editor>
  </o-datatable-column>

</o-datatable>
```
