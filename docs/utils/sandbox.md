---
title: "Sandbox"
layout: default
permalink: /sandbox/
nav_exclude: true
---
{% include base_path %}
{% include toc %}

# Sandbox

## Nueva página

```
Los include llevan un % en vez de un -

---
title: "Title of the page"
layout: default
permalink: /path/to/page/
nav_order: X 
# has_children: false
# has_toc: false
# nav_exclude: true
# grand_parent: Title grand_parent
# parent: Title parent
---

<!-- {- include base_path %} -->
<!-- {- include toc %} -->
```

## Doble columna (código y árbol, con toggle)

```
Los highlight y endhighlight llevan un % en vez de un -

<div class="multicolumn">
    <button class="unstyle toggle-tree-btn">
        <div class="btn">Toggle Tree</div>
    </button>
    <div class="multicolumncontent">
        <div class="multicolumnleft">
        {- highlight java%}
            // Aquí el código o lo que sea
        {- endhighlight %}
        </div>
        <div class="multicolumnright jstreeloader collapsed">
        // <ul> </ul> de jstree
        </div>
    </div>
</div>
```


<div class="multicolumn">
    <button class="unstyle toggle-tree-btn">
        <div class="btn">Toggle Tree</div>
    </button>
    <div class="multicolumncontent">
        <div class="multicolumnleft">
            {{ "**EjemploDeClase.java**"  | markdownify }}
            {% highlight java%}
                // Aquí el código o lo que sea
            {% endhighlight %}
        </div>
        <div class="multicolumnright jstreeloader collapsed">
            <ul>
                <li data-jstree='{"opened":true, "icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
                Mi proyecto
                <ul>
                    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
                    Carpeta 1
                    <ul>
                    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>EjemploDeClaseCustom.java</li>
                    </ul>
                    </li>
                    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-folder-open.svg"}'>
                    Carpeta 2
                    <ul>
                    <li data-jstree='{"selected": true, "icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>EjemploDeClase.java</li>
                    </ul>
                    </li>
                    <li data-jstree='{"icon":"{{ base_path }}/assets/jstree/fa-file.svg"}'>ejemplodepom.xml</li>
                </ul>
                </li>
            </ul>
        </div>
    </div>
</div>

## Doble columna (código y código, sin toggle)

```
Los highlight y endhighlight llevan un % en vez de un -

<div class="multicolumncontent">
    <div class="multicolumnnopadding" >
        {- highlight java%}
            // Aquí el código o lo que sea
        {- endhighlight %}
    </div>
    <div class="verticalDivider"></div>
    <div class="multicolumnnopadding" >
        {- highlight java%}
            // Aquí el código o lo que sea
        {- endhighlight %}
    </div>
</div>
```
<div class="multicolumncontent">
    <div class="multicolumnnopadding" >
        {{ "**First column**"  | markdownify }}
        {% highlight java%}
            // Aquí el código o lo que sea
        {% endhighlight %}
    </div>
    <div class="verticalDivider"></div>
    <div class="multicolumnnopadding" >
        {{ "**Second column**"  | markdownify }}
        {% highlight java%}
            // Aquí el código o lo que sea
        {% endhighlight %}
    </div>
</div>