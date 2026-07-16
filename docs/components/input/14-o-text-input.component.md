---
layout: o-component
permalink: /components/input/text/overview
title: "Text"
comp: textInput
parent: Input
grand_parent: Components
nav_order: 21
---

{% include base_path %}
{% include toc %}

The `o-text-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying text input submitted by the user.

The text input is typically placed inside an `o-form`, which registers it automatically and provides the value for the input programatically — this is the recommended approach for CRUD forms. Its value can be also set manually via the `data` parameter, or the component can be used standalone with Angular Reactive Forms (see [Standalone usage](#standalone-usage) below). This and other attributes are explained on the **API** section of this page.

## Standalone usage

The `o-text-input` component is standalone and can be imported directly without going through `OntimizeWebModule` or an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OTextInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl`/`FormGroup` with `formControlName` instead of `data`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OTextInputComponent],
  template: `
    <form [formGroup]="form">
      <o-text-input formControlName="name" label="Name" required="yes"></o-text-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    name: new FormControl('Jhon Doe', Validators.required)
  });
}
```

## Basic example
![Text input component]({{ "/assets/images/components/inputs/o-text-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-text-input attr="name" label="Name" data="Jhon Doe"></o-text-input>
    <o-text-input attr="city" label="City" data="Toronto" read-only="no" required="yes"></o-text-input>
    <o-text-input attr="state" label="Country" data="Canada" enabled="no"></o-text-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/text){:target="_blank"}.

## Prefix and suffix
Custom content can be included before and after the input tag, as a prefix or suffix adding the `oMatPrefix` directive to an element inside the <o-text-input> will designate it as the prefix. Similarly, adding `oMatSuffix` will designate it as the suffix.

```html
   <o-text-input attr="input" label="Text" data="John Doe" read-only="no" required="yes">
      <mat-icon oMatSuffix>sentiment_very_satisfied</mat-icon>
    </o-text-input>
```

![Prefix in o-text-input component]({{ "/assets/images/components/inputs/o-text-input-prefix.png" | absolute_url }}){: .comp-example-img}

## String case <span class='menuitem-badge'>new<span>

If your use case requires to manage value in lowercase or uppercase, you can do so by setting `string-case` input in `o-text-input`. This behavior can be configured globally using the `O_INPUTS_OPTIONS` injection token.

```html
    <o-text-input attr="ADDRESS" class="gap"  string-case="uppercase"></o-text-input>
```

or/and

```ts
...
  { provide: O_INPUTS_OPTIONS, useValue: {stringCase: 'uppercase' } },
...
```

![string-case in o-text-input component]({{ "/assets/images/components/inputs/string-case.png" | absolute_url }}){: .comp-example-img}


## Regulate-pattern <span class='menuitem-badge'>new<span>
You can use `regulate-pattern` attribute to restrict inputs based on a regex pattern.

```html
 <o-text-input #inputRepulate attr="input-repulate" label="Only Numbers"  read-only="no" required="yes" regulate-pattern="^[A-Z]*$"></o-text-input>
```

Here the `o-text-input` is regulated to have only numbers any other inputs will be restricted

## Validation
The `o-text-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.
