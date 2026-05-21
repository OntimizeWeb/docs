---
layout: o-component
permalink: /components/input/password/overview
title: "Password"
comp: passwordInput
parent: Input
grand_parent: Components
nav_order: 14
---

{% include base_path %}
{% include toc %}

The `o-password-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting a password input submitted by the user.

The password input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Password input component]({{ "/assets/images/components/inputs/o-password-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-password-input attr="password" label="Password" data="password" read-only="no" required="yes"></o-password-input>
    <o-password-input attr="password" label="Password" data="password" enabled="no"></o-password-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/password){:target="_blank"}.

## Validation
The `o-password-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
