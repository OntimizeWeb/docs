---
title: Remote configuration
permalink: /guide/remoteconfig/
author_profile: false
excerpt: How tow configure an OntimizeWeb application.
sidebar:
  nav: docs
layout: default
nav_exclude: true
---

{% include base_path %} {% include toc %}

Some components in **OntimizeWeb** store their configuration in the local storage of the browser. This configuration may also be stored on a remote server in order to be loaded when the user uses the application in different browsers or devices.

## Configuration

For enabling this behaviour you have to add the `remoteConfig` object to the [application configuration]({{ base_path }}/guide/appconfig/#application-configuration-file){:target="_blank"} like in the example below.

```javascript
export const CONFIG: Config = {
  ...
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
  ...
}
```

The `remoteConfig` enables the capability of loading and storing the application configuration in a remote server. It is also used to configure this behaviour. The only mandatory attribute is the `path`, the others can be omitted.

- **path:** remote configuration path.
- **endpoint:** the base path of the URL used for the remote configuration requests. Its default value is the same as the `apiEndpoint`.
- **timeout:** the timeout for the remote configuration requests.
- **columns:** the remote column names.
  - **user:** the name of the column where the user name is stored remotely.
  - **appId:** the name of the column where the application identifier is stored remotely.
  - **configuration:** the name of the column where the configuration is stored remotely.

## Server side

If you are not using an Ontimize server on the server side, you must implement a facade for retrieving and storing the configuration.

### Retrieve the user information

For retrieving the user configuration from your server you must send a `GET` request to an URL like the following: *https://{ endpoint }{ path }/search*.
You must also send as argument an object that indicates the user and the application you want to retrieve the configuration for.

```java
@RequestMapping(path = "/search", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<EntityResult> getUserConfiguration(@RequestBody Map<?, ?> filter) {

  ...

}
```

### Store the user information

For storing the user configuration in your server you must send a `PUT` request to an URL like the following: *https://{ endpoint }{ path }*.
You must also send as argument an object with the data to store and the user and the application identifier.

```java
@RequestMapping(method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<EntityResult> storeUserConfiguration(@RequestBody Object storeParameter) {

  ...

}
```
