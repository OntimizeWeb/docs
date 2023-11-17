---
permalink: /tree/components/o-tree.component/overview
title: "Tree"
comp: tree
layout: o-component
nav_exclude: true
---
{% include base_path %}
{% include toc %}

## Introduction
The `o-tree` component allows to show data with a tree structure.

If the component is *inside a form*, the `attr` property is required for registry the tree in the form components.

This component extends the `OServiceBaseComponent` class, so you can bind the data origin to a remote server or to local data, as seen [here]({{ base_path }}/components/service/service-base/overview){:target='_blank'}. You also must define which `columns` to retrieve.

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


## Quick filter

This option is enabled by default, the filter is visible in the top right. You can disable it setting `quick-filter="no"`.

You can configure which columns will be affected by the filtering setting the `quick-filter-columns` attribute, which contains the columns separated by ';'. By default it contains all the columns of the `columns` attribute.

You can also configure filtering to be case sensitive with `filter-case-sensitive="yes"`. By default, it's disabled.


## Tree nodes navigation

Setting the `route` attribute in the `o-tree` and `o-tree-node` components allows to trigger the navigation to the route indicated in its value.

You can define static routes or/and wildcards (that must be included in the `columns` attribute). For example:

```html
<o-tree #treeview fxFlex root-title="CUSTOMERS" service-type="DummyService"
      service="customers" entity="customer" keys="CUSTOMERID"
      columns="CUSTOMERID;SURNAME;NAME" description-columns="SURNAME;NAME"
      separator=", " query-on-init="true" route="customers/:CUSTOMERID">
</o-tree>
```

Clicking on a node of this tree will triger the navigation to the current route appending the static path `customers/` followed by the record 'CUSTOMERID' value.

You can see this working [here](https://try.imatia.com/ontimizeweb/tree/main/detail/){:target="_blank"}.

## Demo

You can see this and more examples of this component in the [OntimizeWeb tree quickstart](https://try.imatia.com/ontimizeweb/tree){:target="_blank"}.


<!-- recursive -->

<!-- <img src="{{ base_path }}/images/components/tree/detail.png" alt="detail"> -->