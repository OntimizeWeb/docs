---
permalink: /components/input/email/
title: "Email input"
comp: emailInput
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

The `o-email-input` component is used in [forms]({{ base_path }}/docs/components/form/) for getting or displaying email addresses input submitted by the user.

The email input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
<img src="{{ base_path }}/docs/images/components/inputs/o-email-input.png" alt="o-email-input component" class="comp-example-img">

```html
<o-form editable-detail="no" show-header="no">
    <o-email-input attr="email" label="Email" data="john.doe@ontimize.com" read-only="no" required="yes"></o-email-input>
    <o-email-input attr="email" label="Email" data="john.doe@ontimize.com" enabled="no"></o-text-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/email){:target="_blank"}.

## Validation
The `o-email-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value is a valid email address.
