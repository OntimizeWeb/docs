---
permalink: /ontimize-web-ngx-filemanager/
title: "File Manager"
excerpt: ""
---

{% include base_path %}

# Ontimize Web File Manager

Ontimize Web File Manager is a web file manager using [Ontimize Web](https://github.com/OntimizeWeb/ontimize-web-ngx){:target="_blank"}.

* [Github repository](#github)
* [Installation](#installation)
* [Usage](#usage)
* [Documentation]({{ base_path }}/ontimize_web_ngx_filemanager/doc-overview/)

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

Include the file manager module into your app in the module where you want to use it.

```bash
...
import { OFileManagerModule } from 'ontimize-web-ngx-filemanager';
...

@NgModule({
  imports: [
    OFileManagerModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```

