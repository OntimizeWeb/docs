---
permalink: /components/input/textarea/
title: "Textarea input"
comp: textareaInput
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

The `o-textarea-input` component is used in [forms]({{ base_path }}/docs/components/form/) for getting or displaying text input submitted by the user.

The textarea input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
<img src="{{ base_path }}/docs/images/components/inputs/o-textarea-input.png" alt="o-textarea-input component">

```html
<o-textarea-input attr="longtext" label="Long text" [data]="getData()" required="yes"></o-textarea-input>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/textarea).

## Validation
The `o-textarea-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
