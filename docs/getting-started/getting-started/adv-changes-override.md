---
title: "Override default logic"
permalink: /getting-started/adv-changes-override/
excerpt: "Advanced changes. Override default logic"
author_profile: false
sidebar:
        nav: "docs"
nav_exclude: true
layout: default
---

{% include base_path %}

In this section will show how to override the *o-form* component to implement our custom logic.
Some examples of its use include adding a restrictive check before send data to server, or showing a specific message after the operation was successful. This can be done by overriding the default methods within an *o-form* component. We will now create an overridden component.

Inside the *employees/edit* directory we have to create the following file:

* **employees-detail-form.component.ts:** Contains custom logic of the screen.

The content of this file is shown below:


**employees-detail.component.ts**

```bash
import { Injector, forwardRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OComponent, OFormComponent } from 'ontimize-web-ngx';

@OComponent({
  selector: 'employees-edit-form',
  providers: [{ provide: OFormComponent, useExisting: forwardRef(() => EmployeesEditFormComponent) }],
  inputs: [
    ...OFormComponent.DEFAULT_INPUTS_O_FORM
  ]
})
export class EmployeesEditFormComponent extends OFormComponent {

  constructor(
    protected router: Router,
    protected actRoute: ActivatedRoute,
    protected zone: NgZone,
    protected cd: ChangeDetectorRef,
    protected injector: Injector
  ) {
    super(router, actRoute, zone, cd, injector);
  }

  public postCorrectUpdate(result: any) {
    super.postCorrectUpdate(result);
  }

  public postIncorrectUpdate(result: any) {
    super.postIncorrectUpdate(result);
  }

}

```
As you can see, the selector of our overrided form component is '*employees-edit-form*', so we need to modify the html template and replace the default '*o-form*' selector by the overridden selector ('*employees-edit-form*').

**employees-detail-form.component.html**

```html
<div layout="row" layout-padding layout-align="center center">

  <employees-edit-form layout="column" show-header="yes" label-header="EMPLOYEES" header-actions="R;U;D" entity="EEmployees" keys="EMPLOYEEID"
    #oForm>

     ...

  </employees-edit-form>
</div>
```

Now you only need to override the desired method to apply your custom logic. You can find further
information about o-form configuration parameters in the [Components]({{ base_path }}/components/form/overview/){:target="_blank"} section.

