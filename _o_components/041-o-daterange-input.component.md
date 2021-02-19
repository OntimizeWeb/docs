---
permalink: /components/input/daterange/overview
title: "Date range input"
comp: dateRangeInput
---

{% include base_path %}
{% include toc %}

The `o-daterange-input` component is used in [forms]({{ base_path }}/components/form/overview/) for getting or displaying start and end date values as a range from a calendar pop-up or by entering the value directly in an HTML input text box.
.

The date range input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Daterange input component]({{ "/images/components/inputs/o-daterange-input.png" | absolute_url }}){: .comp-example-img width='65%'}

```html
<o-form editable-detail="no" show-header="no" layout-direction="row">
   <o-daterange-input attr="daterange1" label="Date range" [data]="getValue()"> </o-daterange-input>
   <o-daterange-input attr="daterange2" label="Date range" read-only="no"  required="yes" [data]="getValue()"></o-daterange-input>
   <o-daterange-input attr="daterange3" label="Date range" enabled="no" [data]="getValue()"></o-daterange-input>
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

## Changing the date range's behaviour <span class='menuitem-badge'>new<span>

The `o-daterange-input` can render in two differents ways based on the `mode` property.

| Mode | Description |
|------|--------------|
| *desktop* | Show **two** calendars to select date range |
| *mobile* | Show **one** calendar to select date range |


![Date range mode ]({{ "/images/components/inputs/o-daterange-mode-mobile.png" | absolute_url }}){: .comp-example-img}
```html
<div fxLayout="row" fxLayoutAlign="end center" class="selector-mode">
  <mat-icon>desktop_mac</mat-icon>{{'MODE.DESKTOP' | oTranslate}}
  <mat-slide-toggle #mode>
    <mat-icon>smartphone</mat-icon> {{'MODE.MOBILE'| oTranslate}}
  </mat-slide-toggle>
</div>


<o-daterange-input attr="daterange" label="DATERANGE" read-only="no" required="yes" [data]="getValue()"
  clear-button="yes" format="LL" separator=" to " [mode]="mode.checked?'mobile':'desktop'">
</o-daterange-input>
```
## Touch UI mode

The `o-daterange-input` normally opens as a popup under the input, however the component has a `touch-ui` property that can be set to `true` where the calendar opens in a large dialog.


## Customizing the parse and display formats

The `o-daterange-input` supports date Moments formats setting, all you have to do is to set the format via `format` input. The format MomentJS by default is <em>L</em> (see <em>Localized formats</em> in [MomentJS format](http://momentjs.com/docs/#/displaying/format){:target='_blank'})

![Format int daterang input component]({{ "/images/components/inputs/o-daterange-format.png" | absolute_url }}){: .comp-example-img}

```html
<div fxLayout="column" layout-padding>
  <o-daterange-input attr="daterange" label="Date range" read-only="no"
    required="yes" [data]="getValue()" format="LL" separator=" to " text-input-enabled="no">
  </o-daterange-input>
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
<o-daterange-input attr="daterange" label="Date range" read-only="no" startKey="start" endKey="end"
  required="yes" [data]="getValue()" format="LL" separator=" to "  text-input-enabled="no">
</o-daterange-input>

```


## Ranges predefined

The `o-daterange-input` have available 7 predefined date ranges that you can select from. For displaying you must set `show-ranges="true"`.
- Today
- Yesterday
- Last 7 days
- Last 30 days
- This month

![Touch UI in date range]({{ "/images/components/inputs/o-daterange-touchui.png" | absolute_url }}){: .comp-example-img}

```html
<o-daterange-input attr="daterange" label="Date range" read-only="no"  required="yes"
[data]="getValue()" show-ranges="true" separator=" to " touch-ui="yes"></o-daterange-input>

```

## Validation
The `o-daterange-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.

The `min` and `max` properties will disable all dates on the calendar popup before or after the respective values and prevent the user from advancing the calendar past the month or year (depending on current view) containing the min or max date.

```html
<o-daterange-input attr="daterange" label="Date range" read-only="no"
        required="yes" [data]="getValue()" min="15/05/2019" max="20/06/2019"
        format="DD/MM/YYYY">
</o-daterange-input>
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

![Validation min and max in date range]({{ "/images/components/inputs/o-daterange-input-validation-minmax.png" | absolute_url }}){: .comp-example-img}




You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/daterange){:target="_blank"}.