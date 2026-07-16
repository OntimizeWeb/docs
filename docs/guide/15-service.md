---
layout: default
title: Services
has_children: true
permalink: /guide/service/
parent: Guide
nav_order: 3
has_toc: false
---

{% include base_path %}
{% include toc %}

OntimizeWeb provides a powerful and flexible way to interact with backend services, supporting both **standard APIs using the JSON:API** and **Ontimize-based backends** . This allows developers to integrate data sources seamlessly using a standardized interface while maintaining the reactive and component-driven architecture of Angular.

This guide describes how services work in OntimizeWeb, how to extend them, and how to integrate third-party APIs using the JSON:API specification. Whether you're working with an Ontimize server or a modern RESTful API, this documentation will help you implement consistent data access across your application.


{% include nav_cards.html folder="services" %}


## Extending Ontimize Web services

You can override or extend the functionality of the services defined in **OntimizeWeb**. You should know that some services are used internally and they cannot be extended. The prepared-to-extend services are the following:

| Service                                                                       | Injection token          | Description                                                                                                                                             |
| ----------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OntimizeService`, `OntimizeEEService` or `JSONAPIService`(since *ontimize-web-ngx@15.6.0*)                                   | `O_DATA_SERVICE`         | Service used for making CRUD operation and authentication                                                                                               |
| `OTranslateService`                                                           | `O_TRANSLATE_SERVICE`    | Service for translating the information shown in the application                                                                                        |
| `OntimizeFileService`                                                         | `O_FILE_SERVICE`         | Service for uploading files, used by the [`o-file-input`]({{ base_path }}/components/input/file/overview){:target="\_blank"} component                  |
| `OntimizeExportService` and `OntimizeExportService3X`                         | `O_EXPORT_SERVICE`       | Service used by the [`o-table`]({{ base_path }}/components/data/table/overview){:target="\_blank"} component for exporting its data                     |
| `OntimizePermissionsService` and `OntimizeEEPermissionsService`               | `O_PERMISSION_SERVICE`   | Service used for loading the application permissions                                                                                                    |
| `AuthService`                                                                 | `O_AUTH_SERVICE`         | Service used for authentication (since *ontimize-web-ngx@8.3.0*)                                                                                        |
| `OReportService` or  `JSONAPIReportService` (since *ontimize-web-ngx-report@15.2.0)                                                                     | `O_REPORT_SERVICE`       | Service used to generate reports (since *ontimize-web-ngx@8.7.0*)                                                                             |
| `OntimizeExportDataProviderService` and `OntimizeExportDataProviderService3X` | `O_EXPORT_DATA_SERVICE`  | Service used to provide data and styles to table exports (since *ontimize-web-ngx@8.8.0*)                                                               |
| `OTableGlobalConfig`                                                          | `O_TABLE_GLOBAL_CONFIG`  | Service used to set some [`o-table`]({{ base_path }}/components/data/table/overview){:target="\_blank"} global options (since *ontimize-web-ngx@8.7.3*) |
| `LocalStorageService`                                                         | `O_LOCALSTORAGE_SERVICE` | Service used to save in application data in local storage (since *ontimize-web-ngx@15.2.0*)                                                             |

For extending a service you should create your own service that extends a service from **OntimizeWeb** and provide it in your application using the corresponding injection token from the table above.


### Create and extend a service <small>new</small>

In Ontimize Web, services act as the bridge between UI components and backend APIs or external data sources. Creating and extending a service allows you to customize how data is requested, filtered, and processed to suit your specific backend requirements or third-party APIs.

To implement a service, you typically define:

* How query parameters from UI filters are adapted to the backend’s expected format (**Request Arguments Adapter**).
* How the backend’s response is converted into a structure that Ontimize can work with (**Response Adapter**).
* The main service class that manages data operations (query, insert, update, delete) using the above adapters (**Custom Service**).


| Component                     | Purpose                                                                                 |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| **Custom Service**            | Extends `BaseDataService`; manages data requests and responses.                         |
| **Request Arguments Adapter** | Converts Ontimize filters and query parameters to backend format.                       |
| **Response Adapter**          | Transforms backend API responses into Ontimize-compatible format.                       |
| **Service Response Class**    | Defines the structure of the response, mapping backend fields to Ontimize expectations. |


#### Component Interaction Diagram

```plaintext
                                    ┌─────────────────────────────┐
                                    │ Ontimize UI Components      │
                                    │ (o-table, o-form, etc.)     │
                                    └─────────────┬───────────────┘
                                                  │
                                                  ▼
                                    ┌─────────────────────────────┐
                                    │     Custom Data Service     │
                                    │  (extends BaseDataService)  │
                                    │ - Coordinates request       │
                                    │ - Uses Request Arguments    │
                                    │   Adapter to prepare params │
                                    │ - Uses Response Adapter     │
                                    └─────┬────────────┬──────────┘
                                          │            │
                                          ▼            ▼
                                    ┌─────────────┐   ┌───────────────────────────┐
                                    │ RequestArgs │   │ Response Adapter           │
                                    │ Adapter     │   │ - Converts API responses   │
                                    │ - Transforms│   │   to Ontimize format       │
                                    │   filters   │   └───────────────────────────┘
                                    └─────────────┘
                                          │
                                          ▼
                                    ┌─────────────────────────┐
                                    │  Backend / External API  │
                                    │  (RESTful service)       │
                                    └─────────────────────────┘
