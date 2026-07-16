---
layout: o-component
permalink: /components/input/password/overview
title: "Password"
comp: passwordInput
parent: Input
grand_parent: Components
nav_order: 14
---

{% include base_path %}
{% include toc %}

The `o-password-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting a password input submitted by the user.

When placed inside an `o-form`, the password input is automatically registered on its parent, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

`o-password-input` is a standalone component and can be imported directly, without an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { OPasswordInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OPasswordInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { OPasswordInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OPasswordInputComponent],
  template: `
    <form [formGroup]="form">
      <o-password-input formControlName="password" label="Password" required="yes"></o-password-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    password: new FormControl('', Validators.required)
  });
}
```

## Basic example
![Password input component]({{ "/assets/images/components/inputs/o-password-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-password-input attr="password" label="Password" data="password" read-only="no" required="yes"></o-password-input>
    <o-password-input attr="password" label="Password" data="password" enabled="no"></o-password-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/password){:target="_blank"}.

## Validation
The `o-password-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
