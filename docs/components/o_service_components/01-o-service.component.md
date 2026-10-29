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

## Filter builder function

The `filter-builder-function` input allows associating an [`o-filter-builder`](../../data/filterbuilder/overview)
component with any component that extends `OServiceComponent` (such as `o-table`, `o-list`, `o-grid` or `o-data-view`)
when a direct template reference is not possible or when the instance needs to be resolved dynamically at query time.

This input accepts a callback function with no parameters that returns the `OFilterBuilderComponent` instance to use.
Every time the component performs a data query, it will call this function to retrieve the filter builder and apply
its expression.

> This approach is an alternative to calling the `setFilterBuilder()` method directly on the component. Use
> `filter-builder-function` when the `o-filter-builder` is defined in a different part of the template, such as
> in a parent component or inside an `o-data-view`.

**Examples**

```html

<o-form editable-detail="no" show-header="no">

  <o-column title="FILTERS">
    <o-text-input attr="NAME" read-only="no"></o-text-input>
    <o-row layout-align="end">
      <o-button attr="filter" [oFilterBuilderQuery]="filterBuilder" type="RAISED" label="Filter"></o-button>
      <o-button attr="clear" [oFilterBuilderClear]="filterBuilder" type="RAISED" label="Clear"></o-button>
    </o-row>
  </o-column>

  <o-filter-builder #filterBuilder attr="thefilter" filters="EMPLOYEENAME:NAME" [target]="tableEmployees"
    [expression-builder]="createFilter">
  </o-filter-builder>

  <o-table *ngIf="defaultView === 'table'" #tableEmployees attr="tableEmployees" service="employees" entity="employee"
    columns="EMPLOYEEID;EMPLOYEENAME;EMPLOYEESURNAME" keys="EMPLOYEEID"
    [filter-builder-function]="getFilterBuilder">
  </o-table>
  <o-grid *ngIf="defaultView === 'grid'" #gridEmployees attr="gridEmployees" service="employees" entity="employee"
    columns="EMPLOYEEID;EMPLOYEENAME;EMPLOYEESURNAME" keys="EMPLOYEEID"
    [filter-builder-function]="getFilterBuilder">

</o-form>

```

```ts
...
  @ViewChild('filterBuilder') filterBuilder: OFilterBuilderComponent;
  protected getFilterBuilder = () => this.filterBuilder;
...
```


## No results message

By default, `o-table`, `o-list` and `o-grid` show a translated "no results" message (`TABLE.EMPTY` on `o-table` / `o-list`, `GRID.EMPTY` on `o-grid`) when there is no data to display. Two inputs let you override it:

* `no-results-message`: plain text, an i18n key, or an HTML string (sanitized before rendering).
* `<ng-template #noResultsTemplate>`: a fully custom empty-state, for content the sanitizer would otherwise strip (icons, buttons, bindings...).

> When both are provided, `noResultsTemplate` takes precedence over `no-results-message`, which in turn takes precedence over the default translated message.

**Example** — custom empty state with an icon in `o-list`:

```html
<o-list #pendingReviewsList attr="pendingReviewsList" keys="equipmentId"
  columns="equipmentId;epiTypeName;serialNumber;workerFullName;maintenanceDeadlineDate" service="dashboardPendingReviews"
  entity="dashboardPendingReviews" [configure-service-args]="pendingReviewsServiceArgs" [refresh-button]="false" [insert-button]="false"
  [delete-button]="false" [selectable]="false" [quick-filter]="false" [controls]="false">
  <ng-template #noResultsTemplate>
    <div class="app-home__empty-state">
      <mat-icon>check_circle</mat-icon>
      <span>{{ 'DASHBOARD_PENDING_REVIEWS_EMPTY' | oTranslate }}</span>
    </div>
  </ng-template>
  <!-- ... row template, unrelated to noResultsTemplate ... -->
</o-list>
```

![Custom no results state]({{ "/assets/images/components/list/custom-no-results.png" | absolute_url }}){: .comp-example-img}

## E2E testing (data-testid)

The `data-testid` input, for E2E frameworks like Playwright or Cypress, is forwarded to the actual native element the user interacts with — never to the component's own host tag, unless the host *is* that element (e.g. `o-button`'s rendered `<button>`).

`o-table` / `o-list` / `o-grid` / `o-tree` use it as a **prefix**, since there is no single native element at that level: the quick-filter gets `${data-testid}-quick-filter`, and the built-in insert/refresh/delete buttons get `${data-testid}-insert` / `-refresh` / `-delete`.

> When `data-testid` isn't set, it falls back to `attr` — already a stable, meaningful identifier on these components — so most instances get a sensible test id for free.

For per-row content, `getRowDataTestId(row)` composes it with the row's key value(s) (`${data-testid}-row-${keyValues}`). `o-table` wires this onto its own rows automatically. `o-list` / `o-grid` don't render row markup themselves — it's projected from your own template — so call it directly from there:

```html
<o-list #pendingReviewsList attr="pendingReviewsList" keys="equipmentId" data-testid="pending-reviews" ...>
  @for (row of pendingReviewsList.dataArray; track row.equipmentId) {
    <mat-list-item [attr.data-testid]="pendingReviewsList.getRowDataTestId(row)" [o-list-item]="row">
      ...
    </mat-list-item>
  }
</o-list>
```

## Navigation to record detail
In the service components, the default action when user clicks a item is to trigger the navigation to its record detail. For changing this behaviour, the user can change the `detail-mode` input value using one of the following values `none`, `click` or `doubleclick`.

## Navigation to detail, edition or insertion mode
`OServiceComponent` allows to navigate to a record for viewing its details or editing it using `viewDetail` or `editDetail` methods. It also allows to navigate to a insertion route using the `insertDetail` method.

User can customize the path creation using the `detail-form-route` and `recursive-detail`, `edit-form-route` and `recursive-edit` or `insert-form-route` and `recursive-insert` inputs (depending on the navigation type).

This and other inputs and methods are explained on the **API** section of this page.
