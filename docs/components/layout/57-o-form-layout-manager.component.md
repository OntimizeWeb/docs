---
layout: o-component
permalink: /components/layout/formlayoutmanager/overview
title: "Form layout manager"
comp: formLayoutManager
parent: Layout
grand_parent: Components
nav_order: 6
---

{% include base_path %}
{% include toc %}

A very common feature on management applications is to display a form with the details related to a row from a data collection component. As a solution for this, **OntimizeWeb** offers the `o-form-layout-manager` component, that allows you managing the transitions between a data collection and the form that displays a record detail data.

### Basic example
To include the `o-form-layout-manager` component in your application you just have to wrap the desired data collection component with the form layout manager and it will manage the transitions between that component view and its detail component (without having to modify the routing module).

```html
<o-form-layout-manager attr="formLayoutMngr" mode="tab" title="Customers" label-columns="SURNAME;NAME" separator=",">

  <o-table attr="customers" title="Customers" service="customers" entity="customer" keys="CUSTOMERID" columns="CUSTOMERID;NAME;SURNAME"
    visible-columns="NAME;SURNAME">
  </o-table>

</o-form-layout-manager>
```

This is a summarized example of the customers module of the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/v15/quickstart/main/customers){:target="_blank"}.

The `o-form-layout-manager` component has three available modes: *tab*, *dialog* and *split-pane*.

### Tab mode
Select the *tab* mode and the data collection component and its detail form will be displayed in *tabs*. This allows opening multiple form details at the same time and switch between them quickly.

