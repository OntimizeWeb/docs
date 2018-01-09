---
permalink: /components/table/contextmenu/
title: "Table context menu"
---

In this section we are specifing how to define a context menu for the table rows.

{% capture paginatorFileCapture %}
  {% include o-component-single.md comp="tableContextMenu"  %}
{% endcapture %}
{{ paginatorFileCapture | replace: '    ', ''}}


<h3 class="grey-color">Example</h3>

```html
<o-table attr="customers" entity="ECustomers" title="CUSTOMERS"
  columns="CUSTOMERID;PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  visible-columns="PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  sort-columns="SURNAME" keys="CUSTOMERID" parent-keys="n:NAME;CUSTOMERTYPEID"
  query-on-init="true" query-rows="6" quick-filter="yes" >

  <o-table-button label="My button" icon="account_circle"></o-table-button>

  <o-table-column attr="NAME" title="NAME"></o-table-column>

  ...
  <o-table-context-menu [context-menu]="myContextMenu"></o-table-context-menu>
</o-table>

<o-context-menu #myContextMenu>
  <o-context-menu-item icon="face" label="Item 1" (execute)="onExecute($event)">
  <o-context-menu-item icon="star_rate" label="Item 2" enabled="no">
  <o-context-menu-item label="Item 3" (execute)="onExecute($event)">
</o-context-menu>
```

For more information about _o-context-menu_ component definition, please read the [docs]({{ base_path }}/docs/components/contextmenu/).
