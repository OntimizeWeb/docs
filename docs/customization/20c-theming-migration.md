---
layout: default
title: "Old theming migration"
permalink: /customize/theming/migration
excerpt: "Steps to change theming versions."
parent: Customization
nav_order: 2
---

{% include base_path %}
{% include toc %}

## `app.scss` scructure

The structure of `app.scss` file depend on the version of theming that is installed. The diferences on `app.scss` are between the **8.5.0** (or newer) and the older versions.

### Older than 8.5.0 (not included)

As we see on the example below in previous versions to 8.5.0 the first line of the file should be the theme import, then we import the `ontimize-theme.scss` file to call the mixin `ontimize-theme-styles` and finally we propagate the theme to the Onitmize Web framework.

**app.scss**
```scss
/***** Importing ontimize-web-ngx-theming prebuilt theme (choose one)*****/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-indigo-pink.scss'; */
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-deeppurple-amber.scss;'*/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-pink-bluegrey.scss';*/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-purple-green.scss';*/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize-black-yellow.scss';*/
@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';

/* Include ontimize theme styles*/
@import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss';
@include ontimize-theme-styles($theme);
/*
*  After defining the theme, you need to propagate the theme to the Ontimize Web framework
*/
@import 'node_modules/ontimize-web-ngx/theme.scss';
@include o-material-theme($theme);


/* Include the alternative theme styles inside of a block with a CSS class. You can make this
* CSS class whatever you want. In this example, any component inside of an element with
`.your-dark-theme` will be affected by this alternate dark theme instead of the default theme.*/
.your-dark-theme {
  @include ontimize-theme-styles($dark_theme);
  @include o-material-theme($dark_theme);
}
```

### 8.5.0 or newer versions

In this case the first import we should do is to import the `ontimize-theme.scss` file which have inside the theme creation functions and the `ontimize-theme-styles` mixin. Then we should import the theme file, include the `ontimize-theme-styles` mixin and finally propagate the theme to the Ontimize Web framework.

**app.scss**
```scss
/*Import the file who have the theme functions and the ontimize-theme-styles mixin.*/
@import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss';

/***** Importing ontimize-web-ngx-theming prebuilt theme (choose one)*****/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-indigo-pink.scss'; */
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-deeppurple-amber.scss;'*/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-pink-bluegrey.scss';*/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-purple-green.scss';*/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize-black-yellow.scss';*/
@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';

/* Include ontimize theme styles*/
@include ontimize-theme-styles($theme);
/*
*  After defining the theme, you need to propagate the theme to the Ontimize Web framework
*/
@import 'node_modules/ontimize-web-ngx/theme.scss';
@include o-material-theme($theme);


/* Include the alternative theme styles inside of a block with a CSS class. You can make this
* CSS class whatever you want. In this example, any component inside of an element with
`.your-dark-theme` will be affected by this alternate dark theme instead of the default theme.*/
.your-dark-theme {
  @include ontimize-theme-styles($dark_theme);
  @include o-material-theme($dark_theme);
}
```

## Custom theme definition structure

If we want to have custom colors in our app we can create themes to customize it. Depeding on the theming version that we have installed there are two ways to create the file.

### `ontimize-web-ngx-theming` older than 8.5.0 (not included)

As we see in the example below in this versions we need to import `theming` and the `core` of material in the first lines. Then to create the theme we use the material functions `mat-light-theme` and `mat-dark-theme`. Code example:

**my-custom-app-theme.scss**
```scss
@import 'node_modules/@angular/material/theming';

// Include non-theme styles for core.
@include mat-core();

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
$theme: mat-light-theme($primary, $accent, $warn);

/* Dark theme */
/*$theme: mat-dark-theme($primary, $accent, $warn);*/
```

### `ontimize-web-ngx-theming` from 8.5.0 to 8.5.2

In newer versions we only need one import on the custom theme file, the import of `ontimize-theme.scss` file. Other diference with the older versions is that the functions which create the theme are custom now, the names of the functions are `o-mat-light-theme` and `o-mat-dark-theme`. Code example:

**my-custom-app-theme.scss**
```scss
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
