---
permalink: /components/table/renderers/
title: "Rendering"
---

By default, the table will place the values of your data into the cell as simple strings. If you want something other than simple strings, then you use a cell renderer. So for rendering your values, you have the following four options.

**1.** Do nothing, simple strings get used to display the table.

**2.** Use one of cell renderer predefined. The predefined types are *boolean*, *real*, *currency*, *date*, *image*, *percentage* and *string*. If a column haven't type will be *string*. You can find all information [here](#default-renders).

**3.** Use equivalent code.

**4.** Custom renderer. Below is an example but you can find all information [here](#custom-renderers).


For example:

```html
// 1.Do nothing, simple strings get used to display the table
<o-table-column attr="PHOTO" > </o-table-column>

// 2. Use one of cell renderer predefined
<o-table-column attr="PHOTO" orderable="no" searchable="no" type="image"
  image-type="base64" empty-image="assets/images/no-image.png" avatar="yes">
</o-table-column>

// 3. Use equivalent code
<o-table-column attr="PHOTO" orderable="no" searchable="no">
  <o-table-cell-renderer-image image-type="base64"
    empty-image="assets/images/no-image.png" avatar="yes">
  </o-table-cell-renderer-image>
</o-table-column>

// 4. Custom renderer.
<o-table-column attr="NAME" orderable="no" searchable="no">
  <o-table-cell-renderer-name></o-table-cell-renderer-name>
</o-table-column>
```

## Default renders

The predefined types are *boolean*, *date*, *currency*, *image* ,*integer*,  *percentage*, *real*,*service* and *string* and they are defined by the `type` property of o-table-column. If a column haven't type will be *string*. you can find all information. To consult all the parameters of the renderers see the API.

In the following example you can see different predefined renderers in the table

<p><img src="/docs/images/components/tabla/renderers_table.png" alt="Default renders Table" class="comp-example-img"></p>
```html
 <o-table  attr="accounts" columns="PHOTO;NAME;ACCOUNT;BALANCE;STARTDATE;NUMCARDS;ENDDATE;INTERESRATE;CLOSED"
      visible-columns="PHOTO;NAME;STARTDATE;ACCOUNT;BALANCE;NUMCARDS;INTERESRATE;COMMISSION" title="ACCOUNTS"
      [static-data]="getTableData()" sort-columns="ACCOUNT:DESC" query-on-init="false" quick-filter="yes" insert-button="no"
      delete-button="no" refresh-button="no" pagination-controls="no" export-button="no">
      <!--Date Renderer-->
      <o-table-column attr="STARTDATE" title="STARTDATE" type="date"> </o-table-column>
      <!--Currency Renderer-->
      <o-table-column attr="BALANCE" title="BALANCE" type="currency" thousand-separator="." decimal-separator="," currency-symbol="€"
        currency-symbol-position="right"></o-table-column>
      <!--Percentage Renderer-->
      <o-table-column attr="INTERESRATE" title="INTERESRATE" type="percentage" decimal-separator="," decimal-digits="2"></o-table-column>
      <!--Integer Renderer-->
      <o-table-column attr="NUMCARDS" title="NUMCARDS" type="integer"></o-table-column>
       <!--Boolean Renderer-->
      <o-table-column attr="COMMISSION" title="COMMISSION" type="boolean" true-value="check_circle" false-value="highlight_off" true-value-type="icon" false-value-type="icon" boolean-type="string"></o-table-cell-renderer-boolean>
      </o-table-column>
    </o-table>
```

#### Boolean

In the boolean renderer you can define the type of value with `boolean-type` property. It can be number, boolean or string
You also define type of false value and true value with `false-value-type` and `true-value-type`, it can be string, number, icon or image .The value of column with `true-value` and `false-value`. All the attributes are explained on the **API** section of this page.

 ```html
<o-table-column attr="COMMISSION" title="COMMISSION">
  <o-table-cell-renderer-boolean true-value-type="icon" true-value="check_circle" false-value="highlight_off"
   false-value-type="icon" boolean-type="string"></o-table-cell-renderer-boolean>
</o-table-column>
  ```

#### Date 

It is defined with `type="date"`. In the date renderer you can define format of the date with `format` property. You can see all formats in <a href="http://momentjs.com/"  target="_blank">MomentJS</a>. All the attributes are explained on the **API** section of this page.
```html 
<o-table-column attr="STARTDATE" title="STARTDATE" width="22%" type="date" format="LL"></o-table-column>
```

#### Currency
It is defined with `type="currency"`.In the currency renderer you can format currency simbol with `currency-symbol` property and configure the position of currency symbol with `currency-symbol-position` property. All the attributes are explained on the **API** section of this page.

```html 
<o-table-column attr="BALANCE" title="BALANCE" currency-symbol="€" type="currency" grouping="yes" thousand-separator=","  
  width="18%"></o-table-column>
```

#### Image
It is defined with `type="image"`. In the image renderer you can configure whether or not to visualize image as an avatar with `avatar` property and you also configure type of image with `image-type` property. All the attributes are explained on the **API** section of this page.

```html
<o-table-column attr="PHOTO" orderable="no" searchable="no" type="image"
 image-type="base64" empty-image="assets/images/no-image.png" avatar="yes"> </o-table-cell-renderer-image>
</o-table-column>
````

#### Integer
It is defined with `type="integer"` in *o-table-column* selector. All the attributes are explained on the **API** section of this page.

```html
<o-table-column attr="NUMCARDS" title="NUMCARDS" type="integer"></o-table-column>
````

#### Percentage

it is defined with `type="percentage"` in *o-table-column* selector. All the attributes are explained on the **API** section of this page.

```html
<o-table-column attr="INTERESRATE" title="INTERESRATE" type="percentage" decimal-separator="," decimal-digits="2"></o-table-column>
```

#### Service

it is defined with `type="service"` in *o-table-column* selector. All the attributes are explained on the **API** section of this page.

```html
<o-table #tableEmployees attr="employees" service="employees" entity="employee" columns="EMPLOYEEID;EMPLOYEETYPEID;EMPLOYEENAME;EMPLOYEESURNAME;EMPLOYEEADDRESS;EMPLOYEESTARTDATE;EMPLOYEEEMAIL;OFFICEID"
      visible-columns="EMPLOYEENAME;EMPLOYEESURNAME;EMPLOYEEADDRESS;EMPLOYEEEMAIL;EMPLOYEETYPEID;EMPLOYEESTARTDATE" keys="EMPLOYEEID"
      sort-columns="EMPLOYEESURNAME" detail-mode="none" insert-button="no" pageable="yes">
      <o-table-column attr="EMPLOYEESTARTDATE" title="EMPLOYEESTARTDATE" type="date" format="LL"></o-table-column>
      <o-table-column attr="EMPLOYEETYPEID" title="EMPLOYEETYPEID">
        <o-table-cell-renderer-service service="employees" entity="employeeType" columns="EMPLOYEETYPEID;EMPLOYEETYPENAME" value-column="EMPLOYEETYPENAME"></o-table-cell-renderer-service>
      </o-table-column>
    </o-table>
```
## Custom renderers


To create a custom render, you need to create a new component to display custom renderer information and place this render in the content of cell.

Here's how you might begin in your file .ts:

- Your component must extends ```OBaseTableCellRenderer```.

- Also add a line ``` @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any> ```  you'll acquire the <ng-template> contents with a TemplateRef and access the view container.
- In constructor you must add
```javascript
constructor(protected injector: Injector) {
  super(injector);
  this.initialize();
}
```

- If you want to customize the value of the columns in exports or filtering, you must overwrite the method *getCellData(cellvalue,rowvalue)*


The following example show how render two values of column in a cell, "SURNAME, name" and override method getCellData

The o-table-cell-renderer-name.ts file is as follows:

```javascript
import { Component, Injector, ViewChild, TemplateRef } from '@angular/core';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';


@Component({
    selector: 'custom-render',
    templateUrl: './custom-render.component.html'
})

export class OTableCellRendererName extends OBaseTableCellRenderer {

    @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;

    constructor(protected injector: Injector) {

        super(injector);
        this.initialize();
    }
     getCellData(cellvalue: any,rowvalue) {
       return `rowvalue['SURNAME'].toUpperCase()., .rowvalue[NAME]`;
     }
}
```

Here's how you might begin in your file .html:

- Your component must start *<ng-template #templateref let-cellvalue="cellvalue" let-rowvalue="rowvalue">* and end *</ng-template>*.
The *let* keyword declares a template input variable that you reference within the template. The input variables are *cellvalue* and *rowvalue*. The parser translates let cellvalue and let rowvalue into variables named, *let-cellvalue* and *let-rowvalue*.


The o-table-cell-renderer-name.html file is as follows:

```html
<ng-template #templateref let-cellvalue="cellvalue" let-rowvalue="rowvalue">
  {{ rowvalue['SURNAME'] | uppercase }}, {{ rowvalue['NAME'] }}
</ng-template>
```


Finally, add the component *OTableCellRendererName* to your module.


