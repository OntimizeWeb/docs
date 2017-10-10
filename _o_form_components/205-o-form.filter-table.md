---
layout: single
permalink: /form-component/o-form.filter-table/
title: "Form to filter table"
excerpt: "Tips for using a form component as filter to a table"
---

Using a form component to filtering a table data does not require any extra implementation. 
For this task is enough to set the *parent-keys* attribute in the table component with 
*attr* values from form fields, using alias if it is needed. 


```html
<div layout="column" layout-align="center top" layout-margin>

  <o-form layout="column" show-header="no" label-header="GENERAL" 
    header-actions="R" #oForm>

  <div layout="row" flex>
    <o-list-picker attr="CUSTOMERTYPEID" label="CUSTOMERTYPEID" flex layout-padding
      query-on-init="yes" query-on-bind="yes" enabled="yes" filter="yes" 
      value-column="CUSTOMERTYPEID" keys="CUSTOMERTYPEID"
      entity="ECustomerTypes" columns="CUSTOMERTYPEID;DESCRIPTION" 
      visible-columns="DESCRIPTION" separator=" - ">
    </o-list-picker>

    <o-text-input attr="n" label="NAME" flex layout-padding></o-text-input>

    <o-text-input attr="s" label="SURNAME" flex layout-padding></o-text-input>
  </div>

  <o-datatable attr="customers" entity="ECustomers" title="CUSTOMERS" 
    columns="CUSTOMERID;SURNAME;NAME;STARTDATE;EMAIL;CUSTOMERTYPEID;LATITUDE;LONGITUDE" 
    visible-columns="NAME;SURNAME;STARTDATE;EMAIL;CUSTOMERTYPEID;LATITUDE;LONGITUDE" 
    editable-columns="NAME;SURNAME;STARTDATE;EMAIL;LATITUDE;LONGITUDE" 
    sort-columns="SURNAME" keys="CUSTOMERID" 
    parent-keys="n:NAME;s:SURNAME;CUSTOMERTYPEID" 
    query-on-init="true" query-rows="15" quick-filter="yes" 
    insert-table="yes" detail-mode="none" edit-on-focus="no">

    <o-datatable-column attr="NAME" title="NAME"></o-datatable-column>

    <o-datatable-column attr="SURNAME" title="SURNAME"></o-datatable-column>

    <o-datatable-column attr="STARTDATE" title="STARTDATE" type="date" format="LL" 
      date-model-type="string" date-model-format="YYYY-MM-DD HH:mm:ss">
    </o-datatable-column>

    <o-datatable-column attr="EMAIL" title="EMAIL"></o-datatable-column>

    <o-datatable-column attr="CUSTOMERTYPEID" title="CUSTOMERTYPEID" editable="true">
      <o-datatable-cell-renderer-service entity="ECustomerTypes" value-column="CUSTOMERTYPEID" 
        columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION">
      </o-datatable-cell-renderer-service>
      <o-datatable-cell-editor-combo entity="ECustomerTypes" value-column="CUSTOMERTYPEID" 
        columns="CUSTOMERTYPEID;DESCRIPTION" visible-columns="DESCRIPTION">
      </o-datatable-cell-editor-combo>
    </o-datatable-column>

    <o-datatable-column attr="LATITUDE" title="LATITUDE" type="real" 
      grouping="no" decimal-separator="," decimal-digits="6">
    </o-datatable-column>

    <o-datatable-column attr="LONGITUDE" title="LONGITUDE" type="real" 
      grouping="no" decimal-separator="," decimal-digits="6">
    </o-datatable-column>

    <o-datatable-column>
      <o-datatable-cell-renderer-action action="edit">
      </o-datatable-cell-renderer-action>
    </o-datatable-column>

    <o-datatable-column>
      <o-datatable-cell-renderer-action action="delete">
      </o-datatable-cell-renderer-action>
    </o-datatable-column>

    <o-datatable-column>
      <o-datatable-cell-renderer-action action="detail">
      </o-datatable-cell-renderer-action>
    </o-datatable-column>

  </o-datatable>

  </o-form>

</div>
```
