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
