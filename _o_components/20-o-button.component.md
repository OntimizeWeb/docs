---
permalink: /components/button
title: "Button"
comp: button
parent: Button
grand_parent: Components
---
  The `o-button` component is a wrapper for Angular Material buttons. It allows add buttons to your application and configure them easily.

  ## Example

  ```html
    <div fxLayout="column" layout-padding>
      <div fxLayout="row">
        <o-button attr="basic1" type="BASIC" label="BASIC" layout-padding></o-button>
        <o-button attr="basic2" type="BASIC" label="Primary" layout-padding color="primary"></o-button>
        <o-button attr="basic3" type="BASIC" label="Accent" layout-padding color="accent"></o-button>
        <o-button attr="basic4" type="BASIC" label="Warn" layout-padding color="warn"></o-button>
        <o-button attr="basic5" type="BASIC" label="Disabled" layout-padding enabled="no"></o-button>
      </div>
      <div fxLayout="row">
        <o-button attr="raised1" type="RAISED" label="RAISED" layout-padding></o-button>
        <o-button attr="raised2" type="RAISED" label="Primary" layout-padding color="primary"></o-button>
        <o-button attr="raised3" type="RAISED" label="Accent" layout-padding color="accent"></o-button>
        <o-button attr="raised4" type="RAISED" label="Warn" layout-padding color="warn"></o-button>
        <o-button attr="raised5" type="RAISED" label="Disabled" layout-padding enabled="no"></o-button>
      </div>
      <div fxLayout="row">
        <o-button attr="stroked1" type="STROKED" label="STROKED" layout-padding></o-button>
        <o-button attr="stroked2" type="STROKED" label="Primary" layout-padding color="primary"></o-button>
        <o-button attr="stroked3" type="STROKED" label="Accent" layout-padding color="accent"></o-button>
        <o-button attr="stroked4" type="STROKED" label="Warn" layout-padding color="warn"></o-button>
        <o-button attr="stroked5" type="STROKED" label="Disabled" layout-padding enabled="no"></o-button>
      </div>
      <div fxLayout="row">
        <o-button attr="flat1" type="FLAT" label="FLAT" layout-padding></o-button>
        <o-button attr="flat2" type="FLAT" label="Primary" layout-padding color="primary"></o-button>
        <o-button attr="flat3" type="FLAT" label="Accent" layout-padding color="accent"></o-button>
        <o-button attr="flat4" type="FLAT" label="Warn" layout-padding color="warn"></o-button>
        <o-button attr="flat5" type="FLAT" label="Disabled" layout-padding enabled="no"></o-button>
      </div>
      <div fxLayout="row">
        <o-button attr="icon1" type="ICON" icon="add" layout-padding></o-button>
        <o-button attr="icon2" type="ICON" icon="add" layout-padding color="primary"></o-button>
        <o-button attr="icon3" type="ICON" icon="add" layout-padding color="accent"></o-button>
        <o-button attr="icon4" type="ICON" icon="add" layout-padding color="warn"></o-button>
        <o-button attr="icon5" type="ICON" icon="add" layout-padding enabled="no"></o-button>
      </div>
      <div fxLayout="row">
        <o-button attr="fab1" type="FAB" icon="power_setting" layout-padding></o-button>
        <o-button attr="fab2" type="FAB" icon="power_setting" layout-padding color="primary"></o-button>
        <o-button attr="fab3" type="FAB" icon="power_setting" layout-padding color="accent"></o-button>
        <o-button attr="fab4" type="FAB" icon="power_setting" layout-padding color="warn"></o-button>
        <o-button attr="fab5" type="FAB" icon="power_setting" layout-padding enabled="no"></o-button>
      </div>
      <div fxLayout="row">
        <o-button attr="fab-mini1" type="FAB-MINI" icon="power_setting" layout-padding></o-button>
        <o-button attr="fab-mini2" type="FAB-MINI" icon="power_setting" layout-padding color="primary"></o-button>
        <o-button attr="fab-mini3" type="FAB-MINI" icon="power_setting" layout-padding color="accent"></o-button>
        <o-button attr="fab-mini4" type="FAB-MINI" icon="power_setting" layout-padding color="warn"></o-button>
        <o-button attr="fab-mini5" type="FAB-MINI" icon="power_setting" layout-padding enabled="no"></o-button>
      </div>
    </div>
  ```

  ![Button]({{ "/images/components/button/o-button.png" | absolute_url }}){: .comp-example-img}

  You can see this live example in the [OntimizeWeb playground]({{site.playgroundurl}}/main/buttons){:target="_blank"}.
