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

The **ontimize-web-ngx-extra-components** library requires **ontimize-web-ngx** version **18.0.0** or higher.

| extra-components | ontimize-web-ngx | Angular |
|---|---|---|
| 18.0.0-next.0+ | ^18.0.0-next.0 | ^18.2.0 |

## Usage

### Option A — Standalone import (recommended)

Import the components directly in your standalone component:

```typescript
import { ODataViewComponent } from 'ontimize-web-ngx-extra-components';

@Component({
  standalone: true,
  imports: [ODataViewComponent],
  template: `<o-data-view ...></o-data-view>`
})
export class MyComponent {}
```

### Option B — NgModule import

Import `OExtraComponentsModule` into your module:

```typescript
import { OExtraComponentsModule } from 'ontimize-web-ngx-extra-components';

@NgModule({
  imports: [
    OExtraComponentsModule,
    /* other imports */
  ]
})
export class ExampleModule {}
```

{: .note }
> Templates in version 18 use Angular control flow syntax (`@if`, `@for`, `@switch`) instead of `*ngIf` / `*ngFor` directives.
