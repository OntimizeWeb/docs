---
title: "Custom theme definition for 8.5.0 version or newer"
permalink: /customize/theming/customtheme/new
excerpt: "How you can customize palette colors of your app."
---
Here we create an example theme file in */assets/css* folder named *my-custom-app-theme.scss*. Later its imported and loaded instead of the default theme:

**app.css**
<figure class="highlight">
  <pre>
    <code>
    <del>/** Importing ontimize-web-ngx-theming prebuilt theme **/</del>
    <del>@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';</del>
    /** Import custom theme **/
    import 'my-custom-app-theme.scss';
    </code>
  </pre>
</figure>

Here is the content of the theme file:

**my-custom-app-theme.scss**
```css
@import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss';

/* Color definitions */
$mat-custom-primary: (
  50: #bdf5b3,
  100: #82eb6f,
  200: #57e53e,
  300: #33c11a,
  400: #2ca617,
  500: #258b13,
  600: #1e700f,
  700: #17550c,
  800: #103a08,
  900: #081f04,
  A100: #bdf5b3,
  A200: #82eb6f,
  A400: #2ca617,
  A700: #17550c,

  contrast: (
    50: $black-87-opacity,
    100: $black-87-opacity,
    200: $black-87-opacity,
    300: white,
    400: white,
    500: $white-87-opacity,
    600: $white-87-opacity,
    700: $white-87-opacity,
    800: $white-87-opacity,
    900: $white-87-opacity,
    A100: $black-87-opacity,
    A200: white,
    A400: white,
    A700: white,
  )
);

/* Define a theme for your theme using the Material Design palettes available in palette.scss
* (imported above). For each palette, you can optionally specify a default, lighter, and darker
* hue. Available color palettes: https://material.io/design/color/ */
$primary: mat-palette($mat-custom-primary);
$accent:  mat-palette($mat-amber, A200, A100, A400);

/* The warn palette is optional (defaults to red).*/
$warn:    mat-palette($mat-red);

/* Create the theme object (a Sass map containing all of the palettes). */
/* Light theme */
$theme: o-mat-light-theme($primary, $accent, $warn);

/* Dark theme */
/*$theme: o-mat-dark-theme($primary, $accent, $warn);*/
```