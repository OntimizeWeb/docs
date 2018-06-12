---
permalink: /components/table/
title: "Table"
comp: table
---

<aside class="sidebar__right">
  <nav class="toc">
    <header><h4 class="nav__title"><i class="fa fa-file-text"></i> On This Page</h4></header>
    <ul class="toc__menu" id="markdown-toc">
      <li><a href="#basic-example" id="markdown-toc-overview">Basic example</a>
        <ul>
          <li><a href="#define-columns" id="markdown-toc-overview">1. Define columns</a></li>
          <li><a href="#sorting">2. Sorting</a></li>
          <li><a href="#pagination">3. Pagination</a></li>
        </ul>
      </li>
      <li><a href="#data-binding" id="markdown-toc-overview">Data binding</a>
        <ul>
          <li><a href="#binding-to-local-data" id="markdown-toc-overview">1. Binding to local data</a></li>
          <li><a href="#binding-to-remote-data">2. Binding to remote data</a></li>
        </ul>
      </li>
        <li><a href="#filtering">Filtering </a>
          <ul>
            <li><a href="#general-filtering">1. Quick filter</a></li>
            <li><a href="#filtering-by-columns">2. Filtering by columns</a></li>
            <li><a href="#custom-filter">3. Custom filter</a></li>
          </ul>
      </li>
      <li><a href="#rendering" id="markdown-toc-overview">Rendering</a>
        <ul>
          <li><a href="#rendering">1. Default renders </a></li>
          <li><a href="#customazing-template">2. Custom renders </a></li>
        </ul>
      </li>
      <li><a href="#editing" id="markdown-toc-overview">Editing</a>
        <ul>
          <li><a href="#default-editors">1. Default editors </a></li>
          <li><a href="#custom-editors">2. Custom editors </a></li>
        </ul>
      </li>
      <li><a href="#checkbox-selection" id="markdown-toc-overview">Features</a>
        <ul>
          <li><a href="#checkbox-selection">1. Checkbox selection </a></li>
          <li><a href="#inside-the-form">2. Inside the form </a></li>
          <li><a href="#fixing-position-of-the-footer">3. Fixing position of the footer </a></li>
          <li><a href="#aggregates">4. Aggregates </a></li>
          <li><a href="#calculated-columns">5. Calculated columns </a></li>
          <li><a href="#table-options" id="markdown-toc-overview">6. Table options</a></li>
          <li><a href="#table-buttons" id="markdown-toc-overview">7. Table buttons</a></li>
          <li><a href="#exporting" id="markdown-toc-overview">8. Exporting</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</aside>

{% include base_path %}

The `o-table` provides a table of data that can be used to display rows of data.

If the table also is *inside a form*, the `attr` property is required for registry the table in the form. 

<div class="notice--warning" markdown="1">

  **WARNING:** table is storing changes made by user (order changes, filters, etc.) in the browser local storage. That values will take precedence over table html definition.
  For example: if a *ID* column is not in the *sort-columns* attribute but the user has ordered
  other column it manually, it will be order in future loads. For restoring initial state is enough to
  delete it *com.ontimize.web.quickstart* entries in browser local storage.

</div>

![Table component]({{ "/images/components/tabla/basic-example-table.png" | absolute_url }}){: .comp-example-img}



{% for post in site.o_table_components %}
  {% include archive-table.md %}
{% endfor %}


## Demo

You can interact with different options of the table in <a href="https://ontimizeweb.github.io/ontimize-web-ngx-playground/">this live demo</a> in the section *Data->Table*.