---
permalink: /components/table/buttons/
title: "Table buttons"
---

O-table component allow to adding extra buttons in the toolbar with `o-table-button` selector.
You can configure:
<ul>
  <li> The icon in `icon` property, this name must to be of google icon (see Google material design icons)</li>
  <li> The label in `label` property</li>
</ul>

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

</o-table>
```

<h3 class="grey-color">Typescript code</h3>

```javascript
  ...
  import { OTableButtonComponent } from 'ontimize-web-ngx';
  ...
  @ViewChild('myButton')
  protected myButton: OTableButtonComponent;
  ...
  ngAfterViewInit() {
    this.myButton.click.subscribe(event => {
      alert('my button click');
    });
  }
```
