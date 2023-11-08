---
permalink: /gallery/installation/
title: "Gallery"
excerpt: ""
nav_exclude: true
layout: default
---
{% include base_path %}

## Installation

```bash
npm install ontimize-web-ngx-gallery --save
```

## Usage
<!--
### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-gallery/styles.scss",
  ....
],
...
```

### Add the library theming
In your application '*app.scss*' file you should add the library theme.

```bash
...
@import 'node_modules/ontimize-web-ngx-gallery/o-gallery-theme.scss';
@include o-gallery-theme($theme);
...
```
-->
### Import in an application module

Import the Ontimize Web gallery module in the app module where you want to use it.

```javascript
import { OGalleryModule } from 'ontimize-web-ngx-gallery';

@NgModule({
  imports: [
    OGalleryModule
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```
