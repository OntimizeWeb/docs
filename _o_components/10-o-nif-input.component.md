---
permalink: /components/input/nif/overview
title: "Nif input"
comp: nifInput
tab: overview
---

{% include base_path %}
{% include toc %}

The `o-nif-input` component is used in [forms]({{ base_path }}/components/form/overview) for getting or displaying personal identification number input submitted by the user.

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
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/nif){:target="_blank"}.

## Validation
The `o-nif-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value is a valid personal identification number.
