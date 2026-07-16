---
permalink: /charts/installation/
title: "Installation"
layout: default
parent: Charts
grand_parent: Addons
nav_order: 2
---

{% include base_path %}

## Installation

### Step 1 — Install the module

```bash
npm install ontimize-web-ngx-charts --save
```

### Compatibility

| ontimize-web-ngx-charts | ontimize-web-ngx | Angular | luxon |
|---|---|---|---|
| 18.0.0-next.0+ | ^18.0.0-next.0 | ^18.2.0 | ^3.4.0 |

> **Note**: `@angular/flex-layout` is no longer a dependency. Replace `fxLayout`/`fxFlex` attributes with `o-flex-*` CSS classes.

### Step 2 — Import into your application

#### Option A — Standalone component (recommended)

Import `OChartComponent` or `OChartOnDemandComponent` directly:

```typescript
import { OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  standalone: true,
  imports: [OChartComponent],
  template: `<o-chart type="line" ...></o-chart>`
})
export class MyChartComponent {}
```

#### Option B — NgModule

```typescript
import { OChartModule } from 'ontimize-web-ngx-charts';

@NgModule({
  imports: [
    OChartModule,
    /* other imports */
  ]
})
export class ExampleModule {}
```

### Step 3 — Configure angular.json

Add the module styles and assets in your `angular.json`:

```json
"styles": [
  "node_modules/ontimize-web-ngx-charts/styles.scss"
],
"assets": [
  {
    "glob": "**/*",
    "input": "node_modules/ontimize-web-ngx-charts/assets",
    "output": "/assets"
  }
]
```
