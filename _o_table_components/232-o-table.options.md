---
permalink: /components/table/options/
title: "Table options"
---

In this section we are specifing how to define custom options for the table header menu.

{% capture tableOptionCapture %}
{% include o-component-single.md comp="tableOption" %}
{% endcapture %}
{{ tableOptionCapture | replace: '    ', ''}}

<h3 class="grey-color">Example</h3>

```html
<o-table attr="customers" entity="ECustomers" title="CUSTOMERS"
  columns="CUSTOMERID;PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  visible-columns="PHOTO;NAME;STARTDATE;CUSTOMERTYPEID;BOOLEAN;INTEGER;REAL;CURRENCY"
  sort-columns="SURNAME" keys="CUSTOMERID" parent-keys="n:NAME;CUSTOMERTYPEID"
  query-on-init="true" query-rows="6" quick-filter="yes" >

  <o-table-option label="My option"></o-table-button>

  <o-table-column attr="NAME" title="NAME"></o-table-column>

  ...

</o-table>
```

<h3 class="grey-color">Typescript code</h3>

```javascript
  ...
  import { OTableOptionComponent } from 'ontimize-web-ngx';
  ...
  @ViewChild('myOption')
  protected myOption: OTableOptionComponent;
  ...
  ngAfterViewInit() {
    this.myButton.click.subscribe(event => {
      alert('my option click');
    });
  }
```
