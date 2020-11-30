---
permalink: /components/sidemenu/overview
title: "Side menu"
comp: sideMenu
tab: overview
---

{% include base_path %}
{% include toc %}

<div class="notice--danger align-center" style="margin: 0;">
This component is **deprecated** and will be removed in following versions.
</div>

The `o-side-menu` component displays a side menu on the page where it is included. It is recommended to include it in the main component of you **OntimizeWeb** application, where the `router-outlet` is placed, so the side menu will be always visible.

For building the side menu component you must include different components

## Side menu item

The `o-side-menu-item` component represents each item of the side menu component. It can be grouped with the [`o-side-menu-group`](#side-menu-group) component. This component is the responsible of executing the actions on the side menu, the action can be navigating to the configured route or executing an action provided by the user. Check the **API** section of this page for more information.

## Side menu group

The `o-side-menu-group` component is used to group a set of [`o-side-menu-item`](#side-menu-item) components. It displays the contained menu items as a drop down list when the cursor pass over it.

## Side menu separator

The `o-side-menu-separator` component is used only for styling purposes. It displays a separator between two [`o-side-menu-item`](#side-menu-item) or [`o-side-menu-group`](#side-menu-group) components.

## Example

```html
<o-side-menu title="APP_TITLE">
  <o-side-menu-group title="VIEW">
    <o-side-menu-item title="HOME" icon="home" route="/main/home"></o-side-menu-item>
    <o-side-menu-item title="CUSTOMERS" icon="people" route="/main/customers"></o-side-menu-item>
    <o-side-menu-item title="ACCOUNTS" icon="credit_card" route="/main/accounts"></o-side-menu-item>
    <o-side-menu-item title="BRANCHES" icon="account_balance" route="/main/branches"></o-side-menu-item>
    <o-side-menu-item title="EMPLOYEES" icon="airline_seat_recline_normal" route="/main/employees"></o-side-menu-item>
  </o-side-menu-group>

  <o-side-menu-group title="OPTIONS">
    <o-side-menu-group title="LANGUAGE">
      <o-side-menu-item title="English"></o-side-menu-item>
      <o-side-menu-item title="Español"></o-side-menu-item>
    </o-side-menu-group>
    <o-side-menu-separator></o-side-menu-separator>
    <o-side-menu-item title="LOGOUT" icon="power_settings_new" route="/login" confirm="MESSAGES.CONFIRM_LOGOUT"></o-side-menu-item>
  </o-side-menu-group>

  <o-side-menu-item title="VERSION" [action]="showVersionCallback"></o-side-menu-item>
</o-side-menu>
```

<!-- ![Side menu component]({{ "/images/components/menu/o-bar-menu.png" | absolute_url }}) -->
