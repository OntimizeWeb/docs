---

permalink: /table-components/o-table-renderers.component/
title: "Column renderers"
---

Specifies how to render a column cell content. A table column has the attribute *type* that indicates how its cells will be rendered.

By default, the table will place the values of your data into the cell as simple strings. If you want something other than simple strings, then you use a cell renderer. So for rendering your values, you have the following three options.

**1.** Do nothing, simple strings get used to display the table.

**2.** Use one of cell renderer predefined. The predefined types are *boolean*, *real*, *currency*, *date*, *image*, *percentage* and *string*. If a column haven't type will be *string*.

**3.** Use equivalente code.



For example:

```html
// 1.Do nothing, simple strings get used to display the table
<o-table-column attr="PHOTO" > </o-table-column>

// 2. Use one of cell renderer predefined
<o-table-column attr="PHOTO" orderable="no" searchable="no" type="image"
  image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
</o-table-column>

// 3. Use equivalente code
<o-table-column attr="PHOTO" orderable="no" searchable="no">
  <o-table-cell-renderer-image image-type="base64"
    empty-image="assets/images/no-image.png" avatar="yes">
  </o-table-cell-renderer-image>
</o-table-column>
```

## Default renderers

{% assign filenameArray = "" | split:"|"  %}
{% for renderers_hash in site.data.components.otableData.renderers %}
  {% assign filenameArray = filenameArray | push: renderers_hash[0] %}
{% endfor %}
{% assign filenameArray = filenameArray | sort %}


{% for filename in filenameArray %}

  {% assign dataFile = site.data.components.otableData.renderers[filename] %}
  {% capture dataFileCapture %}
    {% include o-component-single.md compFile=dataFile  %}
  {% endcapture %}
  <div class="o-compFile-div">
    <h2 class="">{{ dataFile.title }}</h2>
    {{ dataFileCapture | replace: '    ', '' | markdownify }}
  </div>
{% endfor %}

