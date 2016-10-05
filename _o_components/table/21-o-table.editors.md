---
layout: single
permalink: /table/o-table-editors.component/
title: "Table column editors"
---


**Example:**

```html
<o-table-column attr="DATE_" title="DATE_" editable="yes" type="date" format="LL" 
  date-model-type="string" date-model-format="YYYY-MM-DD HH:mm:ss">
</o-table-column>  
```

```html
<o-table-column attr="DATE_" title="DATE_" editable="yes">

  <o-table-cell-renderer-date format="LL"></o-table-cell-renderer-date>

  <o-table-cell-editor-date date-model-type="string" date-model-format="YYYY-MM-DD HH:mm:ss">
  </o-table-cell-editor-date>

</o-table-column>
```

**Default editors:**

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

  {{ dataFileCapture | replace: '    ', '' }}
 
{% endfor %}


**Creating a custom editor:**


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





```javascript
import { Component, Inject, forwardRef } from '@angular/core';

import { OTableColumnComponent, OTableCellEditorStringComponent } from 'ontimize-web-ng2/ontimize';

@Component({
  selector: 'password-cell-editor',
  template: ''
})
export class PasswordCellEditorComponent extends OTableCellEditorStringComponent {

  constructor(@Inject(forwardRef(() => OTableColumnComponent)) tableColumn: OTableColumnComponent) {
    super(tableColumn);
  }

  public getHtml(data: any): string {
    let html = '<input type="password" ';
    if (typeof(data) !== 'undefined') {
      html += 'value="' + data + '" ';
    }
    html += 'onclick="event.stopPropagation();" ondblclick="event.stopPropagation();" />';
    return html;
  }

}
```




```html
<o-table entity="EMovements" title="MOVEMENTS" columns="MOVEMENTID;CONCEPT" 
  visible-columns="CONCEPT" keys="MOVEMENTID" parent-keys="ACCOUNTID" 
  query-on-init="false" query-rows="6" quick-filter="yes">

  <o-table-column attr="CONCEPT" title="CONCEPT" editable="yes">
    <password-cell-editor></password-cell-editor>
  </o-table-column>

</o-table>
```
