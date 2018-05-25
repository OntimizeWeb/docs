---
permalink: /components/input/real/
title: "Real input"
comp: realInput
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

The `o-real-input` component is used in [forms]({{ base_path }}/docs/components/form/) for getting or displaying numeric input submitted by the user.

The real input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
<img src="{{ base_path }}/docs/images/components/inputs/o-real-input.png" alt="o-real-input component">

```html
<o-form editable-detail="no" show-header="no">
    <o-real-input attr="amount" label="Amount" data="1430.75"></o-real-input>
    <o-real-input attr="result" label="Result" data="158.18614" read-only="no" required="yes"></o-real-input>
    <o-real-input attr="price" label="Price" data="95.99" enabled="no"></o-real-input>
</o-form>
```

You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/real).

## Validation
The `o-real-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value considering the parameters `min`, `max` and the decimal digits.
