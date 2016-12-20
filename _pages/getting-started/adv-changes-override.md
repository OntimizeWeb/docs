---
title: "Override default logic"
permalink: /getting-started/adv-changes-override/
excerpt: "Advanced changes. Override default logic"
modified: 2016-12-19T08:25:30-04:00
author_profile: false
sidebar:
        nav: "docs"
---

{% include base_path %}

In this section we are going to show how to override the *o-form* component to implement our custom logic. Sometimes it can be interesting
when you are editing to add a restrictive check before send data to server, or to show an specific message after the operation was successful. It 
can be done by overriding the default methods implmented on *o-form* component. So, it is time to create overrided component.

Inside the *+employees/edit* directory we have to create the following file: 

* **employees-detail-form.component.ts:** Contains custom logic of the screen.

So, the content of this file is shown below:




**employees-detail.component.ts**

```bash
import { Injector, forwardRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OComponent, OFormComponent } from 'ontimize-web-ng2/ontimize';

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
As you can see, the selector of our overrided form component is 'employees-edit-form', so it is necessary to modify the html template and 
replace default 'o-form' selector by overrided selector ('employees-edit-form').

**employees-detail-form.component.html**

```html
<div layout="row" layout-padding layout-align="center center">

  <employees-edit-form layout="column" show-header="yes" label-header="EMPLOYEES" header-actions="R;U;D" entity="EEmployees" keys="EMPLOYEEID"
    #oForm>

     ...

  </employees-edit-form>
</div>
```

After that, you only have to override the desired method to apply your custom logic. You can find further information about *o-form* configuration parameters 
into [Components]({{ base_path }}/components/o-form.component/) section. 

