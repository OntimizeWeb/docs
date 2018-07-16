---
title: "Services"
permalink: /guide/service/
---

{% include base_path %}
{% include toc %}

This section describes the **OntimizeWeb** services an how to extend them to add or modify its functionality.

## Ontimize services

OntimizeWeb services are used for fetching and saving data from servers based on [Ontimize](https://www.ontimize.com/){:target="_blank"}. There is two types of Ontimize services depending on the server technology used: `OntimizeService` and `OntimizeEEService`. You must indicate which one the application will use by configuring the `serviceType` attribute in the [application configuration]({{ base_path }}/guide/appconfig/#application-configuration){:target="_blank"}.

Both services have the same methods for configuring and sending request to the server. This methods are the following:

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

/* Authentication methods */
startsession(user: string, password: string): Observable<any>;
endsession(user: string, sessionId: number): Observable<any>;
redirectLogin?(sessionExpired?: boolean);
```

The standard response of the request made to Ontimize based servers allways follows the following structure:

```javascript
{
    code: number;
    data: any;
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

## Extending Ontimize services

You may need extra functionality or changing the behaviour of a service, for doing this follow the next steps:

### Create an extended Ontimize service

Create a new service class that extends an Ontimize service (`OntimizeService` or `OntimizeEEService`). In the following example we are creating a service called `StarsWarsService` that extends the `OntimizeEEService`.

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

### Use your service in the whole application

In case you want all the components in your application to use your new service, you have to modify `serviceType` attribute in the [application configuration]({{ base_path }}/guide/appconfig/#application-configuration){:target="_blank"}. Import your service class and include it in the `serviceType` attribute like in the example below.

```javascript
import { StarsWarsService } from './shared/stars-wars.service';

export const CONFIG: Config = {

  ...

  // The service type used (Ontimize REST standart, Ontimize REST JEE or custom implementation) in the whole application.
  serviceType: StarsWarsService,

  ...

};
```

Now you can override the methods indicated in the previous section. The following example shows the new service consuming the [Stars Wars API](https://swapi.co/){:target="_blank"} for querying different entities. We have override the `query` and the `advancedQuery` methods for making simple and paginated request to the API. Note that we must adapt the API response to the ontimize service response for using the retrieved data with the **OntimizeWeb** components.

```javascript
import { Injectable, Injector } from '@angular/core';

import { OntimizeEEService, Observable, Util } from 'ontimize-web-ngx';

@Injectable()
export class StarsWarsService extends OntimizeEEService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  public query(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object): Observable<any> {
    const url = 'https://swapi.co/api/' + entity + '/?format=json';

    let _innerObserver: any;
    const dataObservable = new Observable(observer => _innerObserver = observer).share();

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
      self.parseUnsuccessfulResponse(error, _innerObserver);
    }, () => _innerObserver.complete());
    return dataObservable;
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
    const dataObservable = new Observable(observer => _innerObserver = observer).share();

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
      self.parseUnsuccessfulResponse(error, _innerObserver);
    }, () => _innerObserver.complete());
    return dataObservable;
  }

}
```

The following example shows a [`o-table`]({{ base_path }}/components/table/){:target="_blank"} component configured for retrieving *starships* using the new service.

```html
<o-table attr="starships" entity="starships" columns="name;model;manufacturer;starship_class;crew;passengers"
  visible-columns="name;model;manufacturer;starship_class;passengers" pageable="yes" quick-filter="no" insert-button="no" fxFlex>

  ...

</o-table>
```

### Use your service in a specific component

If you want to use your service in a specific component instead of using it in the whole application, you have to add your service as a provider in the module where you want to use it like in the example below.

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

Once the service is included in the providers, an instance of it will be available in the module, so you can configure the components for using it. For this, configure the `service-type` attribute in the component like in the example below.

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
      self.parseUnsuccessfulResponse(error, _innerObserver);
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
