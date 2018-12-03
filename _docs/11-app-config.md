---
title: Application configuration
permalink: /guide/appconfig/
author_profile: false
excerpt: How tow configure an OntimizeWeb app lication.
sidebar:
  nav: docs
---

{% include base_path %} {% include toc %}

# Overview

During the application development you will need to set some global parameters: application title, services paths, language, etc. Those parameters are configured into the application when angular bootstraps it.

# Application configuration

The file that contains the application configuration parameters is called _app.config.ts_ and it is placed on the _app_ folder. The content of this file is similar as the example below:

```javascript
import { Config } from 'ontimize-web-ngx';
import { SERVICE_CONFIG } from './shared/app.services.config';
import { MENU_CONFIG } from './shared/app.menu.config';

export const CONFIG: Config = {
  apiEndpoint: 'https://try.ontimize.com/QSAllComponents-jee/services/rest',
  uuid: 'com.ontimize.web.quickstart',
  title: 'Ontimize Web QuickStart',
  locale: 'es', /* Optional */
  serviceType: 'Ontimize' | 'OntimizeEE',
  servicesConfiguration: SERVICE_CONFIG,
  appMenuConfiguration: MENU_CONFIG,
  applicationLocales: ['es', 'en'],
  bundle: { /* Optional */
    endpoint: 'https://try.ontimize.com/QSAllComponents-jee/services/rest', /* Optional */
    path: '/bundlePath' /* Optional */
  },
  startSessionPath: '/startSessionPath', /* Optional */
  permissionsServiceType: 'OntimizePermissions' | 'OntimizeEEPermissions',  /* Optional */
  permissionsConfiguration: {   /* Optional */
    service: 'permissions'
  }
};
```

The noteworthy parameters here are:

- **apiEndpoint:** The base path of the URL used by the application services.
- **uuid:** The application identifier, this is the unique package identifier of the application. It is used when storing or managing temporal data related with the application. By default is set as `ontimize-web-uuid`.
- **title:** The title of the application.
- **locale:** The language of the application specified by the country code (e.g. 'es' for Spanish, 'en' for English, etc.).
- **serviceType:** The service type used in the app by framework components that request data from server. You can specify Ontimize REST standard, Ontimize REST JEE or a custom implementation

  - **Not configured (by default):** if you do not configure or specify this parameter, the framework configures Ontimize REST standard services.
  - **'OntimizeEE':** string that configures Ontimize REST JEE services.
  - **Custom class:** a service class reference that extends `OntimizeService` or `OntimizeEEService` or implements the `IDataService` interface.

