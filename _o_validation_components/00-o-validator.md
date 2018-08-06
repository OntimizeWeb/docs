---
permalink: /components/inputs/validator/
title: "OValidatorComponent"
comp: validator
---

{% include base_path %}

```html
   <o-text-input attr="input" label="{% raw %}{{ 'INPUT.BUTTON.TEXT' | oTranslate }}{% endraw %}">
        <o-validator error-name="requiredB" error-text="Must contain a 'b'" [validator-function]="bValidator"></o-validator>
  </o-text-input>
```

```javascript
  ...

  import { ValidationErrors, FormControl } from '@angular/forms';

  bValidator(control: FormControl): ValidationErrors {
    if (control.value && control.value.toString().indexOf('b') === -1) {
      return {
        'requiredB': true
      };
    }
    return {};
  }

  ...
```