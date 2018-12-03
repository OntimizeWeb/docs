---
title: Permissions
permalink: /guide/permissions/
---

{% include base_path %}

In this section we are going to show how to define components permissions.

# Overview

Ontimize Web has the feature of controlling components presence, state or its actions by the use of server defined permissions.

## Permissions configuration

In the [application configuration]({{ base_path }}/guide/appconfig/#application-configuration){:target="_blank"} section you can see how to configure the permissions service for getting the permissions data from server.

## Permissions definition example

In the following example you can explore a Ontimize Web application permissions definition:

```javascript
{
  "components": [
    {
      "attr":"customers_form_edit",
      "selector": "o-form",
      "components": [
        {"attr":"ID","visible": false,"enabled": false},
        {"attr":"NAME","visible": true,"enabled": false},
        {"attr":"SURNAME","visible": true,"enabled": false},
        {"attr":"STARTDATE","visible": false,"enabled": true}
      ],
      "actions": [
        { "attr": "insert", "visible": true, "enabled": false },
        { "attr": "update", "visible": false, "enabled": false },
        { "attr": "delete", "visible": true, "enabled": false },
        { "attr": "refresh", "visible": false, "enabled": false },
        { "attr": "example", "visible": false, "enabled": false }
      ]
    }
  ],
  "routes": [
    {
      "permissionId": "customer-detail-permissions",
      "components": [
        {
          "attr":"customers_form_edit",
          "selector": "o-form",
          "components": [
            {"attr":"ID","visible":true,"enabled":false}
          ]
        },
        {
          "attr": "customer_accounts",
          "selector": "o-table",
          "columns" : [
            { "attr": "STARTDATE", "visible": false, "enabled": true },
            { "attr": "ENDDATE", "visible": true, "enabled": false }
          ]
        }, {
          "attr":"account_detail_form",
          "selector": "o-form",
          "components": [
            {"attr":"BALANCE","visible":false,"enabled":false}
          ]
        }
      ]
    },{
      "permissionId": "branch-detail-permissions",
      "enabled": false
    }
  ],
  "menu": [
    { "attr": "customers", "visible": true, "enabled": true },
    { "attr": "accounts", "visible": true, "enabled": false },
    { "attr": "branches", "visible": false, "enabled": true },
    { "attr": "employees", "visible": false, "enabled": false }
  ]
}
```

# Components Permissions

In the following sections we will explore the components which have configurable permissions. All of them have common attributes:

- **selector**: Ontimize Web component selector.
- **attr**: component `attr` value, used for matching the permissions definition with the application component.

## Form

The `o-form` component has two configurable sections: components and actions.

```javascript
{
  "attr":"customers_form_edit",
  "selector": "o-form",
  "components": [
    {"attr":"ID","visible": false,"enabled": false},
    {"attr":"NAME","visible": true,"enabled": false},
    {"attr":"SURNAME","visible": true,"enabled": false},
    {"attr":"STARTDATE","visible": false,"enabled": true}
  ],
  "actions": [
    { "attr": "insert", "visible": true, "enabled": false },
    { "attr": "update", "visible": false, "enabled": false },
    { "attr": "delete", "visible": true, "enabled": false },
    { "attr": "refresh", "visible": false, "enabled": false },
    { "attr": "example", "visible": false, "enabled": false }
  ]
}
```

### Components

The `components` property must be an array containing the permissions of the inner form components. Each component permisisons contains its `attr`, used for its identification, and the `visible` and `enabled` boolean properties.

### Actions

The `actions` property must be an array containing the form available actions permissions, each one identified with its `attr`. There are two types of actions:

- `insert`, `update`, `delete` and `refresh`: standard form actions.
- Custom user actions.

The actions permissions have two effects:

- Hiding or disabling the form buttons of each action.
- Disabling (if permissions object says so) the standard form actions executions.

## Table

The `o-table` component has three configurable sections: columns, menu and actions.

```javascript
{
  "attr": "customer_table_home",
  "selector": "o-table",
  "columns" : [
    { "attr": "NAME", "visible": false, "enabled": false },
    { "attr": "SURNAME", "visible": false, "enabled": true },
    { "attr": "ADDRESS", "visible": true, "enabled": false },
    { "attr": "STARTDATE", "visible": true, "enabled": true }
  ],
  "menu": {
    "visible": true,
    "enabled": true,
    "items": [
      { "attr": "select-all-checkbox", "visible": false, "enabled": false },
      { "attr": "export", "visible": false, "enabled": true },
      { "attr": "show-hide-columns", "visible": true, "enabled": false },
      { "attr": "filter", "visible": true, "enabled": true },
      { "attr": "configuration", "visible": true, "enabled": false },
      { "attr": "example", "visible": true, "enabled": false },
      { "attr": "example2", "visible": false, "enabled": true }
    ]
  },
  "actions": [
    { "attr": "update", "visible": false, "enabled": false },
    { "attr": "delete", "visible": false, "enabled": true },
    { "attr": "insert", "visible": true, "enabled": false },
    { "attr": "refresh", "visible": true, "enabled": true },
    { "attr": "detail", "visible": false, "enabled": false },
    { "attr": "example", "visible": true, "enabled": false },
    { "attr": "example2", "visible": false, "enabled": true }
  ]
}
```

### Columns

The `columns` property must be an array containing the permissions of the table columns. Each column permisisons contains its `attr`, used for its identification, and the `visible` and `enabled` boolean properties.

### Menu

The `menu` property must be an object containing the permissions of the table menu. This object has the following properties:

- `visible`: boolean property that indicates if the table menu is visible.
- `enabled`: boolean property that indicates if the table menu is enabled.
- `items`: this property must be an array containing the permissions of the menu items. There are two types of menu items:

  - `select-all-checkbox`, `export`, `show-hide-columns`, `filter` and `configuration`: standard table options.
  - Custom user menu items, added by the user with the `o-table-option` component.

### Actions

The `actions` property must be an array containing the form available actions permissions, each one identified with its `attr`. There are two types of actions:

- `insert`, `update`, `delete`, `refresh` and `detail`: standard table actions.
- Custom user actions, added by the user with the `o-table-button` component.

The actions permissions have two effects:

- Hiding or disabling the table buttons of each action.
- Disabling (if permissions object says so) the standard table actions executions.

# Routes Permissions

```javascript
...
{
  "routes": [
    {
      "permissionId": "customer-detail-permissions",
      "components": [
        {
          "attr":"customers_form_edit",
          "selector": "o-form",
          "components": [
            {"attr":"ID","visible":true,"enabled":false}
          ]
        },
        {
          "attr": "customer_accounts",
          "selector": "o-table",
          "columns" : [
            { "attr": "STARTDATE", "visible": false, "enabled": true },
            { "attr": "ENDDATE", "visible": true, "enabled": false }
          ]
        }, {
          "attr":"account_detail_form",
          "selector": "o-form",
          "components": [
            {"attr":"BALANCE","visible":false,"enabled":false}
          ]
        }
      ]
    },{
      "permissionId": "branch-detail-permissions",
      "enabled": false
    }
  ]
}
...
```

# Menu Permissions

The `menu` property must be an array containing the permissions of the application menu options configured in the menu section in the [application configuration]({{ base_path }}/guide/appconfig/#application-configuration){:target="_blank"}. Each menu option is identified with its `attr` property. It also contains the `visible` and `enabled` boolean properties.

```javascript
{
  "menu": [
    { "attr": "customers", "visible": true, "enabled": true },
    { "attr": "accounts", "visible": true, "enabled": false },
    { "attr": "branches", "visible": false, "enabled": true },
    { "attr": "employees", "visible": false, "enabled": false }
  ]
}
```
