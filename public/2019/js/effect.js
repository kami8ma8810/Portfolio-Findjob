//ローディング
$(function(){
	var loader = $('.loader-wrap');

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},3000);
});


//ヘッダーメニュー開閉

$(function () {
  var menuHeight = $("#nav-menu").height();
  var startPos = 0;
  $(window).scroll(function () {
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
      if ($(window).scrollTop() >= 400) {
        $("#nav-menu").css("top", "-" + menuHeight + "px");
      }
    } if (currentPos <= 500) {
      $("#nav-menu").css("top", 0 + "px");
    }
    startPos = currentPos;
  });
});




//ページトップへ戻るボタン

$(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {  //●●pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '10px' //下から●●pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-120px' //下から-●●pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});


//メニューボタン出現

$(function() {
  var appear = false;
  var nav_appear = $('#nav_appear');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {  //●●pxスクロールしたら
      if (appear == false) {
        appear = true;
        nav_appear.stop().animate({
          'top': '10px' //上から●pxの位置に
        }, 300); //●秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        nav_appear.stop().animate({
          'top': '-90px' //上から-●pxの位置に
        }, 300); //●秒かけて隠れる
      }
    }
  });
});



//スムーススクロール

$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function() {
     // スクロールの移動速度
     var speed = 400; // ミリ秒
     // アンカーの値取得
     var href= $(this).attr("href");
     // 移動先を取得
     var target = $(href == "#" || href == "" ? 'html' : href);
     // 移動先を数値で取得
     var position = target.offset().top;
     // スムーススクロール
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });
});



//ふわっと要素表示
$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          //ターゲット要素の高さ
          var targetElement = $(this).offset().top;
          //スクロール位置（ページの一番上からディスプレイの上端）
          var scroll = $(window).scrollTop();
          //ウィンドウの高さ
          var windowHeight = $(window).height();
          //数値は下からの位置
          if (scroll > targetElement - windowHeight + 300){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});


