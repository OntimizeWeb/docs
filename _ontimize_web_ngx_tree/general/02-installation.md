---
permalink: /tree/installation/
title: "Tree"
excerpt: ""
---
{% include base_path %}
{% include breadcrumbs.html %}

## Installation

```bash
  npm install ontimize-web-ngx-tree --save
```

## Usage

### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-tree/styles.scss",
  ....
],
...
```

### Add the library theming
In your application '*app.scss*' file you should add the library theme.

```bash
...
@import 'node_modules/ontimize-web-ngx-tree/o-tree-theme.scss';
@include o-tree-theme($theme);
...
```

### Import in an application module

Import the Ontimize Web tree module in the app module where you want to use it.

```javascript
import { OTreeModule } from 'ontimize-web-ngx-tree';

@NgModule({
  imports: [
    OTreeModule
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```
