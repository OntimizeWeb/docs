---
title: "Creating a detail form"
layout: default
permalink: /tutorial-web/exercise3/
nav_order: 3
# has_children: false
# has_toc: false
# nav_exclude: true
# grand_parent: Title grand_parent
parent: Tutorial OWeb
---

{% include base_path %}
{% include toc %}

# Crear un formulario de detalle
## Introducción
En este tutorial se creará un nuevo componente (el formulario de detalle de un cliente) para poder visualizar los 
detalles de dicho cliente al hacer clic sobre el registro de la tabla correspondiente.

## Crear el formulario de detalle
### Mostrar, editar y borrar

Para crear el formulario de detalle, lo crearemos dentro del módulo de **customers**. Para ello, nos situamos en la 
terminal dentro del módulo de **customers** (a la altura del componente **customers-home**) y ejecutamos el comando de
creación de componentes de Angular CLI:

```
npx ng g component --skip-tests customers-detail
```

(Más información acerca del comando [aquí](https://angular.io/cli/generate#component-command){:target="_blank"}). Al 
terminar, tendremos una carpeta llamada customers-detail, que contendrá los archivos relacionados con el componente.

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
        <img src="{{ base_path }}/assets/images/tutorial_o_web_11.png"/>
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
            customers-detail
            <ul>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.css</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.html</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.ts</li>
            </ul>
            </li>
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

Modificamos el fichero **customers.module.ts**, añadiéndole el import del nuevo componente, y situándolo en el array de
declaraciones. A su vez, establecemos la nueva ruta en el fichero **customers-routing.module.ts**. Para conocer la ruta
que el componente tabla indicará para el detalle de cada uno de sus registros, tenemos que comprobar cual es el 
parámetro ```key``` de la tabla para la cual queremos obtener el detalle (en este caso, tenemos que ver el parámetro 
```key``` de la tabla del fichero **customers-home.component.html**). Esto es así debido a que cuando naveguemos en la
tabla, al abrir un registro, concatenará el valor de la columna definida en el atributo ```key``` a la URL. Para definir
ese comportamiento en el módulo de enrutamiento, precedemos el nombre de la columna por el símbolo de los dos puntos 
```:```.

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
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';


@NgModule({
  declarations: [
    CustomersHomeComponent,
    CustomersDetailComponent
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
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';

const routes: Routes = [{
  path: '',
  component: CustomersHomeComponent
},
{
  path: ':CUSTOMERID',
  component: CustomersDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
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
            customers-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.ts</li>
            </ul>
            </li>
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

Si hacemos clic en el registro de una tabla, se cargará el formulario del fichero **customers-detail.component.html**. A
continuación modificaremos el contenido del fichero para conseguir un formulario similar al siguiente mockup.

![tutorial_o_web_12.png]({{ base_path }}/assets/images/tutorial_o_web_12.png)

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
<p>Lo primero es establecer el layout de pestañas, para que cada nuevo registro que se consulte se añada a una pestaña 
nueva. Para ello, en el componente <strong>customers-home.component.html</strong> añadimos un 
<a href="{{ base_path }}/components/formlayoutmanager/overview" target="_blank">o-form-layout-manager</a></p>
{{"**customers-home.component.html**" | markdownify }}
{% highlight xml %}
<o-form-layout-manager attr="customersHome" title="{{'CUSTOMERS' | oTranslate }}" separator=" " mode="tab" label-columns="NAME;SURNAME">
    <o-table attr="customersTable" service="customers" entity="customer" keys="CUSTOMERID"
        columns="CUSTOMERID;ID;PHOTO;NAME;SURNAME;STARTDATE;EMAIL"
        visible-columns="ID;PHOTO;NAME;SURNAME;STARTDATE;EMAIL" query-rows="20">
        <o-table-column attr="PHOTO" title="PHOTO" orderable="no" searchable="no" type="image" avatar="yes"
            empty-image="assets/images/no-image.png" image-type="base64"></o-table-column>
        <o-table-column attr="STARTDATE" title="STARTDATE" type="date" format="LL"></o-table-column>
        <o-table-column attr="ID" title="ID" width="100px"></o-table-column>
    </o-table>
</o-form-layout-manager>
{% endhighlight %}
<table>
    <thead>
        <tr>
            <th colspan="3">o-form-layout-manager (atributos de <a
                    href="{{ base_path }}/components/formlayoutmanager/api">o-form-layout-manager</a>)</th>
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
            <td>customersHome</td>
            <td>Establece un identificador al layout manager</td>
        </tr>
        <tr>
            <td>title</td>
            <td>{% raw %}{{'CUSTOMERS' | oTranslate }}{% endraw %}</td>
            <td>Establece el título que tendrá la pestaña principal. En este caso se usa la interpolación de Angular, 
que intenta evaluar la cadena "<strong>CUSTOMERS</strong>" a traves del pipe "<strong>| oTranslate</strong>", que 
devuelve la cadena que se le pasa como entrada traducida al idioma en el que esté definida la aplicación.</td>
        </tr>
        <tr>
            <td>separator</td>
            <td>""</td>
            <td>Separador que se usará entre las columnas en los títulos de las pestañas</td>
        </tr>
        <tr>
            <td>mode</td>
            <td>tab</td>
            <td>Modo en el que funcionará el <em>o-form-layout-manager</em>. En este caso, en modo pestañas</td>
        </tr>
        <tr>
            <td>label-columns</td>
            <td>NAME;SURNAME</td>
            <td>Columnas que usará para el título de cada una de las pestañas. Estas estarán separadas por la cadena 
definida en el atributo <strong>separator</strong></td>
        </tr>
    </tbody>
</table>
{{"Ahora, en el fichero **customers-detail.component.html**, construiremos el formulario de detalle" | markdownify }}
{{"**customers-detail.component.html**" | markdownify }}
{% highlight xml %}
<o-form attr="customerDetail" service="customers" entity="customer" keys="CUSTOMERID" header-actions="R;I;U;D"
    show-header-navigation="no">
    <o-text-input attr="CUSTOMERID" sql-type="INTEGER" enabled="no"></o-text-input>
    <div fxLayout="row">
        <div>
            <o-image id="CUSTOMER_PHOTO" attr="PHOTO" empty-image="assets/images/no-image.png"
                sql-type="OTHER"></o-image>
        </div>
        <o-column fxFlex title="CUSTOMER_PERSONAL_INFORMATION">
            <div fxLayout="row" fxLayoutGap="8px">
                <o-text-input fxFlex="40" attr="NAME" required="yes"></o-text-input>
                <o-text-input fxFlex="40" attr="SURNAME" required="yes"></o-text-input>
                <o-date-input fxFlex="20" attr="STARTDATE"></o-date-input>
            </div>
            <div fxLayout="row" fxLayoutGap="8px">
                <o-nif-input fxFlex="40" attr="ID" required="yes"></o-nif-input>
                <o-integer-input fxFlex="40" attr="PHONE" step="0" thousand-separator=" "></o-integer-input>
                <o-combo fxFlex="20" attr="CUSTOMERTYPEID" service="customers" entity="customerType"
                    keys="CUSTOMERTYPEID" columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION"
                    value-column="CUSTOMERTYPEID"></o-combo>
            </div>
            <o-email-input attr="EMAIL"></o-email-input>
            <o-text-input attr="ADDRESS"></o-text-input>
            <div fxLayout="row" fxLayoutGap="8px">
                <o-real-input fxFlex="50" attr="LONGITUDE" decimal-separator="," max-decimal-digits="10"
                    min-decimal-digits="0"></o-real-input>
                <o-real-input fxFlex="50" attr="LATITUDE" decimal-separator="," max-decimal-digits="10"
                    min-decimal-digits="0"></o-real-input>
            </div>
            <o-textarea-input attr="COMMENTS"></o-textarea-input>
        </o-column>
    </div>
</o-form>
{% endhighlight %}
<table>
    <thead>
        <tr>
            <th colspan="3">o-form (atributos de <a href="{{ base_path }}/components/form/api">o-form</a>)</th>
        </tr>
        <tr>
            <th>Atributo</th>
            <th>Valor</th>
            <th>Significado</th>
        </tr>
    </thead>
    <tbody>
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
            <td>Claves de la entidad, separadas por <code>;</code></td>
        </tr>
        <tr>
            <td>header-actions</td>
            <td>R;I;U;D</td>
            <td>Botones de acción disponibles en la botonera para las operaciones CRUD estándar, separadas por 
<code>;</code>. Las operaciones disponibles son <strong>R</strong>(Refrescar), <strong>I</strong> (Insertar), 
<strong>U</strong> (Actualizar), <strong>D</strong> (Borrar)</td>
        </tr>
        <tr>
            <td>show-header-navigation</td>
            <td>no</td>
            <td>Incluye botones de navegación en la botonera. No se incluyen cuando se encuentra en modo pestaña 
(definido por el componente <em>o-form-layout-manager</em>)</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">o-text-input (atributos de 
<a href="{{ base_path }}/components/input/text/api">o-text-input</a>)</th>
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
            <td>CUSTOMERID</td>
            <td>Identificador del campo</td>
        </tr>
        <tr>
            <td>sql-type</td>
            <td>INTEGER</td>
            <td>Indica el tipo de dato que contiene este campo. Se debe especificar la cadena del tipo de dato de esta 
lista</td>
        </tr>
        <tr>
            <td>enabled</td>
            <td>no</td>
            <td>Indica si el campo está habilitado o no</td>
        </tr>
        <tr>
            <td>required</td>
            <td>yes/no</td>
            <td>Indica si se requiere que este campo contenga valor</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">Directivas de maquetación <a href="https://material.angularjs.org/latest/layout" 
target="_blank">Angular Layout</a> - <a href="https://tburleson-layouts-demos.firebaseapp.com" 
target="_blank">Demo interactiva</a></th>
        </tr>
        <tr>
            <th>Atributo</th>
            <th>Valor</th>
            <th>Significado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>fxLayout</td>
            <td>row</td>
            <td>Los componentes internos se colocan en forma de fila</td>
        </tr>
        <tr>
            <td>fxFlex</td>
            <td>50/40/20</td>
            <td>Ocupa el 50 / 40 / 20 % del ancho disponible del contenedor padre. Si no tiene valor, trata de ocupar todo
el esté disponible</td>
        </tr>
        <tr>
            <td>fxLayoutGap</td>
            <td>8px</td>
            <td>Mantiene una separación de 8px entre los elementos de este contenedor</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">o-row y o-column (atributos de 
<a href="{{ base_path }}/components/containers/api">containers</a>)</th>
        </tr>
        <tr>
            <th>Atributo</th>
            <th>Valor</th>
            <th>Significado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>title</td>
            <td>CUSTOMER_PERSONAL_INFORMATION</td>
            <td>Etiqueta de la columna de título</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">o-image (atributos de <a href="{{ base_path }}/components/image/api">o-image</a>)</th>
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
            <td>PHOTO</td>
            <td>Identificador del campo</td>
        </tr>
        <tr>
            <td>empty-image</td>
            <td>assets/images/no-image.png</td>
            <td>Imagen mostrada cuando el componente no tiene valor.</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">o-date-input (atributos de 
<a href="{{ base_path }}/components/input/date/api">o-date-input</a>)</th>
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
            <td>STARTDATE</td>
            <td>Identificador del campo</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">o-nif-input (atributos de 
<a href="{{ base_path }}/components/input/nif/api">o-nif-input</a>)</th>
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
            <td>STARTDATE</td>
            <td>Identificador del campo</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">o-integer-input (atributos de <a
                    href="{{ base_path }}/components/input/integer/api">o-integer-input</a>)</th>
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
            <td>PHONE</td>
            <td>Identificador del campo</td>
        </tr>
        <tr>
            <td>step</td>
            <td>1</td>
            <td>Número de incremento en los botones del campo</td>
        </tr>
        <tr>
            <td>grouping</td>
            <td>no</td>
            <td>Indica si se debe agrupar el número con los separadores de millar.</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">o-combo (atributos de <a href="{{ base_path }}/components/input/combo/api">o-combo</a>)</th>
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
            <td>CUSTOMERTYPEID</td>
            <td>Identificador del campo</td>
        </tr>
        <tr>
            <td>service</td>
            <td>customers</td>
            <td>Ruta del servicio REST</td>
        </tr>
        <tr>
            <td>entity</td>
            <td>customerType</td>
            <td>Entidad del servicio</td>
        </tr>
        <tr>
            <td>keys</td>
            <td>CUSTOMERTYPEID</td>
            <td>Clave primaria de la entidad</td>
        </tr>
        <tr>
            <td>columns</td>
            <td>CUSTOMERTYPEID;DESCRIPTION</td>
            <td>Columnas de la entidad que se consulta</td>
        </tr>
        <tr>
            <td>visible-columns</td>
            <td>DESCRIPTION</td>
            <td>Columnas visibles</td>
        </tr>
        <tr>
            <td>value-column</td>
            <td>CUSTOMERTYPEID</td>
            <td>Columna de la entidad de las que el componente obtiene el valor</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">o-email-input (atributos de 
<a href="{{ base_path }}/components/input/email/api">o-email-input</a>)</th>
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
            <td>EMAIL</td>
            <td>Identificador del campo</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">o-real-input (atributos de <a
                    href="{{ base_path }}/components/input/real/api">o-real-input</a>)</th>
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
            <td>LONGITUDE</td>
            <td>Identificador de campo</td>
        </tr>
        <tr>
            <td>decimal-separator</td>
            <td>,</td>
            <td>Separador decimal</td>
        </tr>
        <tr>
            <td>max-decimal-digits</td>
            <td>10</td>
            <td>Máximos dígitos decimales</td>
        </tr>
        <tr>
            <td>min-decimal-digits</td>
            <td>0</td>
            <td>Mínimos dígitos decimales</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th colspan="3">o-textarea-input (atributos de <a
                    href="{{ base_path }}/components/input/textarea/api">o-textarea-input</a>)</th>
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
            <td>COMMENTS</td>
            <td>Identificador de campo</td>
        </tr>
    </tbody>
