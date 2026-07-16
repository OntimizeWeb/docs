---
layout: o-component
permalink: /components/input/integer/overview
title: "Integer"
comp: integerInput
parent: Input
grand_parent: Components
nav_order: 12
---

{% include base_path %}
{% include toc %}

The `o-integer-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying numeric input submitted by the user.

When placed inside an `o-form`, the integer input is automatically registered on its parent, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

`o-integer-input` is a standalone component and can be imported directly, without an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { OIntegerInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OIntegerInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { OIntegerInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OIntegerInputComponent],
  template: `
    <form [formGroup]="form">
      <o-integer-input formControlName="age" label="Age" required="yes"></o-integer-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    age: new FormControl<number>(null, Validators.required)
  });
}
```

## Basic example
![Integer input component]({{ "/assets/images/components/inputs/o-integer-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-integer-input attr="age" label="Age"></o-integer-input>
    <o-integer-input attr="zipcode" label="ZIP code" read-only="no" required="yes"></o-integer-input>
    <o-integer-input attr="year" label="Year" enable="no"></o-integer-input>
</o-form>
```

You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/integer){:target="_blank"}.

## Validation
The `o-integer-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value considering the parameters `min` and `max`.
