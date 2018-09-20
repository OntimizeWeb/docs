---
permalink: /components/input/hour/
title: "Hour"
comp: hour
---

{% include base_path %}
{% include toc %}

The `o-hour-input` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying hour input submitted by the user.

The hour input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Hour input component]({{ "/images/components/inputs/o-hour-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
   <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{% raw %}{{ 'INPUTS.READ_ONLY' | oTranslate }}{% endraw %}</label>
      <o-hour-input fxFlex attr="input" label="{% raw %}{{ 'INPUT.BUTTON.HOUR' | oTranslate }}{% endraw %}" [data]="getValue()"></o-hour-input>
    </div>
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{% raw %}{{ 'INPUTS.EDITABLE' | oTranslate }}{% endraw %}</label>
      <o-hour-input attr="input2" label="{% raw %}{{ 'INPUT.BUTTON.HOUR' | oTranslate }}{% endraw %}" [data]="getValue()" read-only="no" required="yes"
        tooltip="This is an awesome tooltip!" clear-button="yes" format="24"></o-hour-input>
    </div>
    <div fxLayout="column" layout-padding>
      <label class="input-comp-title">{% raw %}{{ 'INPUTS.DISABLED' | oTranslate }}{% endraw %}</label>
      <o-hour-input attr="input3" label="{% raw %}{{ 'INPUT.BUTTON.HOUR' | oTranslate }}{% endraw %}" enabled="no" [data]="getValue()"></o-hour-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/hour){:target="_blank"}.

## Validation
The `o-hour-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value considering the parameters format.
