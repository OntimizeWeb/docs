---
permalink: /components/table/obasetablecelleditor/
title: "OBaseTableCellEditor"
comp: obasetablecelleditor
class: "OBaseTableCellEditor"
---
{% assign dataFile = site.data.components['obasetablecelleditor']%}

{% capture obasetablecelleditorCapture %}
{% include o-class.md comp='obasetablecelleditor' %}
{% endcapture %}
{{ obasetablecelleditorCapture | replace: '    ', ''}}


