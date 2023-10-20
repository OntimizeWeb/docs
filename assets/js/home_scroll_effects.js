$(document).ready(function () {
  var $homeElements = $('.home *');
  var $noHideElements = $('.nohide *');
  $homeWhithoutNoHideElements = $homeElements.not($noHideElements);
  var windowHeight = $(window).height();

  // Function to check visibility and apply the hideme class
  function checkVisibility(element) {
    var elementTopPosition = element.position().top;
    var elementHeight = element.outerHeight();
    var topOfWindow = $(window).scrollTop();
    var bottomOfWindow = topOfWindow + windowHeight;
    // Size of the fade effect
    var gap = windowHeight * 0.1;
    var maxWindowHeight = $('html').height();

    // If container is under the screen gap or over and the bottom of the window is over the gap
    if ((bottomOfWindow < elementTopPosition + gap || topOfWindow > elementTopPosition + elementHeight - gap) && maxWindowHeight - gap > bottomOfWindow) {
      element.addClass('hideme');
    }
    else {
      element.removeClass('hideme');
    }

  }
  // First check of all non visible elements
  $homeWhithoutNoHideElements.each(function () {
    checkVisibility($(this));
  });

  $(window).scroll(function () {
    $homeWhithoutNoHideElements.each(function () {
      checkVisibility($(this));
    });
  });
});