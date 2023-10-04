---
layout: o-component
permalink: /components/input/integer/overview
title: "Integer input"
comp: integerInput
parent: Input
grand_parent: Components
nav_order: 12
---

{% include base_path %}
{% include toc %}

The `o-integer-input` component is used in [forms]({{ base_path }}/components/form/overview) for getting or displaying numeric input submitted by the user.

The integer input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Integer input component]({{ "/images/components/inputs/o-integer-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-integer-input attr="age" label="Age"></o-integer-input>
    <o-integer-input attr="zipcode" label="ZIP code" read-only="no" required="yes"></o-integer-input>
    <o-integer-input attr="year" label="Year" enable="no"></o-integer-input>
</o-form>
```

You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/integer){:target="_blank"}.

## Validation
The `o-integer-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value considering the parameters `min` and `max`.
