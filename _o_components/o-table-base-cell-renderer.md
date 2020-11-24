---
permalink: /components/table/obasetablecellrenderer/overview
title: "OBaseTableCellRenderer"
comp: obasetablecellrenderer
---
{% include base_path %}

## Description

All cell renderers in OntimizeWeb extend the *OBaseTableCellRenderer class*. This class provides a set of methods and properties by all the cell renderers components. This methods and attributes are explained on the API section of this page.

Below we will show an example of the custom cell renderer.

Example
```javascript
import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer, OCurrencyPipe } from 'ontimize-web-ngx';

@Component({
  selector: 'o-table-column-renderer-balance',
  templateUrl: './o-table-column-renderer-balance.component.html',
  host: { 'o-mat-column-currency': 'true' }
})
export class OTableColumnRendererBalanceComponent extends OBaseTableCellRenderer {

  @ViewChild('templateref', { read: TemplateRef, static: true }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
    this.setComponentPipe();
  }

  setComponentPipe() {
    this.componentPipe = new OCurrencyPipe(this.injector);
  }

  ngOnInit() {
    this.pipeArguments = {
    currencySimbol: '€',
    currencySymbolPosition: 'right',
    decimalDigits: 2,
    decimalSeparator: ',',
    grouping: true,
    thousandSeparator: '.'
    };
  }

  getCellData(value: any) {
    let parsedValue: string;
    if (this.componentPipe && typeof this.pipeArguments !== 'undefined' && value !== undefined) {
    parsedValue = this.componentPipe.transform(value, this.pipeArguments);
    }
    return parsedValue;
  }

}
```
