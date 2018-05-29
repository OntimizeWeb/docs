---
permalink: /components/input/password/
title: "Password input"
comp: passwordInput
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

The `o-password-input` component is used in [forms]({{ base_path }}/docs/components/form/) for getting or displaying text input submitted by the user.

The password input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Password input component]({{ "/images/components/inputs/o-password-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-password-input attr="password" label="Password" data="password" read-only="no" required="yes"></o-password-input>
    <o-password-input attr="password" label="Password" data="password" enabled="no"></o-password-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/password){:target="_blank"}.

## Validation
The `o-password-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
