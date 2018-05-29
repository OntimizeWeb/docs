---
permalink: /components/input/integer/
title: "Integer input"
comp: integerInput
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

The `o-integer-input` component is used in [forms]({{ base_path }}/docs/components/form/) for getting or displaying numeric input submitted by the user.

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

You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/integer){:target="_blank"}.

## Validation
The `o-integer-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value considering the parameters `min` and `max`.
