---
permalink: /components/o-container.components/
title: "Containers"
---

{% capture rowCapture %}
{% include o-component-single.md comp="row" %}
{% endcapture %}
{{ rowCapture | replace: '    ', ''}}

{% capture columnCapture %}
{% include o-component-single.md comp="column" %}
{% endcapture %}
{{ columnCapture | replace: '    ', ''}}


## Demo

You can interact with different options of this components in <a href="https://ontimizeweb.github.io/ontimize-web-ngx-playground/">this live demo</a> in the section *Layout->Containers*.