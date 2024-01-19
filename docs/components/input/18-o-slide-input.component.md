---
layout: o-component
permalink: /components/input/slider/overview
title: "Slider"
comp: slider
parent: Input
grand_parent: Components
nav_order: 20
---

{% include base_path %}
{% include toc %}

The `o-slider` component is used in [forms]({{ base_path }}/components/form/overview) for selecting or displaying a value from a range via mouse, touch or keyboard.

The slider component is automatically registered on its parent `o-form`, which provides the value for the slide programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![Slider component]({{ "/assets/images/components/inputs/slider/o-slider.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="false" show-header="no">
    <div fxLayout="column" layout-padding>
        <label class="input-comp-title">{{ 'INPUTS.READ_ONLY' | oTranslate }}</label>
        <o-slider attr="slider" [data]="getValue()"></o-slider>
    </div>
    <div fxLayout="column" layout-padding>
        <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
        <o-slider #slider attr="slider-editable" [data]="getValue()"
        read-only="no" tooltip="This is an awesome tooltip!" read-only="no"></o-slider>
    </div>
    <div fxLayout="column" layout-padding>
        <label class="input-comp-title">{{ 'INPUTS.DISABLED' | oTranslate }}</label>
        <o-slider attr="slider-disabled" [data]="getValue()" enabled="no" ></o-slider>
    </div>
</o-form>
```

```
 getValue() {
    return 10;
  }
```

## Selection a value

By default the minimum value of the slider is *0*, the maximum value is *100*, and the thumb moves in increments of *1*. These values can be changed by setting the `min`, `max`, and `step` attributes respectively. The initial value is set to the minimum value unless otherwise specified.

## Orientation

By default sliders are *horizontal* with the minimum value on the left and the maximum value on the right. The `vertical` attribute can be added to a slider to make it *vertical* with the minimum value on bottom and the maximum value on top.

![Vertical slider component]({{ "/assets/images/components/inputs/slider/o-slider-vertical.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="false" show-header="no" layout-direction="row">
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
      <o-slider attr="slider-editable" [data]="getValue()" read-only="no" tooltip="This is an awesome tooltip!" vertical="true" color="warn"  max="100" min="0" thumb-label="true" step="1" tick-interval="auto"></o-slider>
    </div>
  </o-form>
```

An `invert` attribute is also available which can be specified to flip the axis that the thumb moves along. An inverted horizontal slider will have the minimum value on the right and the maximum value on the left, while an inverted vertical slider will have the minimum value on top and the maximum value on bottom.

```html
<o-form editable-detail="false" show-header="no" layout-direction="row">
    <div fxLayout="column" layout-padding fxFlex="30">
      <label class="input-comp-title">{{ 'INPUTS.EDITABLE' | oTranslate }}</label>
      <o-slider attr="slider-editable" [data]="getValue()" read-only="no" tooltip="This is an awesome tooltip!" vertical="true" color="warn"  max="100" min="0" thumb-label="true" step="1" tick-interval="auto" invert="yes"></o-slider>
    </div>
  </o-form>
```

## Thumb label

By default, the exact selected value of a slider is not visible to the user. However, this value can be added to the thumb by adding the `thumb-label` attribute.

<o-slider attr="slider-editable" read-only="no" thumb-label="true" tick-interval="1" ></o-slider>

## Tick marks

By default, sliders do not show tick marks along the thumb track. This can be enabled using the `tick-interval` attribute. The value of `tick-interval` should be a number representing the number of steps between between ticks. For example a tick-interval of 3 with a step of 4 will draw tick marks at every 3 steps, which is the same as every 12 values.

```html
 <o-slider attr="slider-editable"  read-only="no" thumb-label="true"  step="4" tickInterval="3"></o-slider>
 ```

The tick-interval can also be set to auto which will automatically choose the number of steps such that there is at least 30px of space between ticks.

```html
<o-slider attr="slider-editable" read-only="no" thumb-label="true" tick-interval="auto"></o-slider>
```

![Vertical slider component with tick-interval]({{ "/assets/images/components/inputs/slider/o-slider-vertical-tickinterval.png" | absolute_url }}){: .comp-example-img}

## Formatting the thumb label
By default, the value in the slider's thumb label will be the same as the model value, however this may end up being too large to fit into the label. If you want to control the value that is being displayed, you can do so using the displayWith input.

```html
<o-slider attr="slider-editable" label="{{ 'INPUT.SLIDER' | oTranslate }}" [data]="getValue()"
        read-only="no" tooltip="This is an awesome tooltip!" vertical="true" color="warn"  max="100" min="0" thumb-label="true" tick-interval="auto" [display-with]="formatLabel"  ></o-slider>
```
```js
 getValue() {
    return 10;
  }

  formatLabel(value: number | null) {
    if (!value) {
      value = 0;
    }
    return  value +'%';

  }

```


![Formatting the thumb label in slider component]({{ "/assets/images/components/inputs/slider/o-slider-vertical-displayWith.png" | absolute_url }}){: .comp-example-img}

You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/slider){:target="_blank"}.


