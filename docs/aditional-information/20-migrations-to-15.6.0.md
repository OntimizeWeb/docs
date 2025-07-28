---
layout: default
title: "Migration Guide: Upgrading from 15.x.x to 15.6.0"
permalink: /migration-15.x.x-to-15.6.0/
nav_exclude: true
---
{% include base_path %}
{% include toc %}

## **Proceso de Migración de Ontimize Web 15.x.x a la versión 15.6.0**

Este proceso cubre **exclusivamente los cambios incompatibles** (*breaking changes*) introducidos en la versión 15.6.0 de Ontimize Web. Úsalo para asegurar una migración completa y segura.


### 1. Cambio de tipo en `servicesConfiguration` en app.config.ts

*  Cambiar la declaración de:

  ```ts
  servicesConfiguration?: Object;
  ```

  a:

  ```ts
  servicesConfiguration?: OntimizeServiceConfig | JSONAPIServiceConfig;
  ```
* Importar `OntimizeServiceConfig` o `JSONAPIServiceConfig` desde `ontimize-web-ngx`.
* Incluir el tipo de servicio explícitamente si es necesario:


### 2. Reemplazo de `OntimizeBaseService`

* Buscar todas las clases que extienden `OntimizeBaseService` y reemplazarlas por uno de los siguientes servicios, según el caso:
   - `OntimizeService` (uso estándar)
   - `OntimizeEEService` (para Enterprise Edition)
   - `JSONApiService` (para backends JSON:API)

*  Verificar que el constructor use `super(injector)`.


### 3. Cambio en el método `getQueryArguments`

* Actualizar la firma en llamadas al método:

  * `ovrrArgs` ahora es de tipo `OQueryDataArgs`.
  * El método ahora devuelve un `OQueryParams`, no un `any[]`.

* Antes:

```ts
getQueryArguments(filter: object, ovrrArgs?: any): any[]
```

* Después:

```ts
getQueryArguments(filter: object, ovrrArgs?: OQueryDataArgs): OQueryParams
```

### 4. Cambio de nombre OntimizeQueryArgumentsAdapter

* Renombrar `OntimizeQueryArgumentsAdapter` por `OntimizeRequestArgumentsAdapter`

### 5. Cambio de interfaz en adaptadores de respuesta

* Buscar clases que implementan `ServiceResponseAdapter<T>`.
  * Reemplazar por `IServiceResponseAdapter<T>`.
  * Verificar que implementen el método `adaptResponse()` correctamente.

* Antes:

```ts
export class MyAdapter implements ServiceResponseAdapter<BaseServiceResponse> {
  adaptResponse(resp: any): BaseServiceResponse { ... }
}
```

* Después:

```ts
export class MyAdapter implements IServiceResponseAdapter<BaseServiceResponse> {
  adaptResponse(resp: any): BaseServiceResponse { ... }
}
```





