---
title: "Forms"
permalink: /forms/
excerpt: ""
---

{% include base_path %}

# Overview

The '*o-form*' component is a special component that allows you to handle a good handful of data and
perform typical operations in data management applications such as: creation, deletion, update and query.

This component makes data management easier and allows the developer to focus on the screen and application logic.

The data representation is performed via input fields (such as text, checkbox, combos, etc.), lists or tables.

You can find further information about '*o-form*' configuration parameters into [Components]({{ base_path }}/components/o-form.component/){:target="_blank"} section.

## Form life hooks

The '*o-form*' component has different life cylces depending on the '*editable-detail*' input value:

### editable-detail=false

The '*o-form*' component has different status modes depending on the operation that is going to be performed. These modes are:

* **Read only (default)**: This is the initial mode used for displaying a record data. In this mode
the contained fields are not modificable and the form toolbar shows the buttons to perform *CRUD* operations.
* **Edit mode**: This is the mode that the form adopts when data is going to be modified. In this mode the fields are modificable and
the form toolbar shows the buttons to accept or reject the changes.
* **Insert mode**: This is the mode used to perform the *creation* operation. Here all the contained fields are blank and they are modificable. The
form toolbar shows the buttons to accept or reject the operation.

Next picture shows how form life hooks works:

<img src="{{ base_path }}/images/form/editableDetailFALSE.png" alt="Form life hooks">

### editable-detail=true

This is a new mode and from now on it is the form default value. Setting this input value the '*o-form*' component has the following states:

* **Edit mode (default)**: This is the mode that the form adopts when data is going to be modified. In this mode the fields are modificable and
the form toolbar shows the buttons to refresh, insert or save data (this button is disabled).
* **Edit mode with save button enabled**: The form adopt this mode when any of the components contained in it is modified. Now the save button is enabled for allowing the user to save the modified data.
* **Insert mode**: This is the mode used to perform the *creation* operation. Here all the contained fields are blank and they are modificable. The
form toolbar shows the buttons to accept or reject the operation.

Next picture shows how form life hooks works:

<img src="{{ base_path }}/images/form/editableDetailTRUE.png" alt="Form life hooks">


## detail-button-in-row and edit-button-in-row

The new form configuration affects the operation of this parameters.

### editable-detail=false

This is the old default configuration:

<img src="{{ base_path }}/images/form/modesEditableFALSE.png" alt="Form life hooks">

### editable-detail=true

With this new configuration the user should not use the edit button, because the '*o-form*' will not parse the '*edit*' path:

<img src="{{ base_path }}/images/form/modesEditableTRUE.png" alt="Form life hooks">