</table>
{{"A continuación, se  incluyen las nuevas traducciones para el formulario de detalle." | markdownify }}
{{"**en.json**" | markdownify }}
{% highlight json %}
{
  ...
  "CUSTOMER_PERSONAL_INFORMATION": "Personal Information",
  "CUSTOMERID": "Customer Id.",
  "PHONE": "Phone",
  "CUSTOMERTYPEID": "Customer type",
  "ADDRESS": "Address",
  "LONGITUDE": "Longitude",
  "LATITUDE": "Latitude",
  "COMMENTS": "Comments"
}
{% endhighlight %}
{{"**es.json**" | markdownify }}
{% highlight json %}
{
  ...
  "CUSTOMER_PERSONAL_INFORMATION": "Información personal",
  "CUSTOMERID": "Id. cliente",
  "PHONE": "Teléfono",
  "CUSTOMERTYPEID": "Tipo cliente",
  "ADDRESS": "Dirección",
  "LONGITUDE": "Longitud",
  "LATITUDE": "Latitud",
  "COMMENTS": "Comentarios"
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
            customers-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.css</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.ts</li>
            </ul>
            </li>
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
Este será el aspecto final del formulario:

![tutorial_o_web_13.png]({{ base_path }}/assets/images/tutorial_o_web_13.png)

## Insertar
Para insertar un nuevo registro, hay que indicar en el módulo de rutas cual es el componente que se usará para mostrar 
el formulario. Se puede usar un componente existente, o se puede crear uno nuevo específico. En este ejemplo crearemos 
un nuevo componente, donde usaremos un formulario prácticamente idéntico al del detalle. Volveremos a crear un nuevo 
componente mediante la línea de comando:

{% highlight console %}
npx ng g component --skip-tests customers-new
{% endhighlight %}

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
        <img src="{{ base_path }}/assets/images/tutorial_o_web_14.png">
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
            customers-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-new
            <ul>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.css</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.html</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.ts</li>
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

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
{{"En este componente, se creará un formulario idéntico al de detalle, excepto por que desaparece el campo del <strong>Id. de cliente</strong>" | markdownify }}

{{"**customers-new.component.html**" | markdownify }}
{% highlight xml %}
<o-form attr="customerDetail" service="customers" entity="customer" keys="CUSTOMERID" header-actions="R;I;U;D"
    show-header-navigation="no">
    <div fxLayout="row">
        <div>
            <o-image id="CUSTOMER_PHOTO" attr="PHOTO" empty-image="assets/images/no-image.png"
                sql-type="OTHER"></o-image>
        </div>
        <o-column fxFlex title="CUSTOMER_PERSONAL_INFORMATION">
            <div fxLayout="row" fxLayoutGap="8px">
                <o-text-input fxFlex="40" attr="NAME" required="yes"></o-text-input>
                <o-text-input fxFlex="40" attr="SURNAME" required="yes"></o-text-input>
                <o-date-input fxFlex="20" attr="STARTDATE"></o-date-input>
            </div>
            <div fxLayout="row" fxLayoutGap="8px">
                <o-nif-input fxFlex="40" attr="ID" required="yes"></o-nif-input>
                <o-integer-input fxFlex="40" attr="PHONE" step="0" thousand-separator=" "></o-integer-input>
                <o-combo fxFlex="20" attr="CUSTOMERTYPEID" service="customers" entity="customerType"
                    keys="CUSTOMERTYPEID" columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION"
                    value-column="CUSTOMERTYPEID"></o-combo>
            </div>
            <o-email-input attr="EMAIL"></o-email-input>
            <o-text-input attr="ADDRESS"></o-text-input>
            <div fxLayout="row" fxLayoutGap="8px">
                <o-real-input fxFlex="50" attr="LONGITUDE" decimal-separator="," max-decimal-digits="10"
                    min-decimal-digits="0"></o-real-input>
                <o-real-input fxFlex="50" attr="LATITUDE" decimal-separator="," max-decimal-digits="10"
                    min-decimal-digits="0"></o-real-input>
            </div>
            <o-textarea-input attr="COMMENTS"></o-textarea-input>
        </o-column>
    </div>
</o-form>
{% endhighlight %}

{{"Declaramos cuál es el nuevo módulo, y la ruta para el que se usará este nuevo componente" | markdownify }}

{{"**customers.module.ts**" | markdownify }}
{% highlight typescript %}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersNewComponent } from './customers-new/customers-new.component';


@NgModule({
  declarations: [
    CustomersHomeComponent,
    CustomersDetailComponent,
    CustomersNewComponent
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
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersNewComponent } from './customers-new/customers-new.component';

const routes: Routes = [{
  path: '',
  component: CustomersHomeComponent
},
{
  path: "new",
  component: CustomersNewComponent
},
{
  path: ':CUSTOMERID',
  component: CustomersDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
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
            customers-detail
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-new
            <ul>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.css</li>
              <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.html</li>
              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.ts</li>
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

[<span style="display: flex; align-items: center;"><span class="material-symbols-outlined">arrow_back</span> Tutorial anterior</span>]({{ base_path }}/tutorial-web/exercise2){: .btn}
[<span style="display: flex; align-items: center;">Próximo tutorial <span class="material-symbols-outlined">arrow_forward</span></span>]({{ base_path }}/tutorial-web/exercise4){: .btn}