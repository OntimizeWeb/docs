---
permalink: /components/table/column/
title: "Table column"
---

Using default renderer (*o-table-cell-renderer-string*) if column attr is present in *visible-columns* attribute from its parent *o-table* .
In the same way, using the defualt editor (*o-table-cell-editor-string*) if column attr is contained
in  the *editable-columns* attribute from its parent *o-table*.

If *o-table* component contains inner *o-table-column* elements, using renderers and editors
defined in them.

{% capture tableColumnCapture %}
{% include o-component-single.md comp="tableColumn" %}
{% endcapture %}
{{ tableColumnCapture | replace: '    ', ''}}



<h3 class="grey-color">Example</h3>

```html

```

<h3 class="grey-color">Typescript code</h3>


