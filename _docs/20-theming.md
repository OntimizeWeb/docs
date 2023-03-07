---
title: "Theming"
permalink: /customize/theming/
excerpt: "How you can customize palette colors of your app."
---

{% include base_path %}
{% include toc %}

## What is a theme?
A **theme** is the set of colors that are applied to the Angular Material components. The library’s approach to theming is based on guidance from the [Material Design spec](https://material.google.com/style/color.html#color-color-palette){:target="_blank"}.

In Angular Material, a theme is created by composing multiple palettes. In particular,
a theme consists of:

* A primary palette: colors most widely used across all screens and components.
* An accent palette: colors used for the floating action button and interactive elements.
* A warn palette: colors used to convey error state.
* A foreground palette: colors for text and icons.
* A background palette: colors used for element backgrounds.

 It can help you create a color theme that reflects your **brand** or **style**.

 Each Ontimize Web application follows material design guidelines proposed by Google. In this chapter we will see how to configure these palettes by both using predefined ones and creating new ones.

<style>
    .image-gallery {overflow: auto; margin-left: 0!important;}
    .image-gallery li {float: left; display: block; margin: 0 0 1% 1%; width: 280px;}
    .image-gallery li a {text-align: center; text-decoration: none!important; color: #777;}
    .image-gallery li a span {display: block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding: 3px 0;}
    .image-gallery li a img {width: 100%; display: block;}
</style>
Below you can see an application with several different themes and variants

<ul class="image-gallery">
<li><a href="{{ base_path }}/images/customization/themes/ontimize-theme.png" title="Ontimize Theme">
<img src="{{ base_path }}/images/customization/themes/ontimize-theme.png" alt="Ontimize Theme" title="Ontimize Theme" />
<span>Ontimize Theme</span></a></li>
<li><a href="{{ base_path }}/images/customization/themes/blue-theme.png" title="Custom 1 Theme">
<img src="{{ base_path }}/images/customization/themes/blue-theme.png" alt="Custom 1 Theme" title="Custom 1 Theme" />
<span>Custom 1 Theme</span></a></li>
</ul>
<ul class="image-gallery">
<li><a href="{{ base_path }}/images/customization/themes/green-theme.png" title="Custom 2 Theme">
<img src="{{ base_path }}/images/customization/themes/green-theme.png" alt="Custom 2 Theme" title="Custom 2 Theme" />
<span>Custom 2 Theme</span></a></li>
<li><a href="{{ base_path }}/images/customization/themes/brown-theme.png" title="Custom 3 Theme">
<img src="{{ base_path }}/images/customization/themes/brown-theme.png" alt="Custom 3 Theme" title="Custom 3 Theme" />
<span>Custom 3 Theme</span></a></li>
</ul>



## Dark and light primary variants

Your primary color can be used to make a color theme for your app, including *dark* and *light* primary color variants.

### What is a dark variant?

A dark variant is a low-light UI that displays mostly dark surfaces.

### Example app with dark and light variants

Below an exemplary Angular application can be found that has implemented the Pure Sass approach. If you enable the Dark Mode in the settings of your operating system, the app will appear in dark colors, otherwise in bright colors.


![Dark Mode]({{ base_path }}/images/customization/dark-theme-appearancce.gif){: .align-center}


## Configuration

In order to make theming job easier, **OntimizeWeb** provides a theming module. You can read more about the *OntimizeWeb Theming module* [here]({{ base_path }}/theming/){:target="_blank"}.

The configuration of the application theme is done in the file *app.scss* in */assets/css* folder in two steps:

1. Import the theme file (predefined or custom).
2. Propagate the theme to the Ontimize Web framework.

Here is an example of configuration:

**app.css**
```css
/***** Importing ontimize-web-ngx-theming prebuilt theme (choose one)*****/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-indigo-pink.scss'; */
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-deeppurple-amber.scss;'*/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-pink-bluegrey.scss';*/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-purple-green.scss';*/
@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';

/* Include ontimize theme*/
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

## Predefined themes

The [*OntimizeWeb Theming*]({{ base_path }}/theming/){:target="_blank"} module provides predefined themes. All of them
are stored in their corresponding files in the path *node_modules/ontimize-web-ngx-theming/src/themes/*

* **mat-deeppurple-amber.scss**
* **mat-indigo-pink.scss**
* **mat-pink-bluegrey.scss**
* **mat-purple-green.scss**

> **Lite Theme:** The *Lite Theme* defines compact styles for the OntimizeWeb components. You can read more about this theme [here]({{ base_path }}/customize/lite/){:target="_blank"}.

## Custom theme definition

If none of predefined themes satisfies your needs, you can define your own stylesheet. Depending on which version of `ontimize-web-ngx-theming` are you using choose one of the links below:
* Click [here]({{ base_path }}/customize/theming/customtheme){:target="_blank"} for older versions to 8.5.0.
* Click [here]({{ base_path }}/customize/theming/customtheme/new){:target="_blank"} for 8.5.0 (included) or newer.

## Tools for picking colors

To help with defining color palettes, you can use these online tools:

* <a href="https://www.materialpalette.com/">https://www.materialpalette.com/</a>
* <a href="https://www.materialui.co/">https://www.materialui.co/</a>
* <a href="http://mcg.mbitson.com/">http://mcg.mbitson.com/</a>

To define a theme, you just need to declare three palettes: **primary, accent and warn**. You can declare a new palette
as you can see in the example ($mat-custom-primary) or you can reuse one of the [standard palettes][1].

After that you can choose between the **light** or **dark** themes by calling their corresponding functions *o-mat-light-theme(...)* or *o-mat-dark-theme(...)*. The function returns the theme configuration that you need to pass to the angular material library to configure the component colors.

## Multiples themes
### Adding multiples themes
To use multiple themes we simply need to import additional themes and create respective css classes for each theme.

**app.css**
```scss
@import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-pink-bluegrey.scss';
/* any component inside of an element with`.my-pink-bluegrey-theme` will be affected by mat-pink-bluegrey theme */
.my-pink-bluegrey-theme {
  @import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss';
  @include ontimize-theme-styles($theme);
  // After define theme, it is necessary to transfer color to Ontimize Web framework
  @import 'node_modules/ontimize-web-ngx/theme.scss';
  @include o-material-theme($theme);

  // Propagate theme to screen styles definition.
  @import '../../app/login/login.theme.scss';
  @include login-theme($theme);
}

@import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-purple-green.scss';
/* any component inside of an element with`.my-purple-green-theme` will be affected by mat-purple-green theme */
.my-purple-green-theme {
  @import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss';
  @include ontimize-theme-styles($theme);
  // After define theme, it is necessary to transfer color to Ontimize Web framework
  @import 'node_modules/ontimize-web-ngx/theme.scss';
  @include o-material-theme($theme);

  // Propagate theme to screen styles definition.
  @import '../../app/login/login.theme.scss';
  @include login-theme($theme);
}

@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';
/* any component inside of an element with`.my-ontimize-theme` will be affected by ontimize theme */
.my-ontimize-theme {
  @import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss';
  @include ontimize-theme-styles($theme);
  // After define theme, it is necessary to transfer color to Ontimize Web framework
  @import 'node_modules/ontimize-web-ngx/theme.scss';
  @include o-material-theme($theme);

  // Propagate theme to screen styles definition.
  @import '../../app/login/login.theme.scss';
  @include login-theme($theme);
}

```

### Theme class and overlay handling
Depending on our particular use case we might need to implement some dynamic css class switching (with *class*) to enable user to switch themes using application preferences during runtime or use parametrized build to build our application using desired theme by adding correct css class to the <body> tag during build.

Angular Material contains components like dropdown or dialog which create overlay over the application's default layout, to theme these elements we have to set theme class also on the overlayContainer

```ts
import { OverlayContainer } from '@angular/cdk/overlay';

export class AppComponent implements OnInit {

  // use this to set correct theme class on app holder
  // eg: <div [class]="themeClass">...</div>
  themeClass: string;

  constructor(
    private overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {
    // subscribe to some source of theme change events, then...
    this.themeClass = newThemeClass;

    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
       overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(newThemeClass);
  }

}
```

## Theming your own components
To style your own components with Angular Material’s tools, the component’s styles must be defined with Sass.

## Using custom typography with your theme
We can use use our custom typography following [*this steps*]({{ base_path }}/customize/typography/){:target="_blank"}

### Using @mixin to automatically apply a theme

#### Advantages of using @mixin
The advantage of using a `@mixin` function is that when you change your theme, every file that uses it will be updated automatically.
Calling it with a different theme argument allow multiple themes within the app or component.

#### How to use @mixin
We can more modularly theme our custom components adding a `@mixin` function to its theme file and then calling this function to apply a theme.

All you need is to create a `@mixin` function in the *custom-component-theme.scss*

**custom-component-theme.scss**
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

**app.scss**
```css
/***** Importing ontimize-web-ngx-theming prebuilt theme (choose one) *****/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-indigo-pink.scss'; */
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-deeppurple-amber.scss;'*/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-pink-bluegrey.scss';*/
/* @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-purple-green.scss';*/

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
