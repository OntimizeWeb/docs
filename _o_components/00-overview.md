---
permalink : /components/input/overview/
title : "OFormDataComponent"
comp: "overview"
---
{% include toc %}

All inputs extend from FormDataComponent class.  This and other attributes are explained on the **API** section of this page.

Ontimize web supports *checkbox, combo, currency, date, email, file, html, integer, list picker, NIF, password, percent, real, text and textarea*.

## Data
You can set value with the `data` input or with method data().

```html
 <o-text-input attr="input2" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" [data]="getValue()" read-only="no" required="yes"
    tooltip="This is an awesome tooltip!"></o-text-input>
```
```javascript
  getValue() {
    return 'John Doe';
  }
```

## Validation
The input shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
## Enabled 

```html
   <o-text-input attr="input3" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" " [data]="getValue()"></o-text-input>
```

## Read-only 
Yo can configure for an input to be reandonly `read-only="yes"`.
 ```html
    <o-text-input fxFlex attr="input" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" [data]="getValue()"></o-text-input>
```
## Tooltip
To create a tooltip, add the `tooltip="tooltip"` attribute to an element. By default, the tooltip will appear on bottom of the element. Use `tooltip-position` attribute to set the position of the tooltip on *top, bottom, left or the right* side of the element.


```html
 <o-text-input attr="input2" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" [data]="getValue()" read-only="no" required="yes"
    tooltip="This is an awesome tooltip!" tooltip-position="left"></o-text-input>
```
## Width <span class='menuitem-badge'> new </span>

You can specifie the width, in px or % of a input component.

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