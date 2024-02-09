---
layout: o-component
permalink: /components/layout/breadcrumb/overview
title: "Breadcrumb"
comp: breadcrumb
parent: Layout
grand_parent: Components
nav_order: 2
---

{% include base_path %}
{% include toc %}

The `o-breadcrumb` component is used as a navigational aid when using **OntimizeWeb** [forms]({{ base_path }}/components/data/form/overview){:target="_blank"}. This component listens to route changes on the application and builds links to keep track of the locations the user is navigating through.

## Initialize

For using the breadcrum component it is necessary to initialize the `NavigationService` in order to gather the required information for building the breadcrumb component. For initializing the Navigation Service, just call the method `initialize` on the constructor of your application main component like the example below.

```js
  import { Component, Injector } from '@angular/core';
  import { NavigationService } from 'ontimize-web-ngx';

  @Component({
    selector: 'o-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent {

    constructor(protected injector: Injector) {
      this.injector.get(NavigationService).initialize();
    }

  }
```

## Example

```html
    <o-breadcrumb [form]="myForm" label-columns="NAME;SURNAME" separator=" "></o-breadcrumb>

    <o-form #myForm service="myService" entity="myEntity" keys="USERID" columns="USERID;NAME;SURNAME;ADDRESS">

        ...

    </o-form>
```
{: .note }
> If the `form` attibute is not present, the text shown in the breadcrumb label will be the corresponding route item for the component where the breadcrumb is placed.
