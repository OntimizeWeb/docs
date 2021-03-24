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
{% else %}
  {% assign style_overview='display:block'%}
  {% assign style_api='display:none'%}
  {% assign overview_class='active'%}
{% endif %}

<!-- Tab links -->
<div class="o-tab">
  <button class="o-tablinks {{overview_class}}"  onclick="openTab(event, 'overview')">Overview</button>
  <button class="o-tablinks {{api_class}}" class="o-tablinks" onclick="openTab(event, 'api')">API</button>
</div>

<!-- OVERVIEW -->
<div id="overview" class="o-tabcontent" style="{{style_overview}}">
 <!-- {% include toc %} -->
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
  <aside class="sidebar__right">
    <nav class="toc">
      <header><h4 class="nav__title"><i class="fa fa-file-alt"></i> On This Page</h4></header>
      <ul class="toc__menu" id="markdown-toc">
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
