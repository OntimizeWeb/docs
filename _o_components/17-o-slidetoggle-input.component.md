---
permalink: /components/input/slidetoggle/overview
title: "Slide toggle"
comp: slidetoggle
tab: overview
---

{% include base_path %}

The `o-slide-toggle` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying an on/off control.

The slide toggle component is automatically registered on its parent `o-form`, which provides the value for the slide toggle programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Slide toggle component]({{ "/images/components/inputs/o-slidetoggle.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="false" show-header="no">
    <o-slide-toggle attr="slidetoggle1" label="Slide toggle" [data]="true" read-only="no"></o-slide-toggle>
    <o-slide-toggle attr="slidetoggle2" label="Slide toggle disabled" enabled="no"></o-slide-toggle>
</o-form>
```

You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/slidetoggle){:target="_blank"}.
