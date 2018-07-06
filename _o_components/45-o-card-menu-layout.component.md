---
permalink: /components/cardmenulayout/
title: "Card menu layout"
comp: cardMenuLayout
---

{% include base_path %}

The `o-card-menu-layout` component builds automatically a dashboard page based on the application menu configuration. It displays a [card menu item](#card-menu-item) for each menu item provided on the `parent-menu-id` attribute. When this attribute is not configured, the component builds a [card menu item](#card-menu-item) for each root menu item. You can read more about how to configure the application menu [here]({{ base_path }}/guide/appconfig/#menu-configuration){:target="_blank"}.

## Example

```html
<o-card-menu-layout parent-menu-id="views"></o-card-menu-layout>
```

You can see an example of this component working in the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/quickstart/){:target="_blank"}.

## Card menu item

You can read more about the card items in the [`o-card-menu-item`]({{ base_path }}/components/cardmenulayout/cardmenuitem/){:target="_blank"} component page.
