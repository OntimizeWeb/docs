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

  {% if componentData.directive %}
    <p><strong class="grey-color">Directive:</strong> {{ componentData.directive }}</p>
  {% endif %}

  {% if componentData.inheritedAttributes %}
    <h3 class="grey-color">Inherited inputs</h3>
    <ul>
    {% assign sortedInheritedAttributes = (componentData.inheritedAttributes | sort: 'name') %}
      {% for inheritedObj in sortedInheritedAttributes %}
      <li>
        from <a href="{{ base_path }}/components/{{inheritedObj.path}}/" rel="permalink">{{ inheritedObj.component }}:</a>
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

  <h3 class="grey-color">Inputs</h3>
  {% if componentData.attributes %}
    {% assign emptyColumns = '' | split: '|' %}
    {% assign requiredInputs = '' | split: '|' %}

    {% for column in inputsColumns %}
      {% assign columnKey = column | downcase %}
      {% assign emptyCol = componentData.attributes | where: columnKey, "" | size %}
      {% if emptyCol == componentData.attributes.size %}
        {% assign emptyColumns = emptyColumns | push: columnKey %}
      {% endif %}     
    {% endfor %}
    {% for attributeObject in componentData.attributes %}
      {% assign commonAttributeObject = site.data.components.common.attributes[attributeObject.name] | default : {} %}
      {% if attributeObject['required'] == 'yes' %}
        {% assign requiredInputs = requiredInputs | push: attributeObject['name'] %}
      {% endif %} 
      {% if commonAttributeObject['required'] == 'yes' %}
        {% assign requiredInputs = requiredInputs | push: attributeObject['name'] %}
      {% endif %}
    {% endfor %}


  <table class="attributes-table mdl-data-table">
    <thead>
      <tr>
      {% for header in inputsColumns %}
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

        {% assign requiredAttribute = '' %}
        {% if requiredInputs contains attributeObject['name'] %}
          {% assign requiredAttribute = 'required' %}
        {% endif %}

<tr {{ requiredAttribute }}>
        {% assign commonData = site.data.components.common.attributes[attributeObject.name] | default : {} %}
        {% for column in inputsColumns %}
          {% assign columnKey = column | downcase %}
          {% unless emptyColumns contains columnKey %}
            {% assign columnData = 'o-component-' | append: columnKey %}
            {% assign requiredData = '' %}

            {% assign cellValue = commonData[columnKey] %}
            {% if attributeObject[columnKey] != undefined %}
              {% assign cellValue = attributeObject[columnKey] %}
            {% endif %}
            {% assign cellContent = cellValue | default: '' %}

            {% assign secondLine = '' %}
            {% if columnKey == 'name' %}
              {% if requiredInputs contains attributeObject['name'] %}
                {% assign requiredData = 'required' %}
              {% endif %}

              {% assign secondLine = commonData['type'] | default: '' %}
              {% if attributeObject['type'] != undefined %}
                {% assign secondLine = attributeObject['type'] | default: '' %}
              {% endif %}
            {% endif %}
  <td class="" {{ columnData }} {{ requiredData }}>
    <p class="first">{{ cellContent | markdownify }}</p>
    {% if secondLine != '' %}
      <p><i>{{ secondLine }}</i></p>
    {% endif %}
  </td>
          {% endunless %}
        {% endfor %}
</tr>
      {% endfor %}
      </tbody>
  </table>

  {% if requiredInputs.size > 0 %}
    <div class="notice--info" markdown="1">
    * required inputs.
    </div>
  {% endif %}


  {% else %}
    <p>No additional inputs</p>
  {% endif %}

  
  {% if componentData.inheritedOutputs %}
    <h3 class="grey-color">Inherited outputs</h3>
    <ul>
      {% assign sortedInheritedOutputs = (componentData.inheritedOutputs | sort: 'name') %}
      {% for inheritedObj in sortedInheritedOutputs %}
      <li>
        from <a href="{{ base_path }}/components/{{inheritedObj.path}}/" rel="permalink">{{ inheritedObj.component }}:</a>
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
        {% for header in outputsColumns %}
            <th class=""> {{ header }}</th>
        {% endfor %}
        </tr>
      </thead>
        <tbody>
        {% assign sortedOutputs = (componentData.outputs | sort: 'name') %}
        {% for outputObject in sortedOutputs %}
          <tr>
          {% for column in outputsColumns %}
            {% assign columnKey = column | downcase %}
            {% assign columnData = 'o-component-' | append: columnKey %}
            {% assign cellContent = outputObject[columnKey]  | default: '' | markdownify %}

            <td class="" {{ columnData }}>{{ cellContent | markdownify  }}</td>

          {% endfor %}
          </tr>
        {% endfor %}
      </tbody>
    </table>
  {% endif %}

  {% if componentData.methods %}
    <h3 class="grey-color">Methods</h3>
      {% assign sortedMethods = (componentData.methods | sort: 'name') %}
      {% for outputObject in sortedMethods %}
    <table>
      <thead>
       <tr><th>{{outputObject['name']}}</th></tr>
       </thead>
      <tbody>
        <tr><td>{{outputObject['description']}}</td></tr>
        
        {% if outputObject['parameters'] %}
        <tr><td><strong>Parameters</strong></td></tr>
        <tr><td>{{outputObject['parameters']}}</td></tr>
         {% endif %}

        {% if outputObject['returns'] %}
          <tr><td><strong>Returns</strong></td></tr>
          <tr><td>{{outputObject['returns']}}</td></tr>
        {% endif %}
      </tbody>
    </table>
      {% endfor %}
  {% endif %}

</div>
{% endif %}
