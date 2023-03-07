---
permalink: /components/input/text/overview
title: "Text input"
comp: textInput
---

{% include base_path %}
{% include toc %}

The `o-text-input` component is used in [forms]({{ base_path }}/components/form/overview) for getting or displaying text input submitted by the user.

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
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/text){:target="_blank"}.

## Prefix and suffix <span class='menuitem-badge'>new<span>
Custom content can be included before and after the input tag, as a prefix or suffix adding the `oMatPrefix` directive to an element inside the <o-text-input> will designate it as the prefix. Similarly, adding `oMatSuffix` will designate it as the suffix.

```html
   <o-text-input attr="input" label="Text" data="John Doe" read-only="no" required="yes">
      <mat-icon oMatSuffix>sentiment_very_satisfied</mat-icon>
    </o-text-input>
```

![Prefix in o-text-input component]({{ "/images/components/inputs/o-text-input-prefix.png" | absolute_url }}){: .comp-example-img}

## Validation
The `o-text-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
