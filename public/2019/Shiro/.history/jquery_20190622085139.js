$(function () {
  //ヘッダー可変
  window.addEventListener("scroll", function () {
    var headerElement = document.getElementById("header_nav"); //セレクタを取得
    var rect = headerElement.getBoundingClientRect(); // 
    var y = rect.top + window.pageYOffset;// Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
    if (y > 500) {
      headerElement.classList.remove('hidden'); // 大きければhiddensセレクタを削除する
    } else {
      headerElement.classList.add('hidden'); // そうでなければhiddensセレクタを追加する
    }
  });

  //ページトップへ戻る
  var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() &gt; 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });

});