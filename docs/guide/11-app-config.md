---
layout: default
title: Application configuration
permalink: /guide/appconfig/
author_profile: false
excerpt: How tow configure an OntimizeWeb application.
sidebar:
  nav: docs
parent: Guide
nav_order: 2
---

{% include base_path %} {% include toc %}

During the application development *you will need to set some global parameters*: application title, services paths, language, etc. Those parameters are configured into the application when angular bootstraps it.

# Application configuration file

The file that contains the application configuration parameters is called _app.config.ts_ and it is placed on the _app_ folder. The content of this file is similar as the example below:

```javascript
import { Config } from 'ontimize-web-ngx';
import { SERVICE_CONFIG } from './shared/app.services.config';
import { MENU_CONFIG } from './shared/app.menu.config';
import { environment } from '../environments/environment';

export const CONFIG: Config = {
  apiEndpoint: environment.apiEndpoint,
  uuid: 'com.ontimize.web.quickstart',
  title: 'Ontimize Web QuickStart',
  locale: 'es', /* Optional */
  serviceType: 'Ontimize' | 'OntimizeEE',/* Optional */
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
  },
  exportConfiguration: {
    path:'/export'
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
  - **Not configured (by default):** if you do not configure or specify this parameter, the framework configures  Ontimize REST standard services.
  - **'Ontimize'(default):** string that configures Ontimize REST services.
  - **'OntimizeEE':** string that configures Ontimize REST JEE services and is the default value.
  - **Custom class:** a service class reference that extends `OntimizeService` or `OntimizeEEService` or implements the `IDataService` interface. More information [here]({{ base_path }}/guide/service/#extending-ontimize-web-services){:target="_blank"}.
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
  - **Not configured (by default):** if you do not configure or specify this parameter, the framework configures Ontimize REST JEE services.
  - **'OntimizePermissions'** string that configures Ontimize REST standard services.
  - **'OntimizeEEPermissions':** string that configures Ontimize REST JEE services and is the default value
  - **Custom class:** a service class reference that extends `OntimizePermissions` or `OntimizeEEPermissions` or implements the `IPermissionsService` interface.
- **permissionsConfiguration:** permissions service configuration object.
- **exportConfiguration**: export configuration object required only with `Ontimize Boot version 3.9.0 or above`
  -  **path**: the export path used in the remote package query compatible.

# Package.json configuration

This file configures npm package dependencies and contains all of the scripts for the project and you have to replace the references of "ontimize-web-ngx-jee-seed" by the name of your project "your_app_name"

<figure class="highlight">
  <pre>
    <code>
    {
      "name": "your_app_name",
      "version": "1.0.0",
      "scripts": {
        "ng": "ng",
        "start": "ng serve --port 4299",
        "build": "ng build",
        "watch": "ng build --watch --configuration development",
        "test": "ng test",
        "lint": "ng lint",
        "production": "ng build --prod=true --baseHref=/your_app_name/"
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
    {
      "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
      "version": 1,
      "newProjectRoot": "projects",
      "projects": {
        "your_app_name": {
          "projectType": "application",
          "schematics": {},
          "root": "",
          "sourceRoot": "src",
          "prefix": "app",
          "architect": {
            "build": {
              "builder": "@angular-devkit/build-angular:browser",
              "options": {
                "outputPath": "dist/your_app_name",
                "index": "src/index.html",
                "main": "src/main.ts",
                "polyfills": "src/polyfills.ts",
                "tsConfig": "tsconfig.app.json",
                "assets": [
                  "src/favicon.ico",
                  "src/assets",
                  {
                    "glob": "**/*",
                    "input": "node_modules/ontimize-web-ngx/assets",
                    "output": "/assets"
                  },
                  {
                    "glob": "**/*",
                    "input": "node_modules/ngx-extended-pdf-viewer/assets",
                    "output": "/assets"
                  },
                  "src/manifest.webmanifest"
                ],
                "styles": [
                  "node_modules/ontimize-web-ngx/ontimize.scss",
                  "src/assets/css/app.scss",
                  "src/styles.scss"
                ],
                "stylePreprocessorOptions": {
                  "includePaths": [
                    "./node_modules"
                  ]
                },
                "scripts": [
                  "src/assets/js/domchange.js",
                  "src/assets/js/keyboard.js"
                ],
                "allowedCommonJsDependencies": [
                  "google-libphonenumber",
                  "moment"
                ]
              },
              "configurations": {
                "production": {
                  "budgets": [
                    {
                      "type": "initial",
                      "maximumWarning": "2mb",
                      "maximumError": "5mb"
                    },
                    {
                      "type": "anyComponentStyle",
                      "maximumWarning": "6kb",
                      "maximumError": "10kb"
                    }
                  ],
                  "fileReplacements": [
                    {
                      "replace": "src/environments/environment.ts",
                      "with": "src/environments/environment.prod.ts"
                    }
                  ],
                  "serviceWorker": true,
                  "ngswConfigPath": "ngsw-config.json",
                  "outputHashing": "all"
                },
                "development": {
                  "buildOptimizer": false,
                  "optimization": false,
                  "vendorChunk": true,
                  "extractLicenses": false,
                  "sourceMap": true,
                  "namedChunks": true
                }
              },
              "defaultConfiguration": "production"
            },
            "serve": {
              "builder": "@angular-devkit/build-angular:dev-server",
              "options": {
                "browserTarget": "your_app_name:build"
              },
              "configurations": {
                "production": {
                  "browserTarget": "your_app_name:build:production"
                },
                "development": {
                  "browserTarget": "your_app_name:build:development"
                }
              },
              "defaultConfiguration": "development"
            },
            "extract-i18n": {
              "builder": "@angular-devkit/build-angular:extract-i18n",
              "options": {
                "browserTarget": "your_app_name:build"
              }
            },
            "test": {
              "builder": "@angular-devkit/build-angular:karma",
              "options": {
                "main": "src/test.ts",
                "polyfills": "src/polyfills.ts",
                "tsConfig": "tsconfig.spec.json",
                "karmaConfig": "karma.conf.js",
                "assets": [
                  "src/favicon.ico",
                  "src/assets",
                  "src/manifest.webmanifest"
                ],
                "styles": [
                  "src/styles.css"
                ],
                "scripts": []
              }
            },
            "e2e": {
              "builder": "@angular-devkit/build-angular:protractor",
              "options": {
                "protractorConfig": "e2e/protractor.conf.js",
                "devServerTarget": "your_app_name:serve"
              },
              "configurations": {
                "production": {
                  "devServerTarget": "your_app_name:serve:production"
                }
              }
            },
            "lint": {
              "builder": "@angular-eslint/builder:lint",
              "options": {
                "lintFilePatterns": [
                  "src/**/*.ts",
                  "src/**/*.html"
                ]
              }
            }
          }
        }
      },
      "cli": {
        "schematicCollections": [
          "@angular-eslint/schematics"
        ],
        "cache": {
          "enabled": false
        }
      },
      "schematics": {
        "@angular-eslint/schematics:application": {
          "setParserOptionsProject": true
        },
        "@angular-eslint/schematics:library": {
          "setParserOptionsProject": true
        }
      }
    }
    </code>
  </pre>
</figure>


# Services configuration

If you indicate in the application configuration that the application should use **OntimizeEE** services (check `serviceType` attribute in the [previous section](#application-configuration-file) of this page), you have to configure the service paths. For doing this **OntimizeWeb** uses the `servicesConfiguration` property from the app configuration file that must point to an object defined as in the example below.

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

For clarification, if your `apiEndpoint` is the one in the [application configuration](#application-configuration-file) example, **OntimizeWeb** will concat the `apiEndpoint` and the `path` of the service to build the URL for sending requests. For example : https://try.ontimize.com/QSAllComponents-jee/services/rest/customers.

# Internationalization (i18) configuration

*Ontimize Web* providers the `locale` attribute to configure the language of the application, this attribute will be an identifier that refers to of user preferences as displaying dates, numbers, ..., translation of words and in `applicationLocales` which configure the `locale id ` availables in the language selector in `<o-app-sidenav>`. For more information see in [OTranslateService]({{ base_path }}/guide/otranslateservice/overview){:target="_blank"}.


# Permissions configuration

The Ontimize Web application permissions are queried if the configuration file contains a valid `permissionsConfiguration` object and the service used for that is configured in the `permissionsServiceType`. If you do not configure or specify this parameter, the framework configures Ontimize REST JEE services

In the [permissions]({{ base_path }}/guide/permissions/){:target="_blank"} section you can see which components can use permissions and its defition.

<!-- ## OntimizePermissions For using the `OntimizePermissions` service the `permissionsConfiguration` configuration object must contain the service path defined in the SERVICE_CONFIG (defined in the previous section of this page). ```javascript ... permissionsConfiguration: { entity: , keyColumn: string, valueColumn: string } ... ``` -->

## OntimizeEEPermissions

For using the **OntimizeEEPermissions** service, the `permissionsConfiguration` configuration object must contain the service path defined in the SERVICE_CONFIG (defined in the previous section of this page) and `permissionsServiceType` must contain `OntimizeEEPermissions` value, otherwise is configured the framework configures Ontimize REST JEE services by default.

```javascript
  ...
  permissionsServiceType: 'OntimizeEEPermissions',/* Optional, OntimizeEEPermissions is the default value */
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

