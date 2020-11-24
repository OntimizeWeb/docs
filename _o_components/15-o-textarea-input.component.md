---
permalink: /components/input/textarea/
title: "Textarea input"
comp: textareaInput
<<<<<<< HEAD
under_construction: false
=======
>>>>>>> b11e89a5... Remove tab propertie
---

{% include base_path %}
{% include toc %}

The `o-textarea-input` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying text input submitted by the user.

The textarea input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Textarea input component]({{ "/images/components/inputs/o-textarea-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-textarea-input attr="longtext" label="Long text" [data]="getData()" required="yes"></o-textarea-input>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/textarea){:target="_blank"}.

## Validation
The `o-textarea-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
