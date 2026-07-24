---
layout: o-component
permalink: /components/input/time/overview
title: "Time"
comp: time
parent: Input
grand_parent: Components
nav_order: 23
---

{% include base_path %}
{% include toc %}

The `o-time-input` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying a date and hour input submitted by the user.

The time input is typically registered on its parent `o-form`, which provides the value for the input programatically, but it can also be used standalone with Angular Reactive Forms (see [Standalone usage](#standalone-usage) below). Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

The `o-time-input` is a standalone component and can be imported directly without an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { OTimeInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OTimeInputComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { OTimeInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OTimeInputComponent],
  template: `
    <form [formGroup]="form">
      <o-time-input formControlName="startTime" label="Start time" format="24" required="yes"></o-time-input>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    startTime: new FormControl('', Validators.required)
  });
}
```

## Basic example
![Time input component]({{ "/assets/images/components/inputs/o-time-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
   <div layout-padding>
      <label class="input-comp-title">{% raw %}{{ 'INPUTS.READ_ONLY' | oTranslate }}{% endraw %}</label>
      <o-time-input attr="input" label="{% raw %}{{ 'INPUT.BUTTON.TIME' | oTranslate }}{% endraw %}" [data]="getValue()"></o-time-input>
    </div>
    <div layout-padding>
      <label class="input-comp-title">{% raw %}{{ 'INPUTS.EDITABLE' | oTranslate }}{% endraw %}</label>
      <o-time-input attr="input2" label="{% raw %}{{ 'INPUT.BUTTON.TIME' | oTranslate }}{% endraw %}" [data]="getValue()" read-only="no" required="yes"
        tooltip="This is an awesome tooltip!" clear-button="yes" format="24"></o-time-input>
    </div>
    <div layout-padding>
      <label class="input-comp-title">{% raw %}{{ 'INPUTS.DISABLED' | oTranslate }}{% endraw %}</label>
      <o-time-input attr="input3" label="{% raw %}{{ 'INPUT.BUTTON.TIME' | oTranslate }}{% endraw %}" enabled="no" [data]="getValue()"></o-time-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/time){:target="_blank"}.

## Date format and adapter

The `date-format` and `value-format` inputs are interpreted by the active date adapter (Luxon by default), following the same token syntax as `o-date-input`. See the [Date handling guide]({{ base_path }}/guide/date-handling/) for the Moment.js/Luxon token equivalences and the date adapter selection mechanism.

