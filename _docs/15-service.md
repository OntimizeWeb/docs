---
title: "Services"
permalink: /guide/service/
---

{% include base_path %}
{% include toc %}

This section describes the **OntimizeWeb** services an how to extend them to add or modify its functionality.

## Ontimize services

OntimizeWeb services are used for fetching and saving data from servers based on [Ontimize](https://www.ontimize.com/){:target="_blank"}. There is two types of Ontimize services depending on the server technology used: `OntimizeService` and `OntimizeEEService`. You must indicate which one the application will use by configuring the `serviceType` attribute in the [application configuration]({{ base_path }}/guide/appconfig/#application-configuration){:target="_blank"}.

### Ontimize services methods

Both services `OntimizeService` and `OntimizeEEService` have the same methods for configuring and sending request to the server. This methods are the following:

```javascript
/* Configuration methods */
getDefaultServiceConfiguration(serviceName?: string): Object;
configureService(config: any): void;

/* CRUD methods */
query(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object): Observable<any>;
advancedQuery(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object,
  offset?: number, pagesize?: number, orderby?: Array<Object>): Observable<any>;
insert(av: Object, entity?: string, sqltypes?: Object): Observable<any>;
update(kv: Object, av: Object, entity?: string, sqltypes?: Object): Observable<any>;
delete(kv: Object, entity?: string, sqltypes?: Object): Observable<any>;

/**
* Successful response parsers, there is one parser for each CRUD method which calls to the common parser.
* User can overwrite the chosen methods parsers or the common parser
*/
protected parseSuccessfulResponse(resp: any, _innerObserver: any);
protected parseSuccessfulQueryResponse(resp: any, _innerObserver: any);
protected parseSuccessfulAdvancedQueryResponse(resp: any, _innerObserver: any);
protected parseSuccessfulInsertResponse(resp: any, _innerObserver: any);
protected parseSuccessfulUpdateResponse(resp: any, _innerObserver: any);
protected parseSuccessfulDeleteResponse(resp: any, _innerObserver: any);

/**
* Unsuccessful response parsers, there is one parser for each CRUD method which calls to the common parser.
* User can overwrite the chosen methods parsers or the common parser
*/
protected parseUnsuccessfulResponse(error: any, _innerObserver: any);
protected parseUnsuccessfulQueryResponse(resp: any, _innerObserver: any);
protected parseUnsuccessfulAdvancedQueryResponse(resp: any, _innerObserver: any);
protected parseUnsuccessfulInsertResponse(resp: any, _innerObserver: any);
protected parseUnsuccessfulUpdateResponse(resp: any, _innerObserver: any);
protected parseUnsuccessfulDeleteResponse(resp: any, _innerObserver: any);

/* Authentication methods */
startsession(user: string, password: string): Observable<any>;
endsession(user: string, sessionId: number): Observable<any>;
redirectLogin?(sessionExpired?: boolean);
```

### CRUD methods
The *CRUD* (Create, Read, Update and Delete) methods are used to perform standard Ontimize operations:

* **query**: performs a request to get data from the server.
  * **kv**: indicates the filtering values. An empty object means that no filter will be applied into the request.
  * **av**: indicates the columns that you want to request.
  * **entity**: indicates the entity to perform the request.
  * **sqltypes**: object with the data types for each colum that participates in the request according to Java standard (see [SQLType](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/master/projects/ontimize-web-ngx/src/lib/util/sqltypes.ts){:target='_blank'}).
* **advancedQuery**: performs a request to get **paginated** data from the server.
  * **kv**: indicates the filtering values. An empty object means that no filter will be applied into the request.
  * **av**: indicates the columns that you want to request.
  * **entity**: indicates the entity to perform the request.
  * **sqltypes**: object with the data types for each colum that participates in the request according to Java standard (see [SQLType](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/master/projects/ontimize-web-ngx/src/lib/util/sqltypes.ts){:target='_blank'}).
  * **offset**: the index of the first item requested in the collection.
  * **pagesize**: the number of items requested.
  * **orderby**: object with the sorting that will be applied to the request result.
* **insert**: performs a insert operation request to the server.
  * **av**: indicates the values to insert.
  * **entity**: indicates the entity to perform the request.
  * **sqltypes**: object with the data types for each colum that participates in the request according to Java standard (see [SQLType](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/master/projects/ontimize-web-ngx/src/lib/util/sqltypes.ts){:target='_blank'}).
* **update**: performs an update operation request to the server.
  * **kv**: indicates the filtering values for performing the update.
  * **av**: indicates the values to update.
  * **entity**: indicates the entity to perform the request.
  * **sqltypes**: object with the data types for each colum that participates in the request according to Java standard (see [SQLType](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/master/projects/ontimize-web-ngx/src/lib/util/sqltypes.ts){:target='_blank'}).
* **delete**: performs an delete operation request to the server.
  * **kv**: indicates the filtering values for performing the deletion.
  * **entity**: indicates the entity to perform the request.
  * **sqltypes**: object with the data types for each colum that participates in the request according to Java standard (see [SQLType](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/master/projects/ontimize-web-ngx/src/lib/util/sqltypes.ts){:target='_blank'}).

### Server response interface
The standard response of the requests made to Ontimize based servers always follows the following structure:

```javascript
{
    code: number;
    data: Array<Object>;
    message: '';
    sqlTypes?: Object;
    startRecordIndex?: number;
    totalQueryRecordsNumber?: number;
}
```

Where the attributes indicates the following:

* **code**: indicates the result of the operation: 0 for successful operations, 1 for unsuccessful operations, 3 for session expired.
* **data**: the data requested.
* **message**: a message in case the response was not successful.
* **sqlTypes**: indicates the data type according to Java standard. See [SQL Types](https://docs.oracle.com/javase/8/docs/api/java/sql/Types.html){:target='_blank'}.
* **startRecordIndex**: in paginated queries, indicates the position of the first retrieved record in the collection.
* **totalQueryRecordsNumber**: in paginated queries, indicates the total number of record of the collection.

You can see an example of a Ontimize service request response in the image below. You can see the complete response [here]({{ base_path }}/assets/examples/ontimize_service_request_example_response.json){:target='_blank'}.

![Ontimize service response example]({{ base_path }}/images/request.png){: .align-center}

### Example of Ontimize Service in a component

Below we will show an example of how to configure and use an `Ontimize service`.

```javascript
protected service: OntimizeService;

constructor(protected injector: Injector) {
  this.service = this.injector.get(OntimizeService);
}

ngOnInit() {
  this.configureService();
}

protected configureService() {
  const conf = this.service.getDefaultServiceConfiguration();
  conf['path'] = '/movements';
  this.service.configureService(conf);
}

getMovements(data) {
  if (data.hasOwnProperty('ACCOUNTID') && this.service !== null) {
    const filter = {
      'ACCOUNTID': data['ACCOUNTID']
    };
    const columns = [this.yAxis, this.xAxis, 'DATE_'];
    this.service.query(filter, columns, 'movement').subscribe((resp) => {
      if (resp.code === 0) {
        this.adaptResult(resp.data);
      } else {
        alert('Impossible to query data!');
      }
    });
  }

  this.adaptResult(data){
    ...
  }
```

## Extending Ontimize Web services

You can override or extend the functionality of the services defined in **OntimizeWeb**. You should know that some services are used internally and they cannot be extended. The prepared-to-extend services are the following:

| Service | Injection token | Description |
| ------- | ------- | ------- |
| `OntimizeService` and `OntimizeEEService` | `O_DATA_SERVICE` | Service used for making CRUD operation and authentication |
| `OTranslateService` | `O_TRANSLATE_SERVICE` | Service for translating the information shown in the application |
| `OntimizeFileService` | `O_FILE_SERVICE` | Service for uploading files, used by the [`o-file-input`]({{ base_path }}/components/input/file/overview/){:target="_blank"}  component |
| `OntimizeExportService` | `O_EXPORT_SERVICE` | Service used by the [`o-table`]({{ base_path }}/components/input/file/overview/){:target="_blank"} component for exporting its data |
| `OntimizePermissionsService` and `OntimizeEEPermissionsService` | `O_PERMISSION_SERVICE` | Service used for loading the application permissions |

For extending a service you should create your own service that extends a service from **OntimizeWeb** and provide it in your application using the corresponding injection token from the table above.

### Create and extended a service

Create a new service class that extends a service from **OntimizeWeb**. In the following example we are creating a service called `StarsWarsService` that extends the `OntimizeEEService`.

```javascript
import { Injectable, Injector } from '@angular/core';

import { OntimizeEEService } from 'ontimize-web-ngx';

@Injectable()
export class StarsWarsService extends OntimizeEEService {

  constructor(protected injector: Injector) {
    super(injector);
  }

}
```

Once your service is created you must decide if it will be used [in the whole application](#use-your-service-in-the-whole-application) or only in [specific components](#use-your-service-in-a-specific-component).

#### Use your service in the whole application

In case you want to use your service in the whole application, you have to provide it in you application module using the corresponding injection token.

```javascript
@NgModule({
  ...
  providers: [
    ...
    { provide: O_DATA_SERVICE, useValue: StarsWarsService }
  ]
})
export class AppModule { }
```

> **NOTE:** `OntimizeService`, `OntimizeEEService`, `OntimizeExportService`, `OntimizePermissionsService` and `OntimizeEEPermissionsService` can be extended and used in the whole application by indicating the class in the [application configuration]({{ base_path }}/guide/appconfig/#application-configuration){:target="_blank"}. There is one attribute for each type of service.

Now you can add or override the methods of the service as you need. The following example shows the new service consuming the [Stars Wars API](https://swapi.co/){:target="_blank"} for querying different entities. We have override the `query` and the `advancedQuery` methods for making simple and paginated request to the API. Note that we must adapt the API response to the ontimize service response for using the retrieved data with the **OntimizeWeb** components.

```javascript
import { Injectable, Injector } from '@angular/core';

import { OntimizeEEService, Observable, Util } from 'ontimize-web-ngx';
import { Observable}  from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class StarsWarsService extends OntimizeEEService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  public query(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object): Observable<any> {
    const url = 'https://swapi.co/api/' + entity + '/?format=json';

    let _innerObserver: any;
    const dataObservable = new Observable(observer => _innerObserver = observer).pipe(share());

    const self = this;
    this.httpClient.get(url).subscribe(resp => {

      // Prepare response for ontimize components
      let response = {
        code: 0,
        data: resp['results'],
        message: ''
      };
      _innerObserver.next(response);
    }, error => {
      self.parseUnsuccessfulQueryResponse(error, _innerObserver);
    }, () => _innerObserver.complete());
    return dataObservable.pipe(share());
  }

  public advancedQuery(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object, offset?: number, pagesize?: number, orderby?: Array<Object>): Observable<any> {
    offset = (Util.isDefined(offset)) ? offset : this.offset;

    // Calculate page
    let page = 0;
    if (Util.isDefined(offset)) {
      page = Math.trunc(offset / 10) + 1;
    }

    let url = 'https://swapi.co/api/' + entity + '/?format=json' + '&page=' + page;

    let _innerObserver: any;
    const dataObservable = new Observable(observer => _innerObserver = observer);

    const self = this;
    this.httpClient.get(url).subscribe(resp => {
      // Prepare response for ontimize components
      let response = {
        code: 0,
        data: resp['results'],
        message: '',
        startRecordIndex: Util.isDefined(resp['previous']) ? (10 * (page - 1)) + 1 : 0,
        totalQueryRecordsNumber: resp['count']
      };
      _innerObserver.next(response);
    }, error => {
      self.parseUnsuccessfulQueryResponse(error, _innerObserver);
    }, () => _innerObserver.complete());
    return dataObservable.pipe(share());
  }

}
```

The following example shows a [`o-table`]({{ base_path }}/components/table/overview/){:target="_blank"} component configured for retrieving *starships* using the new service.

```html
<o-table attr="starships" entity="starships" columns="name;model;manufacturer;starship_class;crew;passengers"
  visible-columns="name;model;manufacturer;starship_class;passengers" pageable="yes" quick-filter="no" insert-button="no" fxFlex>

  ...

</o-table>
```

#### Use your service in a specific component

If you want to use your service in a specific component instead of using it in the whole application, you have to create a factory method that returns a new instance of your service and add a provider to your module indicating the factory method like in the example below.

```javascript
import { StarsWarsService } from '../../shared/stars-wars.service';

export function starsWarsServiceFactory(injector: Injector): StarsWarsService {
  return new StarsWarsService(injector);
}

@NgModule({

  ...

  providers: [{
    provide: 'starsWars',
    useFactory: starsWarsServiceFactory,
    deps: [Injector]
  }]
})
export class MyModule { }
```

Once the service is included in the providers of your module, an instance of it will be available in the module, so you can configure the components for using it. For this, configure the `service-type` attribute in the component with the value of the `provide` attribute indicated in the previous step. Check the example below.

```html
<o-table attr="starships" entity="starships" columns="name;model;manufacturer;starship_class;crew;passengers"
  visible-columns="name;model;manufacturer;starship_class;passengers"  pageable="yes" quick-filter="no" insert-button="no" fxFlex
  service-type="starsWars">

  ...

</o-table>
```

### Define your own CRUD methods

All the **OntimizeWeb** components that use services for retrieving data have the attributes `query-method`, `paginated-query-method`, `insert-method`, `update-method` and `deleted-method`. The purpose of these attributes is allowing the component to use your own CRUD methods defined in your service. With this you can define, for example, as many *query* methods as you want.

In the example below we have defined the `getSkywalker` method that retrieves information from the API.

```javascript
import { Injectable, Injector } from '@angular/core';

import { OntimizeEEService, Observable, Util } from 'ontimize-web-ngx';

@Injectable()
export class StarsWarsService extends OntimizeEEService {

  ...

  public getSkywalker(): Observable<any> {
    const url = 'https://swapi.co/api/people/1/';

    let _innerObserver: any;
    const dataObservable = new Observable(observer => _innerObserver = observer).share();

    const self = this;
    this.httpClient.get(url).subscribe(resp => {
      // Prepare response for ontimize components
      let response = {
        code: 0,
        data: resp,
        message: ''
      };
      _innerObserver.next(response);
    }, error => {
      self.parseUnsuccessfulQueryResponse(error, _innerObserver);
    }, () => _innerObserver.complete());
    return dataObservable;
  }

}
```

Now you can configure the `query-method` attribute of your component to use the method defined previously.

```html
<o-form service-type="starsWars" query-method="getSkywalker" header-actions="R">
  <o-text-input attr="name" read-only="yes"></o-text-input>
  <o-text-input attr="birth_year" read-only="yes"></o-text-input>
  <o-text-input attr="gender" read-only="yes"></o-text-input>
  <o-text-input attr="height" read-only="yes"></o-text-input>
  <o-text-input attr="mass" read-only="yes"></o-text-input>
</o-form>
```

### Define your own successful/unsuccessful request callback methods

Each *CRUD* method has it owns successful and unsuccessful request callbacks, called when the request ends. User can override or extends this methods to modify its behaviour. This methods are: `parseSuccessfulMETHODResponse` and `parseUnsuccessfulMETHODResponse` where `METHOD` is `query`, `advancedQuery`, `update`,`insert` or `delete`.

Both services `OntimizeService` and `OntimizeEEService` also have the generic succesful and unsuccessful request callback which are `parseSuccessfulResponse` and `parseUnsuccessfulResponse`. This callbacks are called from the previous explained *CRUD* method callbacks so user can chose whether to override a particular or the generic callback.


