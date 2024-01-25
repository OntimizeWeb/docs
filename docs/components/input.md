---
layout: default
title: Input
permalink: /components/input/
author_profile: false
has_children: true
parent: Components
nav_order: 1
has_toc: false
---

{% include base_path %}

In this section you will find all Ontimize Web available components as well as its configuration parameters and explanatory code snippets.

There is also a live demo where you can interact with different components.


[Live demo](https://try.imatia.com/ontimizeweb/v15/playground/main/inputs/home){: .btn .btn--success}{:target="_blank"}

<div class="menu-card-container">
{% for image in site.static_files %}
{% if image.path contains 'images/menus/input_light' %}
<a href="{{ base_path }}{{ page.permalink }}{{ image.name | remove: '.svg' }}/overview">
<div class="menu-card">
<div class="image-container">
<img src="{{ base_path }}{{ image.path }}" alt="{{ image.name }}">
</div>
<p>{{ image.name | capitalize | remove: '.svg' }}</p>
</div>
</a>
{% endif %}
{% endfor %}
</div>