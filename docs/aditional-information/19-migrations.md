---
layout: default
title: "Migration guides"
permalink: /migration-8-to-15/
nav_exclude: true
---
{% include base_path %}
{% include toc %}

## **Proceso de Migración**

Para el proceso de migración, seguiremos la guía disponible en la siguiente URL: <https://update.angular.io/?l=3&v=8.2-15.0>. Asegúrate de marcar la opción de Angular Material si se está utilizando en el proyecto.

## **Antes de migrar:**

Asegúrese de crear una rama limpia del proyecto que desea migrar (sin commits por subir o cambios por guardar).

Los comandos genéricos que vamos a utilizar en todos los procesos de migración son:

  ```bash
   cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@X update @angular/cli@X @angular/core@X"
  ```
  substituyendo la X siempre por el número de versión al que nos migramos

  Si el proyecto utiliza angular material también usaremos:
  ```bash
    cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@X update @angular/material@X"
  ```

  substituyendo también la X siempre por el número de versión al que nos migramos

## **Angular 8 a 9**

**Prerequisitos tener instalada:**

- Node: 12.13.0

Modifica el package.json eliminando las dependencias de Ontimize y de node-sass si se está utilizando y realiza una instalación con la version de node 12.13.0

  ```bash
   npm install
  ```

Ejecuta los comandos de migración de acuerdo con la guía. Asegúrate de que el repositorio esté limpio, con cambios commiteados, stageados o subidos.

  ```bash
   cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8"
  ```

Quitar la dependencia @angular/flex-layout en el package.json ya que no se realiza la actualización automaticamente y habría que hacer manual, y para mejorar y agilizar el proceso lo dejaremos para el paso de migración de la versión 14 a la 15

  ```bash
   cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/cli@9 @angular/core@9"
  ```


Después de ejecutar el comando, además de la actualización de las versiones de angular, comprueba los siguientes cambios realizados:

   1 . Eliminación de hammerjs, si existe, tanto como dependencia como referencias.

   2 . Modificado el aot del angular.json de false a true.

   3 . Modificado el tsconfig.app.json

   ![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-3.png)

   4 . Actualización de rxjs y zone.js

   ![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-6.png)

   5 . Actualización de typescript

   ![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-7.png)

Si el proyecto utiliza angular material se deberá ejecutar el siguiente comando

  ```bash
    cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/material@9"
  ```

Después de ejecutar el comando, además de la actualización de las versiones de material, comprueba los siguientes cambios realizados:
  1 . Modificada la versión de tslib.

  ![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-4.png)
  2 . Modificados los imports de material, antes se importaban de manera global, ahora deben importarse de manera específica, por ejemplo:

  ![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-5.png)

Revisar los cambios recomendados por angular en el siguiente enlace https://update.angular.io/?l=3&v=8.2-9.1 y realiza los cambios recomendados si fuera necesario



## **Angular 9 a 10**

**Prerequisitos tener instalada:**

- Node: 12.13.0

Asegúrate de que el repositorio esté limpio, con los cambios commiteados, stageados o subidos ante de ejecutar los comandos.

Ejecuta el comando para migrar a Angular como indica la [guía](https://update.angular.io/?l=3&v=9.0-10.2).

  ```bash
   cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@10 update @angular/cli@10 @angular/core@10"
  ```
Después de ejecutar el comando, además de la actualización de las versiones de angular, comprueba los siguientes cambios realizados:
1 . Actualización de typescript

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-8.png)
2 . Eliminación de { static: false } en los ViewChild

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-9.png)
3 . Cambios en el tsconfig.json

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-10.png)

Ejecutar comando para migrar Material como indica la [guía](https://update.angular.io/?l=3&v=9.0-10.2) si se usa en el proyecto.


  ```bash
    cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@10 update @angular/material@10"
  ```


Revisar los cambios recomendados por angular en el siguiente enlace <https://update.angular.io/?l=3&v=9.0-10.2> y realiza los cambios recomendados si fuera necesario

## **Angular 10 a 11**

**Prerequisitos tener instalada:**

- Node: 14.20.0
- Angular cli: 10.x.x

Actualiza la versión de node a la 14.20.0 y recuerda modificar si existen las referencias a la version de node, por ejemplo en el package.json.

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-11.png)
Asegúrate de que el repositorio esté limpio, con los cambios commiteados, stageados o subidos ante de ejecutar los comandos.

