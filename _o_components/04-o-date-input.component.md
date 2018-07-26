---
permalink: /components/input/date/
title: "Date input"
comp: dateInput
under_construction: false
---

{% include base_path %}
{% include toc %}

The `o-date-input` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying date input submitted by the user.

The date input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Date input component]({{ "/images/components/inputs/o-date-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-date-input attr="date1" label="Date"></o-date-input>
    <o-date-input attr="date2" label="Date" read-only="no" required="yes" format="LL"></o-date-input>
    <o-date-input attr="date3" label="Date" enabled="no"></o-date-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/date){:target="_blank"}.

## Validation
The `o-date-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
