---
title: "Theming"
permalink: /customize/theming/
excerpt: "How you can customize palette colors of your app."
---

{% include base_path %}
{% include toc %}

## What is a theme?
A **theme** is the set of colors that are applied to the Angular Material components. The library’s approach to theming is based on guidance from the [Material Design spec][1].

In Angular Material, a theme is created by composing multiple palettes. In particular,
a theme consists of:

* A primary palette: colors most widely used across all screens and components.
* An accent palette: colors used for the floating action button and interactive elements.
* A warn palette: colors used to convey error state.
* A foreground palette: colors for text and icons.
* A background palette: colors used for element backgrounds.

[1]: https://material.google.com/style/color.html#color-color-palette

Each Ontimize Web application follows material design guidelines proposed by Google. In this chapter we will see how to configure these palettes by both using predefined ones and creating new ones.


## Configuration

In order to make theming job easier, Ontimize Web provides a theming add-on called '*ontimize-web-ngx-theming*'. You can get more information about it [here]({{ base_path }}/ontimize-web-ngx-theming/){:target="_blank"}.

The configuration of the application theme is done in the file *app.scss* in */assets/css* folder in two steps:

1. Import the theme file (predefined or custom).
2. Propagate the theme to the Ontimize Web framework.

Here is an example of configuration:

```css
/***** Importing ontimize-web-ngx-theming prebuilt theme (choose one)*****/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-indigo-pink.scss'; */
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/o-indigo-pink.scss'; */
@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';

/*
*  After defining the theme, you need to propagate the theme to the Ontimize Web framework
*/
@import 'node_modules/ontimize-web-ngx/ontimize/components/theming/all-theme.scss';
@include o-material-theme($theme);
```

## Predefined themes

The module [*ontimize-web-ngx-theming*]({{ base_path }}/ontimize-web-ngx-theming/){:target="_blank"} provides predefined themes. All of them
are stored in their corresponding files in the path *node_modules/ontimize-web-ngx-theming/src/themes/*

* **md-deeppurple-amber.scss**
* **md-indigo-pink.scss**
* **md-pink-bluegrey.scss**
* **md-purple-green.scss**
* **o-deeppurple-amber.scss**
* **o-indigo-pink.scss**
* **o-pink-bluegrey.scss**
* **o-purple-green.scss**
* **ontimize.scss**


## Custom theme definition

If none of predefined themes satisfies your needs, you can define your own stylesheet. Here we create an example theme file in */assets/css* folder named *my-custom-app-theme.scss*. Later its imported and loaded instead of the default theme:

```css
/*
* Import custom theme
*/
@import 'my-custom-app-theme.scss';
```

Here is the content of the theme file:

```css
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


/* Define a theme.*/
$primary: mat-palette($mat-custom-primary);
$accent:  mat-palette($mat-amber, A200, A100, A400);

/* The warn palette is optional (defaults to red).*/
$warn:    mat-palette($mat-red);

/* Create the theme object (a Sass map containing all of the palettes). */
/* Light theme */
$theme: mat-light-theme($primary, $accent, $warn);

/* Dark theme */
/*$theme: mat-dark-theme($primary, $accent, $warn);*/

/* Include all theme styles for the components.*/
@include angular-material-theme($theme);
```

To help with defining color palettes, you can use these online tools:

* <a href="https://www.materialpalette.com/">https://www.materialpalette.com/</a>
* <a href="https://www.materialui.co/">https://www.materialui.co/</a>
* <a href="http://mcg.mbitson.com/">http://mcg.mbitson.com/</a>

To define a theme, you just need to declare three palettes: **primary, accent and warn**. You can declare a new palette
as you can see in the example ($mat-custom-primary) or you can reuse one of the [standard palettes][1].

After that you can choose between the **light** or **dark** themes by calling their corresponding functions *mat-light-theme(...)* or *mat-dark-theme(...)*. The function returns the theme configuration that you need to pass to the angular material library to configure the component colors.


## Theming your own components
To style your own components with Angular Material’s tools, the component’s styles must be defined with Sass.

### Using @mixin to automatically apply a theme

#### Advantages of using @mixin
The advantage of using a `@mixin` function is that when you change your theme, every file that uses it will be updated automatically.
Calling it with a different theme argument allow multiple themes within the app or component.

#### How to use @mixin
We can more modularly theme our custom components adding a `@mixin` function to its theme file and then calling this function to apply a theme.

All you need is to create a `@mixin` function in the *custom-component-theme.scss*

```css
/* Import all the tools needed to customize the theme and extract parts of it*/
@import 'node_modules/@angular/material/theming';

/* Define a mixin that accepts a theme and outputs the color styles for the component.*/
@mixin custom-component-theme($theme) {
  /* Extract whichever individual palettes you need from the theme.*/
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);

  /* Use mat-color to extract individual colors from a palette as necessary.*/
  .foo-class {
    background-color: mat-color($primary);
    border-color: mat-color($accent, A400);
  }
}
```
Now you just have have to call the `@mixin` function to apply the theme definition in *app.scss*:

```css
/***** Importing ontimize-web-ngx-theming prebuilt theme (choose one) *****/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-indigo-pink.scss'; */
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/o-indigo-pink.scss'; */
@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';
/*
* After define theme, it is necessary to transfer color to Ontimize Web framework
*/
@import 'node_modules/ontimize-web-ngx/ontimize/components/theming/all-theme.scss';
@include o-material-theme($theme);

/*
* Propagate theme to custom component definition.
*/
@import '../../app/shared/custom-component-theme.scss';
@include custom-component-theme($theme);
```

For more details about the theming functions, see the comments in the
[source](https://github.com/angular/material2/blob/master/src/lib/core/theming/_theming.scss){:target="_blank"}.
