---
permalink: /components/table/renderers/
title: "Rendering"
---

By default, the table will place the values of your data into the cell as simple strings. If you want something other than simple strings, then you use a cell renderer. So for rendering your values, you have the following four options.

**1.** Do nothing, simple strings get used to display the table.

**2.** Use one of cell renderer predefined. The predefined types are *boolean*, *real*, *currency*, *date*, *image*, *percentage* and *string*. If a column haven't type will be *string*. you can find all information [here]({{ base_path }}/docs/components/table/renderers/#default-renderers).

**3.** Use equivalent code.

**4.** Custom renderer. Below is an example but you can find all information [here]({{ base_path }}/docs/components/table/renderers/#custom-renderers).


For example:

```html
// 1.Do nothing, simple strings get used to display the table
<o-table-column attr="PHOTO" > </o-table-column>

// 2. Use one of cell renderer predefined
<o-table-column attr="PHOTO" orderable="no" searchable="no" type="image"
  image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
</o-table-column>

// 3. Use equivalent code
<o-table-column attr="PHOTO" orderable="no" searchable="no">
  <o-table-cell-renderer-image image-type="base64"
    empty-image="assets/images/no-image.png" avatar="yes">
  </o-table-cell-renderer-image>
</o-table-column>

// 4. Custom renderer.
<o-table-column attr="NAME" orderable="no" searchable="no">
  <o-table-cell-renderer-name></o-table-cell-renderer-name>
</o-table-column>
```



## Custom renders

To create a custom render, you need to create a new component to display custom renderer information and place this render in the content of cell.

Here's how you might begin in your file .ts:

- Your component must extends ```OBaseTableCellRenderer```.

- Also add a line ``` @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any> ```  you'll acquire the <ng-template> contents with a TemplateRef and access the view container.
- In constructor you must add
```javascript
constructor(protected injector: Injector) {
  super(injector);
  this.initialize();
}
```

- If you want to customize the value of the columns in exports or filtering, you must overwrite the method *getCellData(cellvalue,rowvalue)*


The following example show how render two values of column in a cell, "SURNAME, name" and override method getCellData

The o-table-cell-renderer-name.ts file is as follows:

```javascript
import { Component, Injector, ViewChild, TemplateRef } from '@angular/core';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';


@Component({
    selector: 'custom-render',
    templateUrl: './custom-render.component.html'
})

export class OTableCellRendererName extends OBaseTableCellRenderer {

    @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;

    constructor(protected injector: Injector) {

        super(injector);
        this.initialize();
    }
     getCellData(cellvalue: any,rowvalue) {
       return `rowvalue['SURNAME'].toUpperCase()., .rowvalue[NAME]`;
     }

}
```

Here's how you might begin in your file .html:

- Your component must start ```<ng-template #templateref let-cellvalue="cellvalue" let-rowvalue="rowvalue">``` and end ```</ng-template>```.
The *let* keyword declares a template input variable that you reference within the template. The input variables are *cellvalue* and *rowvalue*. The parser translates let cellvalue and let rowvalue into variables named, *let-cellvalue* and *let-rowvalue*.


The o-table-cell-renderer-name.html file is as follows:

```html
<ng-template #templateref let-cellvalue="cellvalue" let-rowvalue="rowvalue">
  {% raw %}{{ rowvalue['SURNAME'] | uppercase }}, {{ rowvalue['NAME'] }}{% endraw %}
</ng-template>
```


Finally, add the component *OTableCellRendererName* to your module.


