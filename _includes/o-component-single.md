{% include base_path %}

{% if include.comp and site.data.components[include.comp] %}
  {% assign componentData = site.data.components[include.comp] %}
{% elsif include.compFile %}
  {% assign componentData = include.compFile %}
{% endif %}

{% if include.comp and site.data.components.common.attributes %}
  {% assign commonAttributes = site.data.components.common.attributes %}
{% endif %}

{% if componentData %}

{% assign inputsColumns = "Name|Description|Default" | split: "|" %}
{% assign outputsColumns = "Name|Since|Description" | split: "|" %}
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
{% endif%}

 {% if componentData.version %}
 <p> This component is available since version <i>{{componentData.version}}</i>.</p>
 {% endif %}

<!-- Tab links -->
<div class="o-tab">
  <button class="o-tablinks {{overview_class}}"  onclick="openTab(event, 'overview')">Overview</button>
  <button class="o-tablinks {{api_class}}" onclick="openTab(event, 'api')">API</button>
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
<div id="api" class="o-tabcontent" style="{{style_api}}">
  {% if componentData.title %}
    <h2 id="{{componentData.title}}" >{{ componentData.title }}</h2>
    {% else %}
    <h2 id="{{page.title}}" >{{ page.title }}</h2>
  {% endif %}
  
  {% if componentData.directives %}
    <h3>Directive hierarchy</h3>
    <div class="multicolumnright jstreeloader">
      <ul>
        <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>
          {{ componentData.directive }}
          {% for directive in componentData.directives %}
            {% if directive.directives %}
              <ul>
                <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>{{ directive.name }}
                  {% for secondDirective in directive.directives %}
                    {% if secondDirective.directives %}
                      <ul>
                        <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/html.png"}'>{{ secondDirective.name }}
                          {% for thirdDirective in secondDirective.directives %}
                            <ul>
                              <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/html.png"}'>{{ thirdDirective.name }}</li>
                            </ul>
                          {% endfor %}
                        </li>
                      </ul>
                    {% else %}
                      <ul>
                        <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/html.png"}'>{{ secondDirective.name }}</li>
                      </ul>
                    {% endif %}
                  {% endfor %}
                </li>
              </ul>
            {% else %}
              <ul>
                <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/html.png"}'>{{ directive.name }}</li>
              </ul>
            {% endif %}
          {% endfor %}
        </li>
      </ul>
    </div>
  {% endif %}


  {% include o-component-single-api.md component=componentData %}

  {% if componentData.extraComponents %}
  {% assign extraComp = componentData.extraComponents %}
    {% assign filenameArray = "" | split:"|"  %}
    {% for files_hash in site.data.components[extraComp] %}
      {% assign filenameArray = filenameArray | push: files_hash[0] %}
    {% endfor %}
    {% assign filenameArray = filenameArray | sort %}
    {% for filename in filenameArray %}
      {% assign dataFile = site.data.components[extraComp][filename] %}
      {% capture dataFileCapture %}
        {% include o-component-single-api.md component=dataFile %}
      {% endcapture %}

      {{ dataFileCapture | replace: '    ', '' }}
    {% endfor %}
  {% endif %}

</div>
{% endif %}
