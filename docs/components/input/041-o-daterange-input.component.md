---
layout: o-component
permalink: /components/input/daterange/overview
title: "Date range"
comp: dateRangeInput
parent: Input
grand_parent: Components
nav_order: 9
---

{% include base_path %}
{% include toc %}

The `o-daterange-input` component is based on **Angular Material** and  is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying start and end date values as a range from a calendar pop-up or by entering the value directly in an HTML input text box.
.

When placed inside an `<o-form>`, the date range input is automatically registered on it, which provides the value for the input programatically, but it is also a standalone component that can be used on its own with Angular Reactive Forms (see [Standalone usage](#standalone-usage) below). Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

`o-daterange-input` is standalone and can be imported directly without `<o-form>`:

```typescript
import { Component } from '@angular/core';
import { ODateRangeInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ODateRangeInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ODateRangeInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, ODateRangeInputComponent],
  template: `
    <form [formGroup]="form">
      <o-daterange-input formControlName="stay" label="Date range" format="DD"></o-daterange-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    stay: new FormControl({ startDate: Date.now(), endDate: Date.now() }, Validators.required)
  });
}
```

## Basic example
![Daterange input component]({{ "/assets/images/components/inputs/o-daterange-input.png" | absolute_url }}){: .comp-example-img width='65%'}

```html
<o-form editable-detail="no" show-header="no" layout-direction="column">
    <div layout-padding>
      <label>Read only</label>
      <o-daterange-input attr="daterange1" label="DateRange" required="yes" [data]="valueTimestamp">
      </o-daterange-input>
    </div>
    <div layout-padding>
      <label>Editable</label>
      <o-daterange-input attr="daterange2" label="DateRange" read-only="no" required="yes" [data]="valueTimestamp"
        format="DD" separator=" to " [touch-ui]="mode.checked">
      </o-daterange-input>
    </div>
    <div layout-padding>
      <label class="input-comp-title">Disabled</label>
      <o-daterange-input attr="daterange3" label="DateRange" enabled="no" [data]="valueTimestamp">
      </o-daterange-input>
    </div>
  </o-form>
```


```ts
import { DateTime } from 'luxon';

export class InputDateRangeComponent {

  public selected = {};
  public valueTimestamp: { startDate: number; endDate: number; };

  constructor() {

     this.selected = {
      startDate: DateTime.fromISO('2019-05-15T00:00Z'),
      endDate: DateTime.fromISO('2019-05-20T00:00Z')
    };

    this.valueTimestamp = {
      startDate: this.selected['startDate'].toMillis(),
      endDate: this.selected['endDate'].toMillis()
    }
  }
}

```

## Disable the text input

It is possible to disable the date range input by adding the `text-input-enabled` property  is set to “no”. By default, the value is true .

## Touch UI mode

The `o-daterange-input` normally opens as a popup under the input, however the component has a `touch-ui` property that can be set to `true` in order to enable a more touch friendly UI where the calendar opens in a large dialog.

![ Touch UI mode]({{ "/assets/images/components/inputs/o-daterange-touchui.png" | absolute_url }}){: .comp-example-img}

## Customizing the parse and display formats

The `o-daterange-input` supports setting the date format via the `format` input, interpreted by the active date adapter (Luxon by default). The default format is Luxon's macro token <em>D</em> (localized short date, see the [Luxon table of tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens){:target='_blank'}), the equivalent of Moment.js' <em>L</em> used when the moment adapter is active. See the [Date handling guide]({{ base_path }}/guide/date-handling/) for the full token equivalences.

![Format int daterang input component]({{ "/assets/images/components/inputs/o-daterange-format.png" | absolute_url }}){: .comp-example-img}

```html
<div layout-padding>
  <o-daterange-input attr="daterange" label="Date range" read-only="no"
    required="yes" [data]="valueTimestamp" format="DD" separator=" to " text-input-enabled="no">
  </o-daterange-input>
</div>
```
```ts
import { DateTime } from 'luxon';

export class InputDateRangeComponent {

  public selected = {};
  public valueTimestamp: { startDate: number; endDate: number; };

  constructor() {

     this.selected = {
      startDate: DateTime.fromISO('2019-05-15T00:00Z'),
      endDate: DateTime.fromISO('2019-05-20T00:00Z')
    };

    this.valueTimestamp = {
      startDate: this.selected['startDate'].toMillis(),
      endDate: this.selected['endDate'].toMillis()
    }
  }
}
```

## StartKey and endKey

Theses 2 options are for the key you want for the value, default are *startDate* and *endDate*, it means the value we have from ngModel are: *{startDate: Date, endDate: Date}* by default;

Specifying startKey and endKey would have different model.  For example, the model in the example below would be *{start:Date, endDate:Date}*.

```html
<o-daterange-input attr="daterange" label="Date range" read-only="no" startKey="start" endKey="end"
  required="yes" [data]="valueTimestamp" format="DD" separator=" to "  text-input-enabled="no">
</o-daterange-input>

```

## Validation
The `o-daterange-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.

The `min` and `max` properties will disable all dates on the calendar popup before or after the respective values and prevent the user from advancing the calendar past the month or year (depending on current view) containing the min or max date.

```html
 <o-daterange-input attr="daterange4" label="Date range" read-only="no" required="yes"
       format="yyyy/MM/dd" value-type="string" min="2019/05/05" max="2019/05/25" [data]="valueString">
  </o-daterange-input>
```

```ts
export class InputDateRangeComponent {

  public selected = {};
  public valueString: { startDate: string; endDate: string; };

  constructor() {

    this.valueString = {
      startDate: '2019/05/15',
      endDate: '2019/05/20'
    };
  }
}
```

![Validation min and max in date range]({{ "/assets/images/components/inputs/o-daterange-input-validation-minmax-1.png" | absolute_url }}){: .comp-example-img}
![Validation min and max in date range]({{ "/assets/images/components/inputs/o-daterange-input-validation-minmax-2.png" | absolute_url }}){: .comp-example-img}


You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/daterange){:target="_blank"}.