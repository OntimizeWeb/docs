---
layout: o-component
permalink: /components/input/currency/overview
title: "Currency"
comp: currencyInput
parent: Input
grand_parent: Components
nav_order: 5
---

{% include base_path %}
{% include toc %}

The `o-currency-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying amounts of money input submitted by the user.

When placed inside an `<o-form>`, the currency input is automatically registered on it, which provides the value for the input programatically, but it is also a standalone component that can be used on its own with Angular Reactive Forms (see [Standalone usage](#standalone-usage) below). Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

`o-currency-input` is standalone and can be imported directly without `<o-form>`:

```typescript
import { Component } from '@angular/core';
import { OCurrencyInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OCurrencyInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { OCurrencyInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OCurrencyInputComponent],
  template: `
    <form [formGroup]="form">
      <o-currency-input formControlName="price" label="Price"></o-currency-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    price: new FormControl(1500, Validators.required)
  });
}
```

## Basic example
![Currency input component]({{ "/assets/images/components/inputs/o-currency-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-currency-input attr="price" label="Price" data="Jhon Doe"></o-currency-input>
    <o-currency-input attr="amount" label="Amount" data="Toronto" read-only="no"></o-currency-input>
    <o-currency-input attr="balance" label="Balance" data="Canada" enabled="no"></o-currency-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/currency){:target="_blank"}.

## Validation
The `o-currency-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
