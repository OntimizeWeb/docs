---
permalink: /components/input/listpicker/
title: "List picker"
comp: listPicker
---

{% include base_path %}
{% include toc %}

The `o-list-picker` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying an option between multiple input submitted by the user.

The list picker component is automatically registered on its parent `o-form`, which provides the value for the list picker programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

This component is different than most of other inputs, an array of data must be provided to the component in order to interact with it. This data is used to display the optoins on the list and each element of the data array must be an object with at least one key/value pair. 

The data array can be provided in two ways:
* Provide an array of objects to the `static-data` attribute (see the [example](#basic-example) below).
* Configure the component to query the data from a service. Using `service` and `entity` attributes.

Once some data has been provided to the component, the user can see the option list by clicking in the search button of the component. Choosing an option, the list will close up and the selected value will be set to the input.

## Basic example
![List picker component]({{ "/images/components/inputs/o-list-picker.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-list-picker attr="country" label="Country" data="Spain" [static-data]="getStaticData()" value-column="name" columns="id;name" visible-columns="name" read-only="no" required="yes"></o-list-picker>
    <o-list-picker attr="country" label="Country" data="Spain" [static-data]="getStaticData()" value-column="name" columns="id;name" visible-columns="name" enabled="no"></o-list-picker>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/listpicker){:target="_blank"}.

## Validation
The `o-list-picker` shows automatically an error message when the `required` attribute is set to "yes" and there is no value selected.

## Locker

OntimizeWeb offers the `oLocker` directive to the `o-list-picker` that should to lock the component when you configure the component to query the data from a service

```html
<o-list-picker attr="CUSTOMERID LOAD" oLocker oLockerMode="load" oLockerDelay="1500"
    read-only="no" service="customers" entity="customer" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL"
    value-column="CUSTOMERID" keys="CUSTOMERID" visible-columns="NAME" width="30%">
</o-list-picker>

<o-list-picker attr="CUSTOMERID DISABLED" oLocker oLockerMode="disable" read-only="no" service="customers"
    entity="customer" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL" value-column="CUSTOMERID"
    keys="CUSTOMERID" visible-columns="NAME" width="30%">
</o-list-picker>
```
![OLocker in  Combo component]({{ "/images/components/inputs/listPicker-oLocker.gif" | absolute_url }}){: .comp-example-img}

Note you can configure the mode of the locker, there are two modes to block, *disable* and *load* mode. The mode by default is *load*. You can configure  delay service start with `oLockerDelay` attribute, by default this value is the *250ms*.
