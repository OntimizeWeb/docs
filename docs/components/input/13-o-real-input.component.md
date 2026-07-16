---
layout: o-component
permalink: /components/input/real/overview
title: "Real"
comp: realInput
parent: Input
grand_parent: Components
nav_order: 18
---

{% include base_path %}
{% include toc %}

The `o-real-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying numeric input submitted by the user.

The real input is typically placed inside an `o-form`, which registers it automatically and provides the value for the input programatically — this is the recommended approach for CRUD forms. Its value can be also set manually via the `data` parameter, or the component can be used standalone with Angular Reactive Forms (see [Standalone usage](#standalone-usage) below). This and other attributes are explained on the **API** section of this page.

## Standalone usage

The `o-real-input` component is standalone and can be imported directly without going through `OntimizeWebModule` or an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { ORealInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ORealInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl`/`FormGroup` with `formControlName` instead of `data`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ORealInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, ORealInputComponent],
  template: `
    <form [formGroup]="form">
      <o-real-input formControlName="amount" label="Amount" required="yes"></o-real-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    amount: new FormControl(1430.75, Validators.required)
  });
}
```

## Basic example
![Real input component]({{ "/assets/images/components/inputs/o-real-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-real-input attr="amount" label="Amount" data="1430.75"></o-real-input>
    <o-real-input attr="result" label="Result" data="158.18614" read-only="no" required="yes"></o-real-input>
    <o-real-input attr="price" label="Price" data="95.99" enabled="no"></o-real-input>
</o-form>
```

You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/real){:target="_blank"}.

## Validation
The `o-real-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value considering the parameters `min`, `max` and the decimal digits.