Ejecuta el comando para migrar a Angular como indica la [guía](https://update.angular.io/?l=3&v=10.2-11.0).

 ```bash
   cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@11 update @angular/cli@11 @angular/core@11"
  ```

Después de ejecutar el comando, además de la actualización de las versiones de angular, comprueba los siguientes cambios realizados:
1 . Modificado el objeto opt del app-routing.module

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-12.png)
2 . Eliminado extractCss del angular.json

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-13.png)

Ejecutar comando para migrar Material como indica la [guía](https://update.angular.io/?l=3&v=10.2-11.0) si se usa en el proyecto.


  ```bash
    cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@11 update @angular/material@11"
  ```


Revisar los cambios recomendados por angular en el siguiente enlace <https://update.angular.io/?l=3&v=10.2-11.0> y realiza los cambios recomendados si fuera necesario
##

## **Angular 11 a 12**
**Prerequisitos tener instalada:**

- Node: 14.20.0
- Angular cli: 11.x.x

Asegúrate de que el repositorio esté limpio, con los cambios commiteados, stageados o subidos ante de ejecutar los comandos.

Ejecuta el comando para migrar a Angular como indica la [guía](https://update.angular.io/?l=3&v=11.0-12.0).


 ```bash
   cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@12 update @angular/cli@12 @angular/core@12"
  ```
Después de ejecutar el comando, además de la actualización de las versiones de angular, comprueba los siguientes cambios realizados:
1 . Actualización de zone

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-16.png)
2 . Actualización de typescript

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-17.png)
3 . Actualización del enviroment.ts

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-18.png)
4 . Actualización del polyfills.ts

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-19.png)
5 . Eliminación de "emitDecoratorMetadata" en el tsconfig.json

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-20.png)
Ejecutar comando para migrar Material como indica la [guía](https://update.angular.io/?l=3&v=11.0-12.0) si se usa en el proyecto.

  ```bash
    cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@12 update @angular/material@12"
  ```

Revisar los cambios recomendados por angular en el siguiente enlace <https://update.angular.io/?l=3&v=11.0-12.0> y realiza los cambios recomendados si fuera necesario



## **Angular 12 a 13**
**Prerequisitos tener instalada:**

- Node: 14.20.0

Asegúrate de que el repositorio esté limpio, con los cambios commiteados, stageados o subidos ante de ejecutar los comandos.

Ejecuta el comando para migrar a Angular como indica la [guía](https://update.angular.io/?l=3&v=12.0-13.0).

 ```bash
   cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@13 update @angular/cli@13 @angular/core@13"
  ```

Después de ejecutar el comando, además de la actualización de las versiones de angular, comprueba los siguientes cambios realizados:
1 . Eliminación de los entryComponents en el .module

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-21.png)
2 . Actualizado test.ts

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-22.png)
3 . Actualizado typescript

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-23.png)

Ejecutar comando para migrar Material como indica la [guía](https://update.angular.io/?l=3&v=12.0-13.0) si se usa en el proyecto.


  ```bash
    cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@13 update @angular/material@13"
  ```


Revisar los cambios recomendados por angular en el siguiente enlace <https://update.angular.io/?l=3&v=12.0-13.0> y realiza los cambios recomendados si fuera necesario


## **Angular 13 a 14**
**Prerequisitos tener instalada:**

- Node: 14.20.0

Asegúrate de que el repositorio esté limpio, con los cambios commiteados, stageados o subidos ante de ejecutar los comandos.

Ejecuta el comando para migrar a Angular como indica la [guía](https://update.angular.io/?l=3&v=13.0-14.0).


 ```bash
   cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@14 update @angular/cli@14 @angular/core@14"
  ```

Después de ejecutar el comando, además de la actualización de las versiones de angular, comprueba los siguientes cambios realizados:
1 . Modificado tsconfig.json

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-24.png)
2 . Modificado el tipo FormBuilder

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-25.png)
3 . Modificado tipo de FormControl

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-26.png)
4 . Modificado angular.json

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-27.png)