A lot of applications include a side menu for navigating through the different sections or performing actions. **OntimizeWeb** provides a prebuilt solution for this using the [`o-app-layout`]({{ base_path }}/components/layout/applayout/overview){:target="_blank"} component and adding the menu configuration as explained below.

## Menu configuration

The side menu content is built automatically using the `appMenuConfiguration` property defined in the application configuration file (_app\app.config.ts_). This property refers to an array of `MenuRootItem` objects defined in a separated file (_app\shared\app.menu.config.ts_) where each object defines a menu entry.

There is different types of `MenuRootItem` depending on the task they are defined for. The two main menu item types are the `MenuGroup` and the `MenuItem`.

### MenuGroup

If you want to include a menu item to group other menu items, you must include a <code>MenuGroup</code> whose attributes are the following:

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| id      | string  | The menu item identifier |
| name    | string  | The menu item name |
| icon    | string  | The menu item icon (see <a href="https://fonts.google.com/icons">Google material design icons</a>{:target='_blank'}) |
| svgIcon | string  | Name of svg icon |
| items   | array   | The menu item children. Providing this attribute means that the menu item is a container for a group of menu items |
| opened  | boolean | In case the <code>items</code> property is defined, indicates if the group menu item is open or not by default |
| tooltip | string  | The tooltip text showed on the menu item when the menu is callapsed |
| class   | string  | The CSS class applied to the menu group |

