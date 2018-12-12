---
permalink: /components/table/obasetablecelleditor/
title: "OBaseTableCellEditor"
comp: obasetablecelleditor
---
{% include base_path %}

## Description

All cell editor in OntimizeWeb extend the *OBaseTableCellEditor class*. This class provides a set of methods and attributes inherited by all the cell editor components. This methods and attributes are explained on the API section of this page.

Below we will show an example of the custom cell editor.


Example 
```html
import { Component, Injector, ViewChild, TemplateRef } from '@angular/core';
import { OBaseTableCellEditor, OTableColumnComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'custom-editor',
  templateUrl: './custom-editor.component.html'
})
export class OTableCellEditorName extends OBaseTableCellEditor {

  @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
    this.type = 'custom-editor';
    OTableColumnComponent.addEditor(this.type, OTableCellEditorName);
  }

}

```