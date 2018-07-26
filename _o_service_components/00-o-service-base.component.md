---
permalink : /components/service/service-base/
title : "Service base component"
comp: "serviceBase"
---
{% include base_path %}
{% include toc %}


Components extending the `OServiceBaseComponent` class are components which have a service instance configured ready for ask for remote data. This class provides a set of inputs and methods and attributes inherited by all the service components. This properties are explained on the **API** section of this page.

The class inputs are available in the static `DEFAULT_INPUTS_O_SERVICE_BASE_COMPONENT` variable, so a component implementing `OServiceBaseComponent` class will look like:

```javascript
@Component({
  selector: 'my-component',
  templateUrl: './my-component.html',
  styleUrls: ['./my-component.scss'],
  inputs: [
    ...OServiceBaseComponent.DEFAULT_INPUTS_O_SERVICE_BASE_COMPONENT,
    // more component inputs
  ],
  outputs: [
    // component ouputs
  ],
  providers: [
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] }
  ]
})
export class MyComponent extends OServiceBaseComponent {

}
```

## Binding to remote data

To manage server data, it is necessary to configure the `service` and the `entity` attributes. You may need configure the `service-type` attribute in case you don't use the default **OntimizeWebService** to manage. For more information see in [App configuration]({{ base_path }}/guide/appconfig/){:target="_blank"}.

## Binding to local data
For local data binding you simply need to supply an array of TypeScript objects/JSON via the `static-data` property. Adicional, you need to set `query-on-init="false"` in `o-table` component.

If you need the data query to be performed after the `parent-keys` is updated, `query-on-init = false` and `query-on-bind = true` must be changed

## query-on-init


## query-on-bind


## CRUD methods

There are a set of preconfigured method names for doing the `CRUD` operations that can be overrided using its inputs: `query-method`, `paginated-query-method`, `insert-method`, `update-method` or `delete-method`. You can learn more about Ontimize services configuration [here]({{ base_path }}/guide/service/){:target="_blank"}.

This are the methods that will be invoked when the component needs to query, insert, update or delete data from its configured `service` and `entity`.

### Parent keys filter
When a service component is inside a form component you can configure the `parent-keys` attribute of the with the `attr` of the [form fields]({{ base_path }}/components/input/overview/){:target="_blank"} you want to include in the query filtering.

Keep in mind that a service component will not send any request when the parent keys values are all null. You can configure the `query-with-null-parent-keys` to avoid that, but it is not always recommended, it might query for too many data.

## Storing component state
Using the `store-state` boolean input allows user to choose whether or not to store the component configuration state in local storage. That state is returned by the `getDataToStore` method under the key returned in `getComponentKey` callback.


