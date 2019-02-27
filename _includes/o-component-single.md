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
{% assign outputsColumns = "Name|Description" | split: "|" %} 
{% assign methodsColumns = "Name|Description|Parameters|Returns" | split: "|" %} 

<script type="text/javascript">
  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("o-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("o-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
</script>
 {% if componentData.version %}
 <p> This component is available since version <i>{{componentData.version}}</i>.</p>
 {% endif %}
<!-- Tab links -->
<div class="o-tab">
  <button class="o-tablinks active" onclick="openTab(event, 'overview')">Overview</button>
  <button class="o-tablinks" onclick="openTab(event, 'api')">API</button>
</div>

<!-- OVERVIEW -->
<div id="overview" class="o-tabcontent" style="display:block;">
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
<div id="api" class="o-tabcontent">

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
  <h2 class="">{{ dataFile.title }}</h2>
      {{ dataFileCapture | replace: '    ', '' }}
    {% endfor %}
  {% endif %}

</div>
{% endif %}
