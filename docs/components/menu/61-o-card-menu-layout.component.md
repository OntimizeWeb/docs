---
layout: o-component
permalink: /components/cardmenulayout/overview
title: "Card menu layout"
comp: cardMenuLayout
parent: Menu
grand_parent: Components
nav_order: 2
---

{% include base_path %}

The `o-card-menu-layout` component builds automatically a dashboard page based on the application menu configuration (read more about how to configure the application menu [here]({{ base_path }}/guide/appconfig/#menu-configuration){:target="_blank"}). It displays a [`o-card-menu-item`](#card-menu-item) component for each menu item provided on the `parent-menu-id` attribute. When this attribute is not configured, the component builds a [`o-card-menu-item`](#card-menu-item) for each root menu item. You can also include your own card menu items like in the example below.

## Example

```html
<o-card-menu-layout parent-menu-id="views">
  <o-card-menu-item button-text="Show" title="Documentation" tooltip="Check the OntimizeWeb documentation" image="assets/images/ontimize.png"></o-card-menu-item>
</o-card-menu-layout>
```

![Card menu layout example]({{ base_path }}/images/layouts/app-layout/card-menu-layout-custom.png){: .align-center}

You can see an example of this component working in the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/quickstart/){:target="_blank"}.

## Card menu item

The [`o-card-menu-item`]({{ base_path }}/components/cardmenulayout/cardmenuitem/overview){:target="_blank"} component is the child component for the `o-card-menu-layout` component. You can read more about this component [here]({{ base_path }}/components/cardmenulayout/cardmenuitem/overview){:target="_blank"}.
