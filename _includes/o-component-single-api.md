
{% assign componentData = include.component %}
{% if componentData %}

  {% if componentData.directive %}
    <p><strong class="grey-color">Directive:</strong> {{ componentData.directive }}</p>
  {% endif %}
  {% if componentData.class %}
    <p><strong class="grey-color">Class:</strong> {{ componentData.class }}</p>
  {% endif %}

  {% if componentData.inheritedAttributes %}
    <h3 class="grey-color">Inherited inputs</h3>
    <ul>
    {% assign sortedInheritedAttributes = (componentData.inheritedAttributes | sort: 'name') %}
      {% for inheritedObj in sortedInheritedAttributes %}
      <li>
        from {% if inheritedObj.path %} <a href="{{ base_path }}/components/{{inheritedObj.path}}/" rel="permalink">{% endif %}{{ inheritedObj.component }}:{% if inheritedObj.path %}</a>{% endif %}
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


  {% if componentData.attributes %}
  <h3 class="grey-color">Inputs</h3>
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

  {% endif %}


  {% if componentData.inheritedOutputs %}
    <h3 class="grey-color">Inherited outputs</h3>
    <ul>
      {% assign sortedInheritedOutputs = (componentData.inheritedOutputs | sort: 'name') %}
      {% for inheritedObj in sortedInheritedOutputs %}
      <li>
        from {% if inheritedObj.path %} <a href="{{ base_path }}/components/{{inheritedObj.path}}/" rel="permalink">{% endif %}{{ inheritedObj.component }}:{% if inheritedObj.path %}</a>{% endif %}
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

{% endif %}
