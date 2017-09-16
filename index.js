$(document).on('click', '.arrow', function(event) {
    event.preventDefault();
    $('html, body').animate({
    scrollTop: $('.abc-nav').offset().top
  }, 800);
})