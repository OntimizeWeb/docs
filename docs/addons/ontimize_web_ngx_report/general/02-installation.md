---
permalink: /addons/report/installation/
title: "Installation"
layout: default
parent: Report
grand_parent: Addons
nav_order: 2
---

{% include base_path %}

## Installation

```bash
npm install ontimize-web-ngx-report --save
```

### Compatibility

| ontimize-web-ngx-report | ontimize-web-ngx | Angular | ngx-extended-pdf-viewer |
|---|---|---|---|
| 18.0.0-next.0+ | ^18.0.0-next.0 | ^18.2.0 | ^21.0.0 |

> **Breaking changes in v18**:
> - `@angular/flex-layout` and `@ngbracket/ngx-layout` removed. Use `o-flex-*` CSS classes.
> - All 10 components are now **standalone**. Import them individually instead of using `OReportModule` in `declarations`.
> - Icons migrated from Ontimize SVG set to **Material Symbols Outlined**.
> - `Injector.get()` replaced with `inject()` function.

## Usage

### Option A — Standalone component (recommended)

```typescript
import { OReportComponent } from 'ontimize-web-ngx-report';

@Component({
  standalone: true,
  imports: [OReportComponent],
  template: `<o-report ...></o-report>`
})
export class MyComponent {}
```

### Option B — NgModule

```typescript
import { OReportModule } from 'ontimize-web-ngx-report';

@NgModule({
  imports: [OReportModule]
})
export class AppModule {}
```

### Configure angular.json assets

```json
"assets": [
  {
    "glob": "**/*",
    "input": "node_modules/ontimize-web-ngx-report/assets",
    "output": "/assets"
  }
]
```
