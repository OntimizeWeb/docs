---
permalink: /components/input/percent/
title: "Percent input"
comp: percentInput
under_construction: false
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

The `o-percent-input` component is used in [forms]({{ base_path }}/docs/components/form/) for getting or displaying percentage input submitted by the user.

The percentage input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
<img src="{{ base_path }}/docs/images/components/inputs/o-percent-input.png" alt="o-percent-input component">

```html
<o-form editable-detail="no" show-header="no">
    <o-percent-input attr="percent" label="Percentage" data="60"></o-percent-input>
    <o-percent-input attr="percent" label="Percentage" data="100" read-only="no" required="yes"></o-percent-input>
    <o-percent-input attr="percent" label="Percentage" data="52.55" enabled="no"></o-percent-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/percent).

## Validation
The `o-percent-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
