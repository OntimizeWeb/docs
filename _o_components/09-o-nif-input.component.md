---
permalink: /components/input/nif/
title: "Nif input"
comp: nifInput
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

The `o-nif-input` component is used in [forms]({{ base_path }}/docs/components/form/) for getting or displaying personal identification number input submitted by the user.

The NIF input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![NIF input component]({{ "/images/components/inputs/o-nif-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-nif-input attr="nif1" label="NIF" data="53780330M"></o-nif-input>
    <o-nif-input attr="nif2" label="NIF" data="53780330M" read-only="no" required="yes"></o-nif-input>
    <o-nif-input attr="nif3" label="NIF" data="53780330M" enabled="no"></o-nif-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/nif){:target="_blank"}.

## Validation
The `o-nif-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value is a valid personal identification number.
