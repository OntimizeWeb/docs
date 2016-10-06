---
layout: single
permalink: /table-components/o-table-editors.component/
title: "Column editors"
---

As in the cell renderers, a column can have an *type* attribute indicating which editor will be used for its value edition.

{% include toc %}

For example:

```html
<o-table-column attr="DATE_" title="DATE_" editable="yes" type="date" format="LL" 
  date-model-type="string" date-model-format="YYYY-MM-DD HH:mm:ss">
</o-table-column>  
```

It would be equivalent to define:

```html
<o-table-column attr="DATE_" title="DATE_" editable="yes">

  <o-table-cell-renderer-date format="LL"></o-table-cell-renderer-date>

  <o-table-cell-editor-date date-model-type="string" date-model-format="YYYY-MM-DD HH:mm:ss">
  </o-table-cell-editor-date>

</o-table-column>
```

## Default editors

{% assign filenameArray = "" | split:"|"  %} 
{% for editors_hash in site.data.components.tableData.editors %}
  {% assign filenameArray = filenameArray | push: editors_hash[0] %}
{% endfor %}
{% assign filenameArray = filenameArray | sort %}


{% for filename in filenameArray %}

  {% assign dataFile = site.data.components.tableData.editors[filename] %}
  {% capture dataFileCapture %}
    {% include o-component-single.html compFile=dataFile %}
  {% endcapture %}
  <div class="o-table-component-cell">
    <h3 id="{{ dataFile.title }}" class="">{{ dataFile.title }}</h3>
    {{ dataFileCapture | replace: '    ', '' }}
  </div>
{% endfor %}


## Creating a custom editor

To create a custom renderer is necessary to create a component implementing the **ITableCellEditor** 
interface or extending another existing editor.


```javascript
interface ITableCellEditor {
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
  * *init(parameters: any)*: used for initialization from *OTableColumn* in default editors 
  (passing *o-table-column* attributes to renderer). 
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

For example, a editor extending *o-table-cell-editor-string* and hiding its content: *password-cell-editor.ts*

```javascript
import { Component, Inject, forwardRef } from '@angular/core';

import { OTableColumnComponent, 
  OTableCellEditorStringComponent } from 'ontimize-web-ng2/ontimize';

@Component({
  selector: 'password-cell-editor',
  template: ''
})
export class PasswordCellEditorComponent extends OTableCellEditorStringComponent {

  constructor(@Inject(forwardRef(() => OTableColumnComponent)) 
  tableColumn: OTableColumnComponent) {
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

Using example (**do not forget to include PasswordCellEditorComponent in the component directives**).


```html
<o-table entity="EMovements" title="MOVEMENTS" columns="MOVEMENTID;CONCEPT" 
  visible-columns="CONCEPT" keys="MOVEMENTID" parent-keys="ACCOUNTID" 
  query-on-init="false" query-rows="6" quick-filter="yes">

  <o-table-column attr="CONCEPT" title="CONCEPT" editable="yes">
    <password-cell-editor></password-cell-editor>
  </o-table-column>

</o-table>
```
