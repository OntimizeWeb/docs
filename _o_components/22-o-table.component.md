---
permalink: /components/table/
title: "Table"
comp: table
---

{% include base_path %}


<div class="notice--warning" markdown="1">

**WARNING:** table is storing changes made by user (order changes, filters, etc.) in the browser local storage. That values will take precedence over table html definition.
For example: if a *ID* column is not in the *sort-columns* attribute but the user has ordered
other column it manually, it will be order in future loads. For restoring initial state is enough to
delete it *com.ontimize.web.quickstart* entries in browser local storage.

</div>


{% for post in site.o_table_components %}
  {% include archive-single.html %}
{% endfor %}


## Demo

You can interact with different options of the table in <a href="https://ontimizeweb.github.io/ontimize-web-ngx-playground/">this live demo</a> in the section *Data->Table*.