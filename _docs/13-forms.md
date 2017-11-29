---
title: "Forms"
permalink: /forms/
excerpt: ""
---

{% include base_path %}

# Overview

The '*o-form*' component is a special component that allows you to handle a large amount of data and perform operations on data such as creation, deletion, updating and querying.

This component makes data management easier and allows the developer to focus on the screen and application logic.

The data representation is performed via input fields (such as text, checkbox and combo boxes), lists, or tables.

You can find further information about '*o-form*' configuration parameters in the [Components]({{ base_path }}/components/o-form.component/){:target="_blank"} section.

## Form life hooks

The '*o-form*' component has different life cycles depending on the value of the ‘editable-detail’ parameter:

### editable-detail=false

The '*o-form*' component has different modes depending on the operation that is going to be performed. These modes are:

* **Read only (default)**: This is the initial mode used for displaying a record data. In this mode
the contained fields are not modificable, and the form toolbar shows the buttons to perform *CRUD* operations. CRUD is the acronym of *create,read,update and delete*.
* **Edit mode**: This is the mode that the form adopts when data is about to be modified. In this mode the fields are modifiable, and the form toolbar shows the buttons to accept or reject the changes.
* **Insert mode**: This is the mode used to perform the creation operation. Here all the fields are blank, and they are modifiable. The form toolbar shows the buttons to accept or reject the operation.

The next picture shows each of the form’s possible states:

<img src="{{ base_path }}/images/form/editableDetailFALSE.png" alt="Form life hooks">

### editable-detail=true

This is a new mode and is currently default value. With this value, the ‘o-form’ component has the following states:

* **Edit mode (default)**: This is the mode that the form adopts when data is about to be modified. In this mode the fields are modifiable, and the form toolbar shows the buttons to refresh, insert, or save data. However, the save button is greyed out until one of the components is actually modified.
* **Edit mode with save button enabled**: The form adopts this mode after any of the components contained within it is modified. Now the save button is enabled, allowing the user to save the modified data.
* **Insert mode**: This is the mode used to perform the *creation* operation. Here all the contained fields are blank and they are modifiable. The
form toolbar shows the buttons to accept or reject the operation.

The next picture shows each of the form’s possible states:

<img src="{{ base_path }}/images/form/editableDetailTRUE.png" alt="Form life hooks">


## detail-button-in-row and edit-button-in-row

The new form configuration affects the operation of these parameters.

### editable-detail=false

This is the old default configuration:

<img src="{{ base_path }}/images/form/modesEditableFALSE.png" alt="Form life hooks">

### editable-detail=true

With this new configuration the user should not use the edit button, because the '*o-form*' will not parse the '*edit*' path:

<img src="{{ base_path }}/images/form/modesEditableTRUE.png" alt="Form life hooks">

