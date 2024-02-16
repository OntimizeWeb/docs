---
permalink: /components/input/validator/overview
title: "OValidatorComponent"
comp: validator
---

{% include base_path %}

Using the `o-validator` component allows to define a validator function that will be applied to its parent input. It also allows to define a single error message.

<h3 class="grey-color">Example</h3>

```html
<o-text-input attr="input" label="{% raw %}{{ 'INPUT.BUTTON.TEXT' | oTranslate }}{% endraw %}">
  <o-validator error-name="requiredB" error-text="Must contain a 'b'"
    [validator-function]="bValidator">
  </o-validator>
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

If the new validator has more than one possible error result, user must use the [`o-error`]({{ base_path }}/components/input/error/overview){:target='_blank'} component to define the multiple errors messages.