```

**How it works:**

1. UI components trigger data operations through the custom service.
2. The service adapts Ontimize filters into backend query parameters using the Request Arguments Adapter.
3. It sends the HTTP request to the backend API.
4. Upon response, the Response Adapter transforms the raw data into Ontimize-compatible responses.
5. The processed data is returned to UI components.


#### Example: Rick and Morty API Integration

Below is an example of how these components come together for integrating with the Rick and Morty API. The custom service handles queries, uses adapters for requests and responses, and manages data transformation seamlessly.


##### 1. Create a Custom Service

To create a custom service in Ontimize Web, extend the BaseDataService class, specifying the type of data your service will handle. This service will manage how data operations such as querying or updating are performed against your backend or external API.

Within your service:

- Use the constructor to inject dependencies and set up any adapters needed to transform requests and responses.

- Override configuration methods like configureService and configureAdapter to define API paths and specify the adapters your service uses.

- Implement or override data operation methods like query to customize how requests are constructed and sent.

- Optionally, implement other CRUD methods (insert, update, delete) depending on your backend capabilities.

```ts
@Injectable()
export class RickAndMortyService extends BaseDataService<IRickAndMortyResponse> {

  constructor(injector: Injector) {
    super(injector);
    this.requestArgumentAdapter = this.injector.get(RickAndMortyRequestArgumentsAdapter);
  }

  public configureService(config: any): void {
    super.configureService(config);
    this.path = config.path;
  }

  public configureAdapter() {
    this.adapter = this.injector.get(RickAndMortyResponseAdapter);
  }

  query(...args: [any, ...any[]]): Observable<IRickAndMortyResponse> {
    const [filter] = args[0];
    const page = this.getPaginationContext().pageNumber ?? 0;
    const queryParams = this.toQueryParams(filter);
    const url = `${this.urlBase}${this.path}${queryParams}&page=${page}`;

    return this.doRequest({
      method: 'GET',
      url: url,
      options: {} // optional: can include headers or credentials if needed
    });
  }

  advancedQuery(...args: [any, ...any[]]): Observable<IRickAndMortyResponse> {
    return this.query(args);
  }

  // You can implement insert/update/delete if needed
  insert(): Observable<IRickAndMortyResponse> {
    throw new Error('Method not implemented.');
  }

  update(): Observable<IRickAndMortyResponse> {
    throw new Error('Method not implemented.');
  }

  delete(): Observable<IRickAndMortyResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * Converts a filter object into a query parameter string.
   */
  public toQueryParams(obj: Record<string, any>): string {
    const params = Object.entries(obj)
      .filter(([_, value]) => !!value)
      .map(([key, value]) => {
        const cleanValue = value.replace(/%/g, '');
        return `${encodeURIComponent(key)}=${encodeURIComponent(cleanValue)}`;
      })
      .join('&');
    return `?${params}`;
  }
}
```

---

##### 2. Create a Request Adapter

This adapter is responsible for converting Ontimize filter expressions into key-value pairs that can be used as query parameters in your API.

```ts
@Injectable()
export class RickAndMortyRequestArgumentsAdapter extends BaseRequestArgument {
  parseQueryParameters(params: any) {
    const { filter, columns } = params;
    const parsedFilter = this.deCompose(filter, columns, {});
    return [parsedFilter, columns, params.entity, params.sqlTypes];
  }

