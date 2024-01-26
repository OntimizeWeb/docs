---
title: "Forms"
permalink: /forms/
---

{% include base_path %}

## Overview
The [`o-form`]({{ base_path }}/components/form/overview){:target="_blank"} component is a special component that allows you to handle a large amount of data and perform operations on data such as creation, deletion, updating and querying. This component makes data management easier and allows the developer to focus on the application layout and logic.

The data representation is performed via [form components]({{ base_path }}/components/input/overview/overview){:target="_blank"} (such as text, checkbox and combo boxes) or collection components like [`o-table`]({{ base_path }}/components/table/overview){:target="_blank"}, [`o-list`]({{ base_path }}/components/list/overview){:target="_blank"} or [`o-grid`]({{ base_path }}/components/grid/overview){:target="_blank"}.


You can find detailed information about this component [here]({{ base_path }}/components/form/overview){:target="_blank"}.

## Form lifecycle
The most common use case in which a `o-form` is used is to display a detailed view of a record that is part of a larger collection of data. In this case we can call it a *detail form*. This use case can be achieved with **OntimizeWeb** by combining a data collection component ([`o-table`]({{ base_path }}/components/table/overview){:target="_blank"}, [`o-list`]({{ base_path }}/components/list/overview){:target="_blank"} or [`o-grid`]({{ base_path }}/components/grid/overview){:target="_blank"}) and the `o-form` component.

Once a record's data is displayed in a form it can be marked as read-only or editable which is why the `o-form` can go through many states during execution. You can read more about this topic in the [form lifecycle]({{ base_path }}/components/form/lifecycle/){:target="_blank"} section.

## Related components
There are some components that improve the `o-form` usage adding some features without having to implement them.

### Form container
In some applications you may want to place a breadcrumb component on top of your form. **OntimizeWeb** allows this using the `o-form-container` component. Learn more about this component [here]({{ base_path }}/components/form/container/overview){:target="_blank"}.

### Form layout manager
After having a data collection displayed in a component and its detail data viewed or edited in a detail component, the user may want to display that data using different layouts without having to change its definition and routing modules. In this case **OntimizeWeb** offers the `o-form-layout-manager` component. This component, used as a wrapper to the data collection component, allows to manage the transitions between the data collection and the detail view with the data record details.

You can read more about this component [here]({{ base_path }}/components/formlayoutmanager/overview){:target="_blank"}.
