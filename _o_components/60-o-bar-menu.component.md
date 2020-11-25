---
permalink: /components/barmenu/overview
title: "Bar menu"
comp: barMenu
---

{% include base_path %}
{% include toc %}

The `o-bar-menu` component builds automatically a dashboard page based on the application menu configuration (read more about how to configure the application menu [here]({{ base_path }}/guide/appconfig/#menu-configuration){:target="_blank"}).
You can also include your own menu adding  [`o-bar-menu-group`](#bar-menu-group), [`o-bar-menu-item`](#bar-menu-item) and [`o-locale-bar-menu-item`](#locale-bar-menu-item) into `o-bar-menu` component. You can see a example [here](#example)

It is recommended to include it in the main component of you **OntimizeWeb** application, where the `router-outlet` is placed, so the bar menu will be always visible.


## Bar menu item

The `o-bar-menu-item` component represents each item of the bar menu component. It can be grouped with the [`o-bar-menu-group`](#bar-menu-group) component. This component is the responsible of executing the actions on the bar menu, the action can be navigating to the configured route or executing an action provided by the user. Check the **API** section of this page for more information.

## Bar menu group

The `o-bar-menu-group` component is used to group a set of [`o-bar-menu-item`](#bar-menu-item) components. It displays the contained menu items as a drop down list when the cursor pass over it.

## Bar menu separator

The `o-bar-menu-separator` component is used only for styling purposes. It displays a separator between two [`o-bar-menu-item`](#bar-menu-item) or [`o-bar-menu-group`](#bar-menu-group) components.

## Bar menu locale item
The `o-locale-bar-menu-item` component represents each language element in bar menu component. It can be grouped with the [`o-bar-menu-group`](#bar-menu-group) component. This component is the responsible for changing the language of the application.

## Example

```html
<o-bar-menu title="APP_TITLE">
  <o-bar-menu-group title="OPTIONS">
    <o-bar-menu-group title="LANGUAGE">
      <o-locale-bar-menu-item locale="en" title="English"></o-locale-bar-menu-item>
      <o-locale-bar-menu-item locale="es" title="Español"></o-locale-bar-menu-item>
    </o-bar-menu-group>
    <o-bar-menu-separator></o-bar-menu-separator>
    <o-bar-menu-item title="LOGOUT" icon="power_settings_new" route="/login" confirm="MESSAGES.CONFIRM_LOGOUT"></o-bar-menu-item>
  </o-bar-menu-group>
</o-bar-menu>
```

```

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'dashboard', route: '/main/home' },
  {
    id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
    items: [
      {
        id: 'customers',
        name: 'CUSTOMERS',
        tooltip: 'CUSTOMERS_CONTENT',
        route: '/main/customers',
        icon: 'people',
        image: 'assets/images/ic_clientes.png'
      },
      {
        id: 'accounts',
        name: 'ACCOUNTS',
        tooltip: 'ACCOUNTS_CONTENT',
        route: '/main/accounts',
        icon: 'credit_card',
        image: 'assets/images/ic_cuentas.png'
      },
      {
        id: 'branches',
        name: 'BRANCHES',
        tooltip: 'BRANCHES_CONTENT',
        route: '/main/branches',
        icon: 'account_balance',
        image: 'assets/images/ic_sucursales.png'
      },
      {
        id: 'employees',
        name: 'EMPLOYEES',
        tooltip: 'EMPLOYEES_CONTENT',
        route: '/main/employees',
        icon: 'person',
        image: 'assets/images/ic_empleados.png'
      }
    ]
  },
  {
    id: 'general', name: 'GENERAL', icon: 'info_outline', opened: false,
    items: [
      { id: 'about', name: 'ABOUT', route: '/main/about', icon: 'help_outline' }
    ]
  },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
```

![Bar menu component]({{ "/images/components/menu/o-bar-menu.png" | absolute_url }})
