---
permalink: /components/input/html/
title: "HTML input"
comp: HTMLInput
---

{% include base_path %}
{% include toc %}

The `o-html-input` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying html text submitted by the user.

The HTML input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![HTML input component]({{ "/images/components/inputs/o-html-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-html-input attr="html" label="HTML" [data]="getHTMLData()"></o-html-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/html){:target="_blank"}.

## Validation
The `o-html-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
