---
title: "Application menu configuration file"
permalink: /guide/menu-config/
excerpt: "Configuration parameters of an Ontimize Web app menu"
author_profile: false
sidebar:
        nav: "docs"
---

{% include base_path %}

In the QuickStart application (check it on [live example](https://ontimizeweb.github.io/ontimize-web-ngx-quickstart){:target="_blank"}) the main module component template ('*src\app\main\main.component.html*') wraps the main module content into a '*o-app-layout*' component:

```html
<o-app-layout>
  <router-outlet></router-outlet>
</o-app-layout>
```

This component get its content from the app configuration *appMenuConfiguration* property
(in '*src\app\app.config.ts*'). That property refers to an array defined in a separated file ('*src\app\shared\app.menu.config.ts*') where each element defines a menu entry as it follows:

```bash
import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
{ id: 'home', name: 'HOME', icon: 'dashboard', route: '/main/home' },
{
id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
items: [
  { id: 'customers', name: 'CUSTOMERS', route: '/main/customers', icon: 'people' },
  { id: 'accounts', name: 'ACCOUNTS', route: '/main/accounts', icon: 'credit_card' },
  { id: 'branches', name: 'BRANCHES', route: '/main/branches', icon: 'account_balance' },
  { id: 'employees', name: 'EMPLOYEES', route: '/main/employees', icon: 'person' }
]
},
{
  id: 'general', name: 'GENERAL', icon: 'info_outline', opened: false,
  items: [
    { id: 'about', name: 'ABOUT', route: '/main/about', icon: 'help_outline' }
  ]
}
];
```
Ontimize web parses each item and according to its parameters renders a propper menu item. This menu configuration returns the following menu layout:

![image-center]({{ base_path }}/images/application/menu.PNG){: .align-center}
