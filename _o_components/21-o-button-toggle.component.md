---
permalink: /components/buttontoggle/overview
title: "Button toggle"
comp: buttontoggle
---

The `o-button-toggle` component is an on/off toggle with the appearance of a button. They can be standalone or grouped with the `mat-button-toggle-group` component.

## Example

```html
<o-button-toggle attr="singleToggle" label="Toggle me!" layout-padding></o-button-toggle>

<o-button-toggle-group attr="toggleGroup" layout="row" multiple="no" value="car" layout-padding>
    <o-button-toggle attr="toggle1" value="bike" icon="directions_bike"></o-button-toggle>
    <o-button-toggle attr="toggle2" value="car" icon="directions_car"></o-button-toggle>
    <o-button-toggle attr="toggle3" value="train" icon="directions_railway"></o-button-toggle>
    <o-button-toggle attr="toggle4" value="boat" icon="directions_boat"></o-button-toggle>
</o-button-toggle-group>
```

![Button toggle]({{ "/images/components/button/o-button-toggle.png" | absolute_url }}){: .comp-example-img}

You can see this live example in the [OntimizeWeb playground]({{site.playgroundurl}}/main/buttons){:target="_blank"}.
