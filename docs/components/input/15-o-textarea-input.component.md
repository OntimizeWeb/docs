---
layout: o-component
permalink: /components/input/textarea/overview
title: "Textarea input"
comp: textareaInput
parent: Input
grand_parent: Components
nav_order: 22
---

{% include base_path %}
{% include toc %}

The `o-textarea-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying text input submitted by the user.

The textarea input is typically placed inside an `o-form`, which registers it automatically and provides the value for the input programatically — this is the recommended approach for CRUD forms. Its value can be also set manually via the `data` parameter, or the component can be used standalone with Angular Reactive Forms (see [Standalone usage](#standalone-usage) below). This and other attributes are explained on the **API** section of this page.

## Standalone usage

The `o-textarea-input` component is standalone and can be imported directly without going through `OntimizeWebModule` or an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { OTextareaInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OTextareaInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl`/`FormGroup` with `formControlName` instead of `data`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { OTextareaInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OTextareaInputComponent],
  template: `
    <form [formGroup]="form">
      <o-textarea-input formControlName="longtext" label="Long text" required="yes"></o-textarea-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    longtext: new FormControl('', Validators.required)
  });
}
```

## Basic example
![Textarea input component]({{ "/assets/images/components/inputs/o-textarea-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-textarea-input attr="longtext" label="Long text" [data]="getData()" required="yes"></o-textarea-input>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/textarea){:target="_blank"}.

## Validation
The `o-textarea-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
