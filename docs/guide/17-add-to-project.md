---
layout: default
title: "Add OntimizeWeb to your project"
permalink: /add-to-project/
excerpt: "Include OntimizeWeb NGX 18 in your project as a dependency."
parent: Guide
nav_order: 10
---

{% include base_path %}
{% include toc %}

## Install OntimizeWeb

Install `ontimize-web-ngx` from npm:

```bash
npm install ontimize-web-ngx@18
```

## Configure the application

Create `app.config.ts` with the application settings. Read more about each option [here]({{ base_path }}/guide/appconfig/).

```typescript
import { Config } from 'ontimize-web-ngx';

export const CONFIG: Config = {
  // Base URL used by app services
  apiEndpoint: 'http://mydomain.com/',

  // Unique package identifier of the app
  uuid: 'com.ontimize.web.ngx.myapp',

  // Title of the app
  title: 'My app',

  // Default language
  locale: 'en',

  applicationLocales: ['en']
};
```

## Option A — Standalone bootstrap (recommended for Angular 18)

The recommended approach for Angular 18 uses `bootstrapApplication()` with `provideOntimizeWeb()`.

**`main.ts`:**
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideOntimizeWeb } from 'ontimize-web-ngx';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { CONFIG } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideOntimizeWeb(CONFIG),
    provideRouter(routes),
  ]
});
```

> `provideOntimizeWeb(config)` includes `provideHttpClient`, `provideAnimations`, `TranslateModule`, all Ontimize services, and the `APP_INITIALIZER`. You do **not** need to add them separately.

**`app.component.ts`:**
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />'
})
export class AppComponent {}
```

**`app.routes.ts`:**
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', loadChildren: () => import('./app/main/main.module').then(m => m.MainModule) },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];
```

## Option B — NgModule bootstrap (backward compatible)

If you prefer to keep the `AppModule` structure, `OntimizeWebModule` continues to work:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { APP_CONFIG, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';
import { CONFIG } from './app.config';

@NgModule({
  imports: [
    OntimizeWebModule.forRoot(CONFIG),
    OntimizeWebModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

{: .warning }
> `OntimizeWebModule` and all wrapper modules (`OFormModule`, `OTableModule`, …) are marked as **`@deprecated`** in version 18. They will continue to work but will be removed in a future version. Prefer the standalone approach.

## Add the OntimizeWeb theme

Import the Ontimize theme in your `styles.scss`:

```scss
@use 'ontimize-web-ngx/theming/themes/ontimize-blue' as theme;
@use 'ontimize-web-ngx/theming/ontimize-style' as ontimize-style;

@include ontimize-style.ontimize-theme-styles(theme.$theme);

.o-dark {
  @include ontimize-style.ontimize-theme-all-component-color(theme.$dark-theme);
}
```

Add it to your `angular.json` styles array:

```json
"styles": [
  "src/styles.scss"
]
```

More information about theming [here]({{ base_path }}/customize/theming/).

## Add Material Symbols font

Add the following link to your `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,GRAD,FILL@20..48,100..700,-50..200,0..1"
      rel="stylesheet">
```
