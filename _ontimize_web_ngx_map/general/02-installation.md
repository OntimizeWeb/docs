---
permalink: /map/installation/
title: "Installation"
---

{% include base_path %}

## Installation

```bash
  npm install ontimize-web-ngx-map --save
```

## Usage

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


### Add  a map to your component

Insert the `o-map` component in your application component template.


```html
   <o-map #oMapBasic attr="basic-usage-map" center="42.240599, -8.720727" zoom="11" min-zoom="3" max-zoom="20"
      zoom-control="yes" search-control="yes" fxFlex></o-map>
```

![Basic map]({{ "/images/map/basic-map.png" | absolute_url }}){: .comp-example-img }
