{% if include.comp and site.data.components[include.comp] %}
  {% assign componentData = site.data.components[include.comp] %}
{% elsif include.compFile %}
  {% assign componentData = include.compFile %}
{% endif %}

{% if include.comp and site.data.components.common['attributes'] %}
  {% assign commonAttributes = site.data.components.common['attributes'] %}
{% endif %}

{% if componentData %}

  {% if componentData.directive %}
    <p><strong class="grey-color">Directive:</strong> {{ componentData.directive }}</p>
  {% endif %}

  {% if componentData.description %}
    {{ componentData.description | markdownify }}
  {% endif %}

  {% if componentData.inheritedAttributes %}
    <h3 class="grey-color">Inherited attributes</h3>
    <ul>
      {% for inheritedObj in componentData.inheritedAttributes %}
      <li>
        from <a href="{{ base_path }}/docs/components/{{inheritedObj.component}}.component/" rel="permalink">{{ inheritedObj.component }}:</a>
        <ul class="attributes-list">
          {% for inheritedAttr in inheritedObj.attributes %}
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
        {% for attributeObject in componentData.attributes %}
          <tr>
          {% assign attributeData = commonAttributes[attributeObject.name] %}
          {% if attributeData == undefined %}
            {% assign attributeData = attributeObject %}
          {% endif %}

          {% for column in componentData.attributesColumns %}
            {% assign columnKey = column | downcase %}
            {% unless emptyColumns contains columnKey %}
              {% assign columnData = 'o-component-' | append: columnKey %}
              {% assign cellContent = attributeData[columnKey]  | default: '' %}
              {% if columnKey != 'type' %}
                {% assign cellContent = cellContent | markdownify %}
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
      {% for inheritedObj in componentData.inheritedOutputs %}
      <li>
        from <a href="{{ base_path }}/docs/components/{{inheritedObj.component}}.component/" rel="permalink">{{ inheritedObj.component }}:</a>
        <ul class="attributes-list">
          {% for inheritedOutput in inheritedObj.outputs %}
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
        {% for outputObject in componentData.outputs %}
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