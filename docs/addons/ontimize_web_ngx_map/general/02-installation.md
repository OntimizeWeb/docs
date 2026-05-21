---
permalink: /map/installation/
title: "Installation"
layout: default
parent: Map
grand_parent: Addons
nav_order: 2
---

{% include base_path %}

## Installation

```bash
  npm install ontimize-web-ngx-map --save
```

## Usage

Finally, you can use ontimize-web-ngx-map in your Ontimize Web project.

### Import into your application


Include the library map module into your app in the module where you want to use it.

```bash
...
import { OMapModule } from 'ontimize-web-ngx-map';
...

@NgModule({
  imports: [
    OMapModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```


### Configure angular.json dependencies

You must add the module styles definition and the leaflet images in your '*.angular.json*':

```bash
...
"assets": [
  ....
  {
    "glob": "**/*",
    "input": "node_modules/ontimize-web-ngx-map/images",
    "output": "/assets"
  }
  ....
],
"styles": [
  ...
  "node_modules/ontimize-web-ngx-map/styles.scss",
  ....
],
...
```


### Add  a map to your component

Insert the `o-map` component in your application component template.


```html
   <o-map #oMapBasic attr="basic-usage-map" center="42.240599, -8.720727" zoom="11" min-zoom="3" max-zoom="20"
      zoom-control="yes" search-control="yes" fxFlex></o-map>
```

![Basic map]({{ "/assets/images/map/basic-map.png" | absolute_url }}){: .comp-example-img }
