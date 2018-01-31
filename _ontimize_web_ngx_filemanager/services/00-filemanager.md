---
permalink: /ontimize_web_ngx_filemanager/services/filemanager/
title: "File Manager Service"
excerpt: ""
---


The **FileManagerService** class provide a collection of methods to manage files and folders. The most common operations performed on files include uploading, downloading, deleting and searching form files, as well as creating and deleting folders for organising the files.

You can define your **own file manager service** by extending the *FileManagerService*.

## File data model

The *FileManagerService* uses a class called **FileClass** as the file data model. The attributes of this class are the following:

| name         | type    | Description                                                |
| ------------ | ------- | ---------------------------------------------------------- |
| id           | number  | The file identifier                                        |
| name         | string  | The file name                                              |
| size         | number  | The file size                                              |
| creationDate | number  | Timestamp that represents the date of creation of the file |
| directory    | boolean | Indicates if the file is a folder                          |

## File Manager REST API

In this section we describe the REST API used by the *FileManagerService*.

### Get files information

* **Path**: /queryFiles/:workspaceId
* **Method**: POST
* **URL params**:

| name        | type | Description               |
| ----------- | ---- | ------------------------- |
| workspaceId | any  | The work space identifier |

* **Data params**:

| name        | type     | Description                      |
| ----------- | -------- | -------------------------------- |
| queryParams | Map      | A map with the search parameters |

| filter      | Map      | A key/value object for filtering the results requested |
| attributes  | String[] | Array containing the requested fields                  |

* **Response**: FileClass[]


### Download a single file

* **Path**: /getFile/:fileId
* **Method**: GET
* **URL params**:

| name        | type     | Description                                |
| ----------- | -------- | ------------------------------------------ |
| fileId      |          | Array of files information for downloading |


### Download multiple files and/or folders

* **Path**: /getFiles/:workspaceId
* **Method**: POST
* **URL params**:

| name        | type | Description               |
| ----------- | ---- | ------------------------- |
| workspaceId | any  | The work space identifier |

* **Data params**:

| name  | type        | Description                          |
| ----- | ----------- | ------------------------------------ |
| files | FileClass[] | A list of files data for downloading |

* **Response**: Map containing the zip file name generated.


### Download zip file

* **Path**: /getZipFile/:file
* **Method**: GET
* **URL params**:

| name  | type   | Description              |
| ----- | ------ | ------------------------ |
| file  | string | The file for downloading |

* **Response**:


### Upload file

* **Path**: /insertFile/:workspaceId
* **Method**: POST
* **URL params**:

| name        | type | Description               |
| ----------- | ---- | ------------------------- |
| workspaceId | any  | The work space identifier |

* **Data params**:

| name     | type | Description                                                       |
| -------- | ---- | ----------------------------------------------------------------- |
| file     |      | The uploading file                                                |
| folderId |      | The forlder identifier that will contains the file uploading file |

* **Response**: The inserted file identifier.


### Delete files and/or folders

* **Path**: /deleteFiles/:workspaceId
* **Method**: POST
* **URL params**:

| name        | type | Description               |
| ----------- | ---- | ------------------------- |
| workspaceId | any  | The work space identifier |

* **Data params**:

| name         | type     | Description                      |
| ------------ | -------- | -------------------------------- |
| deleteParams | Map      | A map with the delete parameters |

| fileList | FileClass[] | A list of files data for deleting |


### Create folder

* **Path**: /insertFolder/:workspaceId/:folderName
* **Method**: POST
* **URL params**:

| name        | type   | Description               |
| ----------- | ------ | ------------------------- |
| workspaceId | any    | The work space identifier |
| name        | string | The folder name           |

* **Data params**:

| name        | type     | Description                      |
| ----------- | -------- | -------------------------------- |
| inserParams | Map      | A map with the insert parameters |

| data | Map | A map containing the parent folder identifier |
