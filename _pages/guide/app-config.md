---
title: "Application configuration file"
permalink: /guide/app-config/
excerpt: "Configuration parameters of an Ontimize Web app."
author_profile: false
sidebar:
        nav: "docs"
---
{% include base_path %}

During the application development you will need to set some global parameters: application title, services url's, language, etc. Those parameters are setted into the application when angular bootstraps it.

The file that contains all the configuration parameters of the application is called *app.config.ts* and it is placed on the route *app/app.config.ts*.
The content of this file is:

```bash
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

* **uuid:** Application identifier. Is the unique package identifier of the app. It is used when storing or managing temporal data related with the app. By default is set as 'ontimize-web-uuid'.
* **apiEndpoint:** The base path of the URL used by app services.
* **title:** The title of the application.
* **locale:** The language of the application specified by the country code (e.g. 'es' for Spanish, 'en' for English, ...).
* **serviceType:** The service type used in the app by framework components that request data from server. You can specify Ontimize REST standard, Ontimize REST JEE or a custom implementation
  * **Not configured (by default):** if you do not configure or specify this parameter, the framework configures Ontimize REST standard services.
  * **'OntimizeEE':** configures Ontimize REST JEE services.
  * **Custom class:** a class that extends from *Ontimize* or *OntimizeEE* default services or that implements IDataService interface.
* **servicesConfiguration:** Object that contains the services configuration parameters. Learn more [here]({{ base_path }}/guide/services-config/).
* **appMenuConfiguration:** Object defining application menu structure. Learn more [here]({{ base_path }}/guide/menu-config/).
* **applicationLocales:** Set of available locales for the application.