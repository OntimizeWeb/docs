---
title: "Application configuration"
permalink: /guide/appconfig/
author_profile: false
excerpt: "How tow configure an OntimizeWeb app lication."
sidebar:
  nav: "docs"
---

{% include base_path %}
{% include toc %}

## Overview

During the application development you will need to set some global parameters: application title, services url's, language, etc. Those parameters are setted into the application when angular bootstraps it.

## Application configuration

The file that contains all the configuration parameters of the application is called *app.config.ts* and it is placed on the route *app/app.config.ts*.
The content of this file is:

```javascript
import { Config } from 'ontimize-web-ngx';
import { SERVICE_CONFIG } from './shared/app.services.config';
import { MENU_CONFIG } from './shared/app.menu.config';

export const CONFIG: Config = {

  apiEndpoint: 'https://try.ontimize.com/QSAllComponents-jee/services/rest',

  uuid: 'com.ontimize.web.quickstart',

  title: 'Ontimize Web QuickStart',

  locale: 'es',

  serviceType: 'OntimizeEE',

  servicesConfiguration: SERVICE_CONFIG,

  appMenuConfiguration: MENU_CONFIG,

  applicationLocales: ['es', 'en']
};
```

The noteworthy parameters here are:

* **uuid:** Application identifier. Is the unique package identifier of the app. It is used when storing or managing temporal data related with the app. By default is set as `ontimize-web-uuid`.
* **apiEndpoint:** The base path of the URL used by app services.
* **title:** The title of the application.
* **locale:** The language of the application specified by the country code (e.g. 'es' for Spanish, 'en' for English, etc.).
* **serviceType:** The service type used in the app by framework components that request data from server. You can specify Ontimize REST standard, Ontimize REST JEE or a custom implementation
  * **Not configured (by default):** if you do not configure or specify this parameter, the framework configures Ontimize REST standard services.
  * **'OntimizeEE':** configures Ontimize REST JEE services.
  * **Custom class:** a class that extends from *Ontimize* or *OntimizeEE* default services or that implements IDataService interface.
* **servicesConfiguration:** Object that contains the services configuration parameters. Learn more [here](#services-configuration).
* **appMenuConfiguration:** Object defining application menu structure. Learn more [here](#menu-config/).
* **applicationLocales:** Set of available locales for the application.

## Services configuration

In a Ontimize Web application if the application configuration (*src\app\app.config.ts*) property that indicates the service type (`serviceType`) has the **OntimizeEE** value user will need to configure the service paths.

For doing this **OntimizeWeb** uses the `servicesConfiguration` property from the app configuration file that must point to an object defined as it follows:

```javascript
export const SERVICE_CONFIG: Object = {
  'users': {
    'path': '/users'
  },
  'customers': {
    'path': '/customers'
  },
  'branches': {
    'path': '/branches'
  },
  'movements': {
    'path': '/movements'
  },
  'employees': {
    'path': '/employees'
  },
};
```

## Menu configuration

In the QuickStart application (check it on [live example](https://ontimizeweb.github.io/ontimize-web-ngx-quickstart){:target="_blank"}) the main module component template (*src\app\main\main.component.html*) wraps the main module content into a `o-app-layout` component:

```html
<o-app-layout>
  <router-outlet></router-outlet>
</o-app-layout>
```

This component get its content from the app configuration `appMenuConfiguration` property
(in *src\app\app.config.ts*). That property refers to an array defined in a separated file (*src\app\shared\app.menu.config.ts*) where each element defines a menu entry as it follows:

```javascript
import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
{ id: 'home', name: 'HOME', icon: 'dashboard', route: '/main/home' },
{
id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
items: [
  { id: 'customers',
    name: 'CUSTOMERS',
    tooltip: 'CUSTOMERS_CONTENT',
    route: '/main/customers',
    icon: 'people',
    image: './assets/images/ontimize.png'
  },
  { id: 'accounts', name: 'ACCOUNTS', route: '/main/accounts', icon: 'credit_card' },
  { id: 'branches', name: 'BRANCHES', route: '/main/branches', icon: 'account_balance' },
  { id: 'employees', name: 'EMPLOYEES', route: '/main/employees', icon: 'person' }
]
},
{
  id: 'general', name: 'GENERAL', icon: 'info_outline', opened: false,
  items: [
    { id: 'about', name: 'ABOUT', route: '/main/about', icon: 'help_outline' }
  ]
}
];
```

**OntimizeWeb** parses each menu item configuration data and allows to use it in some components:

### App layout

The menu configuration returns the following sidenav menu layout when using the [`o-app-layout`]({{ base_path }}/components/applayout/){:target="_blank"} component:

![image-center]({{ base_path }}/images/layouts/app-layout/app_layout_sidenav.PNG){: .align-center}

### Card menu layout

The menu configuration returns the following menu cards when using the [`o-card-menu-layout`]({{ base_path }}/components/cardmenulayout/){:target="_blank"} component.
