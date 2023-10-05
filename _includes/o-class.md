{% if include.comp and site.data.components[include.comp] %}
  {% assign componentData = site.data.components[include.comp] %}
{% elsif include.compFile %}
  {% assign componentData = include.compFile %}
{% endif %}

{% if include.comp and site.data.components.common.properties %}
  {% assign commonProperties = site.data.components.common.properties %}
{% endif %}

{% if componentData %}
  {% assign outputsColumns = "Name|Description" | split: "|" %} 
  {% if componentData.class %}
    <p><strong class="grey-color"> {{ componentData.class }}</strong></p>
  {% endif %}

  {% if componentData.description %}
    {{ componentData.description | markdownify }}
  {% endif %}

  

  <h3 class="grey-color">Properties</h3>
  {% if componentData.properties %}
    {% assign emptyColumns = '' | split: '|' %}

    {% for column in componentData.propertiesColumns %}
      {% assign columnKey = column | downcase %}
      {% assign emptyCol = componentData.properties | where: columnKey, "" | size %}
      {% if emptyCol == componentData.properties.size %}
        {% assign emptyColumns = emptyColumns | push: columnKey %}
      {% endif %}
    {% endfor %}

    <table class="attributes-table mdl-data-table">
      <thead>
        <tr>
        {% for header in componentData.propertiesColumns %}
          {% assign columnKey = header | downcase %}
          {% unless emptyColumns contains columnKey %}
            <th class=""> {{ header }}</th>
          {% endunless %}
        {% endfor %}
        </tr>
      </thead>
        <tbody>
        {% for attributeObject in componentData.properties %}
          <tr>
          {% assign commonData = site.data.components.common.properties[attributeObject.name] | default : {} %}
           {% assign propertiesColumns = (componentData.propertiesColumns | sort: 'name') %}
          {% for column in propertiesColumns %}
            {% assign columnKey = column | downcase %}
            {% unless emptyColumns contains columnKey %}
              {% assign columnData = 'o-component-' | append: columnKey %}
              
              {% assign cellValue = commonData[columnKey] %}
              {% if attributeObject[columnKey] != undefined %}
                {% assign cellValue = attributeObject[columnKey] %}
              {% endif %}
            
              {% assign cellContent = cellValue | default: ''  | markdownify %}
          
              <td class="" {{ columnData }}>{{ cellContent }}</td>
            {% endunless %}
          {% endfor %}
          </tr>
        {% endfor %}
      </tbody>
    </table>
  {% else %}
    <p>No additional properties</p>
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

  {% if componentData.example %}
    {% capture html-include %}{% include example.md code=componentData.example %}{% endcapture %}
    {{ html-include | markdownify }}
  {% endif %}

{% endif %}