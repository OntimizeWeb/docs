---
layout: o-component
permalink: /components/input/percent/overview
title: "Percent"
comp: percentInput
parent: Input
grand_parent: Components
nav_order: 15
---

{% include base_path %}
{% include toc %}

The `o-percent-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying percentage input submitted by the user.

When placed inside an `o-form`, the percentage input is automatically registered on its parent, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

`o-percent-input` is a standalone component and can be imported directly, without an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { OPercentInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OPercentInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { OPercentInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OPercentInputComponent],
  template: `
    <form [formGroup]="form">
      <o-percent-input formControlName="percent" label="Percentage" required="yes"></o-percent-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    percent: new FormControl<number>(60, Validators.required)
  });
}
```

## Basic example
![Percentage input component]({{ "/assets/images/components/inputs/o-percent-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-percent-input attr="percent" label="Percentage" data="60"></o-percent-input>
    <o-percent-input attr="percent" label="Percentage" data="100" read-only="no" required="yes"></o-percent-input>
    <o-percent-input attr="percent" label="Percentage" data="52.55" enabled="no"></o-percent-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/percent){:target="_blank"}.

## Validation
The `o-percent-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
