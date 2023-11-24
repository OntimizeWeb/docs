---
layout: default
title: "Add OntimizeWeb to your project"
permalink: /add-to-project/
excerpt: "Include OntimizeWeb in your project as a dependency."
parent: Guide
nav_order: 10
---

{% include base_path %}

## Install OntimizeWeb

Install `ontimize-web-ngx` from `npm`:

```bash
npm install ontimize-web-ngx
```

After installing `ontimize-web-ngx` you must install all its required dependencies.

## Add OntimizeWeb to your application

Define the configuration for your application. Create the 'app.config.ts` file whith the following default configuration. Read more about configuring the application [here]({{ base_path }}/guide/appconfig/).

```typescript
import { Config } from 'ontimize-web-ngx';

export const CONFIG: Config = {
    // The base path of the URL used by app service.
    apiEndpoint: 'http://mydomain.com/',

    // Application identifier. Is the unique package identifier of the app. It is used when storing or managing temporal data related with the app. By default is set as 'ontimize-web-uuid'.
    uuid: 'com.ontimize.web.ngx.myapp',

    // Title of the app
    title: 'My app',

    // Language of the application.
    locale: 'en',

    // The service type used (Ontimize REST standard, Ontimize REST JEE or custom implementation) in the whole application.
    // serviceType

    applicationLocales: ['en']
};
```

And include this configuration in the providers in the application module.

Include the `OntimizeWebModule`, `ONTIMIZE_MODULES` and `ONTIMIZE_PROVIDERS` in your application module.

```typescript
import { APP_CONFIG, ONTIMIZE_MODULES, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';

import { CONFIG } from './app.config';

@NgModule({
    ...
    imports: [ ONTIMIZE_MODULES, OntimizeWebModule ],
    providers: [
        { provide: APP_CONFIG, useValue: CONFIG },
        ...ONTIMIZE_PROVIDERS
    ]
    ...
})
```

The include `...ONTIMIZE_PROVIDERS` on the `providers` array it is needed to import all elements from the `ONTIMIZE_PROVIDERS` array. Check more information of the **spread operator** [here](https://basarat.gitbook.io/typescript/future-javascript/spread-operator){:target="_blank"}.

## Add the OntimizeWeb styles to your application

Import the OntimizeWeb styles in your application. If you are using the `angular-cli` you must add the following styles in your `angular.json` file:

```
...
"styles": [
  "../node_modules/ontimize-web-ngx/ontimize.scss"
  ...
]
...
```

More information about the `angular.json` style configuration [here](https://angular.io/guide/workspace-config#styles-and-scripts-configuration){:target="_blank"}.

## Add the OntimizeWeb theme to your application

Import the OntimizeWeb theme in your application.

```css
@use 'ontimize-web-ngx/theming/themes/ontimize.scss'as theme;
@use 'ontimize-web-ngx/theming/ontimize-style.scss';

/* Include ontimize styles */
@include ontimize-style.ontimize-theme-styles(theme.$theme);
```

This file needs to be included in the array of the [previous section](#add-the-ontimizeweb-theme-to-your-application).

More information about the **Ontimize customization** [here]({{ base_path }}/customization/){:target="_blank"}.

## System.js
If you are using SystemJS, then you need:

```javascript
System.config({
  // ...
  map: {
    // ...
    'ontimize-web-ngx': 'node_modules/ontimize-web-ngx/bundles/ontimize-web-ngx.umd.min.js',
    // ...
  },
  // ...
}
```

