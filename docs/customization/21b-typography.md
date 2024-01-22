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

## Custom Typography of Ontimize Web framework.

To change the typography it is neccesary to apply an extension of Angular Material's (you can see spec in [Angular Material's typography](https://v15.material.angular.io/guide/typography){:target='_blank'}) and an extension of Ontimize Web Sass-based theming.

*The extension of Ontimize Web Sass-based theming.* is arranged into typography levels, as Angular Material's typography. Each level has a font-size, line-height and font-weight. This custom typography is used to apply css about [o-table]({{ base_path }}/components/table/overview/){:target="_blank"} depending of the `row-height` attribute. For more details about table typography and defaut config, see [the source](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/main.15.x/projects/ontimize-web-ngx/src/lib/theming/typography/o-table-typography.scss){:target='_blank'}. The available levels are:
<ul>
  <li><strong>small-header-height</strong>: table header height for 'small' predefined row height options.</li>
  <li><strong>small-row-height</strong>: table row height for 'small' predefined row height options. </li>
  <li><strong>small-header-font-size</strong> : table header font size  for 'small' predefined row height options. </li>
  <li><strong>small-row-font-size</strong>:  table row font size for 'small' predefined row height options </li>

<li><strong>medium-header-height</strong>:  table header height for 'medium' predefined row height options</li>
<li><strong>medium-row-height</strong>: table row height for 'medium' predefined row height options.</li>
<li><strong>medium-header-font-size</strong>:  table header font size for 'medium' predefined row height options </li>
<li><strong>medium-row-font-size</strong>: table row font size for 'medium' predefined row height options</li>
<li><strong>large-header-height</strong>:  table header height  for 'large' predefined row height options</li>
<li><strong>large-row-height</strong>: table row height for 'large' predefined row height options.</li>
<li><strong>large-header-font-size</strong>: table header font size for 'large' predefined row height options</li>
<li><strong>large-row-font-size</strong>:  table row font size for 'large' predefined row height options </li>
</ul>

## Customization

First you must create a custom *typography configuration* of Angular Material's Sass-based theming and another *typography configuration* of Ontimize Web Sass-based theming as the below example demonstrates.

**app.scss**
```scss
@use 'ontimize-web-ngx/theming/themes/ontimize.scss'as theme;
@use 'ontimize-web-ngx/theming/ontimize-style.scss';
@use '../../app/login/login.theme.scss'as login;

// Necesary imports
@use '@angular/material'as mat;
@use 'sass:map';
// Imports the Ontimize table typography instead of also modificate it
@use 'ontimize-web-ngx/theming/typography/o-table-typography.scss'as ontimize-table-typography;

// Defines the custom typography
$custom-typography: mat.define-typography-config($font-family: '"Comic Neue", cursive',
  $headline-1: mat.define-typography-level(84px, 92px, 300),
  $headline-2: mat.define-typography-level(42px, 42px, 400),
  $headline-3: mat.define-typography-level(34px, 36px, 400),
  $headline-4: mat.define-typography-level(26px, 30px, 400),
  $headline-5: mat.define-typography-level(24px, 24px, 400),
  $headline-6: mat.define-typography-level(18px, 24px, 500),
  $subtitle-1: mat.define-typography-level(14px, 21px, 600),
  $subtitle-2: mat.define-typography-level(12px, 18px, 500),
  $body-1: mat.define-typography-level(13px, 1.125em, 400),
  $body-2: mat.define-typography-level(12px, 15px, 400),
  $caption: mat.define-typography-level(11px, 15px, 400),
  $button: mat.define-typography-level(13px, 14px, 500)
);

// Merges our custom typography with the Ontimize table typography
$merged-typography: map.merge($custom-typography, ontimize-table-typography.$table-typography);

// Replaze the theme typography by our self created typography
$theme: map.set(theme.$theme, "typography", $merged-typography);

@include ontimize-style.ontimize-theme-styles($theme);

@include login.login-theme($theme);

```