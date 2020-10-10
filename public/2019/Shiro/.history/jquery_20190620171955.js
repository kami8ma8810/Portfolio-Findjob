$(function () {
  var _window = $(window),
  _header = $('.site-header'),
  headerChange = $('.header-change'),
  heroBottom;

_window.on('scroll',function(){     
  heroBottom = $('.hero').height();
  if(_window.scrollTop() > heroBottom){
      headerChange.addClass('show');  
  }
  else{
      headerChange.removeClass('show');
  }
});

_window.trigger('scroll');
});