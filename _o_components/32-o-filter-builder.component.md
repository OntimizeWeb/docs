---
permalink: /components/filterbuilder/
title: "Filter builder"
comp: filterbuilder
---

{% include base_path %}
{% include toc %}

The `o-filter-builder` component is used for easily building complex structures for filtering the data of a [table]({{ base_path }}/components/table/). It uses the values of the form components provided on its `filters` attribute and placed on its parent [form]({{ base_path }}/components/form/). All the attributes are explained on the **API** section of this page.

> **NOTE:** Do not add elements to your screen but is a component that allows to build [complex filtering expressions]({{base_path}}/guide/filterexpression/).

## Query directive
The `oFilterBuilderQuery` directive is used to trigger the `reloadData` method of the component indicated on the `target` attribute of the filter builder component. This directive must be attached to a clickable component and you must provide the `o-filter-builder` reference as parameter in order to indicate the directive which filter builder trigger the filter action.

```html
<o-button attr="filter" [oFilterBuilderQuery]="filterBuilder" type="RAISED" label="Filter"></o-button>
```
The use of this directive is optional, this behaviour can be achived in some other ways. Some of them are the following:
* Calling the `triggerReload` method of the `o-filter-builder` component.
* Setting the `query-on-change` attribute of the `o-filter-builder` component to **yes** will make the fillter be applied each time the value of a form component included in the filter changes.

## Clear directive
The `oFilterBuilderClear` directive is used to clear the form components that participate on the filter. This directive must be attached to a clickable component. You must provide the reference of the `o-filter-builder`component as parameter, so the directive know which filter builder must notify to clear the form components.

```html
<o-button attr="clear" [oFilterBuilderClear]="filterBuilder" type="RAISED" label="Clear"></o-button>
```

## Building the filter
This `o-filter-builder` component builds automatically [complex filtering expressions]({{ base_path }}/guide/filterexpression/){:target='_blank'} considering the values provided by the form components included in the `filters` attribute. For building this complex expression, the component ignores **null** and **undefined** values and join all the simple expressions with the **OR** operator by default.

For building custom complex filtering expressions, set the `expression-builder` attribute with a function that returns an `IExpression` object like in the example below.

```html
<o-filter-builder #filterBuilder attr="thefilter" filters="NAME:EMPLOYEENAME;SURNAME:EMPLOYEESURNAME;EMPLOYEETYPEID" [target]="tableEmployees"
  [expression-builder]="createFilter"></o-filter-builder>
```

Read more abut how to build complex filtering expressions [here]({{ base_path }}/guide/filterexpression/){:target='_blank'}.

## Complete example
In the following example there is a `o-form` component that contains two `o-text-input` and a `o-list-picker` used to filter the `o-table` at the bottom. For this, we use the `o-filter-builder` component and provide the form components attributes for getting the filter values.

```html
<o-form editable-detail="no" show-header="no">

  <o-column title-label="{% raw %}{{ 'FILTERS' | oTranslate }}{% endraw %}">
    <o-row layout-align="space-between center">
      <o-text-input attr="NAME" read-only="no" fxFlex="33"></o-text-input>
      <o-text-input attr="SURNAME" read-only="no" fxFlex="66"></o-text-input>
    </o-row>

    <o-list-picker attr="EMPLOYEETYPEID" read-only="no" service="employees" entity="employeeType" columns="EMPLOYEETYPEID;EMPLOYEETYPENAME"
      value-column="EMPLOYEETYPEID" keys="EMPLOYEETYPEID" visible-columns="EMPLOYEETYPENAME" width="33%">
    </o-list-picker>

    <o-row layout-align="end">
      <o-button attr="filter" [oFilterBuilderQuery]="filterBuilder" type="RAISED" label="Filter" class="filter-button"></o-button>
      <o-button attr="clear" [oFilterBuilderClear]="filterBuilder" type="RAISED" label="Clear" class="filter-button"></o-button>
    </o-row>
  </o-column>

  <o-filter-builder #filterBuilder attr="thefilter" filters="EMPLOYEENAME:NAME;EMPLOYEESURNAME:SURNAME;EMPLOYEETYPEID" [target]="tableEmployees"
    query-on-change="no" query-on-change-delay="500" [expression-builder]="createFilter"></o-filter-builder>

  <o-column title-label="{% raw %}{{ 'EMPLOYEES' | oTranslate }}{% endraw %}">
    <o-table #tableEmployees attr="employees" service="employees" entity="employee" columns="EMPLOYEEID;EMPLOYEETYPEID;EMPLOYEENAME;EMPLOYEESURNAME;EMPLOYEEADDRESS;EMPLOYEESTARTDATE;EMPLOYEEEMAIL;OFFICEID"
      visible-columns="EMPLOYEENAME;EMPLOYEESURNAME;EMPLOYEEADDRESS;EMPLOYEEEMAIL;EMPLOYEETYPEID;EMPLOYEESTARTDATE" keys="EMPLOYEEID"
      sort-columns="EMPLOYEESURNAME" detail-mode="none" insert-button="no" pageable="yes">
      <o-table-column attr="EMPLOYEESTARTDATE" title="EMPLOYEESTARTDATE" type="date" format="LL"></o-table-column>
      <o-table-column attr="EMPLOYEETYPEID" title="EMPLOYEETYPEID">
        <o-table-cell-renderer-service service="employees" entity="employeeType" columns="EMPLOYEETYPEID;EMPLOYEETYPENAME" value-column="EMPLOYEETYPENAME"></o-table-cell-renderer-service>
      </o-table-column>
    </o-table>
  </o-column>
</o-form>
```

```javascript
import { Component, } from '@angular/core';

import { FilterExpressionUtils, IExpression } from 'ontimize-web-ngx';

@Component({
  selector: 'employees-home',
  templateUrl: './employees-home.component.html',
  styleUrls: ['./employees-home.component.scss']
})
export class EmployeesHomeComponent {

  createFilter(values: Array<{ attr, value }>): IExpression {
    // Prepare simple expressions from the filter components values
    let filters: Array<IExpression> = [];
    values.forEach(fil => {
      if (fil.value) {
        if (fil.attr === 'EMPLOYEENAME' || fil.attr === 'EMPLOYEESURNAME') {
          filters.push(FilterExpressionUtils.buildExpressionLike(fil.attr, fil.value));
        }
        if (fil.attr === 'EMPLOYEETYPEID') {
          filters.push(FilterExpressionUtils.buildExpressionEquals(fil.attr, fil.value));
        }
      }
    });

    // Build complex expression
    if (filters.length > 0) {
      return filters.reduce((exp1, exp2) => FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND));
    } else {
      return null;
    }
  }

}
```

## Demo
You can see this working example in the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/quickstart/main/employees){:target="_blank"} or check the code in [GitHub](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/tree/master/src/app/main/employees/employees-home){:target="_blank"}.
