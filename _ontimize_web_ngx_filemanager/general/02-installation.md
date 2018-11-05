---
permalink: /filemanager/installation/
title: "Installation"
---

{% include base_path %}

## Installation

```bash
  npm install ontimize-web-ngx-filemanager --save
```

## Usage

### Import the File Manager into your application

Import the Ontimize Web file manager module in the module you want to use it.

```javascript
import { OFileManagerModule } from 'ontimize-web-ngx-filemanager';

@NgModule({
  imports: [
    OFileManagerModule
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```

### Add the File Manager to your component

Insert the `o-filemanager-table` component in your application component template.

You must configure the `service` attribute within the name of the service that manages the files in the server. You must indicate also the column name that stores the work space identifier in the `workspace-key` attribute.

```html
<o-filemanager-table service="customers" workspace-key="ID_DMS_DOC"></o-filemanager-table>
```
