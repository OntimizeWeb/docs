---

permalink: /table-components/o-table-renderers.component/
title: "Column renderers"
---

Specifies how to render a column cell content. A table column has the attribute *type* that indicates how its cells will be rendered.

For example:

```html
<o-table-column attr="PHOTO" orderable="no" searchable="no" type="image"
  image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
</o-table-column>
```

It would be equivalent to define:

```html
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

