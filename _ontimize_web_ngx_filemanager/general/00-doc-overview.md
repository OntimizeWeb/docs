---
title: "Overview"
permalink: /filemanager/overview/
---
{% include base_path %}
{% include toc %}

## Introduction

The **OntimizeWeb** file manager allows you to manage files stored in your application server. It displays a table that shows the files and folders in a specific workspace and allows the user to perform multiple operation over it, like creating and deleting folders, upload and download files, renaming files and folders, etc.


![Filemanager]({{ "/images/filemanager/filemanager_default.png" | absolute_url }}){: .comp-example-img width='60%' }

We provide two different types of file manager engines on Ontimize: the **DMS** file manager that uses a database to store de files and de **SDMS** file manager (since `ontimize-web-ngx-filemanager 8.6.0` and `ontimize-boot 3.12.0`) wich is based con Amazon S3 cloud.

## Upload

You can *upload* files since the button *Upload*.

While uploading the file will show the progress of the upload process and whether there is an error or if everything went well a message will be displayed. This message will hide after 20.000 ms, you can configure this timeout by setting the value `auto-hide-timeout` in ms and also auto hide the message by setting the value `auto-hide-upload="no"`.

![Filemanager upload]({{ "/images/filemanager/filemanager_upload.png" | absolute_url }}){: .comp-example-img}


## Create folders

The `o-filemanager-table` allows to create a folder using the *New folder* button or the table menu. The button it's disabled by default, you can enable it by setting the value `new-folder-button="yes"`.

![New folder]({{ "/images/filemanager/filemanager_new.png" | absolute_url }}){: .comp-example-img }

## Delete folder or files

The `o-filemanager-table` allow delete simple or multiple by a context menu or button 'Delete'

![Delete folder]({{ "/images/filemanager/filemanager_delete.png" | absolute_url }}){: .comp-example-img  }

## Multiple download support

The `o-filemanager-table` allow download simple or multiple files by a context menu.

![Download mulitple]({{ "/images/filemanager/filemanager_selectedmultiple.png" | absolute_url }}){: .comp-example-img }

## Rename files or folders

The `o-filemanager-table` allow rename files or folders by a context menu.

![Rename file]({{ "/images/filemanager/filemanager_rename.png" | absolute_url }}){: .comp-example-img  }


## Browsing between folders

You can browse between folder with double click or by content menu over the folder and selecting the *Open* option.

![Context menu]({{ "/images/filemanager/filemanager_browser.png" | absolute_url }}){: .comp-example-img  }


## Selection multiple

The `o-filemanager-table` support selection multiple with *row selection* or *checkbox selection* with `select-all-checkbox="yes"` property. If this property is activated in the menu on the upper right, the option will be active. By default is no.

Example

```html
 <o-filemanager-table service="customers" workspace-key="ID_DMS_DOC" new-folder-button="yes" select-all-checkbox="yes"></o-filemanager-table>
```

![Select multiple]({{ "/images/filemanager/filemanager_selectmultiple.png" | absolute_url }}){: .comp-example-img  }


## Textbox Search filter

The `o-filemanager-table` allow filter by name of files or folders.


## Copy files or folders (only for SDMS)

The `o-filemanager-table` configured as SMDS allows you to copy files and folders.

## Move files or folders (only for SDMS)

The `o-filemanager-table` configured as SMDS allows you to move files and folders.
