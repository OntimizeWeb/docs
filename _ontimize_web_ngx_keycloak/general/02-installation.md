---
permalink: /keycloak/installation/
title: "Installation"
---

{% include base_path %}

## Installation

```bash
  npm install ontimize-web-ngx-keycloak --save
```

## Usage

### Import the Ontimize Keycloak module into your application

Import the `OntimizeKeycloakModule` into the main module of your application.

```javascript
import { OntimizeKeycloakModule } from 'ontimize-web-ngx-keycloak';

@NgModule({
  imports: [
    OntimizeKeycloakModule,
    ...
  ],
  declarations: ...
  providers: ...
})
export class AppModule { }
```

### Replace Ontimize Web default authentication

Ontimize Web Keycloak provides an implementation of the service `AuthService` from OntimizeWeb for working with keycloak. Provide the Keycloak implementaion of the authentication service using the injection token `O_AUTH_SERVICE` for replacing the default authentication service by `OKeycloakAuthService`.

```javascript
import { O_AUTH_SERVICE } from 'ontimize-web-ngx';
import { OKeycloakAuthService, OntimizeKeycloakModule } from 'ontimize-web-ngx-keycloak';

@NgModule({
  imports: [
    OntimizeKeycloakModule,
    ...
  ],
  declarations: ...
  providers: [
    { provide: O_AUTH_SERVICE, useValue: OKeycloakAuthService }
  ]
})
export class AppModule { }
```

If you want to extend the functionality of the module, you can extend the `OKeycloakAuthService` and provide your own service using the same injection token.

### Provide the Keycloak configuration

Use the injection token `O_KEYCLOAK_OPTIONS` for providing the configuration of the keycloak server you want to connect to.

```javascript
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

@NgModule({
  imports: [
    OntimizeKeycloakModule,
    ...
  ],
  declarations: ...
  providers: [
    { provide: O_AUTH_SERVICE, useValue: OKeycloakAuthService },
    { provide: O_KEYCLOAK_OPTIONS, useValue: keycloakOptions }
  ]
})
export class AppModule { }
```
