$(function () {
  var window = $(window),
    header = $('#header_nav'),
    headerChange = $('.header-change'),
    heroBottom;

  window.on('scroll', function () {
    heroBottom = $('.hero').height();
    if (window.scrollTop() > heroBottom) {
      headerChange.addClass('show');
    } else {
      headerChange.removeClass('show');
    }
  });

  window.trigger('scroll');
});