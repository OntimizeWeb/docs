---
permalink: /tree/components/o-tree-node.component/
title: "Tree"
comp: treeNode
layout: o-component
---
{% include base_path %}
{% include toc %}

## Introduction
The `o-tree-node` component allows to define inner nodes of another `o-tree-node` or the root `o-tree` component.

## Parent keys
When using a remote data binded tree component, a `o-tree-node` must specify in its `parent-keys` attribute which parent node registry property is going to use for doing its data query.

<h3 class="grey-color">Example</h3>

```html
<o-tree #treeview fxFlex root-title="CUSTOMERS" service="customers" entity="customer"
  keys="CUSTOMERID" columns="CUSTOMERID;SURNAME;NAME"
  description-columns="SURNAME;NAME" separator=", ">

<o-tree-node root-title="ACCOUNTS" show-root="no" service="customers"
  entity="customerAccount" columns="ACCOUNTID;CUSTOMERID;ACCOUNT"
  description-columns="ACCOUNT" keys="ACCOUNTID" parent-keys="CUSTOMERID">

  <o-tree-node root-title="ACCOUNT_CONCEPTS" show-root="no" service="branches"
    entity="accountConcepts" columns="CONCEPT;ACCOUNTID"
    description-columns="CONCEPT" keys="CONCEPT;ACCOUNTID" parent-keys="ACCOUNTID">
  </o-tree-node>

  <o-tree-node root-title="ACCOUNT_MOVEMENTTYPES" show-root="no"
    service="branches" entity="accountMovementTypes" columns="DESCRIPTION;ACCOUNTID"
    description-columns="DESCRIPTION" keys="DESCRIPTION;ACCOUNTID"
    parent-keys="ACCOUNTID">
  </o-tree-node>

</o-tree-node>

</o-tree>
```

![Tree component]({{ "/images/components/tree/inner.png" | absolute_url }}){: .comp-example-img}

## Quick filter

You can configure the same `o-tree` component filtering properties, that will only affect to this tree node.

## Demo

You can see an example of this component behaviour in this [OntimizeWeb tree quickstart](https://try.imatia.com/ontimizeweb/tree/main/nodes){:target="_blank"} section.
