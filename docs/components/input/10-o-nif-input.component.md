---
layout: o-component
permalink: /components/input/nif/overview
title: "Nif"
comp: nifInput
parent: Input
grand_parent: Components
nav_order: 13
---

{% include base_path %}
{% include toc %}

The `o-nif-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying personal identification number input submitted by the user.

When placed inside an `o-form`, the NIF input is automatically registered on its parent, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

`o-nif-input` is a standalone component and can be imported directly, without an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { ONIFInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ONIFInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ONIFInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, ONIFInputComponent],
  template: `
    <form [formGroup]="form">
      <o-nif-input formControlName="nif" label="NIF" required="yes"></o-nif-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    nif: new FormControl('53780330M', Validators.required)
  });
}
```

## Basic example
![NIF input component]({{ "/assets/images/components/inputs/o-nif-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-nif-input attr="nif1" label="NIF" data="53780330M"></o-nif-input>
    <o-nif-input attr="nif2" label="NIF" data="53780330M" read-only="no" required="yes"></o-nif-input>
    <o-nif-input attr="nif3" label="NIF" data="53780330M" enabled="no"></o-nif-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/nif){:target="_blank"}.

## Validation
The `o-nif-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value is a valid personal identification number.
