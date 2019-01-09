---
permalink: /components/containers/
title: "Containers"
comp: container
---

{% include base_path %}

Container components are used to wrap components and organize the application layout. This components are `o-column` and `o-row` and affect their children's layout or flow as the direction alon the cross-axis or the main-axis respectively.

This components also apply basic styling 

## Example

```html
<o-column attr="col" title-label="This is a column">
    <!-- Children displayed along Y axis -->
</o-column>

<o-row attr="row" title-label="This is a row">
    <!-- Children displayed along X axis -->
</o-row>
```
## Appearance <span class='menuitem-badge'> new </span>

The `appearance` input indicates which of the different `container` appearance is used. It has the same features that Angular Material appearance input, watch it [here](https://v6.material.angular.io/components/form-field/overview#form-field-appearance-variants), 
only has a possible *outline* value.
```html
 <o-column title-label="Dirección fiscal" appearance='outline'>
    <o-row fxFlex="100">
        <o-text-input fxFlex="75" layout-padding attr="Dirección" enabled="no" data="C/ José Manuel Guimerá, 3-4º"></o-text-input>
        <o-text-input fxFlex="25" layout-padding attr="C.P." enabled="no" data="38003"></o-text-input>
    </o-row>
    <o-row fxFlex="100">
        <o-combo fxFlex layout-padding attr="País" value-column="id" columns="id;name" visible-columns="name"
        [static-data]="countryData" data="1" enabled="no"></o-combo>
        <o-combo fxFlex layout-padding attr="Provincia" query-on-init="no" query-on-bind="no" enabled="no"></o-combo>
        <o-text-input fxFlex layout-padding attr="Localidad" data="Tenerife" enabled="no"></o-text-input>
    </o-row>
</o-column>
```



![Outline Appearance]({{ "/images/layouts/containers/outline-appearance.png" | absolute_url }}){: .comp-example-img}


You can interact with different options of this components in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/containers){:target="_blank"}.
