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
npm install ontimize-web-ngx --save
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
        ONTIMIZE_PROVIDERS
    ]
    ...
})
```

## Add the OntimizeWeb styles to your application

Import the OntimizeWeb styles in your application. If you are using the `angular-cli` you must add the following styles in your `.angular-cli.json` file:

```
...
"styles": [
  "../node_modules/ontimize-web-ngx/ontimize.scss"
  ...
]
...
```

## Add the OntimizeWeb theme to your application

Import the OntimizeWeb theme in your application.

```css
@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';

@import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss';
@include ontimize-theme-styles($theme);

// @import 'node_modules/ontimize-web-ngx-theming/ontimize-theme-lite.scss';
// @include ontimize-theme-styles-lite($theme);

/*
* After define theme, it is necessary to transfer color to Ontimize Web framework
*/
@import 'node_modules/ontimize-web-ngx/theme.scss';
@include o-material-theme($theme);
```

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

