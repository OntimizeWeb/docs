---
permalink: /components/input/phone/overview
title: "Phone input"
comp: phoneInput
---

{% include base_path %}
{% include toc %}

The `o-phone-input` component is used in [forms]({{ base_path }}/components/form/overview) for getting or displaying a phone input submitted by the user.

The phone input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Phone input component]({{ "/images/components/inputs/o-phone-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-phone-input attr="phone" label="Phone" data="+34 986350677"></o-phone-input>
    <o-phone-input attr="phone" label="Phone" data="+34 986350677" read-only="no" required="yes"></o-phone-input>
    <o-phone-input attr="phone" label="Phone" data="+34 986350677" enabled="no"></o-phone-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/phone){:target="_blank"}.

## Validation
The `o-phone-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input and validates the components with the regular expressions of each country also modifying the placeholder when selecting the country.


