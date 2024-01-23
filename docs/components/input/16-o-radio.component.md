---
layout: o-component
permalink: /components/input/radio/overview
title: "Radio"
comp: radio
parent: Input
grand_parent: Components
nav_order: 17
---

{% include base_path %}
{% include toc %}

The `o-radio` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying an option between multiple input submitted by the user.

The radio component is automatically registered on its parent `o-form`, which provides the value for the radio programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

This component is different than most of other inputs, an array of data must be provided to the component in order to interact with it. This data is used to display the optoins of the radio group and each element of the data array must be an object with at least one key/value pair.

The data array can be provided in two ways:
* Provide an array of objects to the `static-data` attribute (see the [example](#basic-example) below).
* Configure the component to query the data from a service. Using `service` and `entity` attributes.

## Basic example
![Radio component]({{ "/assets/images/components/inputs/o-radio.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="false" show-header="no">
    <o-radio attr="radio-editable" label="{{ 'INPUT.BUTTON.RADIO' | oTranslate }}" [static-data]="getDataArray()"
        [data]="getValue()" value-column="key" columns="key;value" visible-columns="value" read-only="no" required="yes"
        tooltip="This is an awesome tooltip!" tooltip-position="below"></o-radio>
    <o-radio attr="radio-disabled" label="{{ 'INPUT.BUTTON.RADIO' | oTranslate }}" [static-data]="getDataArray()"
        [data]="getValue()" value-column="key" columns="key;value" visible-columns="value" enabled="no"></o-radio>
</o-form>
```

## Validation
The `o-radio` shows automatically an error message when the `required` attribute is set to "yes" and there is no value selected.

You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/radio){:target="_blank"}.
