---
permalink: /tree/components/o-tree.component/
title: "Tree"
comp: tree
layout: o-component
---
{% include base_path %}
{% include breadcrumbs.html %}
{% include toc %}

## Introduction
The `o-tree` component allows to show data with a tree structure.

If the component is *inside a form*, the `attr` property is required for registry the tree in the form components.

This component extends the `OServiceBaseComponent` class, so you can bind the data origin to a remote server or to local data, as seen [here]({{ base_path }}/components/service/service-base/){:target='_blank'}. You also must define which `columns` to retrieve.

## Nodes text
You have to specify which text will be displayed in each tree node using the `description-columns` input. This columns are a subset of the `columns` and its content will be separed using the string specified in the `separator` input.

The `o-tree` will show a base node if the `show-root` input is set to a true value, that node text is setted using the `root-title` input.

<h3 class="grey-color">Example</h3>

```html
<o-tree service="customers" entity="customer" keys="CUSTOMERID" 
    columns="CUSTOMERID;SURNAME;NAME" description-columns="SURNAME;NAME" 
    separator=", " root-title="CUSTOMERS" show-root="yes">
</o-tree>
```

![Tree component]({{ "/images/components/tree/basic.png" | absolute_url }}){: .comp-example-img}






<!-- recursive -->

<!-- <img src="{{ base_path }}/images/components/tree/detail.png" alt="detail"> -->