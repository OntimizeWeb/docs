---
title: "Custom theme"
layout: default
permalink: /tutorial/exercise19/
nav_order: 19
# has_children: false
# has_toc: false
# nav_exclude: true
# grand_parent: Title grand_parent
parent: Tutorial
---

{% include base_path %}
{% include toc %}

# Tema personalizado
## Introducción
En este tutorial modificaremos la apariencia por defecto de nuestra aplicación, sustituyendo la paleta de colores por
defecto por una personalizada.

## Usar una plantilla para crear un tema
En [esta página]({{ base_path }}/customize/theming/){:target="_blank"} podemos encontrar un fichero por defecto que nos
ayudará a establecer nuestro tema predeterminado.

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>
        <p>Creamos el fichero y modificamos los colores como nos guste. Para generar la paleta M3 a partir de un color
 corporativo podemos apoyarnos en el asistente de Angular Material (<code>ng generate @angular/material:m3-theme</code>)
 o en la herramienta <a href="https://material-foundation.github.io/material-theme-builder/" target="_blank">Material Theme Builder</a>.</p>

{{"**custom-theme.css**" | markdownify }}
{% highlight scss %}
@use '@angular/material' as mat;
@use 'node_modules/ontimize-web-ngx/theming/ontimize-style.scss' as ontimize-style;

// Custom M3 palette generated with `ng generate @angular/material:m3-theme`
// from the seed colour #e69138 (see https://material-foundation.github.io/material-theme-builder/)
$mat-custom-primary: (
  0:   #000000,
  10:  #341100,
  20:  #542300,
  25:  #642c00,
  30:  #753600,
  35:  #864000,
  40:  #984b00,
  50:  #bb6100,
  60:  #de7900,
  70:  #ff9331,
  80:  #ffb87a,
  90:  #ffdcbd,
  95:  #ffeee0,
  98:  #fff8f4,
  99:  #fffbff,
  100: #ffffff,
);

/* Light theme */
$theme: ontimize-style.o-mat-light-theme((
  primary: $mat-custom-primary,
  tertiary: $mat-custom-primary
));

/* Dark theme */
$dark-theme: ontimize-style.o-mat-dark-theme((
  primary: $mat-custom-primary,
  tertiary: $mat-custom-primary
));
{% endhighlight %}

<p>Luego para aplicar nuestro tema, modificaremos en tema en el fichero <strong>app.scss</strong>, para que use el
fichero <strong>custom-theme.scss</strong> en vez de <em>ontimize-web-ngx/theming/themes/ontimize.scss</em></p>

{{"**app.scss**" | markdownify }}
{% highlight scss %}
// Define your custom theme or choose predefined theme
// @use 'ontimize-web-ngx/theming/themes/ontimize.scss'as theme;
@use './custom-theme.scss' as theme;
@use 'ontimize-web-ngx/theming/ontimize-style.scss';
@use '../../app/login/login.theme.scss'as login;

// Include ontimize styles
@include ontimize-style.ontimize-theme-styles(theme.$theme);

// Propagate theme to screen styles definition.
@include login.login-theme(theme.$theme);


//Include dark styles option
.o-dark {
  @include ontimize-style.ontimize-theme-all-component-color(theme.$dark-theme);
}
{% endhighlight %}
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  ontimize-web-tutorial
  <ul>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          accounts
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-detail
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              movement-column-renderer
              <ul>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.css</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.html</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-home
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              account-number-render
              <ul>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.css</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.html</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-new
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            add-customer
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            add-movement
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts.routes.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          branches
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-detail
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-home
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-new
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-routing.module.ts</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-detail
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              add-account
              <ul>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-account.component.css</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-account.component.html</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-account.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              customertype-column-renderer
              <ul>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.css</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.html</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-new
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.routes.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          employees
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            employees-detail
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            employees-home
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-routing.module.ts</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          service-ex
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            service-ex-details
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            service-ex-home
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-routing.module.ts</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          account-card
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.css</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          branch-card
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.css</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customer-card
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.css</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          employee-card
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.css</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          service-ex-card
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.css</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>star-wars-response-adapter.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>star-wars.service.ts</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>custom-theme.scss</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>normal_24.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>other_24.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>vip_24.png</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

## Modo oscuro

Este modo lo podemos activar, modificando en el fichero **custom-theme.scss** la variable ```$theme``` que carga el modo claro
para forzar su carga por defecto.

<div class="multicolumn">
    <div class="multicolumnleft">
        <button class="unstyle toggle-tree-btn">
            <span class="material-symbols-outlined">right_panel_open</span>
        </button>

{{"**custom-theme.scss**" | markdownify }}
{% highlight scss %}
@use '@angular/material' as mat;
@use 'node_modules/ontimize-web-ngx/theming/ontimize-style.scss' as ontimize-style;

