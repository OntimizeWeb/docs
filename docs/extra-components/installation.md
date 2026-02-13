---
layout: default
permalink: /extra-components/installation/
title: "Installation"
parent: "Extra-components"
nav_order: 1
has_toc: false
---
{% include base_path %}

## Installation

```bash
npm install ontimize-web-ngx-extra-components --save
```

## Compatibility

The **ontimize-web-ngx-extra-components** library is compatible with **ontimize-web-ngx** starting from version **15.9.0**.


## Usage

### Import into your application

Import the `OExtraComponentsModule` into the main module of your application.

```js
...
import { OExtraComponentsModule } from 'ontimize-web-ngx-extra-components';
...

@NgModule({
  imports: [
    OExtraComponentsModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```
