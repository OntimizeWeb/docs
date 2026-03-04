---
permalink : /components/service/service/overview
title : "Service component"
comp: "service"
nav_exclude: true
layout: o-component
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

## Initial-filter-function
The `initial-filter-function` input allows you to provide a callback function that returns an initial filter to be applied on every query performed by the component. This filter is merged with any other active filters (quick filter, filter builder) using a logical `AND` operation.

The returned value can be either an OntimizeWeb **Expression** object (for complex, structured filter expressions) or a **plain key-value object** (for simple column-value filters). The component handles both cases automatically:

* If the returned value is an Expression, it is combined with the existing filter expression using FilterExpressionUtils.OP_AND.
* If the returned value is a plain object, its properties are merged directly into the base filter object via object spread.

This input is especially useful when you need to enforce a persistent filter condition regardless of user interactions, such as restricting data to the current user, a specific tenant, or a fixed business rule.

**Examples**
```html
<o-table  ...  [initial-filter-function]="initialFilterFunction">
  ...
</o-table>
```

```ts
import { Expression, FilterExpressionUtils } from 'ontimize-web-ngx';

// Returning a Expression (STARTDATE > 01/01/2010 AND < Today)
initialFilterFunction(): Expression {
  const exp1 = FilterExpressionUtils.buildExpressionMoreEqual('STARTDATE', 1262304000000);
  const exp2 = FilterExpressionUtils.buildExpressionLessEqual('STARTDATE', Date.now());
  return FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND);
}

//Returning a plain key-value object
initialFilterFunction(): { [key: string]: any } {
  return { CUSTOMERTYPEID: 1 };
}
```

**NOTE**:
* **Execution on every query**: The callback is invoked on every request made by the component, including pagination, sorting, and refresh actions. Ensure the function is lightweight and side-effect free.
* **Compatibility**: This input is available on all components that extend OServiceComponent, including o-table, o-grid, o-list, and similar data-bound components.

## Navigation to record detail
In the service components, the default action when user clicks a item is to trigger the navigation to its record detail. For changing this behaviour, the user can change the `detail-mode` input value using one of the following values `none`, `click` or `doubleclick`.

## Navigation to detail, edition or insertion mode
`OServiceComponent` allows to navigate to a record for viewing its details or editing it using `viewDetail` or `editDetail` methods. It also allows to navigate to a insertion route using the `insertDetail` method.

User can customize the path creation using the `detail-form-route` and `recursive-detail`, `edit-form-route` and `recursive-edit` or `insert-form-route` and `recursive-insert` inputs (depending on the navigation type).

This and other inputs and methods are explained on the **API** section of this page.