**Example:**

```javascript
{
  id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
  items: [
    // Include here the child menu items
  ]
}
```

### MenuItem

  If you want to include a common menu item, you must include a <code>MenuItem</code> whith the following attributes. Note that there is some attributes that refers to the <a href="#card-menu-layout"><code>o-card-menu-layout</code></a>, this will be explained later.

  | Name                | Type                | Description |
  | ------------------- | ------------------- | ----------- |
  | id                  | string              | The menu item identifier |
  | name                | string              | The menu item name |
  | icon                | string              | The menu item icon (see <a href="https://fonts.google.com/icons">Google material design icons</a>{:target='_blank'}) |
  | svgIcon | string  | Name of svg icon |
  | tooltip             | string              | The tooltip text showed on the menu item when the menu is callapsed |
  | class               | string  | The CSS class applied to the menu item |
  | show-in-card-menu   | boolean             | Indicates whether or not to show the corresponding card in the <a href="#card-menu-layout"><code>o-card-menu-layout</code></a> |
  | image               | string              | The image displayed on the corresponding card in the <a href="#card-menu-layout"><code>o-card-menu-layout</code></a> |
  | component           | component reference | The component for the corresonding card in the <a href="#card-menu-layout"><code>o-card-menu-layout</code></a> |
  | component-inputs    | Object              | The attributes for the component for the corresponding card in the <a href="#card-menu-layout"><code>o-card-menu-layout</code></a> |

