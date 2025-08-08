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

### Create and extend a service

Create a new service class that extends a service from **OntimizeWeb**. In the following example we are creating a service called `StarWarsService` that extends the class `OntimizeBaseService` (`OntimizeBaseService` is the super class for different services in **OntimizeWeb**).

```javascript
import { Injectable, Injector } from '@angular/core';

import { OntimizeBaseService } from 'ontimize-web-ngx';

@Injectable()
export class StarWarsService extends OntimizeBaseService {

  constructor(protected injector: Injector) {
    super(injector);
  }

}
```

Once your service is created you can [override the Ontimize CRUD methods](#override-crud-methods-using-a-third-party-api) and/or [define new methods](#define-your-own-crud-methods). After that you must decide if the service will be used [in the whole application](#use-your-service-in-the-whole-application) or only in [specific components](#use-your-service-in-a-specific-component).

### Override CRUD methods using a third party API

You can use your service to retrieve or send data to a third party API. The following example shows the service from the previous step consuming the [Star Wars API](https://swapi.dev/){:target="\_blank"} for querying different entities. We have overridden the `query` and `advancedQuery` methods for making simple and paginated request to the API. Note that you must [adapt the API response](#adapt-your-service-response) to the ontimize service response for using the retrieved data with the **OntimizeWeb** components.

```javascript
import { Injectable, Injector } from '@angular/core';
import { Observable, OntimizeBaseService, Util } from 'ontimize-web-ngx';

@Injectable()
export class StarWarsService extends OntimizeBaseService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  public query(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object): Observable<any> {
    const url = 'https://swapi.dev/api/' + entity + '/?format=json';

    return this.doRequest({
      method: 'GET',
      url: url,
      options: {} // This overrides the default http headers. Remove it if you are using an ontimize based API in the backend
    });
  }

  public advancedQuery(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object, offset?: number, pagesize?: number, orderby?: Array<Object>): Observable<any> {
    offset = (Util.isDefined(offset)) ? offset : this.offset;

    // Calculate page
    let page = 0;
    if (Util.isDefined(offset)) {
      page = Math.trunc(offset / 10) + 1;
    }

    let url = 'https://swapi.dev/api/' + entity + '/?format=json' + '&page=' + page;

    return this.doRequest({
      method: 'GET',
      url: url,
      options: {} // This overrides the default http headers. Remove it if you are using an ontimize based API in the backend
    });
  }

}
```

#### doRequest method

This `doRequest` method is used to retrieve data from a URL. You can use this method with parameters to configurate the request.
You can check the options available in this example:

```javascript
export type ServiceRequestParam = {
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  body?: any,
  options?: HttpRequestOptions,
  successCallback?: (
    resp: ServiceResponse,
    observer: Subscriber<ServiceResponse>
  ) => void,
  errorCallBack?: (
    resp: ServiceResponse,
    observer: Subscriber<ServiceResponse>
  ) => void,
};

// this.doRequest(ServiceRequestParam)
return this.doRequest({
  method: "GET",
  url: url,
  options: {}, // This overrides the default http headers. Remove it if you are using an ontimize based API in the backend
});
```

{: .note }

> In most cases the third party API won't offer the same response as OntimizeWeb components need so you have to [adapt the response](#adapt-your-service-response).

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

In case you want to use your service in the whole application, you have to provide it in you application module using the corresponding injection token.

```javascript
@NgModule({
  ...
  providers: [
    ...
    { provide: O_DATA_SERVICE, useValue: StarWarsService }
  ]
})
export class AppModule { }
```

At this point every **OntimizeWeb** component will use your recently created `StarWarsService` service for communicating with the backend.

{: .note }

> `OntimizeService`, `OntimizeEEService`, `OntimizeExportService`, `OntimizePermissionsService` and `OntimizeEEPermissionsService` can be extended and used in the whole application by indicating the class in the [application configuration]({{ base_path }}/guide/appconfig/#application-configuration-file){:target="\_blank"}. There is one attribute for each type of service.

### Use your service in a specific component

If you want to use your service in a specific component instead of using it in the whole application, you have to create a provide method that returns a new instance of your service and add a provider to your module indicating the factory method like in the example below.

```javascript
import { StarWarsService } from '../../shared/star-wars.service';


@NgModule({

  ...

  providers: [{
    provide: 'starWars',
    useValue: StarWarsService
  }]
})
export class MyModule { }
```

Once the service is included in the providers of your module, it will be created an instance of the service for each component. For this, configure the `service-type` attribute in the component with the value of the `provide` attribute indicated in the previous step. Check the example below.

```html
<o-table
  attr="starships"
  entity="starships"
  columns="name;model;manufacturer;starship_class;crew;passengers"
  visible-columns="name;model;manufacturer;starship_class;passengers"
  pageable="yes"
  quick-filter="no"
  insert-button="no"
  fxFlex
  service-type="starWars"
>
  ...
</o-table>
```

### Define your own successful/unsuccessful request callback methods

**OntimizeWeb** defines a successful and unsuccessful request callbacks for each CRUD method, this methods are called when the service receives the response from the API. You can override this methods in order to modify its behaviour. This methods are: `parseSuccessfulMETHODResponse` and `parseUnsuccessfulMETHODResponse` where `METHOD` is `query`, `advancedQuery`, `update`, `insert` or `delete`.

The service `JSONAPIService` has a generic succesful and unsuccessful request callback which are `parseSuccessfulResponse` and `parseUnsuccessfulResponse`. This callbacks are called from the previous explained CRUD method callbacks so user can choose whether to override a particular or the generic method.


