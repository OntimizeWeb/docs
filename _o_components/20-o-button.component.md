---
permalink: /components/button/
title: "Button"
comp: button
---

The `o-button` component is a wrapper for Angular Material buttons. It allows add buttons to your application and configure them easily.

## Example

```html
  <o-button attr="basic" type="BASIC" label="BASIC" (click)="onClick($event)"></o-button>

  <o-button attr="raised" type="RAISED" label="RAISED" (click)="onClick($event)"></o-button>

  <o-button attr="stroked" type="STROKED" label="STROKED" (click)="onClick($event)"></o-button>

   <o-button attr="icon" type="ICON" icon="add"  (click)="onClick($event)"></o-button>

  <o-button attr="floating" type="FAB" icon="power_setting"  (click)="onClick($event)"></o-button>

  <o-button attr="floating-mini" type="FAB-MINI" icon="power_setting" (click)="onClick($event)"></o-button>
```

![Button]({{ "/images/components/button/o-button.png" | absolute_url }}){: .comp-example-img}

You can see this live example in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/buttons){:target="_blank"}.
