---
permalink: /components/o-breadcrumb.component/
title: "Breadcrumb"
comp: breadcrumb
---

<h3 class="grey-color">Example</h3>

```html
    <o-breadcrumb [form]="myForm" label-columns="NAME;SURNAME" separator=" "></o-breadcrumb>

    <o-form #myForm service="myService" entity="myEntity" keys="USERID" columns="USERID;NAME;SURNAME;ADDRESS">
    ...
    </o-form>
```
**Note**: If *form* attibute is not present, the text shown in the breadcrumb label will be the corresponding route item for the component where the breadcrumb is placed.

<!-- <h3 class="grey-color">Initialize</h3>

For using the breadcrum component it is necessary to initialize the *NavigationService* in order to gather the required information for building the breadcrumb component. For initializing the Navigation Service, just call the method *initialize* on the constructor of your application main component like the example below.

```html
    import { Component, Injector } from '@angular/core';
    import { NavigationService } from 'ontimize-web-ngx';

    @Component({
        selector: 'o-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
    export class AppComponent {

        constructor(
            protected injector: Injector
        ) {
            this.injector.get(NavigationService).initialize();
        }

    }
``` -->
