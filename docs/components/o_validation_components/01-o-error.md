---
permalink: /components/input/error/overview
title: Error component
comp: error
layout: o-component
nav_exclude: true
---

{% include base_path %}

Using the `o-error` component allows to define multiple errors messages associated to its parent `o-validator` component.

<h3 class="grey-color">Example</h3>

```html

  <o-text-input attr="input" label="{% raw %}{{ 'INPUT.BUTTON.TEXT' | oTranslate }}{% endraw %}">
    <o-validator [validator-function]="aValidator">
      <o-error name="requiredLowercaseA" text="Must contain a lowercase 'a'"></o-error>
      <o-error name="requiredUppercaseA" text="Must contain a uppercase 'A'"></o-error>
    </o-validator>
  </o-text-input>
```

```javascript
  ...

  import { ValidationErrors, FormControl } from '@angular/forms';

  aValidator(control: FormControl): ValidationErrors {
    let result = {};
    if (control.value && control.value.toString().indexOf('a') === -1) {
      result['requiredLowercaseA'] = true;
    }
    if (control.value && control.value.toString().indexOf('A') === -1) {
      result['requiredUppercaseA'] = true;
    }
    return result;
  }

  ...
```