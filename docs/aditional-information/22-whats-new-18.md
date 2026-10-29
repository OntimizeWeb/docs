---
layout: default
title: "What's new in version 18"
permalink: /whats-new-18/
excerpt: "Main changes and new features in Ontimize Web version 18."
parent: Aditional information
nav_order: 2
---
{% include base_path %}
{% include toc %}

# What's new in Ontimize Web 18

Version 18 is a major release that upgrades the framework to **Angular 18** and **Material Design 3 (M3)**. This page summarises the most relevant changes. For step-by-step migration instructions see the [Migration guide from 15 to 18]({{ base_path }}/migration-15-to-18/).

---

## Angular 18 + Material 3

The theming engine has been completely rewritten to use **Angular Material 3** natively.

- Palettes now use the M3 tonal system (tones `0..100`) instead of the M2 hue scale (`50..900`).
- The factory functions `o-mat-light-theme` and `o-mat-dark-theme` accept a **config map** with `primary`, `tertiary`, `density` and `typography` keys.
- Tokens are emitted at runtime as **CSS custom properties** (`--mat-sys-*` and `--o-*`), making it possible to override the theme without recompiling SCSS.

```scss
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;
@use '@angular/material' as mat;

$theme: ontimize-style.o-mat-light-theme((
  primary: mat.$azure-palette,
));

@include ontimize-style.ontimize-theme-styles($theme);
```

See the updated [Theming guide]({{ base_path }}/customization/theming/) for full details.

---

## Standalone by default

`bootstrapApplication()` with `provideOntimizeWeb()` is now the **recommended bootstrap** approach. All Ontimize components are standalone and can be imported directly without module wrappers.

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideOntimizeWeb } from 'ontimize-web-ngx';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { CONFIG } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideOntimizeWeb(CONFIG),
    provideRouter(routes),
  ]
});
```

`OntimizeWebModule` and all wrapper modules (`OFormModule`, `OTableModule`, …) remain functional but are **deprecated** and will be removed in a future version.

---

## @angular/flex-layout removed

`@angular/flex-layout` and `@ngbracket/ngx-layout` are no longer dependencies. Replace template attributes with the built-in `o-flex-*` utility classes:

| Before | After |
|---|---|
| `fxLayout="row"` | `class="o-flex-row"` |
| `fxLayout="column"` | `class="o-flex-column"` |
| `fxLayoutAlign="start center"` | `class="o-layout-align-start-center"` |
| `fxFlex` | `class="o-flex"` |
| `fxFlex="grow"` | `class="o-flex-grow"` |
| `fxLayoutGap="8px"` | `style="gap: 8px"` |
| `fxFill` / `fxFlexFill` | `class="o-flex-fill"` |
| `fxFlex="50"` (row) | `class="o-flex-50"` |
| `fxFlex="50"` (column) | `class="o-flex-col-50"` |

---

## Material Symbols Outlined

Icons have migrated from **Material Icons** (ligature font) to **Material Symbols Outlined** (variable font). Update your `index.html`:

```html
<!-- Before -->
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

<!-- After -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,GRAD,FILL@20..48,100..700,-50..200,0..1" rel="stylesheet">
```

> Icon names do not change — only the font file and CSS class change.

---

## Inputs usable outside o-form

All input components (`o-text-input`, `o-date-input`, `o-combo`, …) can now be used **outside an `<o-form>`** with Angular reactive forms (`FormGroup` / `NgModel`). The `OFormComponent` constructor parameter has been removed.

```html
<!-- Standalone input with NgModel -->
<o-text-input label="Name" [(ngModel)]="name" required="yes"></o-text-input>

<!-- With ReactiveFormsModule -->
<o-text-input label="Name" formControlName="name"></o-text-input>
```

---

## New CSS custom properties

Version 18 exposes a comprehensive set of runtime tokens that can be overridden without recompiling SCSS:

### Ontimize tokens (`--o-*`)

| Token | Description |
|---|---|
| `--o-fg-text` | Primary text colour |
| `--o-fg-secondary-text` | Secondary / hint text colour |
| `--o-fg-icon` | Icon colour |
| `--o-fg-divider` | Divider / border colour |
| `--o-fg-disabled` | Disabled state colour |
| `--o-bg-card` | Card / panel background |
| `--o-bg-background` | Page background |
| `--o-bg-level-0` | Surface level 0 |
| `--o-bg-level-1` | Surface level 1 |
| `--o-bg-app-bar` | App bar / toolbar background |
| `--o-bg-sidenav-overlay` | Sidenav overlay colour |
| `--o-font-family` | Global font family |
| `--o-input-icon-size` | Input icon size |

### Material 3 system tokens (`--mat-sys-*`)

| Need | Token |
|---|---|
| Primary colour | `--mat-sys-primary` |
| Text on primary | `--mat-sys-on-primary` |
| Primary container | `--mat-sys-primary-container` |
| Tertiary (accent) | `--mat-sys-tertiary` |
| Error (warn) | `--mat-sys-error` |
| Surface | `--mat-sys-surface` |
| Body text size | `--mat-sys-body-medium-size` |
| Label size | `--mat-sys-label-small-size` |

---

## Breaking changes summary

| Area | Before (v15) | After (v18) |
|---|---|---|
| **Angular** | 15.x | 18.x |
| **Node.js** | ≥ 16 | ≥ 20 |
| **TypeScript** | ~4.9 | ~5.5 |
| **Material Design** | M2 | M3 |
| **Theming factory** | `o-mat-light-theme($primary, $accent, $warn, …)` | `o-mat-light-theme((primary: ..., density: ...))` |
| **Colour tokens** | `--o-primary-*`, `--o-accent-*`, `--o-warn-*` | `--mat-sys-primary`, `--mat-sys-tertiary`, `--mat-sys-error` |
| **Typography tokens** | `--o-font-body-1-size`, `--o-font-headline-*`, … | `--mat-sys-body-medium-size`, `--mat-sys-headline-small-size`, … |
| **Icons font** | Material Icons (ligatura) | Material Symbols Outlined (variable) |
| **flex-layout** | `@angular/flex-layout` | `o-flex-*` CSS utility classes |
| **Bootstrap** | `AppModule` + `OntimizeWebModule.forRoot()` | `bootstrapApplication()` + `provideOntimizeWeb()` (recommended) |
| **Guards** | Class-based (`AuthGuardService`) | Functional (`authGuard`, `permissionsGuard`) |
| **Forms** | `UntypedFormGroup` / `UntypedFormControl` | `FormGroup<T>` / `FormControl<T>` (typed) |
| **Standalone** | NgModule required | Components importable directly |
