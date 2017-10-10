---
title: "Theming"
permalink: /theming/
excerpt: "How you can customize palette colors of your app."
modified: 2016-11-23
---

{% include base_path %}

## What is a theme?
A **theme** is the set of colors that will be applied to the Angular Material components. The
library's approach to theming is based on the guidance from the [Material Design spec][1].

In Angular Material, a theme is created by composing multiple palettes. In particular,
a theme consists of:

* A primary palette: colors most widely used across all screens and components.
* An accent palette: colors used for the floating action button and interactive elements.
* A warn palette: colors used to convey error state.
* A foreground palette: colors for text and icons.
* A background palette: colors used for element backgrounds.

[1]: https://material.google.com/style/color.html#color-color-palette

Each Ontimize Web application follows material design guidelines proposed by Google. So, in this chapter we will see how to configure this set of colors,
 by using predefined ones or creating new ones by ourselves.


## Configuration

The configuration of the theme is performed into the file *app.scss* that is placed into */assets/css* folder. The configuration is done in two steps:

1. Import file that contains colors definition (predefined or custom).
2. Propagate the colors to Ontimize Web framework.

Here is an example of configuration:

```css
/***** Importing @angular/material predefined theme. *****/
@import 'node_modules/@angular/material/core/theming/prebuilt/indigo-pink.scss';

/*
* After define theme, it is necessary to transfer color to Ontimize Web framework
*/
@import 'node_modules/ontimize-web-ngx/components/theming/all-theme.scss';
@include o-material-theme($theme);

```

## Predefined themes

The official library of components @angular/material contains four predefined themes. All of them
are stored in their corresponding files in the path *node_modules/@angular/material/core/theming/prebuilt/*

* **deeppurple-amber.scss**
* **indigo-pink.scss**
* **pink-bluegrey.scss**
* **purple-green.scss**


## Custom theme definition

If none of predefined themes satisfies your needings, you can define your own style sheet color definition. For example, we
can create the file *my-custom-app-theme.scss* into the folder */assets/css* and then, instead of importing predefined theme
from library, we just import our custom file:

```css
/*
* Import custom theme
*/
@import 'my-custom-app-theme.scss';

```

The content of definition file would be like this:

```css
@import 'node_modules/@angular/material/core/theming/all-theme';

/* Include non-theme styles for core.*/
@include md-core();

/* Color definitions */
$md-custom-primary: (
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
$primary: md-palette($md-custom-primary);
$accent:  md-palette($md-amber, A200, A100, A400);

/* The warn palette is optional (defaults to red).*/
$warn:    md-palette($md-red);

/* Create the theme object (a Sass map containing all of the palettes). */
/* Light theme */
$theme: md-light-theme($primary, $accent, $warn);

/* Dark theme */
/*$theme: md-dark-theme($primary, $accent, $warn);*/

/* Include all theme styles for the components.*/
@include angular-material-theme($theme);


```

To help you defining colors and combinations of them you can use these online tools:

* <a href="https://www.materialpalette.com/">https://www.materialpalette.com/</a>
* <a href="https://www.materialui.co/">https://www.materialui.co/</a>
* <a href="http://mcg.mbitson.com/">http://mcg.mbitson.com/</a>

For defining a theme you just need to declare three colors: **primary, accent and warn**. You can declare a new color
as you can see in the example ($md-custom-primary) or you can reuse one of the [standard color palette][1].

After that you can choose between **light** or **dark** theme by calling corresponding function *md-light-theme(...)* or *md-dark-theme(...)*. The function returns
the theme configuration that it is necessary to pass to angular material library to configure component colors.


## Theming your own components
In order to style your own components with Angular Material's tooling, the component's styles must be defined with Sass.

### Using `@mixin` to automatically apply a theme

#### Why using `@mixin`
The advantage of using a `@mixin` function is that when you change your theme, every file that uses it will be updated automatically.
Calling it with a different theme argument allow multiple themes within the app or component.

#### How to use `@mixin`
We can better theming our custom components adding a `@mixin` function to its theme file and then calling this function to apply a theme.

All you need is to create a `@mixin` function in the *custom-component-theme.scss*

```css
/* Import all the tools needed to customize the theme and extract parts of it*/
@import 'node_modules/@angular/material/core/theming/theming';

/* Define a mixin that accepts a theme and outputs the color styles for the component.*/
@mixin custom-component-theme($theme) {
  /* Extract whichever individual palettes you need from the theme.*/
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);

  /* Use md-color to extract individual colors from a palette as necessary.*/
  .foo-class {
    background-color: md-color($primary);
    border-color: md-color($accent, A400);
  }
}
```
Now you just have have to call the `@mixin` function to apply the theme definition in *app.scss*:

```css
/***** Importing @angular/material predefined theme. *****/
@import 'node_modules/@angular/material/core/theming/prebuilt/indigo-pink.scss';

/*
* After define theme, it is necessary to transfer color to Ontimize Web framework
*/
@import 'node_modules/ontimize-web-ngx/components/theming/all-theme.scss';
@include o-material-theme($theme);

/*
* Propagate theme to custom component definition.
*/
@import '../../app/shared/custom-component-theme.scss';
@include login-theme($theme);
```

For more details about the theming functions, see the comments in the
[source](https://github.com/angular/material2/blob/master/src/lib/core/theming/_theming.scss).

