$(document).ready(function () {
  var $homeElements = $('.home *');
  var $introductionElements = $('.introduction *');
  $homeWhithoutIntro = $homeElements.not($introductionElements);
  var windowHeight = $(window).height();

  // Function to check visibility and apply the hideme class
  function checkVisibility(element) {
    var elementTopPosition = element.position().top;
    var elementHeight = element.outerHeight();
    var topOfWindow = $(window).scrollTop();
    var bottomOfWindow = topOfWindow + windowHeight;
    var gap = windowHeight * 0.1;
    var maxWindowHeight = $('html').height();

    // If container is under the screen gap or over
    if ((bottomOfWindow < elementTopPosition + gap || topOfWindow > elementTopPosition + elementHeight - gap) && maxWindowHeight - gap > bottomOfWindow) {
      element.addClass('hideme');
    }
    else {
      element.removeClass('hideme');
    }

  }
  // First check of all non visible elements
  $homeWhithoutIntro.each(function () {
    checkVisibility($(this));
  });

  $(window).scroll(function () {
    $homeWhithoutIntro.each(function () {
      checkVisibility($(this));
    });
  });
});