---
title: "Style Guide"
permalink: /customize/style-guide/
excerpt: ""
---

This section describes a set of tools and recommendations that will help you on styling your application. The goal of this guidelines include improving UI consistency and quality, making the design and development process more consistent and efficient.

{% include base_path %}
{% include toc %}

## Containers

**OntimizeWeb** defines a set of [containers components]({{ base_path }}/components/containers/){:target="_blank"} that allow you to distribute the elements on the screen as you need. Use the attribute `layout-align` to distribute the elements inside the container and `layout-gap` to define the spacing between them.

```html
<o-column title="Column" layout-gap="14px">
<o-row title="Row" layout-align="start center" layout-gap="14px">
    <span>First element</span>
    <span>Second element</span>
</o-row>
<span>Last element</span>
</o-column>
```

## Spacing

The goal of whitespace is to maximize readability and understanding of content/data. You can set margin or padding for an element without creating an extra CSS class, just using the directive or CSS class that most fits your requirements. **OntimizeWeb** uses a *8px system* to define its whitespaces.

* CSS classes: `.vertical-margin-4`, `.vertical-margin-4` where `vertical` can be replaced by `horizontal`, `margin` can be replaced by `padding` and `4` can be replaced by `8`, `12`, `16`, `20` or `24`.
* Directives:

{:.table-list}
| `layout-padding` | Adds padding to the attached element |
| `layout-padding-vertical` | Adds padding top and bottom to the attached element |
| `layout-padding-horizontal` | Adds padding left and right to the attached element |
| `layout-padding-left` | Adds padding left to the attached element |
| `layout-padding-right` | Adds padding right to the attached element |
| `layout-padding-top` | Adds padding top to the attached element |
| `layout-padding-bottom` | Adds padding bottom to the attached element |
| `layout-margin` | Adds margin to the attached element |
| `layout-margin-vertical` | Adds margin top and bottom to the attached element |
| `layout-margin-horizontal` | Adds margin left and right to the attached element |
| `layout-margin-left` | Adds margin left to the attached element |
| `layout-margin-right` | Adds margin right to the attached element |
| `layout-margin-top` | Adds margin top to the attached element |
| `layout-margin-bottom` | Adds margin bottom to the attached element |

```html
    <div directive-goes-here class="class-goes-here">Sample content</div>
```
