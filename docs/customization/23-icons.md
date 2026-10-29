---
layout: default
title: "Icons"
permalink: /customize/icons/
excerpt: "How to use and customise icons in Ontimize Web 18 with Material Symbols Outlined."
parent: Customization
nav_order: 5
---

{% include base_path %}
{% include toc %}

## Material Symbols Outlined

Ontimize Web 18 uses **Material Symbols Outlined** (a variable font) instead of the legacy Material Icons ligature font.

Update your `index.html` to load the new font:

```html
<!-- Remove the old Material Icons link if present:
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
-->

<!-- Add the Material Symbols Outlined link: -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,GRAD,FILL@20..48,100..700,-50..200,0..1"
      rel="stylesheet">
```

{: .note }
> Icon **names** do not change — only the font file and CSS class change. `home`, `settings`, `search`, etc. all keep the same names.

In templates, use the `material-symbols-outlined` class:

```html
<span class="material-symbols-outlined">home</span>
```

Ontimize Web components handle this internally — you do not need to change any component template.

## How to use Material Design icons

Every Ontimize Web component that has an icon input can use any icon from [Google Material Symbols](https://fonts.google.com/icons){:target='_blank'}. Pass the icon name as a string:

```html
<o-button icon="home" label="Home"></o-button>
<o-text-input attr="name" icon="person"></o-text-input>
```

## How to change icon colour

To customise the icon colour globally for all inputs in a module, use the `O_INPUTS_OPTIONS` provider. In a standalone bootstrap application:

```typescript
// app.config.ts or main.ts providers array
import { O_INPUTS_OPTIONS } from 'ontimize-web-ngx';

providers: [
  { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'primary' } }
]
```

In an NgModule application (`app.module.ts`):

```typescript
import { O_INPUTS_OPTIONS } from 'ontimize-web-ngx';

export const customProviders: any[] = [
  { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'accent' } }
];
```

More info about input options [here]({{ base_path }}/components/input/overview/overview#global-default-options--new-).

## Ontimize Web built-in SVG icons

Ontimize Web components use an internal set of SVG icons. You can reference them in any `mat-icon`:

```html
<mat-icon svgIcon="ontimize:ICON_NAME"></mat-icon>
```

Replace `ICON_NAME` with one of the available icons (full set stored [here](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/18.x.x/projects/ontimize-web-ngx/assets/svg/ontimize-icon-set.svg){:target='_blank'}):

| BTC | USD | EUR | LIR | PERCENT | GBP | INR | ILS |
| KRW | JPY | add | keyboard_arrow_left | keyboard_arrow_right | keyboard_arrow_down | keyboard_arrow_up | menu |
| delete | edit | save | clear | done | autorenew | undo | perm_identity |
| vpn_key | arrow_back | mail_outline | search | today | visibility | visibility_off | more_vert |
| filter_list | power_settings_new | settings | drag_handle | first_page | last_page | info_outline | error_outline |
| check_circle | close | EXCEL | HTML | PDF | clock | folder_open | fullscreen |
| sort_by_alpha_desc | sort_by_alpha_asc | sort_by_alpha | | | | | |

## Adding a custom SVG icon

To add a custom SVG icon to the Ontimize icon set:

1. Inject the `OntimizeMatIconRegistry` service.
2. Define a name for your icon.
3. Store your icon in your app's assets.
4. Call `addOntimizeSvgIcon` (recommended in the root `AppComponent`).

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { OntimizeMatIconRegistry } from 'ontimize-web-ngx';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet />'
})
export class AppComponent implements OnInit {
  private iconRegistry = inject(OntimizeMatIconRegistry);

  ngOnInit() {
    this.iconRegistry.addOntimizeSvgIcon('myCustomIcon', 'assets/images/my-icon.svg');
  }
}
```

Then use it in templates:

```html
<mat-icon svgIcon="ontimize:myCustomIcon"></mat-icon>
```
