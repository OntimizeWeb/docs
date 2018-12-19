---
permalink: /map/installation/
title: "Installation"
---

{% include base_path %}

## Installation

```bash
  npm install ontimize-web-ngx-map --save
```

## Usage

Finally, you can use ontimize-web-ngx-map in your Ontimize Web project.

### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-map/styles.scss",
  ....
],
...
```

### Update your webpack AoT generation file
*pending*

### Import in an application module

Include the library map module into your app in the module where you want to use it.

```bash
...
import { OMapModule } from 'ontimize-web-ngx-map';
...

@NgModule({
  imports: [
    OMapModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```
