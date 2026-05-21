---
layout: default
permalink: /faq/
title: "Frequently asked questions"
under_construction: true
parent: Aditional information
nav_order: 1
---
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" style="display:none;">
  var onPostClick = function (element) {

    var parentPanel = $(element).parents('.panel:first');
    parentPanel.siblings().find('.panel-collapse').removeClass('in');

    var collapsingPanel = parentPanel.find('.panel-collapse');

    var isVisible = collapsingPanel.hasClass('in');
    collapsingPanel.addClass('collapsing').removeClass('collapse in');
    if (!isVisible) {
        collapsingPanel.height(collapsingPanel.find('.panel-body:first').outerHeight());
    }
    setTimeout(function(){
        collapsingPanel.removeClass('collapsing').addClass('collapse');
        if (!isVisible){
            collapsingPanel.addClass('in');
        }
        collapsingPanel.height('');
    }, 350);
  };
</script>

<div class="faq-posts">
{% for post in site.data.faq.post %}
    {% include o-faq-post.html %}
{% endfor %}
</div>