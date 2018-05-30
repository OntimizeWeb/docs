---
permalink: /filemanager/
title: "File Manager"
excerpt: ""
---

{% include base_path %}

The **Ontimize Web File Manager** is a web file manager using [OntimizeWeb](https://github.com/OntimizeWeb/ontimize-web-ngx){:target="_blank"}.

* [Github repository](#github)
* [Installation](#installation)
* [Usage](#usage)
* [Documentation]({{ base_path }}/filemanager/overview/)

## Github
Ontimize Web File Manager module is stored in [github](https://github.com/OntimizeWeb/ontimize-web-ngx-filemanager){:target="_blank"} where you can also see/add todos, bugs or feature requests in the [issues](https://github.com/OntimizeWeb/ontimize-web-ngx-filemanager/issues){:target="_blank"} section.

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
