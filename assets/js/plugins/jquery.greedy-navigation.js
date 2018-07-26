/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  
  // The visible list is overflowing the nav
  //if($vlinks.width() > availableSpace) {
  if (availableSpace < 900){
   
    // Record the width of the list
    if ($vlinks.width()>0){
      breaks.push($vlinks.width());
      // Move item to the hidden list
      var $current = $vlinks.children().last();
      if ($current.hasClass('masthead__menu-separator')){
        $current.css('display','none');
      }
      $current.prependTo($hlinks);
    }
    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {
    
    // There is space for another item in the nav
    //if(availableSpace > breaks[breaks.length-1]) {
      
      // Move the item to the visible list
      if ($hlinks.width()>0){
        var $current = $hlinks.children().first();
        if ($current.hasClass('masthead__menu-separator')){
          $current.css('display','');
        }
        $current.appendTo($vlinks);
        breaks.pop();
      }
      //
      
    //}

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  console.log('breaks.length:'+breaks.length);

  // Recur if the visible list is still overflowing the nav
  if(availableSpace < 900 & $vlinks.width() > 0) {
    updateNav();
  }else if (availableSpace > 900 & $hlinks.width() > 0){
    updateNav();
  }
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();