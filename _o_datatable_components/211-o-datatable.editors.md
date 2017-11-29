---
permalink: /datatable-components/o-datatable-editors.component/
title: "Column editors"
---

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

## Default editors

{% assign filenameArray = "" | split:"|"  %}
{% for editors_hash in site.data.components.oDatatableData.editors %}
  {% assign filenameArray = filenameArray | push: editors_hash[0] %}
{% endfor %}
{% assign filenameArray = filenameArray | sort %}


{% for filename in filenameArray %}

  {% assign dataFile = site.data.components.oDatatableData.editors[filename] %}
  {% capture dataFileCapture %}
    {% include o-component-single.md compFile=dataFile %}
  {% endcapture %}
  <div class="o-compFile-div">
    <h2 class="">{{ dataFile.title }}</h2>
    {{ dataFileCapture | replace: '    ', '' }}
  </div>
{% endfor %}


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
<br/>
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
