---
permalink: /components/input/percent/api
title: "Percent input"
comp: percentInput
---

{% include base_path %}
{% include toc %}

The `o-percent-input` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying percentage input submitted by the user.

The percentage input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Percentage input component]({{ "/images/components/inputs/o-percent-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-percent-input attr="percent" label="Percentage" data="60"></o-percent-input>
    <o-percent-input attr="percent" label="Percentage" data="100" read-only="no" required="yes"></o-percent-input>
    <o-percent-input attr="percent" label="Percentage" data="52.55" enabled="no"></o-percent-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/percent){:target="_blank"}.

## Validation
The `o-percent-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
