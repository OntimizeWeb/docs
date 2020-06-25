---
title: "Typography"
permalink: /customize/typography/
excerpt: ""
---

{% include base_path %}
{% include toc %}

## What is typography?
Typography is a way of arranging type to make text legible, readable, and appealing when displayed.

## Custom Typography of Ontimize Web framework.

To change the typography it is neccesary to apply an extension of Angular Material's (you can see spec in [Angular Material's typography](https://v6.material.angular.io/guide/typography){:target='_blank'}) and an extension of Ontimize Web Sass-based theming. 

*The extension of Ontimize Web Sass-based theming.* is arranged into typography levels, as Angular Material's typography. Each level has a font-size, line-height and font-weight. This custom typography is used to apply css about [o-table]({{ base_path }}/components/table/){:target="_blank"} depending of the `row-height` attribute. For more details about table typography and defaut config, see [the source](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/blob/master/src/styles/lite/typography/o-table-typography.scss){:target='_blank'}. The available levels are:
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

First you must create a custom *typography configuration* of Angular Material's Sass-based theming and another *typography configuration* of Ontimize Web Sass-based theming as the below example demonstrates

```sass
// Include ontimize-lite theme
@import 'node_modules/ontimize-web-ngx-theming/ontimize-theme-lite.scss';

// Define a custom typography config that overrides the font-family as well as the
// `headlines` and `title` levels.
$custom-typography: mat-typography-config( $font-family: 'Nunito Sans', $headline: mat-typography-level(16px, 22px, 400), $title: mat-typography-level(14px, 22px, 500));

/ Define a custom typography config that overrides the header height, row height, header font size header and row 
// of the tables
$custom-table-typography: ( small-header-height: mat-typography-level(30px, 32px, 400), small-row-height: mat-typography-level(24px, 26px, 400), small-header-font-size: mat-typography-level(12px, 12px, 400), small-row-font-size: mat-typography-level(11px, 11px, 400), medium-header-height: mat-typography-level(30px, 32px, 400), medium-row-height: mat-typography-level(26px, 28px, 400), medium-header-font-size: mat-typography-level(11px, 12px, 300), medium-row-font-size: mat-typography-level(11px, 11px, 400), large-header-height: mat-typography-level(30px, 32px, 400), large-row-height: mat-typography-level(26px, 28px, 400), large-header-font-size: mat-typography-level(11px, 12px, 300), large-row-font-size: mat-typography-level(11px, 11px, 400) );

// Merge both typographys
$lite-typography: map-merge($custom-typography, $custom-table-typography);

// After define theme, it is necessary to transfer typography to Ontimize Web framework and material components
@import 'node_modules/ontimize-web-ngx/theme.scss';
@include ontimize-theme-styles-lite($theme, $lite-typography);
@include o-material-theme($theme, $lite-typography);

```