Ejecutar comando para migrar Material como indica la [guía](https://update.angular.io/?l=3&v=13.0-14.0) si se usa en el proyecto.


  ```bash
    cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@14 update @angular/material@14"
  ```

Revisar los cambios recomendados por angular en el siguiente enlace <https://update.angular.io/?l=3&v=13.0-14.0> y realiza los cambios recomendados si fuera necesario


## **Angular 14 a 15**
**Prerequisitos tener instalada:**

- Node: 18.10.0

Actualiza la versión de node a la 18.10.0 y recuerda modificar si existen las referencias a la version de node, por ejemplo en el package.json.

Asegúrate de que el repositorio esté limpio, con los cambios commiteados, stageados o subidos ante de ejecutar los comandos.

Ejecuta el comando para migrar a Angular como indica la [guía](https://update.angular.io/?l=3&v=14.0-15.0).


 ```bash
   cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@15 update @angular/cli@15 @angular/core@15"
  ```

Después de ejecutar el comando, además de la actualización de las versiones de angular, comprueba los siguientes cambios realizados:
1 . Actualizado typescript

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-28.png)
2 . Actualizado app-routing-module

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-29.png)
3 . Actualizado test.ts

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-30.png)
4 . Actualizado tsconfig.json

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-31.png)


Ejecutar los siguientes comandos para migrar Material como indica la [guía](https://update.angular.io/?l=3&v=14.0-15.0) si se usa en el proyecto.

  ```bash
    cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@15 update @angular/material@15"

    ng generate @angular/material:mdc-migration
  ```
Despues de ejecutar este comando se crearan en el código una serie de TODO que afectan al estilo de los componentes. En la siguiente tabla puedes ver una equivalencia de alguna de las clases que cambian:

| Componente       | Clase Vieja            | Nueva Clase                 |
|------------------|------------------------|-----------------------------|
| mat-tab          | mat-tab-label-active   | mdc-tab--active             |
|                  | mat-tab-label-content  | mdc-tab__content            |
|                  | mat-tab-label-container| mat-mdc-tab-label-container |
|                  | mat-tab-list           | mat-mdc-tab-list            |
|                  | mat-tab-body-wrapper   | mat-mdc-tab-body-wrapper    |
|                  | mat-tab-label          | mat-mdc-tab                 |
|                  | mat-tab-header-pagination-controls-enabled | mat-mdc-tab-header-pagination-controls-enabled |
|                  | mat-tab-header-pagination | mat-mdc-tab-header-pagination |
|                  | mat-tab-labels         | mat-mdc-tab-labels          |
| mat-chip         | mat-chip-list          | mat-mdc-chip-list           |
|                  | mat-chip-list-wrapper  |                             |
| mat-checkbox     | mat-checkbox-frame     | mdc-checkbox__checkmark     |
|                  | mat-checkbox-label     | mdc-label                   |
|                  | mat-checkbox-checked   | mat-mdc-checkbox-checked    |
|                  | mat-checkbox-layout    |                             |
| mat-button       | mat-button-focus-overlay | mat-mdc-focus-indicator   |
| mat-radio        | mat-radio-outer-circle | mdc-radio__outer-circle     |
|                  | mat-radio-inner-circle | mdc-radio__inner-circle     |
|                  | mat-radio-checked      | mat-mdc-radio-checked       |
|                  | mat-radio-label-content| mdc-label                   |
|                  | mat-radio-label        | mdc -label                  |
| mat-progress-bar | mat-progress-bar-buffer| mdc-linear-progress__buffer  |
| mat-form-field   | mat-form-field-flex    | mat-mdc-form-field-flex     |
|                  | mat-form-field-wrapper | mat-mdc-text-field-wrapper  |
|                  | mat-form-field-underline | mdc-line-ripple           |
|                  | mat-form-field-subscript-wrapper | mat-mdc-form-field-subscript-wrapper |
|                  | mat-form-field-prefix | mat-mdc-form-field-text-prefix |
|                  | mat-form-field-suffix | mat-mdc-form-field-text-suffix |
|                  | mat-form-field-infix  | mat-mdc-form-text-infix     |
|                  | mat-form-field-label  | mat-mdc-floating-label      |
| mat-dialog       | mat-dialog-container  | mdc-dialog__container       |
|                  | mat-dialog-content    | mat-mdc-dialog-content      |
| Sin cambios       |                        |                             |
| mat-button-toggle|                        |                             |
|                  | mat-button-toggle-checked |                           |
|                  | mat-button-toggle-disabled |                          |
|                  | mat-button-toggle-focus-overlay |                      |


## Cambios necesarios después de la migración
1 . Añadir la última release de la versión 15.x.x. de las dependencias de ontimize-web-ngx eliminadas en el paso Angular 8 a 9, excepto la dependencia de theming., cuya funcionalidad fue integrada en  ontimize-web-ngx.

    Puedes consultar las versiones más recientes de las librerías de ontimize en el siguiente enlace https://ontimizeweb.github.io/docs/v15/versions/

2 . Añadir la la dependencia de @angular/flex-layout a la versión: ^15.0.0-beta.42 eliminadas en el paso Angular 8 a 9.
```ts
"@angular/flex-layout": "^15.0.0-beta.42"
```

3 . Actualizar versiones de rxjs, tslib,zone.js

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-33.png)