// Custom M3 palette generated with `ng generate @angular/material:m3-theme`
// from the seed colour #e69138 (see https://material-foundation.github.io/material-theme-builder/)
$mat-custom-primary: (
  0:   #000000,
  10:  #341100,
  20:  #542300,
  25:  #642c00,
  30:  #753600,
  35:  #864000,
  40:  #984b00,
  50:  #bb6100,
  60:  #de7900,
  70:  #ff9331,
  80:  #ffb87a,
  90:  #ffdcbd,
  95:  #ffeee0,
  98:  #fff8f4,
  99:  #fffbff,
  100: #ffffff,
);

/* Light theme */
// $theme: ontimize-style.o-mat-light-theme((primary: $mat-custom-primary, tertiary: $mat-custom-primary));
$theme: ontimize-style.o-mat-dark-theme((
  primary: $mat-custom-primary,
  tertiary: $mat-custom-primary
));

/* Dark theme */
$dark-theme: ontimize-style.o-mat-dark-theme((
  primary: $mat-custom-primary,
  tertiary: $mat-custom-primary
));
{% endhighlight %}
    </div>
    <div class="multicolumnright jstreeloader collapsed">
<ul>
  <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
  ontimize-web-tutorial
  <ul>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    e2e
    <ul>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      src
      <ul>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.e2e-spec.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.po.ts</li>
      </ul>
      </li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>protractor.conf.js</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    </ul>
    </li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
    src
    <ul>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      app
      <ul>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        login
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login-routing.module.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.html</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.scss</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.component.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.module.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login.theme.scss</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        main
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          accounts
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-detail
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              movement-column-renderer
              <ul>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.css</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.html</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>movement-column-renderer.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-home
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              account-number-render
              <ul>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.css</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.html</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-number-render.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            accounts-new
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            add-customer
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-customer.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            add-movement
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-movement.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>accounts.routes.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          branches
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-detail
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-home
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            branches-new
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches-routing.module.ts</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branches.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customers
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-detail
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              add-account
              <ul>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-account.component.css</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-account.component.html</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>add-account.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-home
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
              customertype-column-renderer
              <ul>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.css</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.html</li>
                <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customertype-column-renderer.component.ts</li>
              </ul>
              </li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            customers-new
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers-new.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customers.routes.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          employees
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            employees-detail
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-detail.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            employees-home
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees-routing.module.ts</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employees.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          home
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home-routing.module.ts</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.scss</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.component.ts</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>home.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          service-ex
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            service-ex-details
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-details.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
            service-ex-home
            <ul>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.css</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.html</li>
              <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-home.component.ts</li>
            </ul>
            </li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-routing.module.ts</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex.module.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main-routing.module.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.html</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.scss</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.component.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.module.ts</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        shared
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          account-card
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.css</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>account-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          branch-card
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.css</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>branch-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          customer-card
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.css</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>customer-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          employee-card
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.css</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>employee-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
          service-ex-card
          <ul>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.css</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.html</li>
            <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>service-ex-card.component.ts</li>
          </ul>
          </li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.menu.config.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.services.config.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>shared.module.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>star-wars-response-adapter.ts</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>star-wars.service.ts</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app-routing.module.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.html</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.scss</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.spec.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.component.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.config.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.module.ts</li>
      </ul>
      </li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      assets
      <ul>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        css
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>app.scss</li>
          <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>custom-theme.scss</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>loader.css</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        i18n
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>en.json</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>es.json</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        icons
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize128.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize16.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize256.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize32.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize48.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize64.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize72.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize96.png</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        images
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>login_bg.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>no-image.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>normal_24.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ontimize_web_log.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>other_24.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-closed.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>sidenav-opened.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>user_profile.png</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>vip_24.png</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
        js
        <ul>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>domchange.js</li>
          <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>keyboard.js</li>
        </ul>
        </li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitkeep</li>
      </ul>
      </li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
      environments
      <ul>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.prod.ts</li>
        <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>environment.ts</li>
      </ul>
      </li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>favicon.ico</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>index.html</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>main.ts</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>manifest.webmanifest</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>polyfills.ts</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>styles.scss</li>
      <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>test.ts</li>
    </ul>
    </li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.browserslistrc</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.editorconfig</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.eslintrc.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>.gitignore</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>angular.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>karma.conf.js</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ngsw-config.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package-lock.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>package.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>README.md</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.app.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.json</li>
    <li data-jstree='{"disabled":true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>tsconfig.spec.json</li>
  </ul>
  </li>
</ul>
    </div>
</div>

{: .note-title}
> Nota
>
> Los estilos personalizados de este tutorial no se adecuan totalmente al modo oscuro, por lo que no tendremos esta
> opción activa.

[<span style="display: flex; align-items: center;"><span class="material-symbols-outlined">arrow_back</span> Tutorial anterior</span>]({{ base_path }}/tutorial/exercise18){: .btn }
[<span style="display: flex; align-items: center;">Próximo tutorial <span class="material-symbols-outlined">arrow_forward</span></span>]({{ base_path }}/tutorial/exercise20){: .btn }