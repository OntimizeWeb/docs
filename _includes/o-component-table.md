{% include base_path %}

{% assign inputsColumns = "Name|Since|Description|Default" | split: "|" %}
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

<h2 id="Table" >Table</h2>

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

  <h2 id="OTableComponent" >OTableComponent</h2>
  <p><strong class="grey-color">Directive:</strong> o-table</p>

  <h3>Directive hierarchy</h3>
  <div class="multicolumnright jstreeloader">
    <ul>
      <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table
        <ul>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-column
            <ul>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-action</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-boolean</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-currency</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-date</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-integer</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-image</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-percentage</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-real</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-service</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-translate</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-renderer-time</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-editor-text</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-editor-boolean</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-editor-date</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-editor-integer</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-editor-real</li>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-cell-editor-email</li>
            </ul>
          </li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-columns-filter
            <ul>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-columns-filter-column</li>
            </ul>
          </li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-paginator</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-option</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-column-aggregate</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-column-calculated</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-context-menu</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-insertable-row</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-button</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-export-button</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-row-expandable
            <ul>
              <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-expandable-container</li>
            </ul>
          </li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-quickfilter</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-columns-grouping</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-columns-grouping-column</li>
          <li data-jstree='{"disabled":true, "opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>o-table-column-select-all</li>
        </ul>
      </li>
    </ul>
  </div>
  <aside class="sidebar__right collapsed">
    <nav id="toc" class="toc collapsed">
      <header><h4 id="tocTitle" class="nav__title collapsed">Table of Contents</h4></header>
      <ul class="toc__menu collapsed" id="markdown-toc">
        <li><a href="#o-table">OTable Component</a>
          <ul>
            <a href="#inherited-inputs">Inherited inputs</a>
          </ul>
          <ul>
            <a href="#inputs">Inputs</a>
          </ul>
          <ul>
            <a href="#outputs">Outputs</a>
          </ul>
          <ul>
            <a href="#methods">Methods</a>
          </ul>
        <li><a href="#o-table-column">OTable Column Component</a>
        </li>
        <li><a href="#o-table-columns-filter">OTable Columns Filter Component</a>
        </li>
        <li><a href="#o-table-columns-filter-column">OTable Columns Filter Column Component</a>
        </li>
        <li><a href="#o-table-paginator">OTable Paginator Component</a>
        </li>
        <li><a href="#o-table-option">OTable Option Component</a>
        </li>
        <li><a href="#o-table-column-aggregate">OTable Column Aggregate Component</a>
        </li>
        <li><a href="#o-table-column-calculated">OTable Column Calculated Component</a>
        </li>
        <li><a href="#o-table-context-menu">OTable Context Menu Component</a>
        </li>
        <li><a href="#o-table-insertable-row">OTable Insertable Row Component</a>
        </li>
        <li><a href="#o-table-button">OTable Button</a>
        </li>
        <li><a href="#o-table-export-button">OTable Export Button</a>
        </li>
        <li><a href="#o-table-row-expandable">OTable Row Expandable Component</a>
        </li>
        <li><a href="#o-expandable-container">OExpandable Container Component</a>
        </li>
        <li><a href="#o-table-quickfilter">OTable Quickfilter Component</a>
        </li>
        <li><a href="#o-table-columns-grouping">OTable Columns Grouping Component</a>
        </li>
        <li><a href="#o-table-columns-grouping-column">OTable Columns Grouping Column Component</a>
        </li>
        <li><a href="#o-table-column-select-all">OTable Column Select All Directive</a>
        </li>
        <li><a href="#o-table-cell-renderer-action">OTable Cell Renderer Action Component</a>
        </li>
        <li><a href="#o-table-cell-renderer-boolean">OTable Cell Renderer Boolean Component</a>
        </li>
        <li><a href="#o-table-cell-renderer-currency">OTable Cell Renderer Currency Component</a>
        </li>
        <li><a href="#o-table-cell-renderer-date">OTable Cell Renderer Date Component</a>
        </li>
        <li><a href="#o-table-cell-renderer-integer">OTable Cell Renderer Integer Component</a>
        </li>
        <li><a href="#o-table-cell-renderer-image">OTable Cell Renderer Image Component</a>
        </li>
        <li><a href="#o-table-cell-renderer-percentage">OTable Cell Renderer Percentage Component</a>
        </li>
        <li><a href="#o-table-cell-renderer-real">OTable Cell Renderer Real Component</a>
        </li>
        <li><a href="#o-table-cell-renderer-service">OTable Cell Renderer Service Component</a>
        </li>
        <li><a href="#o-table-cell-renderer-translate">OTable Cell Renderer Translate Component</a>
        </li>
        <li><a href="#o-table-cell-renderer-time">OTable Cell Renderer Time Component</a>
        </li>
        <li><a href="#o-table-cell-editor-text">OTable Cell Editor Text Component</a>
        </li>
        <li><a href="#o-table-cell-editor-boolean">OTable Cell Editor Boolean Component</a>
        </li>
        <li><a href="#o-table-cell-editor-date">OTable Cell Editor Date Component</a>
        </li>
        <li><a href="#o-table-cell-editor-integer">OTable Cell Editor Integer Component</a>
        </li>
        <li><a href="#o-table-cell-editor-real">OTable Cell Editor Real Component</a>
        </li>
        <li><a href="#o-table-cell-editor-time">OTable Cell Editor Time Component</a>
        </li>
        <li><a href="#o-table-cell-editor-email">OTable Cell Editor Email Component</a>
        </li>
        <li><a href="#OTableGlobalConfig">OTable Global Config</a>
        </li>
        <li><a href="#OTableGroupedRow">OTable Grouped Row</a>
        </li>
        <li><a href="#OTableInitializationOptions">OTable Initialization Options</a>
        </li>
        <li><a href="#O_TABLE_GLOBAL_CONFIG">O_TABLE_GLOBAL_CONFIG</a>
        </li>
      </ul>
    </nav>
  </aside>

  <div id="container">
    {% include functions/o-table/directive-api.html folder=site.data.components.otableData %}
    {% include functions/o-table/directive-api.html folder=site.data.components.otableData.renderers %}
    {% include functions/o-table/directive-api.html folder=site.data.components.otableData.editors %}
    {% include functions/o-table/type-api.html folder=site.data.components.otableData.types %}
    {% include functions/o-table/constant-api.html folder=site.data.components.otableData.constants %}
  </div>
</div>