- **servicesConfiguration:** Object that contains the services configuration parameters. Learn more [here](#services-configuration).
- **appMenuConfiguration:** Object defining application menu structure. Learn more [here](#menu-configuration).
- **applicationLocales:** Set of available locales for the application.
- **bundle:** bundle configuration object

  - **endpoint:** the base path of the URL used in the remote bundles query.
  - **path:** bundle query method path.

- **permissionsServiceType:** The service type used in the app by framework components that request data from server. You can specify Ontimize REST standard, Ontimize REST JEE or a custom implementation

  - **Not configured (by default):** if you do not configure or specify this parameter, the framework configures Ontimize REST standard services.
  - **'OntimizeEEPermissions':** string that configures Ontimize REST JEE services.
  - **Custom class:** a service class reference that extends `OntimizePermissions` or `OntimizeEEPermissions` or implements the `IPermissionsService` interface.

- **permissionsConfiguration:** permissions service configuration object.

# Services configuration

If you indicate in the application configuration that the application should use **OntimizeEE** services (check `serviceType` attribute in the previous section of this page), you have to configure the service paths. For doing this **OntimizeWeb** uses the `servicesConfiguration` property from the app configuration file that must point to an object defined as in the example below.

In this object, the keys represents the different services names used in the application. Every service needs a `path` property where you must set the path of the service, excluding the URL configured in the `apiEndpoint` attribute of the application configuration.

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
  'permissions': {
    'path': '/permissions/get'
  }
};
```

For clarification, if your `apiEndpoint` is the one in the [application configuration](#application-configuration) example, **OntimizeWeb** will concat the `apiEndpoint` and the `path` of the service to build the URL for sending requests. For example : _<https://try.ontimize.com/QSAllComponents-jee/services/rest/customers>_.

# Permissions configuration

The Ontimize Web application permissions are queried if the configuration file contains a valid `permissionsConfiguration` object. The service used for that is configured in the `permissionsServiceType` (using **OntimizePermissions** by default, following the same philosophy as `serviceType` attribute).

In the [permissions]({{ base_path }}/guide/permissions/){:target="_blank"} section you can see which components can use permissions and its defition.

<!-- ## OntimizePermissions For using the `OntimizePermissions` service the `permissionsConfiguration` configuration object must contain the service path defined in the SERVICE_CONFIG (defined in the previous section of this page). ```javascript ... permissionsConfiguration: { entity: , keyColumn: string, valueColumn: string } ... ``` -->

 ## OntimizeEEPermissions

For using the **OntimizeEEPermissions** service, the `permissionsConfiguration` configuration object must contain the service path defined in the SERVICE_CONFIG (defined in the previous section of this page).

```javascript
...
  permissionsConfiguration: {
    service: 'permissions'
  }
  ...
```

# Application menu

A lot of applications include a side menu for navigating through the different sections or performing actions. **OntimizeWeb** provides a prebuilt solution for this using the [`o-app-layout`]({{ base_path }}/components/applayout/){:target="_blank"} component and adding the menu configuration as explained below.

## Menu configuration

The side menu content is built automatically using the `appMenuConfiguration` property defined in the application configuration file (_app\app.config.ts_). This property refers to an array of `MenuRootItem` objects defined in a separated file (_app\shared\app.menu.config.ts_) where each object defines a menu entry.

There is different types of `MenuRootItem` depending on the task they are defined for. The two main menu item types are the `MenuGroup` and the `MenuItem`.

<details class="collapsible">
  <summary markdown="span">MenuGroup</summary>
  <div class="collapsible-content" markdown="1">

  If you want to include a menu item to group other menu items, you must include a <code>MenuGroup</code> whose attributes are the following:

  | Name    | Type    | Description |
  | ------- | ------- | ----------- |
  | id      | string  | The menu item identifier |
  | name    | string  | The menu item name |
  | icon    | string  | The menu item icon (see <a href="https://design.google.com/icons/">Google material design icons</a>{:target='_blank'}) |
  | items   | array   | The menu item children. Providing this attribute means that the menu item is a container for a group of menu items |
  | opened  | boolean | In case the <code>items</code> property is defined, indicates if the group menu item is open or not by default |
  | tooltip | string  | The tooltip text showed on the menu item when the menu is callapsed |

<code>javascript
{
  id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
  items: [
    // Include here the child menu items
  ]
}</code></div>
</details>



<details class="collapsible">
  <summary markdown="span">MenuItem</summary>
  <div class="collapsible-content" markdown="1">

  If you want to include a common menu item, you must include a <code>MenuItem</code> whith the following attributes. Note that there is some attributes that refers to the <a href="#card-menu-layout"><code>o-card-menu-layout</code></a>, this will be explained later.

  | Name                | Type                | Description |
  | ------------------- | ------------------- | ----------- |
  | id                  | string              | The menu item identifier |
  | name                | string              | The menu item name |
  | icon                | string              | The menu item icon (see <a href="https://design.google.com/icons/">Google material design icons</a>{:target='_blank'}) |
  | tooltip             | string              | The tooltip text showed on the menu item when the menu is callapsed |
  | show-in-app-sidenav | boolean             | Indicates whether or not to show the menu item in the side menu |
  | show-in-card-menu   | boolean             | Indicates whether or not to show the corresponding card in the <a href="#card-menu-layout"><code>o-card-menu-layout</code></a> |
  | image               | string              | The image displayed on the corresponding card in the <a href="#card-menu-layout"><code>o-card-menu-layout</code></a> |
  | component           | component reference | The component for the corresonding card in the <a href="#card-menu-layout"><code>o-card-menu-layout</code></a> |
  | component-inputs    | Object              | The attributes for the component for the corresponding card in the <a href="#card-menu-layout"><code>o-card-menu-layout</code></a> |

  </div>
</details>

In addition to the attributes of the `MenuItem`, you can include other attributes depending on what kind of menu item you want. All the following menu item types extend from the `MenuItem`, all its attributes are inherited.

<details class="collapsible">
  <summary markdown="span">MenuItemRoute</summary>
  <div class="collapsible-content" markdown="1">

  For navigating the different modules of your application you must include a <code>MenuItemRoute</code>, its attributes are the following:

  | Name  | Type   | Description |
  | ----- | ------ | ----------- |
  | route | string | The route the application will navigate when the menu item is clicked |

<code>javascript
{ id: 'customers', name: 'CUSTOMERS', tooltip: 'CUSTOMERS_CONTENT', route: '/main/customers', icon: 'people' }</code></div>
</details>



<details class="collapsible">
  <summary markdown="span">MenuItemAction</summary>
  <div class="collapsible-content" markdown="1">

  For triggering an action include a <code>MenuItemAction</code>, its specific attributes are the following:

  | Name        | Type     | Description |
  | ----------- | -------- | ----------- |
  | action      | function | A function called when the menu item is clicked |
  | confirm     | yes/no   | Indicates whether or not the user must confirm the menu action |
  | confirmText | string   | The confirmation text |

<code>javascript
function myFunction() {
  /<em>
    do whatever you want
  </em>/
}
...
{ id: 'action', name: 'action', icon: 'autorenew', action: myFunction }</code></div>
</details>



<details class="collapsible">
  <summary markdown="span">MenuItemLocale</summary>
  <div class="collapsible-content" markdown="1">

  For switching between different languages available in the application, add as many <code>MenuItemLocale</code> items as languages.

  | Name   | Type   | Description |
  | ------ | ------ | ----------- |
  | locale | string | The language to be configured on the application |

<code>javascript
{ id: 'lang_es', name: 'LOCALE_es', icon: 'language', locale: 'es' },
{ id: 'lang_en', name: 'LOCALE_en', icon: 'language', locale: 'en' }</code></div>
</details>



<details class="collapsible">
  <summary markdown="span">MenuItemLogout</summary>
  <div class="collapsible-content" markdown="1">

  Include a <code>MenuItemLogout</code> for login out the user of the application, its specific attributes are the following:

  | Name    | Type   | Description |
  | ------- | ------ | ----------- |
  | route   | string | The route the application will navigate when the user logs out |
  | confirm | string | Indicates whether or not the user must confirm the log out |

<code>javascript
{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }</code></div>
</details>



<details class="collapsible">
  <summary markdown="span">MenuItemUserInfo</summary>
  <div class="collapsible-content" markdown="1">

  For displaying the application user information, include a <code>MenuItemUserInfo</code> with the following attributes:

  | Name   | Type   | Description |
  | ------ | ------ | ----------- |
  | user   | string | The displayed user name |
  | avatar | string | The displayed image |

<code>javascript
{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }</code></div>
</details>

You can see an example of a menu configuration below. This is a piece of the configuration used in the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/quickstart){:target="_blank"}. You can check the full code in [GitHub](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/src/app/shared/app.menu.config.ts){:target="_blank"}.

```javascript
import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'dashboard', route: '/main/home' },
  { id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
    items: [
      { id: 'customers', name: 'CUSTOMERS', tooltip: 'CUSTOMERS_CONTENT', route: '/main/customers', icon: 'people' },
      { id: 'accounts', name: 'ACCOUNTS', tooltip: 'ACCOUNTS_CONTENT', route: '/main/accounts', icon: 'credit_card' },
      { id: 'branches', name: 'BRANCHES', tooltip: 'BRANCHES_CONTENT', route: '/main/branches', icon: 'account_balance' },
      { id: 'employees', name: 'EMPLOYEES', tooltip: 'EMPLOYEES_CONTENT', route: '/main/employees', icon: 'person'
      }
    ]
  },
  { id: 'general', name: 'GENERAL', icon: 'info_outline', opened: false,
    items: [
      { id: 'about', name: 'ABOUT', route: '/main/about', icon: 'help_outline' }
    ]
  },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
```

## Card menu layout

In addition to the side menu, **OntimizeWeb** provides [`o-card-menu-layout`]({{ base_path }}/components/cardmenulayout/){:target="_blank"} component that builds automatically a dashboard page using the menu configuration.

![Card menu layout example]({{ base_path }}/images/layouts/app-layout/card-menu-layout.png){: .align-center}

You can see this live example in the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/quickstart){:target="_blank"}.
