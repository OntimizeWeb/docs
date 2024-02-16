---
permalink: /components/input/error/overview
title: "OErrorComponent"
comp: error
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



```html
<o-text-input attr="input" label="{% raw %}{{ 'INPUT.BUTTON.TEXT' | oTranslate }}{% endraw %}">
  <o-validator [async-validator-function]="asyncLowercaseAValidator">
    <o-error name="requiredLowercaseA" text="Must contain a lowercase 'a'"></o-error>
  </o-validator>
</o-text-input>
```

```javascript
...
asyncLowercaseAValidator: AsyncValidatorFn;

constructor(private charValidatorService: CharValidatorService) {
  this.asyncLowercaseAValidator = AsyncValidatorsHelper.createValidator(this.charValidatorService.containsLowercaseA())
}
...
```


```javascript
interface CharValidator {
  fn: (value: string) => Observable<boolean>
  error: { [key: string]: boolean; }
}


@Injectable({
  providedIn: 'root',
})
export class CharValidatorService {

  containsLowercaseA(): CharValidator {
    return {
      fn: (value: string): Observable<boolean> => {
        return of(value.indexOf('a') !== -1).pipe(delay(1000))
      },
      error: {
        'requiredLowercaseA': true
      }
    }
  }

  containsUppercaseA(): CharValidator {
    return {
      fn: (value: string): Observable<boolean> => {
        return of(value.indexOf('A') !== -1).pipe(delay(1000))
      },
      error: {
        'requiredUppercaseA': true
      }
    }
  }

  containsB(): CharValidator {
    return {
      fn: (value: string): Observable<boolean> => {
        return of(value.indexOf('b') !== -1).pipe(delay(1000))
      },
      error: {
        'requiredB': true
      }
    }
  }
}
```

```javascript
export class AsyncValidatorsHelper {
  static createValidator(validator: CharValidator): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return control.value ?
        validator.fn(control.value)
          .pipe(
            map((isValid: boolean) => isValid ? null : validator.error)
          )
        : of(null)
    };
  }
}
```