{% if include.comp and site.data.components[include.comp] %}
  {% assign componentData = site.data.components[include.comp] %}
{% elsif include.compFile %}
  {% assign componentData = include.compFile %}
{% endif %}

{% if include.comp and site.data.components.common.attributes %}
  {% assign commonAttributes = site.data.components.common.attributes %}
{% endif %}

{% if componentData %}

<script type="text/javascript">
    function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
</script>

<!-- Tab links -->
<div class="o-tab">
  <button class="tablinks" onclick="openTab(event, 'overview')">Overview</button>
  <button class="tablinks" onclick="openTab(event, 'api')">API</button>
</div>

<!-- Tab content -->
<div id="overview" class="o-tabcontent">
  <p>Overview</p>
</div>

<div id="api" class="o-tabcontent">
  <p>API</p>
</div>




  {% if componentData.directive %}
    <p><strong class="grey-color">Directive:</strong> {{ componentData.directive }}</p>
  {% endif %}

  {% if componentData.description %}
    {{ componentData.description | markdownify }}
  {% endif %}

  {% if componentData.inheritedAttributes %}
    <h3 class="grey-color">Inherited attributes</h3>
    <ul>
    {% assign sortedInheritedAttributes = (componentData.inheritedAttributes | sort: 'name') %}
      {% for inheritedObj in sortedInheritedAttributes %}
      <li>
        from <a href="{{ base_path }}/docs/components/{{inheritedObj.component}}.component/" rel="permalink">{{ inheritedObj.component }}:</a>
        <ul class="attributes-list">
          {% assign sortedInheritedAttrs = (inheritedObj.attributes | sort) %}
          {% for inheritedAttr in sortedInheritedAttrs %}
            <li> {{ inheritedAttr }} </li>
          {% endfor %}
        </ul>
        {% endfor %}
      </li>
    </ul>
  {% endif %}

  <h3 class="grey-color">Attributes</h3>
  {% if componentData.attributes %}
    {% assign emptyColumns = '' | split: '|' %}

    {% for column in componentData.attributesColumns %}
      {% assign columnKey = column | downcase %}
      {% assign emptyCol = componentData.attributes | where: columnKey, "" | size %}
      {% if emptyCol == componentData.attributes.size %}
        {% assign emptyColumns = emptyColumns | push: columnKey %}
      {% endif %}
    {% endfor %}

    <table class="attributes-table mdl-data-table">
      <thead>
        <tr>
        {% for header in componentData.attributesColumns %}
          {% assign columnKey = header | downcase %}
          {% unless emptyColumns contains columnKey %}
            <th class=""> {{ header }}</th>
          {% endunless %}
        {% endfor %}
        </tr>
      </thead>
        <tbody>
        {% assign sortedAttrs = (componentData.attributes | sort: 'name') %}
        {% for attributeObject in sortedAttrs %}
          <tr>
          {% assign commonData = site.data.components.common.attributes[attributeObject.name] | default : {} %}
          {% for column in componentData.attributesColumns %}
            {% assign columnKey = column | downcase %}
            {% unless emptyColumns contains columnKey %}
              {% assign columnData = 'o-component-' | append: columnKey %}

              {% assign cellValue = commonData[columnKey] %}
              {% if attributeObject[columnKey] != undefined %}
                {% assign cellValue = attributeObject[columnKey] %}
              {% endif %}

              {% assign cellContent = cellValue | default: '' %}
              {% if columnKey != 'type' %}
                {% assign cellContent = cellContent | markdownify %}
              {% else %}
                {% assign cellContent = '<p>' | append: cellContent | append: '</p>' %}
              {% endif %}

              <td class="" {{ columnData }}>{{ cellContent }}</td>
            {% endunless %}
          {% endfor %}
          </tr>
        {% endfor %}
      </tbody>
    </table>
  {% else %}
    <p>No additional attributes</p>
  {% endif %}


  {% if componentData.inheritedOutputs %}
    <h3 class="grey-color">Inherited outputs</h3>
    <ul>
      {% assign sortedInheritedOutputs = (componentData.inheritedOutputs | sort: 'name') %}
      {% for inheritedObj in sortedInheritedOutputs %}
      <li>
        from <a href="{{ base_path }}/docs/components/{{inheritedObj.component}}.component/" rel="permalink">{{ inheritedObj.component }}:</a>
        <ul class="attributes-list">
          {% assign sortedInheritedOuts = (inheritedObj.outputs | sort) %}
          {% for inheritedOutput in sortedInheritedOuts %}
            <li> {{ inheritedOutput }} </li>
          {% endfor %}
        </ul>
        {% endfor %}
      </li>
    </ul>
  {% endif %}

  {% if componentData.outputs %}
    <h3 class="grey-color">Outputs</h3>
    <table class="attributes-table mdl-data-table">
      <thead>
        <tr>
        {% for header in componentData.outputsColumns %}
            <th class=""> {{ header }}</th>
        {% endfor %}
        </tr>
      </thead>
        <tbody>
        {% assign sortedOutputs = (componentData.outputs | sort: 'name') %}
        {% for outputObject in sortedOutputs %}
          <tr>
          {% for column in componentData.outputsColumns %}
            {% assign columnKey = column | downcase %}
            {% assign columnData = 'o-component-' | append: columnKey %}
            {% assign cellContent = outputObject[columnKey]  | default: '' | markdownify %}

            <td class="" {{ columnData }}>{{ cellContent }}</td>

          {% endfor %}
          </tr>
        {% endfor %}
      </tbody>
    </table>
  {% endif %}

  {% if componentData.example %}
    {% capture html-include %}{% include example.md code=componentData.example %}{% endcapture %}
    {{ html-include | markdownify }}
  {% endif %}

{% endif %}