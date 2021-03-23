---
permalink: /components/input/listpicker/overview
title: "List picker"
comp: listPicker
tab: overview
---

{% include base_path %}
{% include toc %}

The `o-list-picker` component is used in [forms]({{ base_path }}/components/form/overview) for getting or displaying an option between multiple input submitted by the user.

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
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/listpicker){:target="_blank"}.

## Validation
The `o-list-picker` shows automatically an error message when the `required` attribute is set to "yes" and there is no value selected.

## Renderers <span class='menuitem-badge'>new<span>

**OntimizeWeb** offers you a set of prebuilt table cell renderers to include in your table. This cell renderers are the following data types: *action*, *boolean*, *real*, *currency*, *date*, *integer*, *image*, *percentage* and *service*.

For adding a cell renderer to the cells of a table column, you have to configure the attribute `type` in the desired table column with the value that indicates the cell render you want to use. You may need to configure additional parametres depending on the cell renderer configured. Check the examples in the following sections and the attributes for each cell renderer in the **API** section of this page.

### Predefined renderers <span class='menuitem-badge'>new<span>

**Boolean cell renderer**

Include the table cell renderer boolean in your table column by configuring the attribute `type` in the column with the value **boolean** or adding the `o-table-cell-renderer-boolean` to the table column. You can indicate the type of the retrieved data by configuring the `boolean-type` attribute. Display a custom value by configuring `false-value` and `true-value` attributes depending on the `false-value-type` and `true-value-type` attributes. Check the configuration of this attributes in the **API** section of this page.

 ```html
<o-table-column attr="COMMISSION" title="COMMISSION" type="boolean" true-value="check_circle" false-value="highlight_off" true-value-type="icon" false-value-type="icon" boolean-type="string"></o-table-column>

<!-- Equivalent code -->

<o-table-column attr="COMMISSION" title="COMMISSION">
  <o-table-cell-renderer-boolean true-value="check_circle" false-value="highlight_off" true-value-type="icon" false-value-type="icon" boolean-type="string"></o-table-cell-renderer-boolean>
</o-table-column>
```

**Currency cell renderer**

Include the table cell renderer currency in your table column by configuring the attribute `type` in the column with the value **currency** or adding the `o-table-cell-renderer-currency` to the table column. Configure the currency symbol with the `currency-symbol` attribute. Check this and other attributes in the **API** section of this page.

```html
<o-table-column attr="BALANCE" title="BALANCE" type="currency" currency-symbol="€" currency-symbol-position="right" thousand-separator="." decimal-separator=","></o-table-column>

<!-- Equivalent code -->

<o-table-column a ttr="BALANCE" title="BALANCE">
  <o-table-cell-renderer-currency currency-symbol="€" currency-symbol-position="right" thousand-separator="." decimal-separator=","></o-table-cell-renderer-currency>
</o-table-column>
```

**Date cell renderer**

You can include the table cell renderer date in your table column by configuring the attribute `type` in the column with the value **date** or adding the `o-table-cell-renderer-date` to the table column. You may want to set the displaying date format by configuring the `format` attribute. Check this and other attributes in the **API** section of this page.

```html
<o-table-column attr="STARTDATE" title="STARTDATE" type="date"></o-table-column>

<!-- Equivalent code -->

<o-table-column attr="STARTDATE" title="STARTDATE">
  <o-table-cell-renderer-date></o-table-cell-renderer-date>
</o-table-column>
```

**Integer cell renderer**

Include the table cell renderer integer in your table column by configuring the attribute `type` in the column with the value **integer** or adding the `o-table-cell-renderer-integer` to the table column. Check the attributes of this component in the **API** section of this page.

```html
<o-table-column attr="NUMCARDS" title="NUMCARDS" type="integer"></o-table-column>

<!-- Equivalent code -->

<o-table-column attr="NUMCARDS" title="NUMCARDS">
  <o-table-cell-renderer-integer></o-table-cell-renderer-integer>
</o-table-column>
```

## Custom renderers <span class='menuitem-badge'>new<span>

A custom renderer allows you to display the value of a list-picker formatted as you desire. For this, you need to create a new component that extends the custom list-picker renderer class and place it into your o-list-picker component.

The requisites for a custom list-picker renderer component are the following:

- The component must extend the `OListPickerCustomRenderer` class.

- Your renderer template must reference the template container. For this, wrap the content of your component HTML with the `ng-template` tag and add define a template variable. Then create an attribute to your component referencing the template container defined previously, add this line to your component: `@ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>`. This will give your component a reference to acces the template container.

- If you want to customize the internal values of the list-picker, you must overwrite the `getListPickerValue` method.

You have an example of a custom renderer below. It displays a formatted date (the value is a timestamp) as the list-picker value.

```javascript
import { Component, Injector, TemplateRef ViewChild } from '@angular/core';
import * as moment from 'moment';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';

@Component({
  selector: 'custom-render',
  templateUrl: './custom-render.component.html'
})

export class CustomRendererComponent extends OListPickerCustomRenderer {

  @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

 getListPickerValue(value: any) {
    let theDate = moment.unix(value).format("DD/MM/YYYY");
    return theDate;
  }

}
```

```html
  <ng-template #templateref let-value="value">
    {% raw %}{{ getListPickerValue(value) }}{% endraw %}
  </ng-template>
```

The *let* keyword declares a template input variable that you reference within the template.

Finally, add the created component to your module for including it in your list-picker.

## Locker <span class='menuitem-badge'>new<span>

OntimizeWeb offers the `oLocker` directive to the `o-list-picker` that should to lock the component when you configure the component to query the data from a service.

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


## Filtering

You can check how to construct dependant list-pickers [here]({{ base_path }}/components/input/overviewservice/overview). You will need the attribute parent-keys to achieve this.