4 . Eliminar las siguientes importaciones en ficheros .scss si existieran
```scss
  @import 'node\_modules/@angular/material/theming'
```

5 . Modifica .browserslistrc con:

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-36.png)

```
last 2 Chrome versions
last 1 Firefox version
last 2 Edge major versions
last 2 Safari major versions
last 2 iOS major versions
```

6 . Modifica las importaciones de los temas, que ahora vienen directamente del core.

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-35.png)

```scss
@use 'ontimize-web-ngx/theming/themes/ontimize.scss' as theme;
@use 'ontimize-web-ngx/theming/ontimize-style.scss';
@use '../../app/login/login.theme.scss' as login;

// Include ontimize styles
@include ontimize-style.ontimize-theme-styles(theme.$theme);

// Propagate theme to screen styles definition.
@include login.login-theme(theme.$theme);


//Include dark styles option
.o-dark {
  @include ontimize-style.ontimize-theme-all-component-color(theme.$dark-theme);
}
```

7 . Puede que aparezca la advertencia de que se debe añadir "allowSyntheticDefaultImports": true en tsconfig.json.
![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-37.png)

8 . Puede que aparezcan advertencias de dependencias que deben añadirse a "allowedCommonJsDependencies" en angular.json. Un ejemplo sería:

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-38.png)


9 . Añadir stylePreprocessorOptions en el angular.json

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-39.png)

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-40.png)

**Importante**: En app.module, ya no se importa OntimizeModules, ahora debes importar los módulos uno a uno, por ejemplo:

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-32.png)

```ts
  BrowserModule,
  BrowserAnimationsModule,
  OntimizeWebModule.forRoot(CONFIG),
```

Recuerda que este proceso puede ser complejo y puede haber otros ajustes necesarios en función de las particularidades de tu proyecto. Siempre es recomendable realizar pruebas exhaustivas después de cada paso de migración.

## **Errores comunes**

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-1.png)

Para solucionar este error deberás añadir la siguiente dependencia a las devDependencies de tu proyecto:

```ts
"@angular-devkit/schematics": "^9.1.15",
```
Al comenzar la migración, podemos tener errores debido a la incompatibilidad de ciertas librerías instaladas en el proyecto. La traza del error será parecida a esta:

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-2.png)

Lo que deberemos hacer es eliminar esas dependencias que dan conflictos de nuestro package y acordarnos de añadirlas cuando tengamos nuestro proyecto en la versión 15. Debemos revisar que versión de esas librerías es compatible con la versión 15 de angular.

![Alt text]({{ base_path }}/assets/images/migration15.x.x/image-15.png)

En la versión 15 suele aparecer este error. Se debe añadir la siguiente devDependencie al package.json:

```ts
 "ajv": "^7.2.4"
```



