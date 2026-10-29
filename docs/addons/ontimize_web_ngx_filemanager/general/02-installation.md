---
permalink: /addons/filemanager/installation/
title: "Installation"
layout: default
parent: File Manager
grand_parent: Addons
nav_order: 2
---

{% include base_path %}

## Installation

```bash
npm install ontimize-web-ngx-filemanager --save
```

### Compatibility

| ontimize-web-ngx-filemanager | ontimize-web-ngx | Angular |
|---|---|---|
| 18.0.0-next.0+ | ^18.0.0-next.0 | ^18.2.0 |

> **Breaking change**: `@angular/flex-layout` has been removed. Replace `fxLayout`/`fxFlex` template attributes with `o-flex-*` CSS utility classes.

> **Breaking change**: `OTableSkeletonExtendedComponent` has been replaced by the built-in `OTableSkeletonComponent` from `ontimize-web-ngx`.

## Usage

### Import into your application

#### Option A — Standalone component (recommended)

```typescript
import { OFileManagerTableComponent } from 'ontimize-web-ngx-filemanager';

@Component({
  standalone: true,
  imports: [OFileManagerTableComponent],
  template: `<o-filemanager-table service="customers" workspace-key="ID_DMS_DOC"></o-filemanager-table>`
})
export class MyComponent {}
```

#### Option B — NgModule

```typescript
import { OFileManagerModule } from 'ontimize-web-ngx-filemanager';

@NgModule({
  imports: [OFileManagerModule]
})
export class ExampleModule {}
```

### Add the File Manager to your component

Insert `o-filemanager-table` in your template. Configure the `service` attribute with the service that manages files and `workspace-key` with the column storing the workspace identifier:

```html
<o-filemanager-table service="customers" workspace-key="ID_DMS_DOC"></o-filemanager-table>
```

For S3 mode:

```html
<o-filemanager-table type="S3" service="customers" [workspace-s3]="setWorkspaceS3"></o-filemanager-table>
```

```typescript
setWorkspaceS3(data: any) {
  return { name: 'default', data: { id: data['CUSTOMERID'] } };
}
```
