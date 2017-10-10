---
title: "Application services configuration file"
permalink: /guide/services-config/
excerpt: "Configuration of OntimizeEE services paths"
author_profile: false
sidebar:
        nav: "docs"
---

In a ontimize web application if the application configuration ('*src\app\app.config.ts*') property that indicates the service type ('*serviceType*') has the '*OntimizeEE*' value user will need to configure the service paths.

For doing this ontimize web uses the *servicesConfiguration* property from the app configuration file that must point to an object defined as it follows:

```bash
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
};
```