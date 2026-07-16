---
layout: o-component
permalink: /components/input/daterangelegacy/overview
title: "Date range legacy"
comp: dateRangeLegacyInput
parent: Input
grand_parent: Components
nav_order: 9
---

{% include base_path %}
{% include toc %}

The `o-daterange-legacy-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying start and end date values as a range from a calendar pop-up or by entering the value directly in an HTML input text box.
.

When placed inside an `o-form`, the date range input is automatically registered on its parent, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

`o-daterange-legacy-input` is a standalone component and can be imported directly without an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { ODateRangeLegacyInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ODateRangeLegacyInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ODateRangeLegacyInputComponent } from 'ontimize-web-ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, ODateRangeLegacyInputComponent],
  template: `
    <form [formGroup]="form">
      <o-daterange-legacy-input formControlName="daterange" label="Date range" required="yes"></o-daterange-legacy-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    daterange: new FormControl({ startDate: moment('2019-05-15T00:00Z'), endDate: moment('2019-05-20T00:00Z') })
  });
}
```

## Basic example
![Daterange input component]({{ "/assets/images/components/inputs/o-daterange-legacy-input.png" | absolute_url }}){: .comp-example-img width='65%'}

```html
<o-form editable-detail="no" show-header="no" layout-direction="row">
   <o-daterange-legacy-input attr="daterange1" label="Date range" [data]="getValue()"> </o-daterange-legacy-input>
   <o-daterange-legacy-input attr="daterange2" label="Date range" read-only="no"  required="yes" [data]="getValue()"></o-daterange-legacy-input>
   <o-daterange-legacy-input attr="daterange3" label="Date range" enabled="no" [data]="getValue()"></o-daterange-legacy-input>
</o-form>
```

```
export class InputDateRangeComponent {

  public selected = {};

  constructor() {

    this.selected = {
      startDate: moment('2019-05-15T00:00Z'),
      endDate: moment('2019-05-20T00:00Z')
    };
  }

  getValue(){
    return this.selected;
  }
}

```

## Disable the text input

It is possible to disable the date range input by adding the `text-input-enabled` property  is set to “no”. By default, the value is true .

## Changing the date range's behaviour

The `o-daterange-legacy-input` can render in two differents ways based on the `mode` property.

| Mode | Description |
|------|--------------|
| *desktop* | Show **two** calendars to select date range |
| *mobile* | Show **one** calendar to select date range |
| *auto* | Show  **mode mobile** if the device is a mobile otherwise **mode desktop**.


<h3>Mode mobile example</h3>
![Date range mode ]({{ "/assets/images/components/inputs/o-daterange-legacy-mode-mobile.png" | absolute_url }}){: .comp-example-img}
```html
<div fxLayoutAlign="end center" class="selector-mode">
  <mat-icon>desktop_mac</mat-icon>{{'MODE.DESKTOP' | oTranslate}}
  <mat-slide-toggle #mode>
    <mat-icon>smartphone</mat-icon> {{'MODE.MOBILE'| oTranslate}}
  </mat-slide-toggle>
</div>


<o-daterange-legacy-input attr="daterange" label="DATERANGE" read-only="no" required="yes" [data]="getValue()"
  clear-button="yes" format="LL" separator=" to " [mode]="mode.checked?'mobile':'desktop'">
</o-daterange-legacy-input>
```
## Touch UI mode

The `o-daterange-legacy-input` normally opens as a popup under the input, however the component has a `touch-ui` property that can be set to `true` where the calendar opens in a large dialog.


## Customizing the parse and display formats

The `o-daterange-legacy-input` supports date Moments formats setting, all you have to do is to set the format via `format` input. The format MomentJS by default is <em>L</em> (see <em>Localized formats</em> in [MomentJS format](http://momentjs.com/docs/#/displaying/format){:target='_blank'})

![Format int daterang input component]({{ "/assets/images/components/inputs/o-daterange-legacy-format.png" | absolute_url }}){: .comp-example-img}

```html
<div layout-padding>
  <o-daterange-legacy-input attr="daterange" label="Date range" read-only="no"
    required="yes" [data]="getValue()" format="LL" separator=" to " text-input-enabled="no">
  </o-daterange-legacy-input>
</div>
```
```ts
export class InputDateRangeComponent {

  public selected = {};

  constructor() {

    this.selected = {
      startDate: moment('2019-05-15T00:00Z'),
      endDate: moment('2019-05-20T00:00Z')
    };
  }

  getValue(){
    return this.selected;
  }
}
```

## StartKey and endKey

Theses 2 options are for the key you want for the value, default are *startDate* and *endDate*, it means the value we have from ngModel are: *{startDate: Date, endDate: Date}* by default;

Specifying startKey and endKey would have different model.  For example, the model in the example below would be *{start:Date, endDate:Date}*.

```html
<o-daterange-legacy-input attr="daterange" label="Date range" read-only="no" startKey="start" endKey="end"
  required="yes" [data]="getValue()" format="LL" separator=" to "  text-input-enabled="no">
</o-daterange-legacy-input>

```


## Ranges predefined

The `o-daterange-legacy-input` have available 7 predefined date ranges that you can select from. For displaying you must set `show-ranges="true"`.
- Today
- Yesterday
- Last 7 days
- Last 30 days
- This month

![Touch UI in date range]({{ "/assets/images/components/inputs/o-daterange-legacy-touchui.png" | absolute_url }}){: .comp-example-img}

```html
<o-daterange-legacy-input attr="daterange" label="Date range" read-only="no"  required="yes"
[data]="getValue()" show-ranges="true" separator=" to " touch-ui="yes"></o-daterange-legacy-input>

```

## Validation
The `o-daterange-legacy-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.

The `min` and `max` properties will disable all dates on the calendar popup before or after the respective values and prevent the user from advancing the calendar past the month or year (depending on current view) containing the min or max date.

```html
<o-daterange-legacy-input attr="daterange" label="Date range" read-only="no"
        required="yes" [data]="getValue()" min="15/05/2019" max="20/06/2019"
        format="DD/MM/YYYY">
</o-daterange-legacy-input>
```

```
export class InputDateRangeComponent {

  public selected = {};

  constructor() {

    this.selected = {
      startDate: moment('2019-05-15T00:00Z'),
      endDate: moment('2019-05-20T00:00Z')
    };
  }

  getValue(){
    return this.selected;
  }
}
```

![Validation min and max in date range]({{ "/assets/images/components/inputs/o-daterange-legacy-input-validation-minmax.png" | absolute_url }}){: .comp-example-img}


You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/daterangelegacy){:target="_blank"}.