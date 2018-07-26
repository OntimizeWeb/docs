---
permalink : /components/service/service/
title : "Service component"
comp: "service"
---
{% include base_path %}
{% include toc %}

Components extending the `OServiceComponent` are components which extends the behaviour of the `OServiceBaseComponent` adding more features, mostly about navigation. New properties and methods are explained on the **API** section of this page.

For using the `OntimizeService` configuration (explained [here]({{ base_path }}/guide/service/){:target="_blank"}) and have a unique instance of it in your component you shoud add it in the providers definition, as you can see in the following example. The class inputs are available in the static `DEFAULT_INPUTS_O_SERVICE_COMPONENT` variable, so a component implementing `OServiceComponent` class will look like:

```javascript
@Component({
  selector: 'my-component',
  templateUrl: './my-component.html',
  styleUrls: ['./my-component.scss'],
  inputs: [
    ...OServiceComponent.DEFAULT_INPUTS_O_SERVICE_COMPONENT,
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

<!-- ## Item height
row-height
 -->

## Navigation to record detail
In the service components, the default action when user clicks a item is to trigger the navigation to its record detail. For changing this behaviour, the user can change the `detail-mode` input value using one of the following values `none`, `click` or `doubleclick`.

## Navigation to detail, edition or insertion mode
`OServiceComponent` allows to navigate to a record for viewing its details or editing it using `viewDetail` or `editDetail` methods. It also allows to navigate to a insertion route using the `insertDetail` method.

User can customize the path creation using the `detail-form-route` and `recursive-detail`, `edit-form-route` and `recursive-edit` or `insert-form-route` and `recursive-insert` inputs (depending on the navigation type).

This and other inputs and methods are explained on the **API** section of this page.
