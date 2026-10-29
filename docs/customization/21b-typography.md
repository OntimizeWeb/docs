---
layout: default
title: "Typography"
permalink: /customize/typography/
excerpt: ""
parent: Customization
nav_order: 3
---

{% include base_path %}
{% include toc %}

## What is typography?
Typography is a way of arranging type to make text legible, readable, and appealing when displayed.

## Typography in Ontimize Web (Material 3)

Since version 18, typography is **Material 3 native**. The whole type scale — headline, title, body and label levels, each with its font-size, line-height and weight — is generated automatically by the theme and exposed at runtime as `--mat-sys-*` CSS custom properties (e.g. `--mat-sys-body-medium-size`, `--mat-sys-title-large-line-height`). See the [full tokens table]({{ base_path }}/customize/theming/#material-3-system-tokens---mat-sys-) on the theming page.

This replaces the previous Sass-based approach, where you built a custom `mat.define-typography-config()` map (one `mat.define-typography-level()` entry per level: headline-1 to headline-6, subtitle-1/2, body-1/2, caption, button) and merged it into the theme at build time. That per-level, build-time API no longer exists — Material 3 controls the type scale, and there is no supported way to redefine each level's font-size/line-height/weight independently through the theme factory.

What you **can** still configure through the theme factory is the base font family:

**app.scss**
```scss
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;
@use '@angular/material' as mat;

$theme: ontimize-style.o-mat-light-theme((
  primary: mat.$azure-palette,
  typography: (font-family: '"Comic Neue", cursive'),
));

$dark-theme: ontimize-style.o-mat-dark-theme((
  primary: mat.$azure-palette,
  typography: (font-family: '"Comic Neue", cursive'),
));

@include ontimize-style.ontimize-theme-styles($theme);

.o-dark {
  @include ontimize-style.ontimize-theme-all-component-color($dark-theme);
}
```

The `typography` key only accepts `font-family` — it is applied to Material's `mat.define-theme()` internally and emitted as `--o-font-family`, so it cascades to every component (Ontimize's and Material's) without touching `--mat-sys-*` sizes/weights.

### Overriding individual type-scale levels

If you need a specific level to differ from Material's default scale (for example, a larger `headline-large` for a dashboard title), override its `--mat-sys-*` custom property directly — no Sass recompilation required:

```scss
html {
  --mat-sys-headline-large-size: 32px;
  --mat-sys-headline-large-line-height: 40px;
}
```

## Table row height

{: .warning }
> In versions prior to v18, the `row-height` attribute drove a dedicated, customizable per-preset typography map that set the actual row/header height and cell font-size of `o-table`. **That map no longer exists**: `row-height` does not resize the table anymore. Use the theme's **`density`** parameter instead.

Use the theme's **`density`** parameter (`0` to `-5`) instead — see the [Density section]({{ base_path }}/customize/theming/#density) on the theming page. It controls the overall compactness of tables (and every other Material component) consistently.