  deCompose(expression, columns: Array<string>, kv: Object) {
    const basic = expression[FilterExpressionUtils.BASIC_EXPRESSION_KEY];
    const filter = expression[FilterExpressionUtils.FILTER_EXPRESSION_KEY];

    if (Util.isDefined(basic)) {
      kv = this.deComposeExpresion(basic, columns, kv);
    }

    if (Util.isDefined(filter)) {
      kv = this.deComposeExpresion(filter, columns, kv);
    }

    return kv;
  }

  deComposeExpresion(expr: any, columns: Array<string>, kv: Object) {
    if (FilterExpressionUtils.instanceofExpression(expr)) {
      if (typeof expr.lop !== 'string') {
        kv = this.deComposeExpresion(expr.lop, columns, kv);
        return this.deComposeExpresion(expr.rop, columns, kv);
      } else {
        return { ...kv, [expr.lop]: expr.rop };
      }
    }
  }
}
```

---

##### 3. Create a Response Adapter

This adapter transforms the API response into a structure compatible with Ontimize’s expectations.

```ts
@Injectable()
export class RickAndMortyResponseAdapter implements IServiceResponseAdapter<RickAndMortyServiceResponse> {
  adapt(resp: HttpResponse<any>): RickAndMortyServiceResponse {
    return new RickAndMortyServiceResponse(
      resp.status,
      resp.statusText,
      resp.headers,
      resp.ok,
      resp.body
    );
  }

  adaptError(httpError: HttpErrorResponse) {
    return httpError.error.error;
  }
}
```

---

##### 4. Create a Custom Service Response

This class maps the external API's structure to Ontimize's expected `ServiceResponse` format.

```ts
export class RickAndMortyServiceResponse implements ServiceResponse {
  public code: number;
  public message: string;
  public data: any;
  public totalQueryRecordsNumber: number;
  public startRecordIndex: number = 0;

  constructor(
    public status: number,
    public statusText: string,
    public headers: HttpHeaders,
    public ok: boolean,
    public body: any
  ) {
    this.data = body.results || [];
    this.totalQueryRecordsNumber = body.info?.count || this.data.length;

    this.code = (status >= 200 && status < 300) ? 0 : (status === 404 ? 3 : 1);
    this.message = statusText;
  }

  isSuccessful(): boolean {
    return this.status >= 200 && this.status < 300;
  }

  isFailed(): boolean {
    return this.status > 300;
  }

  isUnauthorized(): boolean {
    return this.status === 403;
  }
}
```

---

#### 5.  Final Integration

Once your service and adapters are ready:

* Register the service and adapters in your `ApplicationConfig` providers (in `app.config.ts`):

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideOntimizeWeb(CONFIG, appRoutes),
    { provide: 'rickandmorty', useValue: RickAndMortyService },
    RickAndMortyResponseAdapter,
    RickAndMortyRequestArgumentsAdapter,
    ...
  ]
};
```

* Use the service in your components or link it to a data component (like `o-table`, `o-form`, etc.) via the `serviceType` and `entity` attributes.




### Define your own CRUD methods

All the **OntimizeWeb** components that use services for retrieving data have the attributes `query-method`, `paginated-query-method`, `insert-method`, `update-method` and `deleted-method`. The purpose of these attributes is allowing the component to use your own CRUD methods defined in your service. With this you can define, for example, as many _query_ methods as you want.

In the example below we have defined the `getSkywalker` method that retrieves information from the API.

```javascript
import { Injectable, Injector } from '@angular/core';
import { Observable, OntimizeBaseService, Util } from 'ontimize-web-ngx';

@Injectable()
export class StarWarsService extends OntimizeBaseService {

  ...

  public getSkywalker(): Observable<any> {
    const url = 'https://swapi.dev/api/people/1/?format=json';

    return this.doRequest({
      method: 'GET',
      url: url,
      options: {} // This overrides the default http headers. Remove it if you are using an ontimize based API in the backend
    });
  }

}
```

