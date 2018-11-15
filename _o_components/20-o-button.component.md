---
permalink: /components/button/
title: "Button"
comp: button
---

The `o-button` component is a wrapper for Angular Material buttons. It allows add buttons to your application and configure them easily.

## Example

```html
  <o-button attr="flat" type="FLAT" label="FLAT" (click)="onClick($event)"></o-button>

  <o-button attr="raised" type="RAISED" label="RAISED" (click)="onClick($event)"></o-button>

  <o-button attr="floating" type="FLOATING" icon="add" (click)="onClick($event)"></o-button>
```

![Button]({{ "/images/components/button/o-button.png" | absolute_url }}){: .comp-example-img}

You can see this live example in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/buttons){:target="_blank"}.
