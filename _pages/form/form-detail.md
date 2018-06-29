---
permalink: /components/form/detail/
title: "Detail form"
author_profile: false
sidebar:
        nav: "docs"
---

{% include base_path %}
{% include toc %}

A detail form is an special usage of the form component. A form is called *detail form* when it is used for managing a piece of data from a collection. The most common use case of a detail form is for displaying the data related to a table record. This use case can be achieved by combining the [`o-form`]({{ base_path }}/components/form/){:target="_blank"} and the [`o-table`]({{ base_path }}/components/table/){:target="_blank"} components in your application. In this section we describe how **OntimizeWeb** manage the transitions between the table and the detail form.

As a developer, you can decide the behaviour of a detail form in you application. When the user opens a detail form, you can decide if the form will be in update or read only mode. You can select one of this behaviours by configuring the `editable-detail` attribute in your `o-form` component.

## Detail form editable

This is the default behaviour of the detail form in **OntimizeWeb** and it is achieved by setting the value **yes** to the `editable-detail` attribute of the `o-form` component.

The form modes for the *detail form editable* are the following:

* **Edit mode (default)**: This is the mode that the form adopts when data is about to be modified. In this mode the form fields are modifiable, and the form toolbar shows the buttons to refresh, insert, or save data. However, the save button will be disabled until the user modify some for field.
* **Edit mode with save button enabled**: The form adopts this mode after any of the form fields contained within it is modified. Now the save button is enabled, allowing the user to save the modified data.
* **Insert mode**: This is the mode used to perform the *creation* operation. Here all the contained fields are blank and they are modifiable. The
form toolbar shows the buttons to accept or reject the operation.

You can see the states and transitions between the table and the detail form for the *detail form editable* in the following diagram:

![Detail form editable]({{ base_path }}/images/components/form/editableDetailTRUE.png){: .align-center}

>**NOTE** This behaviour affects the performance of the attributes `detail-button-in-row` and `edit-button-in-row` from the `o-table` component. When the form is configured as a *detail form editable* you should not use the edit button on the table row because the form will not parse the *edit* path.
>![Detail form editable transitions]({{ base_path }}/images/components/form/modesEditableTRUE.png){: .align-center.padding-top}

## Detail form not editable

This is the old traditional behaviour for those familiarized with **Ontimize** applications and it achieved by setting the value **no** to the `editable-detail` attribute of the `o-form` component.

The form modes for the *detail form not editable* are the following:

* **Read only (default)**: This is the initial mode used for displaying a record data. In this mode the contained fields are not modificable, and the form toolbar shows the buttons to perform *CRUD* operations. CRUD is the acronym of *Create, Read, Update and Delete*.
* **Edit mode**: This is the mode that the form adopts when data is about to be modified. In this mode the fields are modifiable, and the form toolbar shows the buttons to accept or reject the changes.
* **Insert mode**: This is the mode used to perform the creation operation. Here all the fields are blank, and they are modifiable. The form toolbar shows the buttons to accept or reject the operation.

You can see the states and trasitions between the table and the detail form for the *detail form not editable* in the following diagram:

![Detail form not editable]({{ base_path }}/images/components/form/editableDetailFALSE.png){: .align-center}
