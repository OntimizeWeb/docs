---
layout: o-component
permalink: /components/input/textarea/overview
title: "Textarea input"
comp: textareaInput
parent: Input
grand_parent: Components
nav_order: 22
---

{% include base_path %}
{% include toc %}

The `o-textarea-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying text input submitted by the user.

The textarea input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Textarea input component]({{ "/assets/images/components/inputs/o-textarea-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-textarea-input attr="longtext" label="Long text" [data]="getData()" required="yes"></o-textarea-input>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/textarea){:target="_blank"}.

## Validation
The `o-textarea-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
