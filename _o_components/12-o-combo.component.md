---
permalink: /components/input/combo/
title: "Combo"
comp: combo
under_construction: false
---

{% include base_path %}
{% include toc %}

The `o-combo` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying an option between multiple input submitted by the user.

The combo component is automatically registered on its parent `o-form`, which provides the value for the combo programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

This component is different than most of other inputs, an array of data must be provided to the component in order to interact with it. This data is used to display the optoins on the drop down and each element of the data array must be an object with at least one key/value pair.

The data array can be provided in two ways:
* Provide an array of objects to the `static-data` attribute (see the [example](#basic-example) below).
* Configure the component to query the data from a service. Using `service` and `entity` attributes.

## Basic example
![Combo component]({{ "/images/components/inputs/o-combo.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-combo attr="country" label="Country" data="Spain" [static-data]="getStaticData()" value-column="name" columns="id;name" visible-columns="name" read-only="no" required="yes"></o-combo>
    <o-combo attr="country" label="Country" data="Spain" [static-data]="getStaticData()" value-column="name" columns="id;name" visible-columns="name" enabled="no"></o-combo>
</o-form>
```

## Multiple selection <span class='menuitem-badge'>new<span>

The `o-combo` component by defaults to single-selection mode, but can be configured to allow multiple selection by setting the *multiple* property. This will allow the user to select multiple values at once. 

![Multiple selection]({{ "/images/components/inputs/o-combo-multiple.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
  <o-combo #combo attr="combo-multiple" label="Country" [static-data]="getDataArray()" [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="false" layout-padding multiple="yes"></o-combo>

  <o-combo #combo attr="combo-multiple-disabled" enabled="no" label="Country" [static-data]="getDataArray()" [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" required="yes" read-only="false" layout-padding multiple="yes"></o-combo>
</o-form>
```

### Customizing the trigger label

If you want to display a custom trigger label inside a select, you must configured *multiple-trigger-label* property.

![Multiple selection]({{ "/images/components/inputs/o-combo-multiple-trigger-label.png" | absolute_url }}){: .comp-example-img}

```html
  <o-form editable-detail="no" show-header="no">
    <o-combo #combo attr="combo-multiple2" label="Country" [static-data]="getDataArray()"
     [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" 
     required="yes" read-only="false" layout-padding multiple="yes" multiple-trigger-label="yes"></o-combo>

    <o-combo #combo attr="combo-multiple-disabled" enabled="no" label="Country" [static-data]="getDataArray()"
     [data]="getValueMultiple()" value-column="key" columns="key;value" visible-columns="value" 
     required="yes" read-only="false" layout-padding multiple="yes" multiple-trigger-label="yes"></o-combo>
  </o-form>
```

If you want to change the text by default, you must to added the traslation by this key 'INPUT.COMBO.MESSAGE_TRIGGER' in your bundle

```html
 'INPUT.COMBO.MESSAGE_TRIGGER':' (+{0} others)'
 ```

## Validation
The `o-combo` shows automatically an error message when the `required` attribute is set to "yes" and there is no value selected.


You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/combo){:target="_blank"}.
