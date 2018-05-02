---
permalink: /components/table/editors/
title: "Column editors"
---

In this section we are specifing how to add a editor for a table column cell.

<aside class="sidebar__right">
  <nav class="toc">
      <header><h4 class="nav__title"><i class="fa fa-file-text"></i> On This Page</h4></header>
      <ul class="toc__menu" id="markdown-toc">
        <li><a href="#overview" id="markdown-toc-overview">Overview</a></li>
        <li><a href="#default-editors" >Default editors</a></li>
        <li><a href="#custom-editors" >Custom editors</a></li>
    </ul>
  </nav>
</aside>

By default, the table will no define a editor for your data into a cell. If you want to be able to edit that data you have to use a cell editor. So, for editing your values, you have the following options.

**1.** Use one of the predefined cell editor. The predefined types are *boolean*, *date*, *integer*, *real* and *text*.

If a column haven't type will be *string*. you can find all information [here]({{ base_path }}/docs/table-components/o-table-editors.component/#default-editors).

**2.** Use equivalent code.

**3.** Custom editor. Below is an example but you can find all information [here]({{ base_path }}/docs/table-components/o-table-editors.component/#custom-editors).


For example:

```html
// 1. Use one of the predefined cell editor
<o-table-column attr="STARTDATE" title="STARTDATE" type="date" format="LL" editable="yes"></o-table-column>

// 2. Use equivalent code
<o-table-column attr="STARTDATE" title="STARTDATE">
  <o-table-cell-editor-date format="LL">
  </o-table-cell-editor-date>
</o-table-column>

// 3. Custom editor.
<o-table-column attr="STARTDATE" title="STARTDATE">
  <o-table-cell-editor-startdate></o-table-cell-editor-startdate>
</o-table-column>
```


## Default editors

{% assign filenameArray = "" | split:"|"  %}
{% for editors_hash in site.data.components.oTableData.editors %}
  {% assign filenameArray = filenameArray | push: editors_hash[0] %}
{% endfor %}
{% assign filenameArray = filenameArray | sort %}


{% for filename in filenameArray %}

  {% assign dataFile = site.data.components.oTableData.editors[filename] %}
  {% capture dataFileCapture %}
    {% include o-component-single.md compFile=dataFile  %}
  {% endcapture %}
  <div class="o-compFile-div">
    <h2 class="">{{ dataFile.title }}</h2>
    {{ dataFileCapture | replace: '    ', '' | markdownify }}
  </div>
{% endfor %}

## Custom editors

To create a custom editor, you need to create a new component to display custom editor information and place it inside a cell.

Here's how you might begin in your file .ts:

- Your component must extends ```OBaseTableCellEditor```.

- Also add a line ``` @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any> ```  you'll acquire the <ng-template> contents with a TemplateRef and access the view container.
- In constructor you must add
```javascript
constructor(protected injector: Injector) {
  super(injector);
  this.initialize();
}
```

- If you want to customize the value of the columns in exports or filtering, you must overwrite the method *getCellData(cellvalue,rowvalue)*




{% capture tablecellrendererFileCapture %}
  {% include o-class.md comp="basecellrenderer"  %}
{% endcapture %}
{{ tablecellrendererFileCapture | replace: '    ', ''}}



The following example show how render two values of column in a cell, "SURNAME, name" and override method getCellData

The o-table-cell-editor-name.ts file is as follows:

```javascript
import { Component, Injector, ViewChild, TemplateRef } from '@angular/core';
import { OBaseTableCellEditor } from 'ontimize-web-ngx';


@Component({
    selector: 'custom-editor',
    templateUrl: './custom-editor.component.html'
})

export class OTableCellEditorName extends OBaseTableCellEditor {

    @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;

    constructor(protected injector: Injector) {
        super(injector);
        this.initialize();
    }

}
```

Here's how you might begin in your file .html:

- Your component must start ```<ng-template #templateref let-cellvalue="cellvalue" let-rowvalue="rowvalue">``` and end ```</ng-template>```.
The *let* keyword declares a template input variable that you reference within the template. The input variables are *cellvalue* and *rowvalue*. The parser translates let cellvalue and let rowvalue into variables named, *let-cellvalue* and *let-rowvalue*.


The o-table-cell-editor-name.html file is as follows:

```html
<ng-template #templateref let-cellvalue="cellvalue" let-rowvalue="rowvalue">
  {% raw %}{{ rowvalue['SURNAME'] | uppercase }}, {{ rowvalue['NAME'] }}{% endraw %}
</ng-template>
```


Finally, add the component *OTableCellEditorName* to your module.


