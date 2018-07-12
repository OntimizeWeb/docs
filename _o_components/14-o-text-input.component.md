---
permalink: /components/input/text/
title: "Text input"
comp: textInput
---

{% include base_path %}
{% include toc %}

The `o-text-input` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying text input submitted by the user.

The text input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Text input component]({{ "/images/components/inputs/o-text-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-text-input attr="name" label="Name" data="Jhon Doe"></o-text-input>
    <o-text-input attr="city" label="City" data="Toronto" read-only="no" required="yes"></o-text-input>
    <o-text-input attr="state" label="Country" data="Canada" enabled="no"></o-text-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/text){:target="_blank"}.

## Validation
The `o-text-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
