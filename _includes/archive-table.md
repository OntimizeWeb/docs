{% include base_path %}

{% if post.header.teaser %}
  {% capture teaser %}{{ post.header.teaser }}{% endcapture %}
{% else %}
  {% assign teaser = site.teaser %}
{% endif %}

{% if post.id %}
  {% assign title = post.title | markdownify | remove: "<p>" | remove: "</p>" %}
{% else %}
  {% assign title = post.title %}
{% endif %}

<div class="{{ include.type | default: "list" }}__item">
  <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
    {% if include.type == "grid" and teaser %}
      <div class="archive__item-teaser">
        <img src=
          {% if teaser contains "://" %}
            "{{ teaser }}"
          {% else %}
            "{{ teaser | prepend: "/images/" | prepend: base_path }}"
          {% endif %}
          alt="">
      </div>
    {% endif %}

    {% assign title_id = title | slugify   %}
    <h2 id="{{ title_id }}" >
        {{ title }}
    </h2>
    <p>
    
    {{ post | smartify | markdownify  }}
       
    </p>
  </article>
</div>