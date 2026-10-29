---
layout: o-component
permalink: /components/buttons/button/overview
title: "Button"
comp: button
parent: Buttons
grand_parent: Components
nav_order: 1
---

{% include base_path %}
{% include toc %}

  The `o-button` component is a wrapper for Angular Material buttons. It allows add buttons to your application and configure them easily.

## Example

  ```html
    <div class="o-flex-column variant-importance-example" layout-padding>

      <!-- the example reads as a grid: rows = variant input, columns = importance input -->
      <div class="o-flex-row vi-axis-caption">
        <span class="vi-importance-axis">importance &rarr;</span>
      </div>

      <!-- column legend: each row repeats the same importance values -->
      <div class="o-flex-row vi-variant-row vi-header-row">
        <span class="vi-variant-label vi-row-axis">variant &darr;</span>
        <span class="vi-col-header">Default</span>
        <span class="vi-col-header">Primary</span>
        <span class="vi-col-header">Warn</span>
        <span class="vi-col-header">Disabled</span>
      </div>

      <!-- one row per variant, columns are the importance values + disabled -->
      <div class="o-flex-row vi-variant-row">
        <span class="vi-variant-label">basic</span>
        <o-button attr="basic-def" variant="basic" importance="default" label="Default" layout-padding></o-button>
        <o-button attr="basic-pri" variant="basic" importance="primary" label="Primary" layout-padding></o-button>
        <o-button attr="basic-warn" variant="basic" importance="warn" label="Warn" layout-padding></o-button>
        <o-button attr="basic-dis" variant="basic" label="Disabled" [enabled]="false" layout-padding></o-button>
      </div>

      <div class="o-flex-row vi-variant-row">
        <span class="vi-variant-label">raised</span>
        <o-button attr="raised-def" variant="raised" importance="default" label="Default" layout-padding></o-button>
        <o-button attr="raised-pri" variant="raised" importance="primary" label="Primary" layout-padding></o-button>
        <o-button attr="raised-warn" variant="raised" importance="warn" label="Warn" layout-padding></o-button>
        <o-button attr="raised-dis" variant="raised" label="Disabled" [enabled]="false" layout-padding></o-button>
      </div>

      <div class="o-flex-row vi-variant-row">
        <span class="vi-variant-label">outline</span>
        <o-button attr="outline-def" variant="outline" importance="default" label="Default" layout-padding></o-button>
        <o-button attr="outline-pri" variant="outline" importance="primary" label="Primary" layout-padding></o-button>
        <o-button attr="outline-warn" variant="outline" importance="warn" label="Warn" layout-padding></o-button>
        <o-button attr="outline-dis" variant="outline" label="Disabled" [enabled]="false" layout-padding></o-button>
      </div>

      <div class="o-flex-row vi-variant-row">
        <span class="vi-variant-label">flat</span>
        <o-button attr="flat-def" variant="flat" importance="default" label="Default" layout-padding></o-button>
        <o-button attr="flat-pri" variant="flat" importance="primary" label="Primary" layout-padding></o-button>
        <o-button attr="flat-warn" variant="flat" importance="warn" label="Warn" layout-padding></o-button>
        <o-button attr="flat-dis" variant="flat" label="Disabled" [enabled]="false" layout-padding></o-button>
      </div>

      <!-- icon-only shapes: only 'icon' tints with importance; fab / mini-fab keep Material's color -->
      <div class="o-flex-row vi-variant-row">
        <span class="vi-variant-label">icon</span>
        <o-button attr="icon-def" variant="icon" icon="favorite" layout-padding></o-button>
        <o-button attr="icon-pri" variant="icon" importance="primary" icon="favorite" layout-padding></o-button>
        <o-button attr="icon-warn" variant="icon" importance="warn" icon="favorite" layout-padding></o-button>
        <o-button attr="icon-dis" variant="icon" icon="favorite" [enabled]="false" layout-padding></o-button>
      </div>

      <div class="o-flex-row vi-variant-row">
        <span class="vi-variant-label">fab</span>
        <o-button attr="fab-def" variant="fab" icon="add" layout-padding></o-button>
        <o-button attr="fab-pri" variant="fab" importance="primary" icon="add" layout-padding></o-button>
        <o-button attr="fab-warn" variant="fab" importance="warn" icon="add" layout-padding></o-button>
        <o-button attr="fab-dis" variant="fab" icon="add" [enabled]="false" layout-padding></o-button>
      </div>

      <div class="o-flex-row vi-variant-row">
        <span class="vi-variant-label">mini-fab</span>
        <o-button attr="minifab-def" variant="mini-fab" icon="edit" layout-padding></o-button>
        <o-button attr="minifab-pri" variant="mini-fab" importance="primary" icon="edit" layout-padding></o-button>
        <o-button attr="minifab-warn" variant="mini-fab" importance="warn" icon="edit" layout-padding></o-button>
        <o-button attr="minifab-dis" variant="mini-fab" icon="edit" [enabled]="false" layout-padding></o-button>
      </div>

    </div>
  ```

  ![Button]({{ "/assets/images/components/button/o-button.png" | absolute_url }}){: .comp-example-img}

  You can see this live example in the [OntimizeWeb playground]({{site.playgroundurl}}/main/buttons){:target="_blank"}.

## Icons

  A button can show a Material icon (`icon`) or a custom SVG icon (`svg-icon`), positioned around the label with `icon-position` (`left` — default, `right`, `top` or `bottom`):

  ```html
    <o-button attr="icon-left" variant="outline" importance="primary" label="Left" icon="arrow_forward_ios"></o-button>
    <o-button attr="icon-right" variant="outline" importance="primary" label="Right" icon="arrow_forward_ios" icon-position="right"></o-button>
    <o-button attr="icon-top" variant="outline" importance="primary" label="Top" icon="arrow_forward_ios" icon-position="top"></o-button>
    <o-button attr="icon-bottom" variant="outline" importance="primary" label="Bottom" icon="arrow_forward_ios" icon-position="bottom"></o-button>
  ```

  For icon-only buttons (`variant="icon"`, `"fab"` or `"mini-fab"`), omit `label` and set only `icon` (or `image`, below) — see the [Example](#example) section above.

## Image icon

  Use `image` instead of `icon`/`svg-icon` to render an arbitrary image (e.g. a logo or a payment-method icon) in place of the Material icon:

  ```html
    <o-button label="Image icon" image="./assets/images/visa.png"></o-button>
  ```

## Labels and accessibility

  `label` is resolved with `oTranslate`, so it accepts either a literal string or a translation key. When a button is projected inside an `o-table` / `o-grid` / `o-list` / `o-tree` / `o-form`, or configured through `O_ACTION_STYLES_CONFIG`, an unset `label` (as well as `variant` and `importance`) falls back to whatever the host resolves for that button's `attr` — see the [Action styles guide]({{ base_path }}/guide/action-styles/).

  Since `18.0.0-next.9`, `aria-label` sets the accessible name read by screen readers — particularly important on icon-only buttons, which otherwise have no visible text. When not set, it falls back to `label`, then `attr`, then the icon name.

## Handling clicks

  ```html
    <o-button attr="save" variant="flat" importance="primary" label="Save" (onClick)="onSave($event)"></o-button>
  ```

  {: .note }
  > Use `enabled="no"` (or `[enabled]="false"`) to disable a button — see the `basic-dis` / `raised-dis` / … buttons in the [Example](#example) above.
