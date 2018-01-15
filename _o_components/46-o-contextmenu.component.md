---
permalink: /components/contextmenu/
title: "Context menu"
comp: contextmenu
---

The context menu component is compound of a the context menu component and a diretive which is attached to a DOM element in which the context menu component appears.

{% assign filenameArray = "" | split:"|"  %} 
{% for files_hash in site.data.components.contextMenuData %}
  {% assign filenameArray = filenameArray | push: files_hash[0] %}
{% endfor %}
{% assign filenameArray = filenameArray | sort %}
{% for filename in filenameArray %}
  {% assign dataFile = site.data.components.contextMenuData[filename] %}
  {% capture dataFileCapture %}
    {% include o-component-single.md compFile=dataFile %}
  {% endcapture %}
  <div class="o-compFile-div">
    <h2 class="">{{ dataFile.title }}</h2>
    {{ dataFileCapture | replace: '    ', '' }}
  </div>
{% endfor %}

<h2 class="grey-color">Complete example</h2>

```html
<div [oContextMenu]="myContextMenu" [oContextMenuData]="customData">
    <span>Right click me!</span>
</div>

<o-context-menu #myContextMenu>
    <o-context-menu-item icon="face" label="Item 1" (execute)="onExecute($event)"></o-context-menu-item>
    <o-context-menu-item icon="start_rate" label="Item 2" enabled="no"></o-context-menu-item>
    <o-context-menu-item label="Item 3" [visible]="getVisible" (execute)="onExecute($event)"></o-context-menu-item>
</o-context-menu>
```
