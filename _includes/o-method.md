{% include base_path %}

{% if include.file and site.data.components[include.file] and include.collection and site.data.components[include.file][include.collection] %}
  {% assign methods = site.data.components[include.file][include.collection] %}
{% endif %}

{% for method in methods %}
<table class="o-method-table">
    <thead>
        <tr><th colspan="2"><strong>{{ method['name'] | markdownify }}</strong></th></tr>
    </thead>
    <tbody>
    <tr><td colspan="2">{{ method['description' | markdownify] }}</td></tr>

    {% if method['params'] %}
        {% assign params = method['params'] %}
        <tr><td colspan="2"><strong>Parameters</strong></td></tr>
        {% for param in params %}
            <tr>
                <td>{{ param['name'] }} {{ param['type'] | markdownify }}</td>
                <td>{{ param['description'] | markdownify }}</td>
            </tr>
        {% endfor %}
    {% endif %}

    {% if method['return'] %}
        <tr><td colspan="2"><strong>Returns</strong></td></tr>
        <tr>
            <td>{{ method['return']['name'] | markdownify }}</td>
            <td>{{ method['return']['description'] | markdownify }}</td>
        </tr>
    {% endif %}
    </tbody>
</table>
{% endfor %}
