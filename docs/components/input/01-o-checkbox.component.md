---
layout: o-component
permalink: /components/input/checkbox/overview
title: "Checkbox"
comp: checkbox
parent: Input
grand_parent: Components
nav_order: 3
---

{% include base_path %}

The `o-checkbox` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying multiple option selection input submitted by the user.

When placed inside an `<o-form>`, the checkbox is automatically registered on it, which provides the value for the checkbox programatically, but it is also a standalone component that can be used on its own with Angular Reactive Forms (see [Standalone usage](#standalone-usage) below). Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

`o-checkbox` is standalone and can be imported directly without `<o-form>`:

```typescript
import { Component } from '@angular/core';
import { OCheckboxComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OCheckboxComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { OCheckboxComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OCheckboxComponent],
  template: `
    <form [formGroup]="form">
      <o-checkbox formControlName="accepted" label="Accept terms"></o-checkbox>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    accepted: new FormControl(false)
  });
}
```

## Basic example
![Checkbox component]({{ "/assets/images/components/inputs/o-checkbox.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-checkbox attr="checkbox1" label="Checkbox" [data]="true" read-only="no" required="yes"></o-checkbox>
    <o-checkbox attr="checkbox2" label="Checkbox" enabled="no"></o-checkbox>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/checkbox){:target="_blank"}.
