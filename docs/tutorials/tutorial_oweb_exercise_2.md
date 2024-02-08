---
title: "Creating the customers module"
layout: default
permalink: /tutorial-web/exercise2/
nav_order: 2
# has_children: false
# has_toc: false
# nav_exclude: true
# grand_parent: Title grand_parent
parent: Tutorial OWeb
---

{% include base_path %}
{% include toc %}

# Crear el módulo de clientes
## Introducción
En este tutorial se creará el módulo de clientes, que permitirá tener un listado en una tabla con todos los clientes que
contiene la aplicación. Desde esta tabla, podremos acceder al detalle del cliente específico para consultarlo y/o 
editarlo.

## Diferencias entre componentes y módulos
Un **componente** es el componente básico de construcción de una aplicación en Angular. De manera simplificada, y 
haciendo una similitud con el cliente rico de escritorio, un componente constaría de un formulario (en este caso, la 
plantilla HTML y la hoja de estilos CSS) y un gestor de interacción (en este caso, el fichero TypeScript). Un **módulo**
actúa como un **contenedor** de uno o más **componentes** / **módulos**, que contiene un fichero de declaración del 
**módulo** (*_.module.ts_) y un fichero de declaración de los otros **componentes** / **módulos** que se cargan 
(siguiendo la estrategia del _lazy-loading_, se cargarán **módulos**) desde dicho módulo.

