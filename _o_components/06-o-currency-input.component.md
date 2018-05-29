---
permalink: /components/input/currency/
title: "Currency input"
comp: currencyInput
---

<aside class="sidebar__right">
  <nav class="toc">
      <header><h4 class="nav__title"><i class="fa fa-file-text"></i> On This Page</h4></header>
      <ul class="toc__menu" id="markdown-toc">
        <li><a href="#basic-example" id="markdown-toc-overview">Basic example</a></li>
        <li><a href="#validation">Validation</a></li>
    </ul>
  </nav>
</aside>

The `o-currency-input` component is used in [forms]({{ base_path }}/docs/components/form/) for getting or displaying amounts of money input submitted by the user.

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
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/currency){:target="_blank"}.

## Validation
The `o-currency-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