You can select this mode setting the value **tab** to the `mode` input. You can see a working example of this mode in the
[OntimizeWeb Playground](https://try.imatia.com/ontimizeweb/v15/playground/main/layout-manager/tab){:target="_blank"} or the *customers* module of the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/quickstart/main/customers){:target="_blank"}.

![Form layout manager in *tab* mode]({{ base_path }}/assets/images/layouts/form-layout-manager/formLayoutManagerTAB.png)

#### Options
It is possible to configure tab mode options with the `o-form-layout-tabgroup-options` component. This attributes are explained in the **API** section of this page.

For complex labels, you can add `<ng-template let-tabData="tabData">...</ng-template>` and inside you can define your template. It's *important* than the tabData attributes are including in `label-columns`.

<h3 class="grey-color">Example</h3>
```html
<o-form-layout-manager mode="tab" title="CUSTOMERS" label-columns="SURNAME;NAME" separator=","
  attr="o-form-layout-customer-home" title-data-origin="customers_form_edit">
  <o-form-layout-tabgroup-options background-color="primary" color="accent" header-position="below">
    <ng-template let-tabData>
      <mat-icon>person</mat-icon>
      {% raw %}{{tabData?.SURNAME}}, {{tabData?.NAME}}{% endraw %}
    </ng-template>
  </o-form-layout-tabgroup-options>
 ................
</o-form-layout-manager>
```

### Dialog mode
The *dialog* mode consists in displaying the form detail in a dialog over the data collection component.

Select this mode setting the value **dialog** to the `mode` input. You can see a working example of this mode in the [OntimizeWeb Playground](https://try.imatia.com/ontimizeweb/v15/playground/main/layout-manager/dialog){:target="_blank"}  or in the *branches* module of the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/quickstart/main/branches){:target="_blank"}.

![Form layout manager in *dialog* mode]({{ base_path }}/assets/images/layouts/form-layout-manager/formLayoutManagerDIALOG.png)

#### Options

It is possible to configure dialog mode options with the `o-form-layout-dialog-options` component. This attributes are explained on the **API** section of this page.

<h3 class="grey-color">Example</h3>

```html
<o-form-layout-manager mode="dialog" title="BRANCHES" label-columns="NAME" separator=""
  attr="o-form-layout-branches-home">

  <o-form-layout-dialog-options width="600px" height="400px"
  disable-close="false" ></o-form-layout-dialog-options>

  ...

</o-form-layout-manager>
```

### Split pane mode
Select the *split-pane* mode and the collection component and the detail form will be displayed in a splitted screen. This allows seeing both components at the same time and also being able to resize the display.

You can select this mode setting the value **split-pane** to the `mode` input. You can see a working example of this mode in the *form-layout-manager* module of the [OntimizeWeb Playground](https://try.imatia.com/ontimizeweb/v15/playground/main/layout-manager/split-pane){:target="_blank"}.


![Form layout manager in *split-pane* mode]({{ base_path }}/assets/images/layouts/form-layout-manager/formLayoutManagerSPLITPANE.png){: .align-center}

#### Options

It is possible to configure split pane mode options with the `o-form-layout-split-pane-options` component. This attributes are explained on the **API** section of this page.

<h3 class="grey-color">Example</h3>

```html
<o-form-layout-manager mode="split-pane" attr="o-form-layout-split-pane-form">

  <o-form-layout-split-pane-options width="600px"></o-form-layout-split-pane-options>

  ...

</o-form-layout-manager>
```

### Options definition

The different available modes options can be setted in two ways: using the mode option tag or including the mode inputs in the `o-form-layout-manager` tag.

```html
  <o-form-layout-manager mode="tab" attr="o-form-layout-customer-home"
   title="CUSTOMERS" label-columns="SURNAME;NAME" separator="," icon="info" color="warn">

  ...

  </o-form-layout-manager>
```

  Is equivalent to:

```html
  <o-form-layout-manager mode="tab" attr="o-form-layout-customer-home">

    <o-form-layout-tabgroup-options color="accent" title="CUSTOMERS"
      label-columns="SURNAME;NAME" separator="," icon="info" color="warn">
    </o-form-layout-tabgroup-options>

    ...

  </o-form-layout-manager>
```
### Sidenav mode

Select the *sidenav* mode to display the detail form inside a side navigation panel that slides over the collection component.

This mode is especially useful when you want a modern master–detail interaction without leaving the current view. The detail component is rendered dynamically inside a `mat-sidenav`, allowing a smooth and contextual user experience.

You can select this mode setting the value **sidenav** to the `mode` input. You can see a working example of this mode in the [OntimizeWeb Playground](https://try.imatia.com/ontimizeweb/v15/playground/main/layout-manager/sidenav){:target="_blank"}.

![Form layout manager in *sidenav* mode]({{ base_path }}/assets/images/layouts/form-layout-manager/formLayoutManagerSIDENAV.png){: .align-center}

---

#### Basic example

```html
<o-form-layout-manager mode="sidenav"
  attr="o-form-layout-customers"
  title="CUSTOMERS"
  label-columns="SURNAME;NAME"
  separator=",">

  <o-table attr="customers"
           service="customers"
           entity="customer"
           keys="CUSTOMERID"
           columns="CUSTOMERID;NAME;SURNAME"
           visible-columns="NAME;SURNAME">
  </o-table>

</o-form-layout-manager>
```
#### Behavior

In *sidenav* mode:

- The detail component is rendered dynamically inside a `mat-sidenav`.
- The panel is displayed in **over** mode (it slides over the content).
- Only one detail can be opened at a time.
- The main collection remains visible in the background.
- The label of the sidenav is automatically generated using the `label-columns` and `separator` inputs.
- Navigation state is managed internally by the `o-form-layout-manager`.

---

#### Options

It is possible to configure sidenav mode options with the `o-form-layout-sidenav-options` component.

#### Available attributes

| Attribute        | Type               | Default | Description |
|-----------------|--------------------|----------|-------------|
| `width`         | `string`           | `60%`    | Width of the sidenav panel (CSS value, e.g. `400px`, `50%`). |
| `position`      | `'start' \| 'end'`  | `end`    | Side where the sidenav appears. |
| `label-columns` | `string`           | —        | Fields used to generate the detail label. |
| `separator`     | `string`           | —        | Separator used between label columns. |

---

#### Example with options component

```html
<o-form-layout-manager mode="sidenav"
  attr="o-form-layout-customers-home">

  <o-form-layout-sidenav-options
    width="500px"
    position="end"
    label-columns="SURNAME;NAME"
    separator=",">
  </o-form-layout-sidenav-options>

  <o-table attr="customers"
           service="customers"
           entity="customer"
           keys="CUSTOMERID"
           columns="CUSTOMERID;NAME;SURNAME"
           visible-columns="NAME;SURNAME">
  </o-table>

</o-form-layout-manager>
```
#### Defining options directly in o-form-layout-manager

Sidenav options can also be defined directly in the manager component:
```html
<o-form-layout-manager mode="sidenav"
  width="500px"
  position="start"
  label-columns="SURNAME;NAME"
  separator=","
  attr="o-form-layout-customers-home">

</o-form-layout-manager>
```