---
permalink: /components/form/lifecycle/
title: "Form lifecycle"
author_profile: false
sidebar:
        nav: "docs"
nav_exclude: true
layout: default
---

{% include base_path %}
{% include toc %}

A form is called *detail form* when it is used for managing a piece of data from a collection. The most common use case of a detail form is for displaying the data related to a data collection record. This can be achieved by combining the [`o-form`]({{ base_path }}/components/form/overview/){:target="_blank"} and a collection component ([`o-table`]({{ base_path }}/components/table/overview/){:target="_blank"}, [`o-list`]({{ base_path }}/components/list/overview/){:target="_blank"} or [`o-grid`]({{ base_path }}/components/grid/overview/){:target="_blank"}) in your application. In this section we describe how **OntimizeWeb** manage the transitions between the data collection and the detail form.

As a developer, you can decide the behaviour of a detail form in you application. When the user opens a form, you can decide if the form will be in update or read only mode. You can select one of this behaviours by configuring the `editable-detail` input in your `o-form` component.

## Editable detail form

This is the default behaviour of the detail form in **OntimizeWeb** and it is achieved by setting the value **yes**/**true** to the `editable-detail` input of the `o-form` component.

The form modes for the *editable detail form* are the following:

* **Edition mode (default)**: This is the mode that the form adopts when data is about to be modified. In this mode the form fields are modifiable, and the form toolbar displays the buttons to undo or save data besides the *CRUD* operations (*Create, Read, Update and Delete*) setted in the `header-actions` form input. However, the save and undo buttons will be disabled until the user modifies some of the fields.
* **Edition mode with save and undo buttons enabled**: The form adopts this mode after any of the form fields contained within it is modified. Now the save and undo buttons are enabled, allowing the user to save or undo the modified data.
* **Insertion mode**: This is the mode used to perform the *creation* operation. Here, all the contained fields are blank and they are modifiable. The form toolbar shows the buttons to accept or reject the operation.

### States diagram

You can see the states and transitions between a table and the detail form for the *editable detail form* in the following diagram:

![Detail form editable]({{ base_path }}/assets/images/components/form/editableDetailTRUE.png){: .align-center}

### Example

>![Detail form editable example]({{ base_path }}/assets/images/components/form/editableDetailYES-gif.gif){: .align-center.padding-top}


{: .note}
>This behaviour affects the performance of the attributes `detail-button-in-row` and `edit-button-in-row` from the `o-table` component. When the form is configured as a *editable detail form* you should not use the edit button on the table row because the form will not parse the *edit* path.

>![Detail form editable transitions]({{ base_path }}/assets/images/components/form/modesEditableTRUE.png){: .align-center.padding-top}

## Not editable detail form

This is the old traditional behaviour for those familiarized with **Ontimize** applications and its achieved by setting the value **no**/**false** to the `editable-detail` input in the `o-form` component.

The form modes for the *not editable detail form* are the following:

* **Read only (default)**: This is the initial mode used for displaying a record data. In this mode the contained fields are not modifiable, and the form toolbar shows the buttons to perform the edition or the deletion of the data (if those options are present in the `header-actions` input).
* **Edition mode (default)**: This is the mode that the form adopts when data is about to be modified after clicking the edit toolbar button. In this mode the fields are modifiable and the form toolbar shows the buttons to undo and accept or reject the changes. However, the undo button will be disabled until the user modifies some of the fields.
* **Edition mode with undo button enabled**: the form adopts this mode after any of the form fields contained within it is modified. Now the undo button is enabled, allowing the user to undo the modified data.
* **Insertion mode**: This is the mode used to perform the *creation* operation. Here, all the fields are blank and they are modifiable. The form toolbar shows the buttons to accept or reject the operation.

### States diagram

You can see the states and trasitions between the table and the detail form for the *not editable detail form* in the following diagram:

![Detail form not editable]({{ base_path }}/assets/images/components/form/editableDetailFALSE.png){: .align-center}

### Example

>![Detail form NOT editable example]({{ base_path }}/assets/images/components/form/editableDetailNO-gif.gif){: .align-center.padding-top}
