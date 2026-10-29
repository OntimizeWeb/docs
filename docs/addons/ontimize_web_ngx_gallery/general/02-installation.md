---
permalink: /addons/gallery/installation/
title: "Installation"
excerpt: ""
layout: default
parent: Gallery
grand_parent: Addons
nav_order: 2
---
{% include base_path %}

## Installation

```bash
npm install ontimize-web-ngx-gallery --save
```

### Compatibility

| ontimize-web-ngx-gallery | ontimize-web-ngx | Angular |
|---|---|---|
| 18.0.0-next.0+ | ^18.0.0-next.0 | ^18.2.0 |

> **Breaking changes in v18**:
> - `@angular/flex-layout` removed. Layout is now handled with `o-flex-*` CSS classes.
> - All components (`GalleryComponent`, `GalleryActionComponent`, …) are now **standalone**.
> - `OGalleryModule` uses `imports`/`exports` instead of `declarations`.
> - Templates migrated to Angular control flow (`@if`, `@for`).
> - Theming uses Material 3 CSS custom properties (`--o-bg-*` tokens).

## Usage

### Option A — Standalone component (recommended)

```typescript
import { OGalleryComponent } from 'ontimize-web-ngx-gallery';

@Component({
  standalone: true,
  imports: [OGalleryComponent],
  template: `<o-gallery ...></o-gallery>`
})
export class MyComponent {}
```

### Option B — NgModule

```typescript
import { OGalleryModule } from 'ontimize-web-ngx-gallery';

@NgModule({
  imports: [OGalleryModule]
})
export class ExampleModule {}
```

### Theming

The gallery uses `--o-bg-*` tokens from the Ontimize theme. No manual `@import` of a theme file is required — the tokens are emitted automatically by `ontimize-theme-styles()`.
