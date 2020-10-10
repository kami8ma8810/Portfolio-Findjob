$(function () {
  window.addEventListener("scroll", function () {
    var headerElement = document.getElementById("header_nav"); //セレクタを取得
    var rect = headerElement.getBoundingClientRect(); // 
    var y = rect.top + window.pageYOffset; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
    if (y > 500) { // 変数yの値が0よりも
      headerElement.classList.remove('hidden'); // 大きければhiddensセレクタを削除する
    } else {
      headerElement.classList.add('hidden'); // そうでなければhiddensセレクタを追加する
    }
  });

  $('.icon-hamburger').on('click', function() {
    if(jQuery('.menu-container .menu').css('display') === 'block') {
      jQuery('.menu-container .menu').slideUp('1500');
    }else {
      jQuery('.menu-container .menu').slideDown('1500');
    }
  });
});