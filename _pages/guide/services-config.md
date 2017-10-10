---
title: "Application services configuration file"
permalink: /guide/services-config/
excerpt: "Configuration of OntimizeEE services paths"
author_profile: false
sidebar:
        nav: "docs"
---

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