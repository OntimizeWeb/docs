---
permalink: /components/contextmenu/
title: "Context menu"
comp: contextmenu
---

{% include base_path %}
{% include toc %}

The **OntimizeWeb** context menu is compound of the `o-context-menu` component and the `oContextMenuData` directive which is attached to a DOM element in which the context menu component appears. 

The `o-context-menu` component supports the ability for nested menu. To do so, you have to define [`o-context-menu-group`](#context-menu-group){:target='_blank'} component

![Context Menu]({{ "/images/layouts/context-menu/context-menu.png" | absolute_url }}){: .comp-example-img}

For including the context menu in your application follow the next steps:

* Include the `o-context-menu` component in the template where the context menu will appear. Add as many [`o-context-menu-item`](#context-menu-item){:target='_blank'}, [`o-context-menu-group`](#context-menu-item){:target='_blank'} and [`o-context-menu-separator`](#context-menu-item){:target='_blank'} components to the context menu as you desire.
* Add the `oContextMenu` directive to the DOM element where the context menu will appear upon user right click and pass a referente to the previously defined `o-context-menu` component.

## Context menu group

The `o-context-menu-group` component represents a group of the `o-context-menu-group`, `o-context-menu-item` and `o-context-menu-separator` in the context menu component.

## Context menu item

The `o-context-menu-item` component represents each item of the context menu component.

In some cases you may need context information when executing the action triggered by the `o-context-menu-item`, use the [`oContextMenuData`](#context-menu-data) directive in the `oContextMenu` host element in order emit it in the `execute` event of the context menu items. Check the **API** section of this page for more information.

## Context menu separator

The `o-context-menu-separator` component represents each separator of the context menu component.

## Context menu data

The `oContextMenuData` is an attribute of the `oContextMenu` directive is used for propagating context information when the context menu item is activated or for modifiying the menu item status when this depends on that context information.

## Example

```html
<div [oContextMenu]="myContextMenu" [oContextMenuData]="customData">
  <span>Right click me!</span>
</div>

<o-context-menu #myOContextMenu>
  <o-context-menu-item icon="face" label="Item 1" (execute)="onExecute('Item 1', $event)"></o-context-menu-item>
  <o-context-menu-group label="Group" icon="priority_high" >
      <o-context-menu-item icon="star_rate" label="Item 2" (execute)="onExecute('Item 2',$event)"  enabled="no"></o-context-menu-item>
      <o-context-menu-separator></o-context-menu-separator>
      <o-context-menu-item label="Item 3" (execute)="onExecute('Item 3',$event)" [visible]="getVisible"></o-context-menu-item>
  </o-context-menu-group>
</o-context-menu>
```

```javascript
  onExecute(customData: any) {
    /*
      do whatever you want
    */
  }

  getVisible(data: any): boolean {
    return true;
  }

```
![Context Menu]({{ "/images/layouts/context-menu/context-menu.png" | absolute_url }}){: .comp-example-img}

You can see a live example of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/contextmenu){:target="_blank"}.
