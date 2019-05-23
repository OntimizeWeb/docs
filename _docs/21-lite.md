---
title: "Lite Theme"
permalink: /customize/lite/
excerpt: ""
---

{% include base_path %}
{% include toc %}

The Lite Theme defines *compact* styles for the **OntimizeWeb** components. It is one of the predefined themes in the [*OntimizeWeb Theming*]({{ base_path }}/theming/){:target="_blank"} module.

## Usage

Modify your application main styles file (*app.scss* if you are using ontimize-web pre-built apps) and apply the following changes:

* Apply the *Lite Theme* to your application theme:

{:.table-list}
```css
@import 'node_modules/ontimize-web-ngx-theming/ontimize-theme-lite.scss';
@include ontimize-theme-styles-lite($theme);
```

* Override the material typography with the *Lite Theme* typography (`$lite-typography`):

{:.table-list}
```css
@include o-material-theme($theme, $lite-typography);
```

## Additional steps

You must also apply the following changes in order to make **Lite Theme** working with all **OntimizeWeb** components features.

* Display the form component error messages on tooltips. For this,  provide the **lite** value for the `type` property for `O_MAT_ERROR_OPTIONS` in your application root module like in the example below.

{:.table-list}
```javascript
import { O_MAT_ERROR_OPTIONS } from 'ontimize-web-ngx';

@NgModule({
  providers: [
    { provide: O_MAT_ERROR_OPTIONS, useValue: { type: 'lite' } }
  ],
  ...
```