Now you can configure a component from **OntimizeWeb** to use your method. Read more about this in the section [_Use your service in a specific component_](#use-your-service-in-a-specific-component).

{: .note }

> In most cases the third party API won't offer the same response as OntimizeWeb components need so you have to [addapt the response](#adapt-your-service-response).

### Adapt your service response

This section describes how to adapt the response of a third party API in order to use it with **OntimizeWeb** components.

First of all, you have to implement an adapter. An adapter is a service that implements the interface `ServiceResponseAdapter<BaseServiceResponse>` that contains the method `adapt(resp: HttpResponse<T>): BaseServiceResponse`, this method receives the response from the API and returns an instance of `BaseServiceResponse` that is recognized by **OntimizeWeb** components.

```javascript
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceResponse, OntimizeServiceResponse, ServiceResponseAdapter, Util } from 'ontimize-web-ngx';

import { StarWarsResponse } from './star-wars-response.type';

@Injectable({ providedIn: 'root' })
export class StarWarsResponseAdapter implements ServiceResponseAdapter<BaseServiceResponse> {

  adapt(resp: HttpResponse<StarWarsResponse>): BaseServiceResponse {
    let code = 1;
    let data = [];
    let message = '';
    let sqlTypes = {};
    let startRecordIndex = 0;
    let totalQueryRecordsNumber = 0;

    // Adapt the data received from the service
    if (resp.body) {
      code = 0;
      if (resp.body.results) {
        data = resp.body.results;
        startRecordIndex = Util.isDefined(resp.body.previous) ? (10 * (this.getPage(resp.body.previous, resp.body.next) - 1)) + 1 : 0;
        totalQueryRecordsNumber = resp.body.count;
      } else {
        data = [resp.body];
      }
    }

    // Create Ontimize service response with the data adapted
    return new OntimizeServiceResponse(code, data, message, sqlTypes, startRecordIndex, totalQueryRecordsNumber);
  }

  ...

}
```

This is the StarWarsResponse referred above.

```javascript
export interface StarWarsResponse {
  count: number;
  next: string;
  previous: string;
  results: any[];
}
```

The second step is to make your service use the adapter. Your service should extend the class `OntimizeBaseService` or any of its child classes (`OntimizeService`, `OntimizeEEService`, `OntimizeExportService` and `OntimizeFileService`). This class implements the method `configureAdapter` that has to be overwritten in order to provide your adapter.

```javascript
import { StarWarsResponseAdapter } from './star-wars-response-adapter';

@Injectable()
export class StarWarsService extends OntimizeBaseService {

  ...

  public configureAdapter() {
    this.adapter = this.injector.get(StarWarsResponseAdapter);
  }

  ...

}
```

After this, your adapter will be called every time your service receives a response.

You can also extend the `BaseServiceResponse` according to your needs. Just remember to respect this three methods that are used internally in **OntimizeWeb**:

- isSuccessful()
- isFailed()
- isUnauthorized()

### Use your service in the whole application

In case you want to use your service in the whole application, you have to provide it in `app.config.ts` using the corresponding injection token.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideOntimizeWeb(CONFIG, appRoutes),
    { provide: O_DATA_SERVICE, useValue: StarWarsService }
  ]
};
```

At this point every **OntimizeWeb** component will use your recently created `StarWarsService` service for communicating with the backend.

{: .note }

> `OntimizeService`, `OntimizeEEService`, `OntimizeExportService`, `OntimizePermissionsService` and `OntimizeEEPermissionsService` can be extended and used in the whole application by indicating the class in the [application configuration]({{ base_path }}/guide/appconfig/#application-configuration-file){:target="\_blank"}. There is one attribute for each type of service.

### Use your service in a specific component

If you want to use your service in a specific component instead of the whole application, add it to the component's own `providers` array in its `@Component` decorator.

```typescript
import { Component } from '@angular/core';
import { StarWarsService } from '../../shared/star-wars.service';

@Component({
  standalone: true,
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  providers: [{ provide: 'starWars', useValue: StarWarsService }]
})
export class StarshipsComponent {}
```

Angular will create a new instance of the service scoped to this component. Configure the `service-type` attribute in the Ontimize component with the value of the `provide` token from the previous step. Check the example below.

```html
<o-table
  attr="starships"
  entity="starships"
  columns="name;model;manufacturer;starship_class;crew;passengers"
  visible-columns="name;model;manufacturer;starship_class;passengers"
  pageable="yes"
  quick-filter="no"
  insert-button="no"
  service-type="starWars"
>
  ...
</o-table>
```

### Define your own successful/unsuccessful request callback methods

**OntimizeWeb** defines a successful and unsuccessful request callbacks for each CRUD method, this methods are called when the service receives the response from the API. You can override this methods in order to modify its behaviour. This methods are: `parseSuccessfulMETHODResponse` and `parseUnsuccessfulMETHODResponse` where `METHOD` is `query`, `advancedQuery`, `update`, `insert` or `delete`.

The service `JSONAPIService` has a generic succesful and unsuccessful request callback which are `parseSuccessfulResponse` and `parseUnsuccessfulResponse`. This callbacks are called from the previous explained CRUD method callbacks so user can choose whether to override a particular or the generic method.