In addition to the attributes of the `MenuItem`, you can include other attributes depending on what kind of menu item you want. All the following menu item types extend from the `MenuItem`, all its attributes are inherited.

### MenuItemRoute or MenuGroupRoute

For navigating the different modules of your application you must include a <code>MenuItemRoute</code> or <code>MenuGroupRoute</code>, its attributes are the following:

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| route | string | The route the application will navigate when the menu item is clicked |
| pathMatch | 'full' \| 'prefix'  | Match criteria to mark the menu item as active in case of multiple routes matching |

**Example:**

```javascript
{
  id: 'customers',
  name: 'CUSTOMERS',
  tooltip: 'CUSTOMERS_CONTENT',
  route: '/main/customers',
  icon: 'people'
}
```

pathMatch: this attribute determines the way OntimizeWeb marks a menu item as active. If the value is 'prefix' (default value) a item will be marked as active if its route starts as the active application route. If the value is 'full', the route has to be exactly the same.

Example: in this case we have two routes that have a common path. If no pathMatch value is setted the first route will be marked as active if the user navigates to the '/main/customers/new' because its prefix matches. User would need to set the value 'full' to the pathMatch in the second route.
```javascript
{
  id: 'customers',
  name: 'CUSTOMERS',
  tooltip: 'CUSTOMERS_CONTENT',
  route: '/main/customers',
  icon: 'people'
},
{
  id: 'customers',
  name: 'CUSTOMERS',
  tooltip: 'CUSTOMERS_CONTENT',
  route: '/main/customers/new',
  icon: 'people'
  pathMatch: 'full'
}
```

### MenuItemAction

For triggering an action include a <code>MenuItemAction</code>, its specific attributes are the following:

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| action      | function | A function called when the menu item is clicked |
| confirm     | yes/no   | Indicates whether or not the user must confirm the menu action |
| confirmText | string   | The confirmation text |

**Example:**

```javascript
function myFunction() {
  // do whatever you want
}
...
{ id: 'action', name: 'action', icon: 'autorenew', action: myFunction }
```

### MenuItemLocale

For switching between different languages available in the application, add as many <code>MenuItemLocale</code> items as languages.

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| locale | string | The language to be configured on the application |

**Example:**

```javascript
{ id: 'lang_es', name: 'LOCALE_es', icon: 'language', locale: 'es' },
{ id: 'lang_en', name: 'LOCALE_en', icon: 'language', locale: 'en' }
```

### MenuItemLogout

Include a <code>MenuItemLogout</code> for login out the user of the application, its specific attributes are the following:

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| route   | string | The route the application will navigate when the user logs out |
| confirm | string | Indicates whether or not the user must confirm the log out |

**Example:**

```javascript
{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
```

### MenuItemUserInfo

For displaying the application user information, include a <code>MenuItemUserInfo</code> with the following attributes:

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| user   | string | The displayed user name |
| avatar | string | The displayed image |

**Example:**
```javascript
{ id: 'userinfo', name: 'USER', user: 'Profile', avatar: '../../assets/images/user_profile.png' }
```

You can see an example of a menu configuration below. This is a piece of the configuration used in the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/v15/quickstart/){:target="_blank"}. You can check the full code in [GitHub](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/15.x.x/src/app/shared/app.menu.config.ts){:target="_blank"}.

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

In addition to the side menu, **OntimizeWeb** provides [`o-card-menu-layout`]({{ base_path }}/components/menu/cardmenulayout/overview){:target="_blank"} component that builds automatically a dashboard page using the menu configuration.

![Card menu layout example]({{ base_path }}/assets/images/layouts/app-layout/card-menu-layout.png){: .align-center}

You can see this live example in the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/v15/quickstart/){:target="_blank"}.
