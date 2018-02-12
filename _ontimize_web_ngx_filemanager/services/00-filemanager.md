---
permalink: /ontimize_web_ngx_filemanager/services/filemanager/
title: "File Manager Service"
excerpt: ""
---


The **FileManagerService** class provide a collection of methods to manage files and folders. The most common operations performed on files include uploading, downloading, deleting and searching from files, as well as creating and deleting folders for organising the work space.


## File data model

The File Manager Service uses the class **FileClass** as the file data model. This class provides the following attributes:

| Name         | Type    | Description                                                |
| ------------ | ------- | ---------------------------------------------------------- |
| id           | number  | The file identifier                                        |
| name         | string  | The file name                                              |
| size         | number  | The file size                                              |
| creationDate | number  | Timestamp that represents the date of creation of the file |
| directory    | boolean | Indicates wether a file is a folder or not                 |


## Methods

### *configureService*
Configure de Ontimize Web File Manager service.

* **Parameters**

| Name   | Type | Required | Description                        |
| ------ | ---- | -------- | ---------------------------------- |
| config | Map  | yes      | The configuration object parameter |

### *queryFiles*
Get the files in the work space.

* **Parameters**

| Name        | Type     | Required | Description                                            |
| ----------- | -------- | -------- | ------------------------------------------------------ |
| workspaceId |          | yes      | The work space identifier                              |
| kv          | Object   | no       | A key/value object for filtering the results requested |
| attrs       | string[] | no       | An array of string wi the searching fields requested   |

* **Return** Observable<FileClass[]>

### *download*
Download de requested files.

* **Parameters**

| Name        | Type        | Required | Description                |
| ----------- | ----------- | -------- | -------------------------- |
| workspaceId |             | yes      | The work space identifier  |
| files       | FileClass[] | yes      | The downloading files data |

* **Return** Observable<any>

### *downloadMultiple*
Download de requested files in a zip file.

* **Parameters**

| Name        | Type        | Required | Description                |
| ----------- | ----------- | -------- | -------------------------- |
| workspaceId |             | yes      | The work space identifier  |
| files       | FileClass[] | yes      | The downloading files data |

* **Return** Observable<any>

### *upload*
Upload the provided files and place them in the provided flder.

* **Parameters**

| Name        | Type        | Required | Description                |
| ----------- | ----------- | -------- | -------------------------- |
| workspaceId |             | yes      | The work space identifier  |
| folderId    |             | yes      | The folder identifier      |
| files       | FileClass[] | yes      | The downloading files data |

* **Return** Observable<any>

### *deleteFiles*
Delete the provided files from the work space.

* **Parameters**

| Name        | Type        | Required | Description                |
| ----------- | ----------- | -------- | -------------------------- |
| workspaceId |             | yes      | The work space identifier  |
| files       | FileClass[] | yes      | The downloading files data |

* **Return** Observable<any>

### *insertFolder*
Create a folder in the work space.

* **Parameters**

| Name        | Type        | Required | Description                                                       |
| ----------- | ----------- | -------- | ----------------------------------------------------------------- |
| workspaceId |             | yes      | The work space identifier                                         |
| name        | string      | yes      | The folder name                                                   |
| kv          | Map         | no       | A key/value object for filtering where the folder will be created |

* **Return** Observable<any>

### *fileUpdate*
Update a folder or file name.

* **Parameters**

| Name | Type      | Required | Description                   |
| ---- | --------- | -------- | ----------------------------- |
| name | string    | yes      | The file/folder name          |
| file | FileClass | yes      | The file for changin the name |

* **Return** Observable<any>


## Extending the File Manager Service

You can define **your own file manager service** by extending the *FileManagerService* as follows.

```javascript
import { Injectable, Injector } from '@angular/core';
import { FileManagerService } from 'ontimize-web-ngx-filemanager';

@Injectable()
export class FileManagerExtendedService extends FileManagerService {

  constructor(
    protected injector: Injector
  ) {
    super(injector);
  }

}
```


