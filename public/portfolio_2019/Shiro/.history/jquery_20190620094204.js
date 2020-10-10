$(function () {

  var nav = $('#header_nav'),
    offset = nav.offset();

  $(window).scroll(function () {
    if ($(window).scrollTop() > offset.top - 5) {
      nav.addClass('nav_fixed');
    } else {
      nav.removeClass('nav_fixed');
    }
  });

});