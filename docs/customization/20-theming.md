---
layout: default
title: "Theming"
permalink: /customize/theming/
excerpt: "How to customise the colour palette and theme of your Ontimize Web 18 application using Material 3."
parent: Customization
nav_order: 1
---

{% include base_path %}
{% include toc %}

{: .note }
> This page covers theming for **Ontimize Web 18** (Angular Material 3). For older versions see the [15.x.x theming guide](https://ontimizeweb.github.io/docs/v15/customize/theming/) or the [8.x.x documentation](https://ontimizeweb.github.io/docs/v8/customize/theming/).

## What is a theme?

A **theme** is the set of colours applied to Angular Material components and Ontimize Web components. From version 18, Ontimize Web uses **Angular Material 3 (M3)** natively, which introduces a tonal palette system — colours are defined by *tone* values (0–100) derived from a seed colour using the [HCT colour space](https://material.io/blog/science-of-color-design){:target="_blank"}.

The theme is built from:

- **Primary palette** — the brand colour used across most components.
- **Tertiary palette** (optional) — the accent colour, replacing M2's `accent`.
- **Error colour** — automatically derived from the primary; replaces M2's `warn`.
- **Neutral palette** (optional) — used for surfaces and backgrounds.

<style>
  .image-gallery {overflow: auto; margin-left: 0!important;}
  .image-gallery li {float: left; display: block; margin: 0 0 1% 1%; width: 280px;}
  .image-gallery li::before {content: ""!important;}
  .image-gallery li a {text-align: center; text-decoration: none!important; color: #777;}
  .image-gallery li a span {display: block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding: 3px 0;}
  .image-gallery li a img {width: 100%; display: block;}
</style>

Below you can see an application with light and dark variants:

<ul class="image-gallery">
<li><a href="{{ base_path }}/assets/images/customization/themes/customers-table-light.png" title="Ontimize Theme Light">
<img src="{{ base_path }}/assets/images/customization/themes/customers-table-light.png" alt="Ontimize Theme Light" />
<span>Light Theme</span></a></li>
<li><a href="{{ base_path }}/assets/images/customization/themes/customers-detail-dark.png" title="Ontimize Theme Dark">
<img src="{{ base_path }}/assets/images/customization/themes/customers-detail-dark.png" alt="Ontimize Theme Dark" />
<span>Dark Theme</span></a></li>
</ul>

---

## Configuration

### Files to configure

- [`styles.scss`](#stylesscss) — defines and applies the theme
- [`index.html`](#indexhtml) — loads the icon font

#### styles.scss

The minimum setup uses one of the 12 predefined Angular Material palettes:

```scss
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;
@use '@angular/material' as mat;

// Light theme
$theme: ontimize-style.o-mat-light-theme((
  primary: mat.$azure-palette,
));

// Dark theme
$dark-theme: ontimize-style.o-mat-dark-theme((
  primary: mat.$azure-palette,
));

// Apply light theme globally
@include ontimize-style.ontimize-theme-styles($theme);

// Apply dark theme when .o-dark is set on the root element
.o-dark {
  @include ontimize-style.ontimize-theme-all-component-color($dark-theme);
}
```

#### index.html

Add the **Material Symbols Outlined** font (replaces Material Icons from v15):

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,GRAD,FILL@20..48,100..700,-50..200,0..1"
      rel="stylesheet">
```

---

## Predefined palettes

Angular Material 18 ships 12 ready-to-use M3 palettes:

| Palette variable | Colour |
|---|---|
| `mat.$azure-palette` | Azure blue |
| `mat.$blue-palette` | Blue |
| `mat.$cyan-palette` | Cyan |
| `mat.$green-palette` | Green |
| `mat.$spring-green-palette` | Spring green |
| `mat.$chartreuse-palette` | Chartreuse |
| `mat.$yellow-palette` | Yellow |
| `mat.$orange-palette` | Orange |
| `mat.$red-palette` | Red |
| `mat.$rose-palette` | Rose |
| `mat.$magenta-palette` | Magenta |
| `mat.$violet-palette` | Violet |

Use them directly in `o-mat-light-theme`:

```scss
$theme: ontimize-style.o-mat-light-theme((
  primary:  mat.$green-palette,
  tertiary: mat.$cyan-palette,
));
```

---

## Predefined Ontimize themes

The core module includes ready-to-use theme files under `node_modules/ontimize-web-ngx/theming/themes/`:

- `ontimize-blue.scss`
- `ontimize.scss`
- `ontimize-black-yellow.scss`
- `fashion.scss`

```scss
// styles.scss — using a predefined Ontimize theme
@use 'ontimize-web-ngx/theming/themes/ontimize-blue' as theme;
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;

@include ontimize-style.ontimize-theme-styles(theme.$theme);

.o-dark {
  @include ontimize-style.ontimize-theme-all-component-color(theme.$dark-theme);
}
```

---

## Custom theme

### Option A — CLI-generated palette (recommended for corporate branding)

Angular Material 18 provides a schematic that generates a full M3 palette from a HEX seed colour:

```bash
ng generate @angular/material:m3-theme
```

The interactive prompt asks for your **primary colour** (and optionally secondary/tertiary/neutral/error) and saves the generated palette to a `.scss` file.

Adapt the output to the Ontimize factory:

```scss
// m3-theme.scss (generated by the CLI)
@use 'sass:map';

$_palettes: ( ... );  // keep as-is

$_primary:  map.get($_palettes, primary);
$_tertiary: map.get($_palettes, tertiary);
$_neutral:  map.get($_palettes, neutral);  // optional
```

```scss
// styles.scss
@use './m3-theme' as m3;
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;

$theme: ontimize-style.o-mat-light-theme((
  primary:  m3.$_primary,
  tertiary: m3.$_tertiary,
  neutral:  m3.$_neutral,   // optional — derives surface levels from brand palette
));

$dark-theme: ontimize-style.o-mat-dark-theme((
  primary:  m3.$_primary,
  tertiary: m3.$_tertiary,
  neutral:  m3.$_neutral,
));

@include ontimize-style.ontimize-theme-styles($theme);

.o-dark {
  @include ontimize-style.ontimize-theme-all-component-color($dark-theme);
}
```

> The CLI uses the HCT colour space to derive all tonal variants perceptually. Do not try to build a M3 palette manually.

### Option B — Inline palette

If you prefer not to add an extra file, copy the palette map directly:

```scss
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;

$primary: (
  0:   #000000,
  10:  #001d36,
  20:  #003259,
  40:  #0d61a2,   // ~500 in M2 — the main brand colour
  80:  #9fcaff,
  90:  #d1e4ff,   // primary-container in light themes
  100: #ffffff,
  // … include all tones 0 10 20 25 30 35 40 50 60 70 80 90 95 98 99 100
);

$theme: ontimize-style.o-mat-light-theme((
  primary: $primary,
));
```

### Factory parameters

Both `o-mat-light-theme` and `o-mat-dark-theme` accept the following map keys:

| Key | Type | Default | Description |
|---|---|---|---|
| `primary` | M3 palette map | required | Brand colour palette |
| `tertiary` | M3 palette map | derived from primary | Accent colour |
| `neutral` | M3 palette map | — | Surface/background levels |
| `density` | integer (`0` to `-5`) | `-2` | Component density scale |
| `typography` | map `{font-family}` | Noto Sans | Font family |

```scss
$theme: ontimize-style.o-mat-light-theme((
  primary:    mat.$azure-palette,
  tertiary:   mat.$blue-palette,
  density:    -4,
  typography: (font-family: '"Inter", sans-serif'),
));
```

---

## Dark mode

Apply the dark theme by toggling the `.o-dark` class on the root element (e.g., `<html>` or `<body>`):

```scss
// styles.scss
html {
  @include ontimize-style.ontimize-theme-styles($theme);
}

html.o-dark {
  @include ontimize-style.ontimize-theme-all-component-color($dark-theme);
}
```

Dark mode surface tokens automatically adapt:

| Token | Light | Dark |
|---|---|---|
| `--mat-sys-surface` | `#ffffff` | `#252525` |
| `--mat-sys-background` | `#f9fafb` | `#1a1a1a` |
| `--mat-sys-surface-container` | `#f5f5f5` | `#2e2e2e` |
| `--o-bg-card` | `#ffffff` | `#252525` |
| `--o-bg-background` | `#f9fafb` | `#1a1a1a` |

---

## Density

The `density` parameter controls the compactness of Material components. Valid values: `0` (Material default, 40px buttons) to `-5` (most compact, 32px buttons).

**Option A — Factory parameter (recommended):**
```scss
$theme: ontimize-style.o-mat-light-theme((
  primary: mat.$azure-palette,
  density: -4,
));
```

**Option B — Scoped density override:**
```scss
@include ontimize-style.ontimize-theme-styles($theme); // base density

.compact-zone {
  @include ontimize-style.ontimize-theme-density-extended(-5);
}
.relaxed-zone {
  @include ontimize-style.ontimize-theme-density-extended(0);
}
```

**Option C — Override individual component token:**
```scss
html { --mdc-filled-button-container-height: 40px; }
```

---

## CSS custom properties

Version 18 exposes all colours as **runtime CSS custom properties** — no SCSS recompilation needed to override them.

### Ontimize tokens (`--o-*`)

| Token | Description |
|---|---|
| `--o-fg-text` | Primary text |
| `--o-fg-secondary-text` | Secondary / hint text |
| `--o-fg-icon` | Icon colour |
| `--o-fg-divider` | Divider / border colour |
| `--o-fg-disabled` | Disabled foreground |
| `--o-bg-card` | Card background |
| `--o-bg-background` | Page background |
| `--o-bg-level-0` | Surface level 0 |
| `--o-bg-level-1` | Surface level 1 |
| `--o-bg-app-bar` | App bar / toolbar background |
| `--o-bg-sidenav-overlay` | Sidenav overlay colour |
| `--o-font-family` | Global font family |
| `--o-input-icon-size` | Input icon size |

### Material 3 system tokens (`--mat-sys-*`)

| Token | Description |
|---|---|
| `--mat-sys-primary` | Primary brand colour |
| `--mat-sys-on-primary` | Text on primary background |
| `--mat-sys-primary-container` | Primary container colour |
| `--mat-sys-on-primary-container` | Text on primary container |
| `--mat-sys-tertiary` | Tertiary / accent colour |
| `--mat-sys-on-tertiary` | Text on tertiary |
| `--mat-sys-error` | Error / warn colour |
| `--mat-sys-on-error` | Text on error |
| `--mat-sys-surface` | Surface colour |
| `--mat-sys-background` | Background colour |
| `--mat-sys-body-medium-size` | Body text size |
| `--mat-sys-body-small-size` | Small body text size |
| `--mat-sys-label-large-size` | Button label size |
| `--mat-sys-title-medium-size` | Subtitle size |

### Overriding tokens at runtime

You can override any token without recompiling:

```scss
// Per-component override
.my-button {
  --mdc-filled-button-container-color: var(--mat-sys-tertiary);
  --mdc-filled-button-label-text-color: var(--mat-sys-on-tertiary);
}

// Per-zone override
.admin-panel {
  --mat-sys-primary: #8b0000;
  --mat-sys-on-primary: #ffffff;
}
```

---

## Theming your own components

With M3 tokens available at runtime, you no longer need SCSS `@mixin` patterns. Use CSS custom properties directly in your component styles:

```scss
// my-card.component.scss
.my-card {
  background: var(--o-bg-card);
  color: var(--o-fg-text);
  border: 1px solid var(--o-fg-divider);
}

.my-card__header {
  background: var(--mat-sys-primary-container);
  color: var(--mat-sys-on-primary-container);
  font-size: var(--mat-sys-title-medium-size);
}

.my-card__action {
  color: var(--mat-sys-primary);
}
```

This approach automatically adapts to dark mode and theme changes — no mixin calls needed.

---

## Multiple themes

To support multiple themes at runtime, wrap each theme's styles in a CSS class:

```scss
// styles.scss
@use 'ontimize-web-ngx/theming/themes/ontimize-blue' as theme-blue;
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;
@use '@angular/material' as mat;

$theme-green: ontimize-style.o-mat-light-theme((
  primary: mat.$green-palette,
));

// Default theme
@include ontimize-style.ontimize-theme-styles(theme-blue.$theme);

// Alternative theme class
.green-theme {
  @include ontimize-style.ontimize-theme-styles($theme-green);
}
```

Apply the class dynamically in TypeScript:

```typescript
import { OverlayContainer } from '@angular/cdk/overlay';

export class AppComponent {
  constructor(private overlayContainer: OverlayContainer) {}

  switchTheme(themeClass: string) {
    const containerEl = this.overlayContainer.getContainerElement();
    containerEl.classList.remove('green-theme'); // remove old
    containerEl.classList.add(themeClass);        // add new
    document.body.classList.add(themeClass);
  }
}
```

---

## Clear SaSS — neutral surfaces (optional)

Since `18.0.0-next.4`, the `ontimize-neutral-surfaces` mixin removes the primary-colour tint from elevated surfaces, producing a clean neutral look:

```scss
html {
  @include ontimize-style.ontimize-theme-styles($theme);
  @include ontimize-style.ontimize-neutral-surfaces($theme);
}

html.o-dark {
  @include ontimize-style.ontimize-theme-styles($dark-theme);
  @include ontimize-style.ontimize-neutral-surfaces($dark-theme);
}
```

---

## Tools for picking colours

- [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/){:target="_blank"} — official M3 tool, exports a complete palette
- [Angular CLI schematic](https://material.angular.io/guide/theming#generating-a-theme){:target="_blank"} — `ng generate @angular/material:m3-theme`
- [HCT Colour Picker](https://material.io/blog/science-of-color-design){:target="_blank"} — background on the M3 colour system
