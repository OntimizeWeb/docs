{% include base_path %}

{% assign inputsColumns = "Name|Description|Default" | split: "|" %}
{% assign outputsColumns = "Name|Description" | split: "|" %}
{% assign methodsColumns = "Name|Description|Parameters|Returns" | split: "|" %}

<script type="text/javascript">

  function openTab(evt, tabName) {
    var url="{{base_path}}{{page.url}}";
    url+='/../'+tabName;
    var loc_array = document.location.href.split('/');
    if (loc_array[loc_array.length - 1] !== tabName) {
      window.location.href=url;
    }

  }
</script>

{% assign tabName = page.url | split:'/' | last %}
{% if tabName=='api' %}
  {% assign style_overview='display:none'%}
  {% assign style_api='display:block'%}
  {% assign api_class='active'%}
  {% include breadcrumbs.html %}
{% else %}
  {% assign style_overview='display:block'%}
  {% assign style_api='display:none'%}
  {% assign overview_class='active'%}
{% endif %}

<h2 id="List picker" >List picker</h2>

<!-- Tab links -->
<div class="o-tab">
  <button class="o-tablinks {{overview_class}}"  onclick="openTab(event, 'overview')">Overview</button>
  <button class="o-tablinks {{api_class}}" class="o-tablinks" onclick="openTab(event, 'api')">API</button>
</div>

<!-- OVERVIEW -->
<div id="overview" class="o-tabcontent" style="{{style_overview}}">
 {% if componentData.description %}
    <h3>Description</h3>
    {{ componentData.description | markdownify }}
  {% endif %}


  {% if componentData.example %}
    <h3 class="grey-color">Example</h3>
    ```html
      {{ componentData.example | markdownify }}
    ```
  {% endif %}
  {{ content }}
</div>

<!-- API -->
<div id="api" style="{{style_api}}">
  <h2 id="OListPicker">OListPickerComponent</h2>
  <p><strong class="grey-color">Directive:</strong> o-list-picker</p>
  <h3>Component hierarchy</h3>
  <div class="multicolumnright jstreeloader">
    <ul>
      <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-list-picker
        <ul>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-list-picker-renderer-integer</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-list-picker-renderer-real</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-list-picker-renderer-currency</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-list-picker-renderer-date</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-list-picker-renderer-percentage</li>
        </ul>
      </li>
    </ul>
  </div>
  <aside class="sidebar__right collapsed">
    <nav id="toc" class="toc collapsed">
      <header><h4 id="tocTitle" class="nav__title collapsed">Table of Contents</h4></header>
      <ul class="toc__menu collapsed" id="markdown-toc">
        <li><a>Directives</a>
          <ul>
            {% include functions/o-table/sidenav-item-api.html folder=site.data.components.olistpickerData type="directive" %}
          </ul>
        <li><a>Renderers</a>
          <ul>
            {% include functions/o-table/sidenav-item-api.html folder=site.data.components.olistpickerData.renderers type="directive"  %}
          </ul>
        </li>
      </ul>
    </nav>
  </aside>

  <div id="container">
    {% include functions/o-table/directive-api.html folder=site.data.components.olistpickerData %}
    {% include functions/o-table/directive-api.html folder=site.data.components.olistpickerData.renderers %}
  </div>
</div>
