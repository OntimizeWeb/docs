---
title: Permissions
permalink: /guide/permissions/
---

{% include base_path %} {% include toc %}

In this section we are going to show how to define components permissions.

# Overview

Ontimize Web has the feature of controlling components presence, state or its actions by the use of server defined permissions.

## First steps

To start defining your own permissions first you need to configure your backend following [this steps](https://ontimize.github.io/ontimize-boot/basics/security/){:target="_blank"}. To see a complete tutorial of how to configure an application on frontend and backend see the [following example]({{ base_path }}/guide/permissions/example/){:target="_blank"}.

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
            { "attr":"ID","visible": true, "enabled": false }
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
            { "attr":"BALANCE","visible": false, "enabled": false }
          ]
        }
      ]
    }, {
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

# Components permissions

The `components` properties must contain an array of Ontimize Web components permissions definition. In the following sections we will explore the components which have configurable permissions. All of them have common attributes:

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

### Inner form components

The `components` property must be an array containing the permissions of the inner form components. Each component permisisons contains its `attr`, used for its identification, and the `visible` and `enabled` boolean properties.

### Form actions

The `actions` property must be an array containing the form available actions permissions, each one identified with its `attr`. There are two types of actions:

- `insert`, `update`, `delete` and `refresh`: standard form actions.
- Custom user actions.

The actions permissions have two effects:

- Hiding or disabling the form buttons of each action.
- Disabling (if permissions object says so) the standard form actions executions.

## Grid

The `o-grid` component has a configurable `actions` section.

```javascript
{
  "attr": "customers_grid",
  "selector": "o-grid",
  "actions": [
    { "attr": "insert", "visible": true, "enabled": false },
    { "attr": "refresh", "visible": false, "enabled": false },
    { "attr": "example", "visible": false, "enabled": false }
  ]
}
```

### Grid actions

The `actions` property must be an array containing the grid available actions permissions, each one identified with its `attr`. There are two types of actions:

- `insert` and `refresh`: standard grid actions.
- Custom user actions.

The actions permissions have two effects:

- Hiding or disabling the grid buttons of each action.
- Disabling (if permissions object says so) the standard grid actions executions.

## List

The `o-list` component has a configurable `actions` section.
```javascript
{
  "attr": "customers_list",
  "selector": "o-list",
  "actions": [
    { "attr": "insert", "visible": true, "enabled": false },
    { "attr": "delete", "visible": true, "enabled": false },
    { "attr": "refresh", "visible": false, "enabled": false },
    { "attr": "example", "visible": false, "enabled": false }
  ]
}
```
### List actions

The `actions` property must be an array containing the list available actions permissions, each one identified with its `attr`. There are two types of actions:

- `insert`, `delete` and `refresh`: standard list actions.
- Custom user actions.

The actions permissions have two effects:

- Hiding or disabling the list buttons of each action.
- Disabling (if permissions object says so) the standard list actions executions.

## Button

The `o-button` component has configurable `visible` and `enabled` properties.

```javascript
{
  "attr": "button-example",
  "selector": "o-button",
  "visible": true,
  "enabled": false
}
```

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

### Table columns

The `columns` property must be an array containing the permissions of the table columns. Each column permisisons contains its `attr`, used for its identification, and the `visible` and `enabled` boolean properties.

### Table menu

The `menu` property must be an object containing the permissions of the table menu. This object has the following properties:

- `visible`: boolean property that indicates if the table menu is visible.
- `enabled`: boolean property that indicates if the table menu is enabled.
- `items`: this property must be an array containing the permissions of the menu items. There are two types of menu items:

  - `select-all-checkbox`, `export`, `show-hide-columns`, `filter` and `configuration`: standard table options.
  - Custom user menu items, added by the user with the `o-table-option` component.

### Table actions

The `actions` property must be an array containing the form available actions permissions, each one identified with its `attr`. There are two types of actions:

- `insert`, `update`, `delete`, `refresh` and `detail`: standard table actions.
- Custom user actions, added by the user with the `o-table-button` component.

The actions permissions have two effects:

- Hiding or disabling the table buttons of each action.
- Disabling (if permissions object says so) the standard table actions executions.

# Routes permissions

The `routes` property must be an array containing the permissions defined for a given route.

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
            { "attr":"ID","visible": true, "enabled": false }
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
            { "attr":"BALANCE","visible": false, "enabled": false }
          ]
        }
      ]
    }, {
      "permissionId": "branch-detail-permissions",
      "enabled": false
    }
  ]
}
...
```

Each element of this array contains the permissions of a given route, having the following properties:

- `permissionId`: route identification. For matching the permissions object definition and a given route in the Ontimize Web app, you have to add a object to the `data` property in the route configuration object (`oPermission`) in your routing module, as you can see in the following example.

- `components`: array of Ontimize Web components permissions definition. As seen in the previous section of this page.

- `enabled`: boolean property that indicates if the given route is accesible in the app.

```javascript
export const routes: Routes = [
  { path: '', component: CustomersHomeComponent },
  { path: 'new', component: CustomersNewComponent },
  {
    path: ':CUSTOMERID',
    component: CustomersDetailComponent,
    data: {
      oPermission: {
        permissionId: 'customer-detail-permissions'
      }
    }
  },
  { path: ':CUSTOMERID/accounts', loadChildren: loadAccountsModule }
];
```

In this case, all the `:CUSTOMERID` path inner components will be affected by the permissions defined under the 'customer-detail-permissions' `permissionId`. When a component has permissions defined in general components array and in a route components array, its permissions are computed merging both objects. The route permissions have preference over the general definition.

If the given route is not enabled (as you can see in the 'branch-detail-permissions' permissions definition in the previous JSON definition), user wont be allowed to navigate to that route in the Ontimize Web app. And, in addition, if the routing module object has defined the `restrictedPermissionsRedirect` property, app wil be redirected to that page. Ontimize Web has the default forbidden access redirect page defined in the route '403'.

```javascript
export const routes: Routes = [
  { path: '', component: BranchesHomeComponent },
  { path: 'new', component: BranchesEditComponent },
  {
    path: ':OFFICEID', component: BranchesDetailComponent,
    data: {
      oPermission: {
        permissionId: 'branch-detail-permissions',
        restrictedPermissionsRedirect: '403', /* Ontimize Web defined component */
        // restrictedPermissionsRedirect: 'main' /* App route */
      }
    }
  },
  { path: ':OFFICEID/edit', component: BranchesEditComponent },
  { path: ':OFFICEID/accounts', loadChildren: loadAccountsModule }
];
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
# Permissions Service API

