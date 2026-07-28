---
layout: default
title: "Migration guide to version 18"
permalink: /migration-15-to-18/
excerpt: "Step-by-step guide to migrate from Ontimize Web 15 (Angular 15) to version 18 (Angular 18)."
parent: Migration guides
grandParent: Aditional information
nav_exclude: true
---
{% include base_path %}
{% include toc %}

# Migration guide — Ontimize Web 15 → 18

This guide covers the steps required to migrate a consumer project from **ontimize-web-ngx 15** (Angular 15) to **ontimize-web-ngx 18** (Angular 18).

---

## Breaking changes at a glance

Quick reference for every breaking change shipped between **ontimize-web-ngx** 15 and 18 (pre-release versions `18.0.0-next.0` through `18.0.0-next.10`). Find your case, then follow the **Details** link for the full explanation.

| Version | Change | Details |
|---|---|---|
| `next.2` | `o-mat-light-theme()` / `o-mat-dark-theme()` take a single M3 config map; positional args and M2 palettes are rejected. | [3.1 Update the styles import](#31-update-the-styles-import-in-stylesscss) |
| `next.2` | `--o-primary-*`, `--o-accent-*`, `--o-warn-*` (and their `-contrast-*` variants) tokens no longer emitted. | [Token equivalences for removed colour tokens](#token-equivalences-for-removed-colour-tokens) |
| `next.3` | `--o-button-height` removed — button heights now come exclusively from Material's density tokens. | [Removed button token equivalences](#removed-button-token-equivalences) |
| `next.3` | Per-level typography tokens removed (`--o-font-<level>-size` / `-line-height` / `-weight`). | [Removed typography token equivalences](#removed-typography-token-equivalences) |
| `next.4` | Custom components can no longer take `OFormComponent` as a constructor parameter. | [14. Custom components extending Ontimize form base classes](#14-custom-components-extending-ontimize-form-base-classes) |
| `next.4` | `--o-input-icon-size` removed — input icon size is hardcoded to `20px`. | [Removed icon sizing token](#removed-icon-sizing-token) |
| `next.4` | `oxygen` theme no longer sets custom font sizes/weights. | [Other typography changes](#other-typography-changes) |
| `next.4` | Forced `html { font-size: 14px }` override removed. | [Other typography changes](#other-typography-changes) |
| `next.4` | Hardcoded `'Noto Sans'` font-family fallback replaced by `system-ui, sans-serif`. | [Other typography changes](#other-typography-changes) |
| `next.9` | `o-action--importance-*` CSS classes renamed to `o-button--importance-*`. | [15. Renamed action and button CSS classes](#15-renamed-action-and-button-css-classes) |
| `next.10` | `o-daterange-legacy-input` removed entirely (was already deprecated). | [16. Removed o-daterange-legacy-input component](#16-removed-o-daterange-legacy-input-component) |
| `next.0` (documented in `next.10`) | Custom SVG icon sprite shrank from ~45 to 10 icons — unrecognised `svgIcon="ontimize:X"` names silently render an empty icon. | [17. Reduced Material Symbols icon set](#17-reduced-material-symbols-icon-set-custom-svg-icons) |
| `next.10` | `row-height` and the legacy `dense` attribute no longer affect table/list/grid row height. | [18. Row height now follows theme density](#18-row-height-now-follows-theme-density) |
| `next.10` | Luxon replaces Moment.js as the default date engine. | [19. Date engine: Luxon is now the default](#19-date-engine-luxon-is-now-the-default) |
| `next.10` | New `label` field on `OActionStyle`; the `o-form` toolbar's accept button now shows mode-dependent text instead of always `'INSERT'`. | [20. Action label configuration (`label` field)](#20-action-label-configuration-label-field) |

---

## 1. Prerequisites

| Tool | Minimum version |
|---|---|
| Node.js | 20.x |
| Angular CLI | 18.x |
| TypeScript | 5.4+ |

```bash
node --version   # >= 20.0.0
ng version       # Angular CLI: 18.x
```

---

## 2. Update dependencies

### 2.1 Update Angular and core dependencies

```bash
ng update @angular/core@18 @angular/cli@18 @angular/material@18 @angular/cdk@18
```

### 2.2 Update ontimize-web-ngx

```bash
npm install ontimize-web-ngx@18
```

### 2.3 Remove @angular/flex-layout / @ngbracket/ngx-layout

If your project uses `FlexLayoutModule` or `@ngbracket/ngx-layout`, uninstall it:

```bash
npm uninstall @angular/flex-layout @ngbracket/ngx-layout
```

Replace template attributes with the built-in `o-flex-*` utility classes:

| Before | After |
|---|---|
| `fxLayout="row"` | `class="o-flex-row"` |
| `fxLayout="column"` | `class="o-flex-column"` |
| `fxLayoutAlign="start center"` | `class="o-layout-align-start-center"` |
| `fxFlex` | `class="o-flex"` |
| `fxFlex="grow"` | `class="o-flex-grow"` |
| `fxLayoutGap="8px"` | `style="gap: 8px"` |
| `fxFill` / `fxFlexFill` | `class="o-flex-fill"` |

#### Percentage size classes — row vs column

The classes `o-flex-50`, `o-flex-20`, `o-flex-80`, `o-flex-45`, `o-flex-100` use `max-width` and are designed for children of a **row** container. If the parent is `o-flex-column`, use the `o-flex-col-*` variants instead:

| `fxFlex` in **row** parent | `fxFlex` in **column** parent |
|---|---|
| `o-flex-20` | `o-flex-col-20` |
| `o-flex-45` | `o-flex-col-45` |
| `o-flex-50` | `o-flex-col-50` |
| `o-flex-80` | `o-flex-col-80` |
| `o-flex-100` | `o-flex-col-100` |

---

## 3. Theming — migrate to Material 3

### 3.1 Update the styles import in `styles.scss`

**Before (Angular 15):**
```scss
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;
// or:
@use 'ontimize-web-ngx/theming/ontimize-style-v8' as ontimize-style;
```

**After (Angular 18 — Material 3 native):**
```scss
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;
@use '@angular/material' as mat;

$theme: ontimize-style.o-mat-light-theme((
  primary:  mat.$azure-palette,
  tertiary: mat.$blue-palette,    // optional
));

$dark-theme: ontimize-style.o-mat-dark-theme((
  primary: mat.$azure-palette,
));

@include ontimize-style.ontimize-theme-styles($theme);

.o-dark {
  @include ontimize-style.ontimize-theme-all-component-color($dark-theme);
}
```

#### How to create a Material 3 palette

**1. Predefined Angular Material palette** (fastest)

Angular Material 18 ships 12 ready-to-use palettes:

| Palette | Base hue |
|---|---|
| `mat.$red-palette` | red |
| `mat.$green-palette` | green |
| `mat.$blue-palette` | blue |
| `mat.$yellow-palette` | yellow |
| `mat.$cyan-palette` | cyan |
| `mat.$magenta-palette` | magenta |
| `mat.$orange-palette` | orange |
| `mat.$chartreuse-palette` | chartreuse |
| `mat.$spring-green-palette` | spring green |
| `mat.$azure-palette` | azure blue |
| `mat.$violet-palette` | violet |
| `mat.$rose-palette` | rose |

**2. CLI-generated custom palette** (recommended for corporate branding)

```bash
ng generate @angular/material:m3-theme
```

The schematic prompts you for a HEX seed colour and generates a `.scss` file. Adapt the output to the Ontimize factory:

```scss
// Adapted version for Ontimize (remove theme-type and the color: wrapper)
@use './m3-theme' as m3;

$theme: ontimize-style.o-mat-light-theme((
  primary:  m3.$primary-palette,
  tertiary: m3.$tertiary-palette,
));

$dark-theme: ontimize-style.o-mat-dark-theme((
  primary:  m3.$primary-palette,
  tertiary: m3.$tertiary-palette,
));
```

**3. Inline palette in SCSS** (advanced)

```scss
$primary: (
  0:   #000000,
  10:  #001d36,
  20:  #003259,
  40:  #0d61a2,   // mid tone (~500 in M2)
  50:  #367abd,
  80:  #9fcaff,
  90:  #d1e4ff,   // primary-container in light themes
  100: #ffffff,
  // … include all tones: 0 10 20 25 30 35 40 50 60 70 80 90 95 98 99 100
);

$theme: ontimize-style.o-mat-light-theme((
  primary: $primary,
));
```

> Do not try to generate the palette by hand — use the Angular Material CLI schematic.

### 3.2 CSS custom properties (Material 3)

The framework emits **Material 3** tokens (`--mat-sys-*`, `--mdc-*`) and complementary Ontimize tokens (`--o-*`):

**Brand tokens (M3 sys):**
- `--mat-sys-primary` · `--mat-sys-on-primary` · `--mat-sys-primary-container`
- `--mat-sys-tertiary` · `--mat-sys-on-tertiary` · `--mat-sys-tertiary-container`
- `--mat-sys-error` · `--mat-sys-on-error` · `--mat-sys-error-container`
- `--mat-sys-surface` · `--mat-sys-surface-container` · `--mat-sys-background`

**Ontimize tokens (`--o-*`):**
- Foreground: `--o-fg-text`, `--o-fg-secondary-text`, `--o-fg-divider`, `--o-fg-icon`, `--o-fg-disabled`
- Background: `--o-bg-card`, `--o-bg-background`, `--o-bg-level-0`, `--o-bg-level-1`, `--o-bg-app-bar`
- Typography: `--o-font-family`

> The tokens `--o-primary-*`, `--o-accent-*`, `--o-warn-*` are **no longer emitted** in v18. Use `--mat-sys-primary`, `--mat-sys-tertiary`, `--mat-sys-error` instead.

#### Removed typography token equivalences

| Removed token | M3 equivalent |
|---|---|
| `--o-font-body-1-size` | `--mat-sys-body-medium-size` |
| `--o-font-body-1-line-height` | `--mat-sys-body-medium-line-height` |
| `--o-font-body-2-size` | `--mat-sys-body-small-size` |
| `--o-font-subtitle-1-size` | `--mat-sys-title-medium-size` |
| `--o-font-subtitle-2-size` | `--mat-sys-title-small-size` |
| `--o-font-headline-5-size` | `--mat-sys-headline-small-size` |
| `--o-font-headline-6-size` | `--mat-sys-title-large-size` |
| `--o-font-caption-size` | `--mat-sys-label-small-size` |
| `--o-font-button-size` | `--mat-sys-label-large-size` |

#### Other typography changes

Related changes shipped alongside the token removal above, all in `18.0.0-next.4`:

- The `oxygen` theme no longer sets custom font sizes/weights — its whole type scale now inherits from the M3 system tokens, same as the removals in the table above.
- The `html { font-size: 14px; }` override was removed from `typography.scss`. The base font size is no longer forced — Material and the browser manage the type scale.
- `font-family` on `html` is now driven exclusively by `--o-font-family`, emitted dynamically from the theme's typography config. The hardcoded `'Noto Sans'` fallback was replaced by `system-ui, sans-serif`.

#### Removed button token equivalences

| Removed token | MDC / M3 equivalent |
|---|---|
| `--o-button-height` | `--mdc-text-button-container-height` |
| `--o-button-height` | `--mdc-filled-button-container-height` |
| `--o-button-height` | `--mdc-protected-button-container-height` |
| `--o-button-height` | `--mdc-outlined-button-container-height` |
| `--o-button-height` (button-toggle) | `--mat-standard-button-toggle-height` |

#### Removed icon sizing token

`--o-input-icon-size` was **removed** in `18.0.0-next.4`. Input prefix/suffix icon size is no longer configurable through a CSS custom property — it is now hardcoded to `20px` in the component styles.

#### Token equivalences for removed colour tokens

| Removed token | M3 equivalent |
|---|---|
| `--o-primary-500` | `--mat-sys-primary` |
| `--o-primary-contrast-500` | `--mat-sys-on-primary` |
| `--o-primary-50` / `-100` | `--mat-sys-primary-container` |
| `--o-primary-800` / `-900` | `--mat-sys-on-primary-container` |
| `--o-accent-500` | `--mat-sys-tertiary` |
| `--o-accent-contrast-500` | `--mat-sys-on-tertiary` |
| `--o-accent-100` | `--mat-sys-tertiary-container` |
| `--o-accent-800` | `--mat-sys-on-tertiary-container` |
| `--o-warn-500` | `--mat-sys-error` |
| `--o-warn-contrast-500` | `--mat-sys-on-error` |

The remaining tokens `--o-bg-*`, `--o-fg-*` and `--o-font-family` **are unchanged**.

### 3.3 Update the icon font in `index.html`

**Before (Angular 15):**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

**After (Angular 18):**
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,GRAD,FILL@20..48,100..700,-50..200,0..1"
      rel="stylesheet">
```

> Icon names do not change — only the font file and CSS class change.

### 3.4 Use a predefined theme (optional)

```scss
// styles.scss
@use 'ontimize-web-ngx/theming/themes/ontimize-blue' as theme;
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;

@include ontimize-style.ontimize-theme-styles(theme.$theme);

.o-dark {
  @include ontimize-style.ontimize-theme-all-component-color(theme.$dark-theme);
}
```

### 3.5 Visual differences v15 vs v18

| Aspect | v15 | v18 |
|---|---|---|
| **Font** | Poppins (fixed) | Driven by `--o-font-family` (theme typography config); defaults to `system-ui, sans-serif` |
| **Icons** | Material Icons (ligature) | Material Symbols Outlined |
| **Sidenav** | Background derived from primary colour | Neutral background (`--o-bg-app-bar`), no shadow |
| **Density** | Fixed | Configurable via `density` in the factory |
| **Material theming** | M2 | **M3** |
| **CSS tokens** | Sass variables (build-time) | **CSS custom properties** (runtime) |

### 3.6 Configure density (optional)

The factory accepts `density` with values from `0` (Material default) to `-5`:

```scss
$theme: ontimize-style.o-mat-light-theme((
  primary: mat.$azure-palette,
  density: -4,   // default is -2
));
```

To override density for a specific scope:

```scss
.compact-zone {
  @include ontimize-style.ontimize-theme-density-extended(-5);
}
.relaxed-zone {
  @include ontimize-style.ontimize-theme-density-extended(0);
}
```

### 3.7 Overriding Material tokens

You can override any `--mat-*` or `--mdc-*` token without recompiling SCSS:

```scss
// Override in your styles
.o-app-sidenav {
  --mat-sidenav-container-shape: 0;
}
html {
  --mdc-filled-button-container-height: 40px;
}
```

---

## 4. Application bootstrap

### 4.1 Option A — Standalone bootstrap (recommended)

**`main.ts`:**
```typescript
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

> `provideOntimizeWeb(config)` automatically includes: `provideHttpClient`, `provideAnimations`, `TranslateModule`, all Ontimize services, and the `APP_INITIALIZER`. Do **not** add them manually.

**`app.component.ts`** (must be standalone):
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />'
})
export class AppComponent {}
```

**`app.routes.ts`:**
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', loadChildren: () => import('./app/main/main.module').then(m => m.MainModule) },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];
```

### 4.2 Option B — NgModule bootstrap (backward compatible)

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { APP_CONFIG, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';
import { CONFIG } from './app.config';

@NgModule({
  imports: [
    OntimizeWebModule.forRoot(CONFIG),
    OntimizeWebModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

> **Note**: `OntimizeWebModule` and all wrapper modules are marked as **`@deprecated`** in version 18. They will continue to work but will be removed in a future version.

---

## 5. Using standalone components directly

```typescript
import { OFormComponent, OTextInputComponent, OButtonComponent } from 'ontimize-web-ngx';

@Component({
  standalone: true,
  imports: [OFormComponent, OTextInputComponent, OButtonComponent],
  template: `
    <o-form ...>
      <o-text-input attr="name"></o-text-input>
      <o-button label="Save" type="RAISED"></o-button>
    </o-form>
  `
})
export class MyFormComponent {}
```

---

## 6. Routes — standalone migration (optional)

**Before (`main-routing.module.ts`):**
```typescript
@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MainComponent, children: [...] }
  ])],
  exports: [RouterModule]
})
export class MainRoutingModule {}
```

**After (`main.routes.ts`):**
```typescript
import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  { path: '', component: MainComponent, children: [...] }
];
```

Reference it from the parent:
```typescript
{ path: 'main', loadChildren: () => import('./main/main.routes').then(m => m.MAIN_ROUTES) }
```

---

## 7. Functional guards

Class-based guards are deprecated in Angular 18. Use the functional equivalents exported by `ontimize-web-ngx`:

```typescript
import { authGuard, permissionsGuard, canActivateFormLayoutChildGuard } from 'ontimize-web-ngx';

// In your routes:
{ path: 'protected', component: MyComponent, canActivate: [authGuard] }
{ path: 'admin', component: AdminComponent, canActivate: [permissionsGuard] }
```

---

## 8. Typed forms

Angular 18 requires typed `FormGroup`/`FormControl`. Automatic migration:

```bash
ng generate @angular/core:untyped-forms
```

Or manually:
```typescript
// Before
new UntypedFormGroup({ name: new UntypedFormControl('') });

// After
new FormGroup({ name: new FormControl('') });
```

---

## 9. Material SCSS — M3 tokens via CSS custom properties

| You need… | Use… |
|---|---|
| Primary colour | `var(--mat-sys-primary)` |
| Text on primary | `var(--mat-sys-on-primary)` |
| Primary tint (containers) | `var(--mat-sys-primary-container)` |
| Accent colour (M3 = tertiary) | `var(--mat-sys-tertiary)` |
| Warn colour (M3 = error) | `var(--mat-sys-error)` |
| Foreground (text) | `var(--o-fg-text)`, `var(--o-fg-secondary-text)` |
| Surface background | `var(--o-bg-card)`, `var(--o-bg-background)` |
| Body font size | `var(--mat-sys-body-medium-size)` |
| Font family | `var(--o-font-family)` |

```scss
// Before (M2)
.my-button {
  color: mat.m2-get-color-from-palette($primary, 500);
  font-size: mat.m2-font-size($typography, body-2);
}

// After (M3 tokens)
.my-button {
  color: var(--mat-sys-primary);
  font-size: var(--mat-sys-body-small-size);
}
```

---

## 10. Migration checklist

```
[ ] Node.js >= 20 installed
[ ] ng update @angular/core@18 @angular/cli@18 @angular/material@18
[ ] npm install ontimize-web-ngx@18
[ ] npm uninstall @angular/flex-layout (if applicable)
[ ] styles.scss: update import to ontimize-style (no .v18 suffix)
[ ] styles.scss: update factory call to config-map form (primary: mat.$...-palette)
[ ] SCSS: replace --o-primary-*/--o-accent-*/--o-warn-* with --mat-sys-* equivalents
[ ] SCSS: replace --o-button-height and --o-font-* tokens with --mdc-*/--mat-sys-* equivalents
[ ] index.html: switch to Material Symbols Outlined
[ ] index.html: remove old Material Icons font link
[ ] main.ts: migrate to bootstrapApplication() + provideOntimizeWeb() (optional)
[ ] Guards: use authGuard/permissionsGuard functional guards
[ ] SCSS custom styles: replace mat.m2-get-color-from-palette()
    with var(--mat-sys-primary) / var(--o-fg-*) / var(--o-font-*)
[ ] Smoke test: form, table, list, grid, sidenav
```

---

## 11. Known issues and solutions

### Icons show literal text instead of the icon

**Cause**: The `Material Icons` link has been replaced by `Material Symbols Outlined`.

**Solution**: Ensure `index.html` includes:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,GRAD,FILL@20..48,100..700,-50..200,0..1"
      rel="stylesheet">
```
And that the old Material Icons link is **not** active.

### Error `NG0303: Can't bind to 'ngTemplateOutlet'`

**Cause**: When converting a component to standalone, `NgTemplateOutlet` is missing from imports.

**Solution**:
```typescript
import { NgTemplateOutlet } from '@angular/common';

@Component({ standalone: true, imports: [NgTemplateOutlet, ...] })
```

### `NullInjectorError` in standalone bootstrap

**Cause**: Providers that previously came from `AppModule` are no longer available.

**Solution**: Verify that `provideOntimizeWeb(CONFIG)` is in the `providers` array of `bootstrapApplication`. You do **not** need to add `provideAnimations()`, `provideHttpClient()` or `ONTIMIZE_PROVIDERS` separately — all are included in `provideOntimizeWeb()`.

### SCSS compilation error: `Can't find stylesheet to import`

**Solution**: Always use package-name imports:
```scss
// ✅ Correct
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;

// ❌ Incorrect
@use '../node_modules/ontimize-web-ngx/theming/ontimize-style';
```

### SCSS error: `'Typography config does not have a level called "body-2"'`

**Cause**: Your SCSS calls `mat.m2-font-size($typography, body-2)`.

**Solution**:
```scss
// Before
.my-class { font-size: mat.m2-font-size($typography, body-2); }
// After
.my-class { font-size: var(--mat-sys-body-small-size); }
```

### `mat-toolbar color="primary"` does not apply colour

**Cause**: Angular Material 18 uses M3 internally, and `.mat-primary`/`.mat-accent` selectors are not generated with M3.

**Solution**: The framework handles this internally since version 18.0.0. If you encounter this in your own addon, add:
```scss
.mat-toolbar {
  &.mat-primary {
    --mat-toolbar-container-background-color: var(--mat-sys-primary);
    --mat-toolbar-container-text-color: var(--mat-sys-on-primary);
  }
  &.mat-accent {
    --mat-toolbar-container-background-color: var(--mat-sys-tertiary);
    --mat-toolbar-container-text-color: var(--mat-sys-on-tertiary);
  }
}
```

### Templates with `*ngIf`/`*ngFor` (deprecation warnings)

**Solution**: Migrate to the new control flow syntax:

| Before | After |
|---|---|
| `*ngIf="cond"` | `@if (cond) { ... }` |
| `*ngIf="cond; else tmpl"` | `@if (cond) { ... } @else { ... }` |
| `*ngFor="let x of list"` | `@for (x of list; track x) { ... }` |
| `[ngSwitch]="val"` + `*ngSwitchCase` | `@switch (val) { @case (a) { ... } }` |

---

## 12. Migrating HTML native inputs to Ontimize components

Input components can be used outside `<o-form>` with `[(ngModel)]` or `formControlName`.

### 12.1 Quick equivalences

| Native HTML | Ontimize component | Notes |
|---|---|---|
| `<input type="text">` | `<o-text-input>` | |
| `<input type="number">` | `<o-integer-input>` / `<o-real-input>` | |
| `<input type="date">` | `<o-date-input>` | add `value-type="string"` if value is ISO string |
| `<select>` with static options | `<o-combo>` with `[static-data]` | data must be an array of objects |
| Read-only `<div>` | `<o-text-input read-only="yes">` | |

### 12.2 Binding change

```html
<!-- Before: [value] + native event -->
<input type="text" [value]="name" (input)="onChange($any($event.target).value)" />

<!-- After: [(ngModel)] + (onChange) -->
<o-text-input label="Name" [(ngModel)]="name" (onChange)="onChange($event.newValue)"></o-text-input>
```

The `(onChange)` event receives `{ newValue, oldValue }`.

### 12.3 Text input

```html
<!-- BEFORE -->
<input type="text" maxlength="100" [value]="serialNumber"
       (input)="onSerialNumberChange($any($event.target).value)" />

<!-- AFTER -->
<o-text-input label="SERIAL_NUMBER" [(ngModel)]="serialNumber"
              (onChange)="onSerialNumberChange($event.newValue)"
              required="yes" max-length="100"></o-text-input>
```

### 12.4 Select with string options

`o-combo` requires an array of objects — transform your strings:

```typescript
get manufacturersData() {
  return this.manufacturers.map(m => ({ value: m, label: m }));
}
```

```html
<o-combo label="manufacturer"
         columns="value;label" value-column="value" visible-columns="label"
         [static-data]="manufacturersData"
         [(ngModel)]="selectedManufacturer"
         empty-option="yes"></o-combo>
```

### 12.5 Date input

```html
<o-date-input label="MANUFACTURING_DATE"
              [(ngModel)]="manufacturingDate"
              value-type="string"
              [max]="todayDate"
              required="yes"></o-date-input>
```

> `[max]` on `o-date-input` accepts a `Date` object, not an ISO string.

### 12.6 Read-only fields

```html
<o-text-input label="EXPIRATION_DATE" [value]="expirationDate" read-only="yes"></o-text-input>
```

### 12.7 Validation

With `required="yes"` and `[(ngModel)]`, the component handles validation automatically. With `ReactiveFormsModule`:

```typescript
form = new FormGroup({
  serialNumber: new FormControl('', [Validators.required, Validators.maxLength(100)]),
});
```

```html
<o-text-input formControlName="serialNumber" label="SERIAL_NUMBER" required="yes"></o-text-input>
```

---

## 13. Clear SaSS — neutral surfaces, scrollbar and neutral palette

### 13.1 Activate neutral surfaces

```scss
html {
  @include ontimize-style.ontimize-theme-styles($theme);
  @include ontimize-style.ontimize-neutral-surfaces($theme); // ← add
}

html.o-dark {
  @include ontimize-style.ontimize-theme-styles($dark-theme);
  @include ontimize-style.ontimize-neutral-surfaces($dark-theme);
}
```

This mixin removes the primary-colour tint from elevated surfaces and produces flat cards without shadow.

### 13.2 Scrollbar with brand colour

The `--o-scroll-thumb` token is compiled at build time using the primary colour at 30% opacity. To customise it:

```scss
html {
  @include ontimize-style.ontimize-theme-styles($theme);
  --o-scroll-thumb: rgba(0, 0, 0, 0.2); // ← custom value
}
```

### 13.3 Neutral palette in custom themes

```scss
$theme: ontimize-style.o-mat-light-theme((
  primary:  $_primary,
  tertiary: $_tertiary,
  neutral:  map.get($_palettes, neutral), // ← add
  density:  -4,
));
```

| Tone | Level | Theme |
|---|---|---|
| `97` | `level-0` / background | light |
| `96` | `level-04` | light |
| `100` | `level-1` / card | light |
| `13` | `level-0` / background | dark |
| `15` | `level-1` / card | dark |

---

## 14. Custom components extending Ontimize form base classes

Since `18.0.0-next.4`, Ontimize input components no longer accept `OFormComponent` as a constructor parameter. This only affects projects with **custom components** that extend `OFormDataComponent`, `OFormServiceComponent` or `OBooleanFormDataComponent` — most consumers of the framework's built-in components are unaffected.

**Before:**
```typescript
@Component({ selector: 'my-custom-input', ... })
export class MyCustomInputComponent extends OFormDataComponent {
  constructor(
    @Optional() @Inject(forwardRef(() => OFormComponent)) form: OFormComponent,
    elRef: ElementRef,
    injector: Injector
  ) {
    super(form, elRef, injector);
  }
}
```

**After:**
```typescript
@Component({ selector: 'my-custom-input', ... })
export class MyCustomInputComponent extends OFormDataComponent {
  constructor(elRef: ElementRef, injector: Injector) {
    super(elRef, injector);
  }
}
```

The form context is now resolved automatically inside the base class through `inject(O_FORM_CONTEXT, { optional: true })`, using the new `IOFormParent` interface and the `O_FORM_CONTEXT` injection token. Remove the `@Optional() @Inject(forwardRef(() => OFormComponent))` parameter — and the `form` argument passed to `super(...)` — from any custom component that extends `OFormDataComponent`, `OFormServiceComponent` or `OBooleanFormDataComponent`.

---

## 15. Renamed action and button CSS classes

Since `18.0.0-next.9`, the shared "action importance" CSS classes defined in `o-button-theme.scss` have been renamed:

| Before | After |
|---|---|
| `o-action--importance-primary` | `o-button--importance-primary` |
| `o-action--importance-warn` | `o-button--importance-warn` |
| `o-action--importance-default` | `o-button--importance-default` |

These classes are applied by `o-button`, `o-table-button`, the `o-form` toolbar, `o-service-component` and the framework's own dialogs. If your application's stylesheets or templates reference the old `o-action--importance-*` names directly, rename them to `o-button--importance-*`.

> The unrelated `o-action--filled-default` class is **not** affected by this rename.

---

## 16. Removed `o-daterange-legacy-input` component

Since `18.0.0-next.10`, the already-deprecated `o-daterange-legacy-input` component (`ODateRangeLegacyInputComponent`, and its module, directive and picker) has been **removed** from the framework entirely.

**Before:**
```html
<o-daterange-legacy-input attr="startDate;endDate" format="dd/MM/yyyy"></o-daterange-legacy-input>
```

**After:**
```html
<o-daterange-input attr="startDate;endDate" format="dd/MM/yyyy"></o-daterange-input>
```

[`o-daterange-input`]({{ base_path }}/components/input/daterange/overview) exposes an equivalent API — range support, `format`, `value-type` and `[date-class]` — so migration is generally a direct tag rename.

---

## 17. Reduced Material Symbols icon set (custom SVG icons)

The Material Symbols Outlined migration (`18.0.0-next.0`, see [3.3 Update the icon font in index.html](#33-update-the-icon-font-in-indexhtml)) shrank the framework's custom SVG icon sprite (`assets/svg/ontimize-icon-set.svg`) from ~45 icons down to 10. This was not documented until `18.0.0-next.10` — if your application references one of the removed names, it has been **silently rendering an empty icon since `next.0`**, with no console error.

### Icons still in the sprite

Only these names remain valid for `<mat-icon svgIcon="ontimize:X">`:

`CSV`, `EXCEL`, `HTML`, `ILS`, `KRW`, `LIR`, `PDF`, `sort_by_alpha`, `sort_by_alpha_asc`, `sort_by_alpha_desc`

### Removed icons

The following names were removed from the sprite:

`menu`, `close`, `add`, `arrow_back`, `autorenew`, `check_circle`, `clear`, `clock`, `delete`, `done`, `drag_handle`, `edit`, `error_outline`, `filter_list`, `first_page`, `folder_open`, `fullscreen`, `info_outline`, `keyboard_arrow_down`, `keyboard_arrow_left`, `keyboard_arrow_right`, `keyboard_arrow_up`, `last_page`, `mail_outline`, `more_vert`, `perm_identity`, `phone_outline`, `power_settings_new`, `save`, `search`, `settings`, `today`, `undo`, `visibility`, `visibility_off`, `vpn_key` — plus the currency-related icons `BTC`, `EUR`, `GBP`, `INR`, `JPY`, `USD`, `PERCENT`, `PHONE`.

**Fix**: replace the `ontimize:` SVG reference with the icon font, which is the framework's default since v18:

```html
<!-- Before -->
<mat-icon svgIcon="ontimize:search"></mat-icon>

<!-- After -->
<mat-icon>search</mat-icon>
```

Most removed names match a [Material Symbols Outlined](https://fonts.google.com/icons){:target="_blank"} icon 1:1 by name, but the `_outline` suffix is not always kept in the new font — for example `info_outline`, `mail_outline` and `error_outline` likely become `info`, `mail` and `error`. Verify the exact name for every icon you migrate at [fonts.google.com/icons](https://fonts.google.com/icons){:target="_blank"}.

Two names have no Material Symbols homonym at all:

- `orden_ascendente` / `orden_descendente` — no direct equivalent. Consider `arrow_upward` / `arrow_downward`, `sort`, or register your own SVG with `OntimizeMatIconRegistry.addOntimizeSvgIcon(name, url)` (see [Adding a custom SVG icon]({{ base_path }}/customize/icons/#adding-a-custom-svg-icon)).

The currency icons were replaced internally by `o-currency-input`'s own `currency_icons` map (ISO code → Material Symbols name, e.g. `EUR` → `euro_symbol`, `USD` → `attach_money`). If your application referenced the old `ontimize:EUR`-style icons directly, apply the same kind of mapping.

---

## 18. Row height now follows theme density

Since `18.0.0-next.10`, `o-table`, `o-list` and `o-grid`'s `row-height` input (`small | medium | large`) and the legacy `dense` attribute of `mat-list` / `mat-selection-list` no longer have any visual effect — Material's MDC-based components dropped support for them.

Row height is now controlled by the theme's **density** instead:

- The `density` parameter of the theme factory (see [3.6 Configure density](#36-configure-density-optional)) — e.g. `o-mat-light-theme((density: -4))`.
- `ontimize-theme-density-extended(<scale>)` to override density for a specific scope (same section).
- Material's own per-component density mixins, e.g. `mat.list-density(-3)`.

`row-height` still exists in the component API — old templates keep compiling — but it is inert and should be removed:

```html
<!-- Before: row-height controlled the row size -->
<o-table row-height="large" ...></o-table>

<!-- After: row-height has no effect; control size via theme density -->
<o-table ...></o-table>
```

---

## 19. Date engine: Luxon is now the default

Since `18.0.0-next.10`, [Luxon](https://moment.github.io/luxon/){:target="_blank"} is the framework's **default** date engine, replacing Moment.js. Moment.js is now **deprecated** (not removed) — `MomentService`, `OMomentPipe` and `OntimizeMomentDateAdapter` remain fully functional if you explicitly select the moment adapter.

This is breaking in two ways:

- The default date format token changed from Moment's `'L'` / `'LL'` to Luxon's `'D'` / `'DD'`. Any custom `format` / `value-format` written with Moment tokens (e.g. `'DD/MM/YYYY'`) must be rewritten with Luxon's casing (`'dd/MM/yyyy'` — day and year go lowercase, month stays `'MM'`).
- `DateCustomClassFunction` (the `[date-class]` input of `o-date-input` / `o-daterange-input`) now types its parameter as `any` instead of `Moment`. Existing `(date: Moment) => ...` callbacks still **compile**, but at **runtime** they receive a Luxon `DateTime` by default — any callback body that calls Moment-only methods (`.date()`, `.month()`, …) will throw unless updated.

A new `O_DATE_ADAPTER` injection token and the `provideODateAdapter('luxon' | 'moment')` helper let you pick the date adapter for the whole application, a route, or a component subtree.

See the [Date handling guide]({{ base_path }}/guide/date-handling/) for the full format-token table, the `date-class` details and `provideODateAdapter` examples.

---

## 20. Action label configuration (`label` field)

Since `18.0.0-next.10`, `OActionStyle` gained a third optional field, `label`, which configures an action's **text** through the same mechanism — and the same precedence — as `variant` and `importance` (see [15. Renamed action and button CSS classes](#15-renamed-action-and-button-css-classes) for background on this model):

```typescript
interface OActionStyle {
  variant?: 'outline' | 'flat' | 'basic' | 'raised' | 'icon' | 'fab' | 'mini-fab';
  importance?: 'primary' | 'warn' | 'default';
  label?: string; // NEW — literal text or a translation key, resolved with oTranslate
}
```

`o-form`, `o-table`, `o-list`, `o-grid` and `o-tree` now resolve every built-in button's text through a new `getActionLabel(attr)` method instead of a hardcoded translation key. The auto-rule default for each `attr` is the same text that already rendered before `next.10`, so existing applications see **no text change** unless they configure `label` explicitly:

| Component | Default labels (`attr` → text) |
|---|---|
| `o-form` toolbar | `undo`→`UNDO`, `refresh`→`REFRESH`, `insert`→`ADD`, `edit`→`EDIT`, `delete`→`DELETE`, `update`→`SAVE`, `cancel`→`CANCEL` |
| `o-table` | `insert`→`TABLE.BUTTONS.ADD`, `refresh`→`TABLE.BUTTONS.REFRESH`, `delete`→`TABLE.BUTTONS.DELETE` |
| `o-list` / `o-grid` | `insert`→`ADD`, `refresh`→`REFRESH`, `delete`→`DELETE` (`o-grid` has no `delete` button) |
| `o-tree` | `insert`→`INSERT`, `refresh`→`REFRESH`, `delete`→`DELETE` |

Override one action's text with `action-styles`, the same input already used for `variant` / `importance`:

```html
<o-list [action-styles]="{ insert: { label: 'New customer' } }"></o-list>
```

Or app-wide, so it applies everywhere without repeating it per component:

```typescript
provideOActionStyles({
  actions: {
    insert: { label: 'TABLE.BUTTONS.NEW' }
  }
})
```

A projected `o-button` / `o-table-button` with no explicit `label` input now also inherits its text from the host the same way it already inherited `variant` / `importance` — set `label` on the button itself to opt back out.

> **Behavior fix**: the `o-form` toolbar's confirm/accept button previously always displayed a checkmark icon and `'INSERT'`, regardless of the form's actual mode. It now consistently shows a save icon and `'SAVE'` in **both** INSERT and UPDATE mode, resolved through this same mechanism by `attr=update` — so a custom `action-styles` override on `update` (e.g. renaming `'SAVE'`) applies to this button in both modes, while one on `insert` no longer affects it. The button's `attr` HTML attribute (used for its importance/colour and for CSS/E2E hooks) still alternates `insert` / `update` per mode; only the icon and visible text are unified. If your application depended on that button always reading "INSERT" (e.g. E2E tests or custom CSS matching that exact text), update it to `'SAVE'`.

See the [Action styles guide]({{ base_path }}/guide/action-styles/) for the full `OActionStyle` reference, the `action-styles` input on every host component, `OActionStyleProvider` and `O_ACTION_STYLES_CONFIG`.