## Crear el módulo de clientes
Procedemos a crear el módulo de clientes dentro del módulo **main**, a la misma altura del módulo **home**. Nos 
desplazamos desde la consola a la ruta ```src/app/main/``` y ubicados dentro del módulo **main**, ejecutamos el comando 
```
    npx ng g module --routing customers
```
El uso del comando ```npx``` es para usar la versión de _angular/cli_ que está instalada en la carpeta _node_modules_ de
la aplicación (Más información acerca del comando 
[aquí](https://angular.io/cli/generate#module-command){:target="_blank"})

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
        <img src="{{ base_path }}/assets/images/tutorial_o_web_5.png">
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  bankmanager-web
  <ul>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-routing.module.ts</li>
            <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

Este comando nos creará el módulo de clientes y su fichero de enrutamiento asociado. Como dentro del módulo de clientes,
usaremos componentes de Ontimize Web, es necesario añadirle al fichero la importación del módulo de Ontimize Web y 
declararlo como módulo importado.

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
{{"**customers.module.ts**" | markdownify }}
{% highlight typescript %}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
{% endhighlight %}
{{"A continuación, necesitaremos relacionar este nuevo módulo de clientes con el resto de los módulos de la aplicación.
Al situarlo dentro del módulo **main**, y a la misma altura que **home**, modificaremos el fichero de enrutamiento del
módulo **main** (_main-routing.module.ts_) y añadiremos la ruta al nuevo módulo de clientes. Se empleará de esta manera,
el enrutado _lazy-loading_." | markdownify }}
{{"**main-routing.module.ts**" | markdownify }}
{% highlight typescript %}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
{% endhighlight %}
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  bankmanager-web
  <ul>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-routing.module.ts</li>
            <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

En este momento, el módulo **customers** ya se encuentra relacionado con el módulo **main**, indicando que cuando 
estemos dentro del módulo **main** y naveguemos a la ruta **_/customers_**, cargaremos el módulo **customers**. Falta 
por incorporar un componente al módulo **customers** para mostrar una pantalla que definiremos en el enrutamiento de 
dicho módulo.

## Crear el componente base de clientes
Para crear el componente base de clientes, nos ubicamos dentro de la carpeta **customers**, y ejecutamos el siguiente 
comando:
```bash
npx ng g component --skip-tests customers-home
``` 
(Más información acerca del comando [aquí](https://angular.io/cli/generate#component-command){:target="_blank"}). Se 
creará una carpeta, llamada **customers-home**, que contendrá los ficheros relacionados con el componente.

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
        <img src="{{ base_path }}/assets/images/tutorial_o_web_6.png">        
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  bankmanager-web
  <ul>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

Para poder mostrar la visualización del componente dentro del módulo de clientes, es necesario añadirlo como declaración
al módulo de **customers** (que se modifica con el comando de generación de componentes de manera automática) y añadir una
nueva ruta al fichero de enrutamiento de **customers** que se corresponderá con el componente.

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
{{"**customers.module.ts**" | markdownify }}
{% highlight typescript %}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersHomeComponent } from './customers-home/customers-home.component';


@NgModule({
  declarations: [
    CustomersHomeComponent
  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
{% endhighlight %}
{{"**customers-routing.module.ts**" | markdownify }}
{% highlight typescript %}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersHomeComponent } from './customers-home/customers-home.component';

const routes: Routes = [{
  path: '',
  component: CustomersHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
{% endhighlight %}
{{"En este momento, la única manera de comprobar si es posible acceder al componente **customers-home** (visualizando
su contenido, definido en el fichero **customers-home.component.html**) es acceder directamente a la dirección 
URL:" | markdownify }}

<a href="http://localhost:4200/main/customers" target="_blank">http://localhost:4200/main/customers</a>

{{"Si queremos usar el menú lateral, debemos modificar el fichero 
**app.menu.config.ts**, ubicado dentro de la carpeta shared, para añadir la nueva entrada del menú 
lateral." | markdownify }}

{% highlight typescript %}
import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'customers', name: 'CUSTOMERS', icon: 'people', route: '/main/customers' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
{% endhighlight %}

    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  bankmanager-web
  <ul>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-routing.module.ts</li>
            <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

Una vez añadido, podremos navegar mediante las entradas del menú lateral.

![tutorial_o_web_7.png]({{ base_path }}/assets/images/tutorial_o_web_7.png)

Sin embargo, la entrada del menú aparece sin traducir. Para establecer la traducción adecuada según el idioma de nuestra
aplicación, debemos añadir la entrada a los ficheros de traducción, que se encuentran en **/assets/i18n**.

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
{{"**en.json**" | markdownify }}
{% highlight json %}
{
  "APP_TITLE": "Quickstart",
  "VERSION": "Version",
  "EXAMPLE_LOGIN_INFO": "Use this user and password for login",
  "USERNAME": "Username",
  "PASSWORD": "Password",
  "LOGIN": "Login",
  "LOGOUT": "Logout",
  "VIEW": "Views",
  "HOME": "Home",
  "LOGIN_TITLE": "Log in to your account",
  "ERROR_REQUIRED_FIELD": "Field is required",
  "ERROR_MIN_LENGTH_REQUIRED": "The value length entered must be at least 8 characters.",
  "ERROR_SESSION_EXPIRED": "Session expired",
  "ERROR_USER_REQUIRED": "Incorrect username",
  "ERROR_PASS_REQUIRED": "Incorrect password",
  "ERROR_USER_PASS_INCORRECT": "Invalid username or password",
  "REMEMBER_ME": "Remember me",
  "FORGOT_PWD": "Forgot your password?",
  "FOOTER_CREATED_BY": "Created by Imatia Innovation",
  "FOOTER_RIGHTS": "All rights reserved",
  "CUSTOMERS": "Customers"
}
{% endhighlight %}
{{"**es.json**" | markdownify }}
{% highlight json %}
{
  "APP_TITLE": "JEE seed",
  "VERSION": "Versión",
  "EXAMPLE_LOGIN_INFO": "Usuario y contraseña de ejemplo",
  "USERNAME": "Usuario",
  "PASSWORD": "Contraseña",
  "LOGIN": "Entrar",
  "LOGOUT": "Salir",
  "VIEW": "Vistas",
  "HOME": "Inicio",
  "LOGIN_TITLE": "Inicia sesión en tu cuenta",
  "ERROR_REQUIRED_FIELD": "El campo es requerido",
  "ERROR_MIN_LENGTH_REQUIRED": "El valor introducido tiene que tener una longitud mínima de 8 caracteres",
  "ERROR_SESSION_EXPIRED": "La sesión ha caducado",
  "ERROR_USER_REQUIRED": "Nombre de usuario incorrecto",
  "ERROR_PASS_REQUIRED": "Contraseña incorrecta",
  "ERROR_USER_PASS_INCORRECT": "Usuario o contraseña incorrecta",
  "REMEMBER_ME": "Recuérdame",
  "FORGOT_PWD": "¿Has olvidado tu contraseña?",
  "FOOTER_CREATED_BY": "Creado por Imatia Innovation",
  "FOOTER_RIGHTS": "Todos los derechos reservados",
  "CUSTOMERS": "Clientes"
}
{% endhighlight %}
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  bankmanager-web
  <ul>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

Una vez modificado, estará disponible el menú en los idiomas para los que se hayan añadido las entradas a los 
ficheros \***.json**.

Para poder realizar el cambio de idioma, necesitamos activar la opción que nos va a permitir cambiar de idioma, para 
ello actualizaremos la opción ```show-language-selector``` del fichero ```src/app/main/main.component.html``` para 
establecer el valor ```yes``` y así habilitar la opción del idioma.

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
{{"**main.component.html**" | markdownify }}
{% highlight xml %}
<o-app-layout show-language-selector="yes">
  <router-outlet></router-outlet>
</o-app-layout>
{% endhighlight %}
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  bankmanager-web
  <ul>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

Para cambiar el idioma lo haremos pinchando en el idioma que nos aparece en la parte superior derecha de la pantalla, 
se nos abrirá un desplegable y seleccionaremos el idioma que queramos establecer.

![tutorial_o_web_8.png]({{ base_path }}/assets/images/tutorial_o_web_8.png)

## Adaptar el componente
Modificaremos el componente **customers-home.component.html** para poder adaptarlo a una pantalla similar a la 
siguiente:

![tutorial_o_web_9.png]({{ base_path }}/assets/images/tutorial_o_web_9.png)

Para conseguir esta pantalla, pegaremos el siguiente código en el fichero **customers-home.component.html**

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
{{"**customers-home.component.html**" | markdownify }}
{% highlight xml %}
<o-table attr="customersTable" service="customers" entity="customer" keys="CUSTOMERID"
    columns="CUSTOMERID;ID;PHOTO;NAME;SURNAME;STARTDATE;EMAIL"
    visible-columns="ID;PHOTO;NAME;SURNAME;STARTDATE;EMAIL" query-rows="20">
    <o-table-column attr="PHOTO" title="PHOTO" orderable="no" searchable="no" type="image" avatar="yes"
        empty-image="assets/images/no-image.png" image-type="base64"></o-table-column>
    <o-table-column attr="STARTDATE" title="STARTDATE" type="date" format="LL"></o-table-column>
    <o-table-column attr="ID" title="ID" width="100px"></o-table-column>
</o-table>
{% endhighlight %}
<table>
    <thead>
        <tr>
            <th colspan="3">o-table (atributos de <a href="{{ base_path }}/components/table/api"
                    target="_blank">o-table</a>)</th>
        </tr>
        <tr>
            <th>Atributo</th>
            <th>Valor</th>
            <th>Significado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>attr</td>
            <td>customersTable</td>
            <td>Identificador del componente</td>
        </tr>
        <tr>
            <td>service</td>
            <td>customers</td>
            <td>Ruta del servicio REST</td>
        </tr>
        <tr>
            <td>entity</td>
            <td>customer</td>
            <td>Entidad del servicio</td>
        </tr>
        <tr>
            <td>keys</td>
            <td>CUSTOMERID</td>
            <td>Clave primaria de la entidad</td>
        </tr>
        <tr>
            <td>columns</td>
            <td>CUSTOMERID;CUSTOMERTYPEID;NAME;ADDRESS;STARTDATE;PHOTO;SURNAME;ID;PHONE;EMAIL</td>
            <td>Columnas de la entidad a consultar</td>
        </tr>
        <tr>
            <td>visible-columns</td>
            <td>ID;PHOTO;NAME;SURNAME;STARTDATE;EMAIL</td>
            <td>Columnas visibles</td>
        </tr>
        <tr>
            <td>query-rows</td>
            <td>20</td>
            <td>Número de registros mostrados inicialmente</td>
        </tr>
    </tbody>
</table>
{{"En los ```<o-table-column>```, se pueden establecer diferentes atributos para visualizar las columnas. En la tabla 
inferior solo se establecerán aquellos que se usan en este ejemplo." | markdownify }}

Más información en el <a href="{{ base_path }}/components/table/overview#define-columns">siguiente enlace</a>

<table>
    <thead>
        <tr>
            <th colspan="3">o-table-column (atributos de <a href="{{ base_path }}/components/table/api"
                    target="_blank">o-table-column</a>, <a
                    href="{{ base_path }}/components/table/overview#cell-renderers" target="_blank">visualizaciones de
                    las columnas</a>)</th>
        </tr>
        <tr>
            <th>Atributo</th>
            <th>Valor</th>
            <th>Significado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>attr</td>
            <td>PHOTO - STARTDATE - ID</td>
            <td>El nombre de la columna</td>
        </tr>
        <tr>
            <td>title</td>
            <td>PHOTO - STARTDATE - ID</td>
            <td>El título de la columna</td>
        </tr>
        <tr>
            <td>orderable</td>
            <td>no</td>
            <td>Indica si la columna puede ser ordenada</td>
        </tr>
        <tr>
            <td>searchable</td>
            <td>no</td>
            <td>Indica si se puede buscar el contenido de la columna</td>
        </tr>
        <tr>
            <td>type</td>
            <td>image - date</td>
            <td>El tipo de dato de la columna</td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>yes</td>
            <td>Indica si la imagen se usa como avatar</td>
        </tr>
        <tr>
            <td>empty-image</td>
            <td>assets/images/no-image.png</td>
            <td>Indica que imagen se mostrará si no existe una imagen</td>
        </tr>
        <tr>
            <td>image-type</td>
            <td>base64</td>
            <td>Tipo de codificación en el que se encuentra la imagen</td>
        </tr>
        <tr>
            <td>format</td>
            <td>LL</td>
            <td>El formato en el que se quiere representar la fecha</td>
        </tr>
        <tr>
            <td>width</td>
            <td>100px</td>
            <td>Ancho de la columna</td>
        </tr>
    </tbody>
</table>
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  bankmanager-web
  <ul>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

En este punto habría que configurar el servicio de clientes en el fichero **app.services.config.ts** como se hace más 
adelante con el servicio de empleados al [crear el componente base de empleados]({{ base_path }}/tutorial-web/exercise4)
, pero en esta seed que se está utilizando ya viene preconfigurado.

A mayores, añadiremos las traducciones que se han empleado en este formulario.

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
{{"**en.json**" | markdownify }}
{% highlight json %}
{
  "APP_TITLE": "Quickstart",
  "VERSION": "Version",
  "EXAMPLE_LOGIN_INFO": "Use this user and password for login",
  "USERNAME": "Username",
  "PASSWORD": "Password",
  "LOGIN": "Login",
  "LOGOUT": "Logout",
  "VIEW": "Views",
  "HOME": "Home",
  "LOGIN_TITLE": "Log in to your account",
  "ERROR_REQUIRED_FIELD": "Field is required",
  "ERROR_MIN_LENGTH_REQUIRED": "The value length entered must be at least 8 characters.",
  "ERROR_SESSION_EXPIRED": "Session expired",
  "ERROR_USER_REQUIRED": "Incorrect username",
  "ERROR_PASS_REQUIRED": "Incorrect password",
  "ERROR_USER_PASS_INCORRECT": "Invalid username or password",
  "REMEMBER_ME": "Remember me",
  "FORGOT_PWD": "Forgot your password?",
  "FOOTER_CREATED_BY": "Created by Imatia Innovation",
  "FOOTER_RIGHTS": "All rights reserved",
  "CUSTOMERS": "Customers",
  "ID": "Id.",
  "NAME": "Name",
  "SURNAME": "Surname",
  "STARTDATE": "Start date",
  "EMAIL": "Email",
  "PHOTO": "Photo"
}
{% endhighlight %}
{{"**es.json**" | markdownify }}
{% highlight json %}
{
  "APP_TITLE": "JEE seed",
  "VERSION": "Versión",
  "EXAMPLE_LOGIN_INFO": "Usuario y contraseña de ejemplo",
  "USERNAME": "Usuario",
  "PASSWORD": "Contraseña",
  "LOGIN": "Entrar",
  "LOGOUT": "Salir",
  "VIEW": "Vistas",
  "HOME": "Inicio",
  "LOGIN_TITLE": "Inicia sesión en tu cuenta",
  "ERROR_REQUIRED_FIELD": "El campo es requerido",
  "ERROR_MIN_LENGTH_REQUIRED": "El valor introducido tiene que tener una longitud mínima de 8 caracteres",
  "ERROR_SESSION_EXPIRED": "La sesión ha caducado",
  "ERROR_USER_REQUIRED": "Nombre de usuario incorrecto",
  "ERROR_PASS_REQUIRED": "Contraseña incorrecta",
  "ERROR_USER_PASS_INCORRECT": "Usuario o contraseña incorrecta",
  "REMEMBER_ME": "Recuérdame",
  "FORGOT_PWD": "¿Has olvidado tu contraseña?",
  "FOOTER_CREATED_BY": "Creado por Imatia Innovation",
  "FOOTER_RIGHTS": "Todos los derechos reservados",
  "CUSTOMERS": "Clientes",
  "ID": "Id.",
  "NAME": "Nombre",
  "SURNAME": "Apellido",
  "STARTDATE": "Fecha inicio",
  "EMAIL": "Correo",
  "PHOTO": "Fotografía"
}
{% endhighlight %}
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  bankmanager-web
  <ul>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

![tutorial_o_web_10.png]({{ base_path }}/assets/images/tutorial_o_web_10.png)

[<span style="display: flex; align-items: center;"><span class="material-symbols-outlined">arrow_back</span> Tutorial anterior</span>]({{ base_path }}/tutorial-web/exercise1){: .btn}
[<span style="display: flex; align-items: center;">Próximo tutorial <span class="material-symbols-outlined">arrow_forward</span></span>]({{ base_path }}/tutorial-web/exercise3){: .btn}