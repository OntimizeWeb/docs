---
permalink: /filemanager/installation
title: "File Manager"
excerpt: ""
---
{% include base_path %}


## Installation

```bash
  npm install ontimize-web-ngx-filemanager --save
```

## Usage

<!-- ### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-filemanager/styles.scss",
  ....
],
...
``` -->

### Import in an application module

Import the Ontimize Web file manager module in the app module you want to use it.

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
