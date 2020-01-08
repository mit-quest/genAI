$(document).ready(function() {

  $('.scrollto').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000)
    return false
  })
});