## File Manager REST API

In this section we describe the REST API used by the *FileManagerService*.

### Get files information

* **Path**: /queryFiles/:workspaceId
* **Method**: POST
* **URL params**:

| Name        | Type | Description               |
| ----------- | ---- | ------------------------- |
| workspaceId | any  | The work space identifier |

* **Data params**:

<table>
    <thead>
        <tr>
            <th>Name</th><th>Type</th><th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>queryParams</td>
            <td>Map</td>
            <td>A map with the search parameters definde as follows<br>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th><th>Type</th><th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>filter</td><td>Map</td><td>A key/value object for filtering the results requested</td>
                        </tr>
                        <tr>
                            <td>attributes</td><td>String[]</td><td>Array containing the requested fields</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

* **Response**: FileClass[]


### Download a single file

* **Path**: /getFile/:fileId
* **Method**: GET
* **URL params**:

| Name        | Type     | Description                                |
| ----------- | -------- | ------------------------------------------ |
| fileId      |          | Array of files information for downloading |


### Download multiple files and/or folders

* **Path**: /getFiles/:workspaceId
* **Method**: POST
* **URL params**:

| Name        | Type | Description               |
| ----------- | ---- | ------------------------- |
| workspaceId | any  | The work space identifier |

* **Data params**:

| Name  | Type        | Description                          |
| ----- | ----------- | ------------------------------------ |
| files | FileClass[] | A list of files data for downloading |

* **Response**: Map containing the zip file name generated.


### Download zip file

* **Path**: /getZipFile/:file
* **Method**: GET
* **URL params**:

| Name  | Type   | Description              |
| ----- | ------ | ------------------------ |
| file  | string | The file for downloading |

* **Response**:


### Upload file

* **Path**: /insertFile/:workspaceId
* **Method**: POST
* **URL params**:

| Name        | Type | Description               |
| ----------- | ---- | ------------------------- |
| workspaceId | any  | The work space identifier |

* **Data params**:

| Name     | Type | Description                                                       |
| -------- | ---- | ----------------------------------------------------------------- |
| file     |      | The uploading file                                                |
| folderId |      | The forlder identifier that will contains the file uploading file |

* **Response**: The inserted file identifier.


### Delete files and/or folders

* **Path**: /deleteFiles/:workspaceId
* **Method**: POST
* **URL params**:

| Name        | Type | Description               |
| ----------- | ---- | ------------------------- |
| workspaceId | any  | The work space identifier |

* **Data params**:

<table>
    <thead>
        <tr>
            <th>Name</th><th>Type</th><th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>deleteParams</td>
            <td>Map</td>
            <td>A map with the delete parameters defined as follows<br>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th><th>Type</th><th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>fileList</td><td>FileClass[]</td><td>A list of files data for deleting</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


### Create folder

* **Path**: /insertFolder/:workspaceId/:folderName
* **Method**: POST
* **URL params**:

| Name        | Type   | Description               |
| ----------- | ------ | ------------------------- |
| workspaceId | any    | The work space identifier |
| name        | string | The folder name           |

* **Data params**:

<table>
    <thead>
        <tr>
            <th>Name</th><th>Type</th><th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>insertParams</td>
            <td>Map</td>
            <td>A map with the following parameters described as follows<br>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th><th>Type</th><th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>data</td><td>Map</td><td>A map with the insert extra information</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>




### Change file/folder name

* **Path**: /fileUpdate
* **Method**: POST
* **Data params**:

<table>
    <thead>
        <tr>
            <th>Name</th><th>Type</th><th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>fileParams</td>
            <td>Map</td>
            <td>A map with the following parameters described as follows<br>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th><th>Type</th><th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>file</td><td>FileClass</td><td>The file data for changing name</td>
                        </tr>
                        <tr>
                            <td>params</td><td>Map</td><td>A map with a 'name' key containing the new name for the file</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
