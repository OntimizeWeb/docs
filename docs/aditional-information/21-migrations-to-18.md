---
layout: default
title: "Migration guide to version 18"
permalink: /migration-15-to-18/
excerpt: "Step-by-step guide to migrate from Ontimize Web NGX 15 (Angular 15) to version 18 (Angular 18)."
parent: Migration guides
grandParent: Aditional information
nav_exclude: true
---
{% include base_path %}
{% include toc %}

# Migration guide — Ontimize Web NGX 15 → 18

This guide covers the steps required to migrate a consumer project from **ontimize-web-ngx 15** (Angular 15) to **ontimize-web-ngx 18** (Angular 18).

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
- Sizing: `--o-input-icon-size`

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

#### Removed button token equivalences

| Removed token | MDC / M3 equivalent |
|---|---|
| `--o-button-height` | `--mdc-text-button-container-height` |
| `--o-button-height` | `--mdc-filled-button-container-height` |
| `--o-button-height` | `--mdc-protected-button-container-height` |
| `--o-button-height` | `--mdc-outlined-button-container-height` |
| `--o-button-height` (button-toggle) | `--mat-standard-button-toggle-height` |

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

The remaining tokens `--o-bg-*`, `--o-fg-*`, `--o-font-family`, `--o-input-icon-size` **are unchanged**.

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
| **Font** | Poppins | Noto Sans |
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
