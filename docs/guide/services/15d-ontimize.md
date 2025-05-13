---
layout: default
title: "Ontimize Web"
permalink: /guide/service/ontimize
parent: Services
grand_parent: Guide
nav_order: 2
---

{% include base_path %}
{% include toc %}

This section describes the **OntimizeWeb** services an how to extend them to add or modify its functionality.

OntimizeWeb services are used for fetching and saving data from servers based on [Ontimize](https://github.com/ontimize){:target="_blank"}. There is two types of Ontimize services depending on the server technology used: `OntimizeService` and `OntimizeEEService`. You must indicate which type of service the application will use by configuring the `serviceType` attribute in the [application configuration]({{ base_path }}/guide/appconfig/#application-configuration-file){:target="_blank"}.

You can also use your own service and adapt its response to OntimizeWeb's standard response. This will be explained later in this section.

### Ontimize services methods

Both services `OntimizeService` and `OntimizeEEService` have the same methods for configuring and sending request to the server. This methods are the following:

```javascript
/* Configuration methods */
getDefaultServiceConfiguration(serviceName?: string): Object;
configureService(config: any): void;

/* CRUD methods */
query(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object): Observable<any>;
advancedQuery(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: object,
    offset?: number, pagesize?: number, orderby?: Array<object>): Observable<ServiceResponse>
insert(av: Object = {}, entity: string, sqltypes?: object): Observable<ServiceResponse>
update(kv: Object = {}, av: object = {}, entity?: string, sqltypes?: object): Observable<ServiceResponse>
delete(kv: Object = {}, entity?: string, sqltypes?: Object): Observable<ServiceResponse>

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
  * **sqltypes**: object with the data types for each colum that participates in the request according to Java standard (see [SQLType](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/15.x.x/projects/ontimize-web-ngx/src/lib/util/sqltypes.ts){:target='_blank'}).
* **advancedQuery**: performs a request to get **paginated** data from the server.
  * **kv**: indicates the filtering values. An empty object means that no filter will be applied into the request.
  * **av**: indicates the columns that you want to request.
  * **entity**: indicates the entity to perform the request.
  * **sqltypes**: object with the data types for each colum that participates in the request according to Java standard (see [SQLType](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/15.x.x/projects/ontimize-web-ngx/src/lib/util/sqltypes.ts){:target='_blank'}).
  * **offset**: the index of the first item requested in the collection.
  * **pagesize**: the number of items requested.
  * **orderby**: object with the sorting that will be applied to the request result.
* **insert**: performs a insert operation request to the server.
  * **av**: indicates the values to insert.
  * **entity**: indicates the entity to perform the request.
  * **sqltypes**: object with the data types for each colum that participates in the request according to Java standard (see [SQLType](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/15.x.x/projects/ontimize-web-ngx/src/lib/util/sqltypes.ts){:target='_blank'}).
* **update**: performs an update operation request to the server.
  * **kv**: indicates the filtering values for performing the update.
  * **av**: indicates the values to update.
  * **entity**: indicates the entity to perform the request.
  * **sqltypes**: object with the data types for each colum that participates in the request according to Java standard (see [SQLType](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/15.x.x/projects/ontimize-web-ngx/src/lib/util/sqltypes.ts){:target='_blank'}).
* **delete**: performs an delete operation request to the server.
  * **kv**: indicates the filtering values for performing the deletion.
  * **entity**: indicates the entity to perform the request.
  * **sqltypes**: object with the data types for each colum that participates in the request according to Java standard (see [SQLType](https://github.com/OntimizeWeb/ontimize-web-ngx/blob/15.x.x/projects/ontimize-web-ngx/src/lib/util/sqltypes.ts){:target='_blank'}).

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

![Ontimize service response example]({{ base_path }}/assets/images/request.png){: .align-center}

### Use OntimizeService in your application

Check the example below about how to configure and use the `OntimizeService` for querying data in your application.

```javascript
protected service: OntimizeService;

constructor(protected injector: Injector) {
  this.service = this.injector.get(OntimizeService);
}

ngOnInit() {
  this.configureService();
}

protected configureService() {
  // Configure the service using the configuration defined in the `app.services.config.ts` file
  const conf = this.service.getDefaultServiceConfiguration('movements');
  this.service.configureService(conf);
}

getMovements(data) {
  if (data.hasOwnProperty('ACCOUNTID') && this.service !== null) {
    const filter = {
      'ACCOUNTID': data['ACCOUNTID']
    };
    const columns = [this.yAxis, this.xAxis, 'DATE_'];
    this.service.query(filter, columns, 'movement').subscribe(resp => {
      if (resp.code === 0) {

        // resp.data contains the data retrieved from the server

      } else {
        alert('Impossible to query data!');
      }
    });
  }
```
