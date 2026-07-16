---
layout: o-component
permalink: /components/input/slidetoggle/overview
title: "Slide toggle"
comp: slidetoggle
parent: Input
grand_parent: Components
nav_order: 19
---

{% include base_path %}

The `o-slide-toggle` component is used in [forms]({{ base_path }}/components/data/form/overview) for getting or displaying an on/off control.

The slide toggle component is typically registered on its parent `o-form`, which provides the value for the slide toggle programatically, but it can also be used standalone with Angular Reactive Forms (see [Standalone usage](#standalone-usage) below). Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Standalone usage

The `o-slide-toggle` is a standalone component and can be imported directly without an `<o-form>` wrapper:

```typescript
import { Component } from '@angular/core';
import { OSlideToggleComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [OSlideToggleComponent],
  templateUrl: './my-component.component.html'
})
export class MyComponent {}
```

### Reactive Forms

Bind it to a `FormControl` with `formControlName` instead of `[data]`:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { OSlideToggleComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, OSlideToggleComponent],
  template: `
    <form [formGroup]="form">
      <o-slide-toggle formControlName="active" label="Active"></o-slide-toggle>
    </form>
  `
})
export class MyComponent {
  form = new FormGroup({
    active: new FormControl(true)
  });
}
```

## Basic example
![Slide toggle component]({{ "/assets/images/components/inputs/o-slidetoggle.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="false" show-header="no">
    <o-slide-toggle attr="slidetoggle1" label="Slide toggle" [data]="true" read-only="no"></o-slide-toggle>
    <o-slide-toggle attr="slidetoggle2" label="Slide toggle disabled" enabled="no"></o-slide-toggle>
</o-form>
```

You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/slidetoggle){:target="_blank"}.
