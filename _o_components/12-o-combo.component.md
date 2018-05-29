---
permalink: /components/input/combo/
title: "Combo"
comp: combo
under_construction: false
---

<aside class="sidebar__right">
  <nav class="toc">
      <header><h4 class="nav__title"><i class="fa fa-file-text"></i> On This Page</h4></header>
      <ul class="toc__menu" id="markdown-toc">
        <li><a href="#basic-example" id="markdown-toc-overview">Basic example</a></li>
        <li><a href="#validation">Validation</a></li>
    </ul>
  </nav>
</aside>

The `o-combo` component is used in [forms]({{ base_path }}/docs/components/form/) for getting or displaying an option between multiple input submitted by the user.

The combo component is automatically registered on its parent `o-form`, which provides the value for the combo programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

This component is different than most of other inputs, an array of data must be provided to the component in order to interact with it. This data is used to display the optoins on the drop down and each element of the data array must be an object with at least one key/value pair.

The data array can be provided in two ways:
* Provide an array of objects to the `static-data` attribute (see the [example](#basic-example) below).
* Configure the component to query the data from a service. Using `service` and `entity` attributes.

## Basic example
![Combo component]({{ "/images/components/inputs/o-combo.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-combo attr="country" label="Country" data="Spain" [static-data]="getStaticData()" value-column="name" columns="id;name" visible-columns="name" read-only="no" required="yes"></o-combo>
    <o-combo attr="country" label="Country" data="Spain" [static-data]="getStaticData()" value-column="name" columns="id;name" visible-columns="name" enabled="no"></o-combo>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/inputs/combo){:target="_blank"}.

## Validation
The `o-combo` shows automatically an error message when the `required` attribute is set to "yes" and there is no value selected.
