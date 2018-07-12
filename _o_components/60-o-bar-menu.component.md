---
permalink: /components/barmenu/
title: "Bar menu"
comp: barMenu
---

{% include base_path %}
{% include toc %}

The `o-bar-menu` component displays a bar menu on the page where it is included. It is recommended to include it in the main component of you **OntimizeWeb** application, where the `router-outlet` is placed, so the bar menu will be always visible.

For building the bar menu component you must include different components

## Bar menu item

The `o-bar-menu-item` component represents each item of the bar menu component. It can be grouped with the [`o-bar-menu-group`](#bar-menu-group) component. This component is the responsible of executing the actions on the bar menu, the action can be navigating to the configured route or executing an action provided by the user. Check the **API** section of this page for more information.

## Bar menu group

The `o-bar-menu-group` component is used to group a set of [`o-bar-menu-item`](#bar-menu-item) components. It displays the contained menu items as a drop down list when the cursor pass over it.

## Bar menu separator

The `o-bar-menu-separator` component is used only for styling purposes. It displays a separator between two [`o-bar-menu-item`](#bar-menu-item) or [`o-bar-menu-group`](#bar-menu-group) components.

## Example

```html
<o-bar-menu title="APP_TITLE">
  <o-bar-menu-group title="VIEW">
    <o-bar-menu-item title="HOME" icon="home" route="/main/home"></o-bar-menu-item>
    <o-bar-menu-item title="CUSTOMERS" icon="people" route="/main/customers"></o-bar-menu-item>
    <o-bar-menu-item title="ACCOUNTS" icon="credit_card" route="/main/accounts"></o-bar-menu-item>
    <o-bar-menu-item title="BRANCHES" icon="account_balance" route="/main/branches"></o-bar-menu-item>
    <o-bar-menu-item title="EMPLOYEES" icon="airline_seat_recline_normal" route="/main/employees"></o-bar-menu-item>
  </o-bar-menu-group>

  <o-bar-menu-group title="OPTIONS">
    <o-bar-menu-group title="LANGUAGE">
      <o-bar-menu-item title="English"></o-bar-menu-item>
      <o-bar-menu-item title="Español"></o-bar-menu-item>
    </o-bar-menu-group>
    <o-bar-menu-separator></o-bar-menu-separator>
    <o-bar-menu-item title="LOGOUT" icon="power_settings_new" route="/login" confirm="MESSAGES.CONFIRM_LOGOUT"></o-bar-menu-item>
  </o-bar-menu-group>

  <o-bar-menu-item title="VERSION" [action]="showVersionCallback"></o-bar-menu-item>
</o-bar-menu>
```

![Bar menu component]({{ "/images/components/menu/o-bar-menu.png" | absolute_url }})
