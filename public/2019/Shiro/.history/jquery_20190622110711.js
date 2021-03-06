$(function () {
  //ヘッダー可変
  window.addEventListener("scroll", function () {
    var headerElement = document.getElementById("header_nav");
    var rect = headerElement.getBoundingClientRect();
    var y = rect.top + window.pageYOffset; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
    if (y > 500) {
      headerElement.classList.remove('hidden');
    } else {
      headerElement.classList.add('hidden');
    }
  });


  //ページトップへ戻る
  var pagetop = $('#pageTop');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) { //〇pxスクロールしたら表示
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500); //〇秒かけてトップへ移動
    return false;
  });


  // //ページ内リンクスムーススクロール
  // $('a[href^="#"]').click(function () {
  //   var speed = 700;
  //   var href = $(this).attr("href");
  //   var target = $(href == "#" || href == "" ? 'html' : href);
  //   var position = target.offset().top;
  //   $('body,html').animate({
  //     scrollTop: position
  //   }, speed, 'swing');
  //   return false;
  // });

  //ハンバーガーメニュー切り替え
  $('#menu').hide();
  $('#menu_btn').on('click',function(){
    $(this).toggleClass('close');
    $('#menu:not(:animated)').slideToggle('slide');
  });

  $('.item').on('click',function(){
    $('#menu').fadeOut();
    $('#menu_btn').removeClass('close');
  });

});