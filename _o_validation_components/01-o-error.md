---
permalink: /components/inputs/error/
title: "OErrorComponent"
comp: error
---

{% include base_path %}


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