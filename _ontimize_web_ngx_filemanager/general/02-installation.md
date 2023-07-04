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

### Add the library theming
Include the library theme in your application by adding the following code to the '*app.scss*' file:

```bash
...
@import '~ontimize-web-ngx-filemanager/o-filemanager-table-theme.scss';
@include o-filemanager-table-theme($theme);
...
```

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

If you want to use the SDMS file manager engine you need to add the `type='S3'` attribute to yours `o-filemanager-table` component. 

Also you must indicate also the form column name that stores the work space identifier in the workspace-key attribute or define the `workspace-S3` function as the example bellow

`customers-detail.component.html`:
```html
...
<o-filemanager-table type="S3" service="customers" [workspace-s3]="setWorkspaceS3"></o-filemanager-table>
...
```

`customers-detail.component.ts`:
```typescript
...
  setWorkspaceS3(data: any) {
    return { name: 'default', data: { id: [1] } };
  }
...
```
