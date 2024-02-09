---
layout: o-component
permalink: /components/input/overviewservice/overview
title: "Form service components"
comp: "overviewService"
nav_exclude: true
---

{% include base_path %}
{% include toc %}

Form service components are component that must be placed inside a [form]({{ base_path }}/docs/components/data/form/){:target="_blank"}. This components display a set of options provided by a service and allow the user to select one or more of them. The form service components offered by **OntimizeWeb** are combo, list picker and radio.

All form service components in **OntimizeWeb** extend the `OFormServiceComponent` class, that is a subclass of [`OFormDataComponent`]({{ base_path }}/components/input/overview){:target="_blank"}. This class provides a set of methods and attributes inherited by all the form service components. This methods and attributes are explained on the **API** section of this page.

## Parent keys

The `parent-keys` attribute allows the developer to define filtering keys used in the request the component makes to the server in order to populate its options. This filtering keys must be defined as a string, separating them with a semicolon ';'. The component will look for this keys on its parent form and in the route parameters in order to build the filter for querying.

```html
parent-keys="factory_id;device_id"
```

In some cases, the values you will need for filtering the component request will be present in the parent form or the route parameter with a different name than the used in the component. For matching the component parent keys with these names, you can define an alias for each key you need separating the component parent key and its alias with two dots ':'.

```html
parent-keys="factory_id:factory;device_id:device"
```

So far this is the behavior of the parent keys attribute in all the components **OntimizeWeb** defines.

Form service components extends this behaviour and go one step forward, they allow the component to look for a key value in the data of another service components. This can be done by defining the column you want to get between brackets '[]'. Check the example below.

```html
<o-form>
    <o-combo attr="user" keys="user_id" columns="user_id;user_name;user_type"></o-combo>
    <o-combo attr="role" keys="role_id" columns="role_id;role_name;profile_id"
        parent-keys="user_type_id:user[user_type]"></o-combo>
</o-form>
```

In this example there is a form for linking users and roles, the roles the user may be linked with depend on the type of the user. The user type is part of the user information queried in the first combo. Notice that the the parent keys attribute for the roles combo has an alias and a column defined for the alias. This will make the roles component to look for the value of its parent key in the component with attr `user` and it will take the `user_type` column value as its parent key value.

The construction of dependant list-pickers is the same as done in the combo component. The first one is the selector of users, this will be the one that affects the second one.

```html
<o-form>
    <o-list-picker attr="user" label="User" keys="user_id" columns="user_id;user_name;user_type"></o-list-picker>
    <o-list-picker attr="role" label="Role" keys="role_id" columns="role_id;role_name;profile_id"
        parent-keys="user_type_id:user[user_type]"></o-list-picker>
</o-form>
```
