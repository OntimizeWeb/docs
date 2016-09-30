---
title: "Application configuration file"
permalink: /guide/app-config/
excerpt: "Configuration parameters of an Ontimize Web app."
modified: 2016-09-29T08:25:30-04:00
author_profile: false
sidebar:
        nav: "docs"
---

When developing an app you need to set some parameters of it, as it can be the title, the urls of some services, the language, etc. Those parameters are passed to the app when 
bootstraping it as an Object.

The file that contains all configuration parameters of the application is called *app.config.ts* and it is placed on the route *app/app.config.ts*.
The content of this file is the following one:

```bash
import {Config} from 'ontimize-web-ng2/ontimize';

import { SERVICE_CONFIG } from './shared/app.services.config';

export const CONFIG: Config = {
  // The base path of the URL used by app services.
  apiEndpoint: 'http://try.ontimize.com/QSAllComponents/rest',

  //  Application identifier. 
  uuid: 'com.ontimize.web.ng2.quickstart',

  // Title of the app
  title: 'Quickstart',

  //  Language of the application.
  locale: 'es',

  // The service type used in the whole application.
  // serviceType

  // Configuration parameters of application services.
  servicesConfiguration: SERVICE_CONFIG
};
```

The noteworthy parameters here are:

* **uuid:** Application identifier. Is the unique package identifier of the app. It is used when storing or managing temporal data related with the app. 
If no one is provided, by default is seta as 'ontimize-web-uuid'.
* **apiEndpoint:** The base path of the URL used by app services.
* **title:** The title of the application.
* **locale:** The language of the application specified by the country code (e.g. 'es' for Spanish, 'en' for English, ...).
* **serviceType:** The service type used in the app by framework components that request data from server. You can specify (Ontimize REST standard, Ontimize REST JEE or custom implementation)
  * **Not configured (by default):** configures Ontimize REST standard services.
  * **'OntimizeEE':** configures Ontimize REST JEE services.
  * **Custom class:** a class that extends from *Ontimize* or *OntimizeEE* default services or that implment IDataService interface.
* **servicesConfiguration:** Object that contains the configuration parameters of the services used into the app. 