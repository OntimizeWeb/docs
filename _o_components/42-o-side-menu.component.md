---
permalink: /components/o-side-menu.component/
title: "Side menu"
comp: sideMenu
---

{% assign filenameArray = "" | split:"|"  %} 
{% for files_hash in site.data.components.sideMenuData %}
  {% assign filenameArray = filenameArray | push: files_hash[0] %}
{% endfor %}
{% assign filenameArray = filenameArray | sort %}


{% for filename in filenameArray %}

  {% assign dataFile = site.data.components.sideMenuData[filename] %}
  {% capture dataFileCapture %}
    {% include o-component-single.html compFile=dataFile %}
  {% endcapture %}
  <div class="o-compFile-div">
    <h2 class="">{{ dataFile.title }}</h2>
    {{ dataFileCapture | replace: '    ', '' }}
  </div>
{% endfor %}

Menu item actions priority order:

1. Navigation
2. Action invocation


<h3 class="grey-color">Example</h3>

```html
<o-side-menu title="APP_TITLE">
  <o-side-menu-group>
    <o-side-menu-item title="ABOUT" icon="info" route="/about">
    </o-side-menu-item>
    
    <o-side-menu-item title="HELP" icon="help" route="/help"><
    /o-side-menu-item>
    
    <o-side-menu-separator></o-side-menu-separator>
    
    <o-side-menu-item title="VERSION" [action]="showVersionCallback">
    </o-side-menu-item>
    
  </o-side-menu-group>
</o-side-menu>
```