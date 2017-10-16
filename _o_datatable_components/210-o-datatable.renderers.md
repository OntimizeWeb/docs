---
permalink: /datatable-components/o-datatable-renderers.component/
title: "Column renderers"
---

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

## Default renderers

{% assign filenameArray = "" | split:"|"  %}
{% for renderers_hash in site.data.components.tableData.renderers %}
  {% assign filenameArray = filenameArray | push: renderers_hash[0] %}
{% endfor %}
{% assign filenameArray = filenameArray | sort %}


{% for filename in filenameArray %}

  {% assign dataFile = site.data.components.tableData.renderers[filename] %}
  {% capture dataFileCapture %}
    {% include o-component-single.md compFile=dataFile  %}
  {% endcapture %}
  <div class="o-compFile-div">
    <h2 class="">{{ dataFile.title }}</h2>
    {{ dataFileCapture | replace: '    ', '' | markdownify }}
  </div>
{% endfor %}


## Create a custom renderer

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
<br/>
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
