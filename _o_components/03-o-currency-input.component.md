---
permalink: /components/input/currency/overview
title: "Currency input"
comp: currencyInput
tab: overview
---

{% include base_path %}
{% include toc %}

The `o-currency-input` component is used in [forms]({{ base_path }}/components/form/overview/) for getting or displaying amounts of money input submitted by the user.

The currency input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Currency input component]({{ "/images/components/inputs/o-currency-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-currency-input attr="price" label="Price" data="Jhon Doe"></o-currency-input>
    <o-currency-input attr="amount" label="Amount" data="Toronto" read-only="no"></o-currency-input>
    <o-currency-input attr="balance" label="Balance" data="Canada" enabled="no"></o-currency-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/currency){:target="_blank"}.

## Validation
The `o-currency-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
