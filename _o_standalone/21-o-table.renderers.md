---
layout: single
permalink: /components/o-table-renderers.component/
title: "Table column renderers"
previous: false
next: false
hide_pagination: true
---


**Example:**

```html
<o-table-column attr="PHOTO" orderable="no" searchable="no" type="image" 
  image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
</o-table-column>  
```

```html
<o-table-column attr="PHOTO" orderable="no" searchable="no">
  <o-table-cell-renderer-image image-type="base64" 
    empty-image="assets/images/no-image.png" avatar="yes">
  </o-table-cell-renderer-image>
</o-table-column>
```

**Default renderers:**
{% assign filenameArray = "" | split:"|"  %} 
{% for renderers_hash in site.data.components.tableData.renderers %}
  {% assign filenameArray = filenameArray | push: renderers_hash[0] %}
{% endfor %}
{% assign filenameArray = filenameArray | sort %}


{% for filename in filenameArray %}

  {% assign dataFile = site.data.components.tableData.renderers[filename] %}
  {% capture dataFileCapture %}
    {% include o-component-single.html compFile=dataFile %}
  {% endcapture %}

  {{ dataFileCapture | replace: '    ', '' }}
 
{% endfor %}

**Creating a custom renderer:**


```javascript
interface ITableCellRenderer {
  init(parameters: any);
  render(cellData: any, rowData: any): string;
  handleCreatedCell(cellElement: any, rowData: any);
}
```



```javascript
import { Component, Inject, forwardRef } from '@angular/core';
import { ITableCellRenderer, OTableColumnComponent } from 'ontimize-web-ng2/ontimize';

@Component({
  selector: 'movement-types-cell-renderer',
  template: ''
})
export class MovementTypesCellRendererComponent implements ITableCellRenderer {

  constructor(@Inject(forwardRef(() => OTableColumnComponent)) 
    tableColumn: OTableColumnComponent) {
      
    tableColumn.registerRenderer(this);
  }

  public init(parameters: any) {
    // nothing to initialize here
  }

  public render(cellData: any, rowData: any): string {
    return (typeof(cellData) !== 'undefined') ? 
      ('<md-icon class="material-icons">filter_' + String(cellData) + '</md-icon>') : '';
  }

  public handleCreatedCell(cellElement: any, rowData: any) {
    // nothing to do here
  }

}
```




```html
<o-table entity="EMovements" title="MOVEMENTS" keys="MOVEMENTID"
  columns="MOVEMENTID;CONCEPT;MOVEMENTTYPEID" parent-keys="ACCOUNTID"
  visible-columns="CONCEPT;MOVEMENTTYPEID"  detail-form-route="transactions"  
  query-on-init="false" query-rows="6" quick-filter="yes">

  <o-table-column attr="CONCEPT" title="CONCEPT"></o-table-column>

  <o-table-column attr="MOVEMENTTYPEID" title="MOVEMENTTYPES" type="integer">
    <movement-types-cell-renderer></movement-types-cell-renderer>
  </o-table-column>

</o-table>
```
