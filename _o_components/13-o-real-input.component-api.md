---
permalink: /components/input/real/api
title: "Real input"
comp: realInput
---

{% include base_path %}
{% include toc %}

The `o-real-input` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying numeric input submitted by the user.

The real input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Real input component]({{ "/images/components/inputs/o-real-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-real-input attr="amount" label="Amount" data="1430.75"></o-real-input>
    <o-real-input attr="result" label="Result" data="158.18614" read-only="no" required="yes"></o-real-input>
    <o-real-input attr="price" label="Price" data="95.99" enabled="no"></o-real-input>
</o-form>
```

You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/real){:target="_blank"}.

## Validation
The `o-real-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value considering the parameters `min`, `max` and the decimal digits.
