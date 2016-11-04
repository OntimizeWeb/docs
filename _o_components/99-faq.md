---

permalink: /components/faq/
title: "Frequently asked questions"
under_construction: true
---
<script type="text/javascript" style="display:none;">
  var onPostClick = function (element) {

    var parentPanel = $(element).parents('.panel:first');
    parentPanel.siblings().find('.panel-collapse').removeClass('in');

    var collapsingPanel = parentPanel.find('.panel-collapse');
    
    var isVisible = collapsingPanel.hasClass('in');

   // if (!isVisible) {
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
  //  } else {
  //      collapsingPanel.removeClass('in');

  //  }
    

    
   
  };
</script>

<div class="faq-posts">
{% for post in site.o_faq_posts %}
    {% include o-faq-post.html %}
{% endfor %}
</div>