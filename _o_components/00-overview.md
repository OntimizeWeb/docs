---
permalink : /components/input/overview/
title : "Form data components"
comp: "overview"
---
{% include base_path %}
{% include toc %}

Form data components are components that must be placed inside a [form]({{ base_path }}/docs/components/form/){:target="_blank"} and allow for an input of data. The form data components offered by **OntimizeWeb** are checkbox, combo, currency, date, email, file, html, integer, list picker, NIF, password, percent, real, text and textarea.

All input components in **OntimizeWeb** extend the `OFormDataComponent` class. This class provides a set of methods and attributes inherited by all the input components. This methods and attributes are explained on the **API** section of this page.

## Data
You can modify value by setting the `data` attribute or calling the `setData` method.

```html
 <o-text-input attr="input2" label="{% raw %}{{ 'INPUT.BUTTON.TEXT' | oTranslate }}{% endraw %}" [data]="getValue()" read-only="no" required="yes"
    tooltip="This is an awesome tooltip!"></o-text-input>
```
```javascript
  getValue() {
    return 'John Doe';
  }
```

## Validation
The input shows automatically an error message when the `required` attribute is set to **yes** and there is no value on the input.

## Enabled 
The *enabled* mode is actived by default. You can disabled the input by setting `enabled='no'`.

```html
   <o-text-input attr="input3" label="{% raw %}{{ 'INPUT.BUTTON.TEXT' | oTranslate }}{% endraw %}" [data]="getValue()"></o-text-input>
```

## Read-only 
The *readonly* mode represents an element that is no longer editable by the user. You can configure for an input to be reandonly `read-only="yes"`.

 ```html
    <o-text-input fxFlex attr="input" label="{% raw %}{{ 'INPUT.BUTTON.TEXT' | oTranslate }}{% endraw %}" [data]="getValue()"></o-text-input>
```
## Tooltip
To create a tooltip, add the `tooltip` attribute to an element. By default, the tooltip will appear on bottom of the element. Use `tooltip-position` attribute to set the position of the tooltip on **top**, **bottom**, **left** or the **right** side of the element.

```html
 <o-text-input attr="input2" label="{% raw %}{{ 'INPUT.BUTTON.TEXT' | oTranslate }}{% endraw %}" [data]="getValue()" read-only="no" required="yes"
    tooltip="This is an awesome tooltip!" tooltip-position="left"></o-text-input>
```
## Width <span class='menuitem-badge'> new </span>

All input conponents have the `width` atribute. It allows you to can specify the width in pixels (px) or percentage (%) of the input component.

<!--
extends OFormDataComponent


export const DEFAULT_INPUTS_O_FORM_DATA_COMPONENT = [
  'oattr: attr',
  'olabel: label',
  'tooltip',
  'tooltipPosition: tooltip-position',
  'tooltipShowDelay: tooltip-show-delay',
  'data',
  'autoBinding: automatic-binding',
  'autoRegistering: automatic-registering',
  'oenabled: enabled',
  'orequired: required',
  // sqltype[string]: Data type according to Java standard. See SQLType ngClass. Default: 'OTHER'
  'sqlType: sql-type',
  'width',
  'readOnly: read-only'
];


export interface IMultipleSelection extends IComponent {
  getSelectedItems(): Array<any>;
  setSelectedItems(values: Array<any>);
}

export interface IFormDataTypeComponent extends IComponent {
  getSQLType(): number;
}

export interface IFormControlComponent extends IComponent {
  getControl(): FormControl;
  getFormControl(): FormControl;
  hasError(error: string): boolean;
}

export interface IFormDataComponent extends IFormControlComponent {
  data(value: any);
  isAutomaticBinding(): boolean;
  isAutomaticRegistering(): boolean;
}-->