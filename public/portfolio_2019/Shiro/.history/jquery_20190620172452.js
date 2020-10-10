$(function () {
  var window = $(window),
    header = $('#header_nav'),
    headerChange = $('.header_nav'),
    heroBottom;

  window.on('scroll', function () {
    heroBottom = $('.hero').height(300);
    if (window.scrollTop() > heroBottom) {
      headerChange.addClass('show');
    } else {
      headerChange.removeClass('show');
    }
  });

  window.trigger('scroll');
});