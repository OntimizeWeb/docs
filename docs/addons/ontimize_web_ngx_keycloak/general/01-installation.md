---
title: "Installation"
permalink: /addons/keycloak/installation/
layout: default
parent: Keycloak
grand_parent: Addons
nav_order: 2
---

## Installation

```bash
  npm install ontimize-web-ngx-keycloak --save
```

## Usage

### Import the Ontimize Keycloak module into your application

Import `OntimizeKeycloakModule` by providing it in your `app.config.ts`.

```javascript
import { importProvidersFrom } from '@angular/core';
import { OntimizeKeycloakModule } from 'ontimize-web-ngx-keycloak';

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideOntimizeWeb(CONFIG, appRoutes),
    importProvidersFrom(OntimizeKeycloakModule),
    ...
  ]
};

// main.ts
bootstrapApplication(AppComponent, appConfig)
  .then(ontimizePostBootstrap)
  .catch(err => console.error(err));
```

### Replace Ontimize Web default authentication

Ontimize Web Keycloak provides an implementation of the service `AuthService` from OntimizeWeb for working with keycloak. Provide the Keycloak implementation of the authentication service using the injection token `O_AUTH_SERVICE` for replacing the default authentication service by `OKeycloakAuthService`.

```javascript
import { importProvidersFrom } from '@angular/core';
import { O_AUTH_SERVICE } from 'ontimize-web-ngx';
import { OKeycloakAuthService, OntimizeKeycloakModule } from 'ontimize-web-ngx-keycloak';

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideOntimizeWeb(CONFIG, appRoutes),
    importProvidersFrom(OntimizeKeycloakModule),
    { provide: O_AUTH_SERVICE, useValue: OKeycloakAuthService },
    ...
  ]
};

// main.ts
bootstrapApplication(AppComponent, appConfig)
  .then(ontimizePostBootstrap)
  .catch(err => console.error(err));
```

If you want to extend the functionality of the module, you can extend the `OKeycloakAuthService` and provide your own service using the same injection token.

### Provide the Keycloak configuration

Use the injection token `O_KEYCLOAK_OPTIONS` for providing the configuration of the keycloak server you want to connect to.

```javascript
import { importProvidersFrom } from '@angular/core';
import { O_AUTH_SERVICE } from 'ontimize-web-ngx';
import { KeycloakOptions, O_KEYCLOAK_OPTIONS, OKeycloakAuthService, OntimizeKeycloakModule } from 'ontimize-web-ngx-keycloak';

const keycloakOptions: KeycloakOptions = {
  config: {
    url: '<KEYCLOAK_SERVER_URL>',
    realm: '<KEYCLOAK_REALM>',
    clientId: '<CLIENT_ID>'
  },
  initOptions: {
    onLoad: 'login-required'
  }
};

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideOntimizeWeb(CONFIG, appRoutes),
    importProvidersFrom(OntimizeKeycloakModule),
    { provide: O_AUTH_SERVICE, useValue: OKeycloakAuthService },
    { provide: O_KEYCLOAK_OPTIONS, useValue: keycloakOptions },
    ...
  ]
};

// main.ts
bootstrapApplication(AppComponent, appConfig)
  .then(ontimizePostBootstrap)
  .catch(err => console.error(err));
```
