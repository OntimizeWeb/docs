---
layout: default
title: "Tabs"
permalink: /customize/tabs/
parent: Customization
nav_order: 6
---

{% include base_path %}

The *tabs* component is a very common component in management applications. **OntimizeWeb** does not offers its own tabs component. It uses the [angular material tabs component](https://v15.material.angular.io/components/tabs/overview){:target="_blank"}. What **OntimizeWeb** offers it is a directive for using in this component and change its appearance.

The `oTabGroup` directive allows you to change the tabs component styles. You can pass an argument to the directive indicating the mode styling mode:

| Mode     | Description |
| -------- | ----------- |
| ontimize | Applies the ontimize styling to the tabs component. This is the default value |
| material | Applies the angular material styling to the tabs component |

The [form layout manager]({{ base_path }}/components/formlayoutmanager/overview/){:target="_blank"} component uses this directive when it is in *tab* mode. You can see an example in the customers module in the [OntimizeWeb quickstart](https://try.imatia.com/ontimizeweb/v15/quickstart/main/customers){:target="_blank"}, where the customers detail form is opened in tabs with the `oTabGroup` directive in **ontimize** mode.

## Ontimize mode

![Tabs ontimize mode]({{ base_path }}/assets/images/customization/tabs-ontimize.png){: .align-center}

```html
<mat-tab-group oTabGroup="ontimize">
  <mat-tab label="First">
    <p>Content 1</p>
  </mat-tab>
  <mat-tab label="Second">
    <p>Content 2</p>
  </mat-tab>
  <mat-tab label="Third">
    <p>Content 3</p>
  </mat-tab>
</mat-tab-group>
```

## Material mode

![Tabs material mode]({{ base_path }}/assets/images/customization/tabls-material.png){: .align-center}

```html
<mat-tab-group oTabGroup="material">
  <mat-tab label="First">
    <p>Content 1</p>
  </mat-tab>
  <mat-tab label="Second">
    <p>Content 2</p>
  </mat-tab>
  <mat-tab label="Third">
    <p>Content 3</p>
  </mat-tab>
</mat-tab-group>
```
