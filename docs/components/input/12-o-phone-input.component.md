---
layout: o-component
permalink: /components/input/phone/overview
title: "Phone"
comp: phoneInput
parent: Input
grand_parent: Components
nav_order: 16
---

{% include base_path %}
{% include toc %}

The `o-phone-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying a phone input submitted by the user.

The phone input is typically placed inside an `o-form`, which registers it automatically and provides the value for the input programatically — this is the recommended approach for CRUD forms. Its value can be also set manually via the `data` parameter, or the component can be used standalone with Angular Reactive Forms (see [Standalone usage](#standalone-usage) below). This and other attributes are explained on the **API** section of this page.

## Standalone usage

The `o-phone-input` component is standalone and can be imported directly without going through `OntimizeWebModule` or an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { OPhoneInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OPhoneInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl`/`FormGroup` with `formControlName` instead of `data`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { OPhoneInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OPhoneInputComponent],
  template: `
    <form [formGroup]="form">
      <o-phone-input formControlName="phone" label="Phone" required="yes"></o-phone-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    phone: new FormControl('+34 986350677')
  });
}
```

## Basic example
![Phone input component]({{ "/assets/images/components/inputs/o-phone-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-phone-input attr="phone" label="Phone" data="+34 986350677"></o-phone-input>
    <o-phone-input attr="phone" label="Phone" data="+34 986350677" read-only="no" required="yes"></o-phone-input>
    <o-phone-input attr="phone" label="Phone" data="+34 986350677" enabled="no"></o-phone-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/phone){:target="_blank"}.

## Validation
The `o-phone-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input and validates the components with the regular expressions of each country also modifying the placeholder when selecting the country.


