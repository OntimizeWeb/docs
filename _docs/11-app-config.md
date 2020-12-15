---
title: Application configuration
permalink: /guide/appconfig/
author_profile: false
excerpt: How tow configure an OntimizeWeb application.
sidebar:
  nav: docs
---

{% include base_path %} {% include toc %}

During the application development *you will need to set some global parameters*: application title, services paths, language, etc. Those parameters are configured into the application when angular bootstraps it.

# Application configuration file

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
  defaultLocale: 'en',
  remoteConfig: { /* Optional */
    path: '/configPath',
    endpoint: 'https://try.ontimize.com/QSAllComponents-jee/services/rest', /* Optional */
    timeout: 60000, /* Optional */
    columns: { /* Optional */
      user: 'USER_', /* Optional */
      appId: 'APP_UUID', /* Optional */
      configuration: 'CONFIGURATION' /* Optional */
    }
  },
  bundle: { /* Optional */
    endpoint: 'https://try.ontimize.com/QSAllComponents-jee/services/rest', /* Optional */
    path: '/bundlePath' /* Optional */
  },
  startSessionPath: '/startSessionPath', /* Optional */
  permissionsServiceType: 'OntimizePermissions' | 'OntimizeEEPermissions', /* Optional */
  permissionsConfiguration: { /* Optional */
    service: 'permissions'
  }
};
```
{: .no-scroll}

The noteworthy parameters here are:

- **apiEndpoint:** The base path of the URL used by the application services.
- **uuid:** The application identifier, this is the unique package identifier of the application. It is used when storing or managing temporal data related with the application. By default is set as `ontimize-web-uuid`.
- **title:** The title of the application.
- **locale:** The language of the application specified by the country code (e.g. 'es' for Spanish, 'en' for English, etc.).
- **serviceType:** The service type used in the app by framework components that request data from server. You can specify Ontimize REST standard, Ontimize REST JEE or a custom implementation.
  - **Not configured (by default):** if you do not configure or specify this parameter, the framework configures Ontimize REST standard services.
  - **'OntimizeEE':** string that configures Ontimize REST JEE services.
  - **Custom class:** a service class reference that extends `OntimizeService` or `OntimizeEEService` or implements the `IDataService` interface.
- **servicesConfiguration:** Object that contains the services configuration parameters. Learn more [here](#services-configuration).
- **appMenuConfiguration:** Object defining application menu structure. Learn more [here](#menu-configuration).
- **applicationLocales:** Set of available locales for the application.
- **defaultLocale:** Default language if browser language is not found in application. This value must exist into `applicationLocales`.
- **remoteConfig:** remote configuration object. You can read more about this [here](#remote-configuration).
  - **path:** remote configuration path.
  - **endpoint:** the base path of the URL used for the remote configuration requests. Default value is provided by `apiEndpoint`.
  - **timeout:** the timeout for the remote configuration requests.
  - **columns:** the remote column names.
    - **user:** the name of the column where the user name is stored remotely.
    - **appId:** the name of the column where the application identifier is stored remotely.
    - **configuration:** the name of the column where the configuration is stored remotely.
- **bundle:** bundle configuration object.
  - **endpoint:** the base path of the URL used in the remote bundles query.
  - **path:** bundle query method path.
- **permissionsServiceType:** The service type used in the app by framework components that request data from server. You can specify Ontimize REST standard, Ontimize REST JEE or a custom implementation.
  - **Not configured (by default):** if you do not configure or specify this parameter, the framework configures Ontimize REST standard services.
  - **'OntimizeEEPermissions':** string that configures Ontimize REST JEE services.
  - **Custom class:** a service class reference that extends `OntimizePermissions` or `OntimizeEEPermissions` or implements the `IPermissionsService` interface.
- **permissionsConfiguration:** permissions service configuration object.

# Package.json configuration

This file configures npm package dependencies and contains all of the scripts for the project and you have to replace the references of "ontimize-web-ngx-jee-seed" by the name of your project "your_app_name"

<figure class="highlight">
  <pre>
    <code>
    {
      <del>"name": "ontimize-web-ngx-jee-seed",</del>
      "name": "your_app_name",
      "version": "1.0.0",
      "scripts": {
        "ng": "ng",
        "start": "ng serve --port 4299",
        "production": "ng build --aot=false --target -prod",
        <del>"production-aot": "ontimize-web-ngx production-aot --project-name ontimize-web-ngx-jee-seed --href /ontimize-web-ngx-jee-seed/"</del>
        "production-aot": "ontimize-web-ngx production-aot --project-name your_app_name--href /your_app_name/"
      },
    ..
      "dependencies": {
        ..
      },
      "devDependencies": {
        ..
      }
    }
    </code>
  </pre>
</figure>

# Angular.json configuration

The file angular.json provides workspace-wide and project-specific configuration defaults for build and development tools provided by the Angular CLI.

You have to replace the references of "ontimize-web-ngx-jee-seed" by the name of your project "your_app_name"

<figure class="highlight">
  <pre>
    <code>
    ...
    "projects": {
      <del>"ontimize-web-ngx-jee-seed": {</del>
      "your_app_name": {
        ...
          "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "options": {
              <del>"browserTarget": "ontimize-web-ngx-jee-seed:build"</del>
              "browserTarget": "your_app_name:build"
            },
            "configurations": {
              "production": {
                <del>"browserTarget": "ontimize-web-ngx-jee-seed:build:production"</del>
                "browserTarget": "your_app_name:build:production"
              }
            }
          },
          "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            <del>"browserTarget": "ontimize-web-ngx-jee-seed:build"</del>
            "browserTarget": "your_app_name:build"
          }
          }
          ....

      <del>"ontimize-web-ngx-jee-seed-e2e": {</del>
      "your_app_name-e2e": 
      "root": "e2e",
      "sourceRoot": "e2e",
      "projectType": "application",
      "architect": {
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "./protractor.conf.js",
            <del>"devServerTarget": "ontimize-web-ngx-jee-seed:serve"</del>
            "devServerTarget": "your_app_name:serve"
          }
        },
        ..
        }
    ...
    },
  <del>"defaultProject": "ontimize-web-ngx-jee-seed"</del>
  "defaultProject": "your_app_name
  ...
      }
    </code>
  </pre>
</figure>

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

# Internationalization (i18) configuration

*Ontimize Web* providers the `locale` attribute to configure the language of the application, this attribute will be an identifier that refers to of user preferences as displaying dates, numbers, ..., translation of words and in `applicationLocales` which configure the `locale id ` availables in the language selector in `<o-app-sidenav>`. For more information see in [OTranslateService]({{ base_path }}/guide/otranslateservice/){:target="_blank"}.


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

# Remote configuration

Some components in **OntimizeWeb** store the changes made by the user in local storage. This configuration may also be stored on a remote server in order to be loaded when the user uses the application in different browsers or devices.

For storing the user configuration remotely it is only necessary to add the `remoteConfig` object to the application configuration (see the [example above](#application-configuration-file)). The `path` attribute is the only one that is mandatory, the other parameters have a default value as you can see in the example.

Read more about how to configure the remote configuration [here]({{ base_path }}/guide/remoteconfig/){:target="_blank"}.

# Application menu

A lot of applications include a side menu for navigating through the different sections or performing actions. **OntimizeWeb** provides a prebuilt solution for this using the [`o-app-layout`]({{ base_path }}/components/applayout/overview/){:target="_blank"} component and adding the menu configuration as explained below.

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
  | class   | string  | The CSS class applied to the menu group |

  <span>Example:</span>
  ```javascript
  {
    id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
    items: [
      // Include here the child menu items
    ]
  }
  ```
</div>
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
  | class               | string  | The CSS class applied to the menu item |
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

  <span>Example:</span>
  ```javascript
  { id: 'customers', name: 'CUSTOMERS', tooltip: 'CUSTOMERS_CONTENT', route: '/main/customers', icon: 'people' }
  ```
  </div>
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

  <span>Example:</span>
  ```javascript
  function myFunction() {
    // do whatever you want
  }
  ...
  { id: 'action', name: 'action', icon: 'autorenew', action: myFunction }
  ```
  </div>
</details>

<details class="collapsible">
  <summary markdown="span">MenuItemLocale</summary>
  <div class="collapsible-content" markdown="1">

  For switching between different languages available in the application, add as many <code>MenuItemLocale</code> items as languages.

  | Name   | Type   | Description |
  | ------ | ------ | ----------- |
  | locale | string | The language to be configured on the application |

  <span>Example:</span>
  ```javascript
  { id: 'lang_es', name: 'LOCALE_es', icon: 'language', locale: 'es' },
  { id: 'lang_en', name: 'LOCALE_en', icon: 'language', locale: 'en' }
  ```
  </div>
</details>

<details class="collapsible">
  <summary markdown="span">MenuItemLogout</summary>
  <div class="collapsible-content" markdown="1">

  Include a <code>MenuItemLogout</code> for login out the user of the application, its specific attributes are the following:

  | Name    | Type   | Description |
  | ------- | ------ | ----------- |
  | route   | string | The route the application will navigate when the user logs out |
  | confirm | string | Indicates whether or not the user must confirm the log out |

  <span>Example:</span>
  ```javascript
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
  ```
  </div>
</details>

<details class="collapsible">
  <summary markdown="span">MenuItemUserInfo</summary>
  <div class="collapsible-content" markdown="1">

  For displaying the application user information, include a <code>MenuItemUserInfo</code> with the following attributes:

  | Name   | Type   | Description |
  | ------ | ------ | ----------- |
  | user   | string | The displayed user name |
  | avatar | string | The displayed image |

  <span>Example:</span>
  ```javascript
  { id: 'userinfo', name: 'USER', user: 'Profile', avatar: '../../assets/images/user_profile.png' }
  ```
  </div>
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

In addition to the side menu, **OntimizeWeb** provides [`o-card-menu-layout`]({{ base_path }}/components/cardmenulayout/overview/){:target="_blank"} component that builds automatically a dashboard page using the menu configuration.

![Card menu layout example]({{ base_path }}/images/layouts/app-layout/card-menu-layout.png){: .align-center}

You can see this live example in the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/quickstart){:target="_blank"}.
