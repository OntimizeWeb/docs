---
title: "Forms"
permalink: /forms/
excerpt: ""
modified: 2016-12-13T10:25:30-04:00
---

{% include base_path %}

# Overview

The '*o-form*' component is a special component that allows you to handle a good handful of data and
perform typical operations in data management applications such as: creation, deletion, update and query.

This component makes data management easier and allows the developer to focus on the screen and application logic.

The representation of the data is performed via input fields (such as text, checkbox, combos, etc.), lists or tables.

You can find further information about '*o-form*' configuration parameters into [Components]({{ base_path }}/components/o-form.component/){:target="_blank"} section.

## Form life hooks

The '*o-form*' component has different status modes depending on the operation that is going to be performed. These modes are:

* **Read only (default)**: This is the initial mode and it is the one used when form displays data of an specific record. In this mode
the fields contained into the form are not modificable and the form toolbar shows the buttons to perform *CRUD* operations.
* **Edit mode**: This is the mode that the form adopts when data is going to be modified. In this mode the fields are modificable and
the form toolbar shows the buttons to accept or reject the changes.
* **Insert mode**: This is the mode of the form to perform *creation* operation. The form is totally blank, fields are modificable and the
form toolbar shows the buttons to accept or reject the operation.

Next picture shows how form life hooks works:

<img src="{{ base_path }}/images/forms-life_hooks.png" alt="Form life hooks">