Ontimize Web allows for extensive customization of the `permissions service`. Below are the key methods available for those who wish to extend or modify the default behavior:

## Methods

#### `hasPermission(): boolean`
This method checks if the user has permissions.

#### `getUserPermissionsAsPromise(): Promise<boolean>`
This method retrieves user permissions as a promise.

#### `getOComponentPermissions(attr: string, actRoute: ActivatedRoute, selector: string): OComponentPermissionsByRoute`
This method retrieves component permissions for a specific attribute, activated route, and selector.

#### `getTablePermissions(attr: string, actRoute: ActivatedRoute): OTablePermissions`
This method retrieves table permissions for a specific attribute and activated route.

#### `getFormPermissions(attr: string, actRoute: ActivatedRoute): OFormPermissions`
This method retrieves form permissions for a specific attribute and activated route.

#### `getListPermissions(attr: string, actRoute: ActivatedRoute): OListPermissions`
This method retrieves list permissions for a specific attribute and activated route.

#### `getGridPermissions(attr: string, actRoute: ActivatedRoute): OGridPermissions`
This method retrieves grid permissions for a specific attribute and activated route.

#### `getMenuPermissions(attr: string): OPermissions`
This method retrieves menu permissions for a specific attribute.

#### `getAllMenuPermissions(): OPermissions[]`
This method retrieves all menu permissions.

#### `getOButtonPermissions(attr: string, actRoute: ActivatedRoute): OPermissions`
This method retrieves button permissions for a specific attribute and activated route.

#### `isPermissionIdRouteRestricted(permissionId: string): boolean`
This method checks if a permission ID is restricted for a route.

#### `queryPermissions(): Observable<any>`
This method queries permissions and returns them as an observable. It uses an observable to load permissions and notify subscribers of any changes.

