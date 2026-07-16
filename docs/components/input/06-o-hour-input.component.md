---
layout: o-component
permalink: /components/input/hour/overview
title: "Hour"
comp: hour
parent: Input
grand_parent: Components
nav_order: 10
---

{% include base_path %}
{% include toc %}

The `o-hour-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying hour input submitted by the user.

When placed inside an `o-form`, the hour input is automatically registered on its parent, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

`o-hour-input` is a standalone component and can be imported directly without an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { OHourInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OHourInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { OHourInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OHourInputComponent],
  template: `
    <form [formGroup]="form">
      <o-hour-input formControlName="hour" label="Hour" format="24" clear-button="yes" required="yes"></o-hour-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    hour: new FormControl(Date.now(), Validators.required)
  });
}
```

## Basic example
![Hour input component]({{ "/assets/images/components/inputs/o-hour-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
   <div layout-padding>
      <label class="input-comp-title">{% raw %}{{ 'INPUTS.READ_ONLY' | oTranslate }}{% endraw %}</label>
      <o-hour-input attr="input" label="{% raw %}{{ 'INPUT.BUTTON.HOUR' | oTranslate }}{% endraw %}" [data]="getValue()"></o-hour-input>
    </div>
    <div layout-padding>
      <label class="input-comp-title">{% raw %}{{ 'INPUTS.EDITABLE' | oTranslate }}{% endraw %}</label>
      <o-hour-input attr="input2" label="{% raw %}{{ 'INPUT.BUTTON.HOUR' | oTranslate }}{% endraw %}" [data]="getValue()" read-only="no" required="yes"
        tooltip="This is an awesome tooltip!" clear-button="yes" format="24"></o-hour-input>
    </div>
    <div layout-padding>
      <label class="input-comp-title">{% raw %}{{ 'INPUTS.DISABLED' | oTranslate }}{% endraw %}</label>
      <o-hour-input attr="input3" label="{% raw %}{{ 'INPUT.BUTTON.HOUR' | oTranslate }}{% endraw %}" enabled="no" [data]="getValue()"></o-hour-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/hour){:target="_blank"}.

## Validation
The `o-hour-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the input value considering the parameters format.
