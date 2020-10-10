window.onload = function () {
  var textChangeBtn = document.getElementById("textChangeBtn");
  textChangeBtn.onclick = function () {
    var changeText = document.getElementById("changeText");
    changeText.textContent = "書き換えました";
  }
  var imgChangeBtn = document.getElementById("imgChangeBtn");
  imgChangeBtn.onclick = function () {
    var changeImg = document.getElementById("changeImg");
    var changedImg = "<p>今日のネコ</p><img src=\"images/cat_2.jpg\">";
    changeImg.innerHTML = changedImg;
  }
};

window.addEventListener("DOMContentLoaded", function () {
  var image = document.getElementById("catImg");
  // マウスオーバー時
  image.addEventListener("mouseover", function () {
    this.src = "images/cat_2.jpg";
  });

  // マウスアウト時
  image.addEventListener("mouseout", function () {
    this.src = "images/cat_1.jpg";
  });
});

window.addEventListener("DOMContentLoaded", function () {
  // セレクトボックスのオブジェクトを取得
  var areaSelect = document.getElementById("area");
  var prefSelect = document.getElementById("pref");

  // 地方以下の都道府県の配列
  var prefList = [
    ["北海道", "青森", "岩手", "宮城", "秋田", "山形", "福島"],
    ["東京", "茨城", "栃木", "群馬", "埼玉", "千葉", "神奈川"],
    ["新潟", "富山", "石川", "福井", "山梨", "長野", "岐阜", "静岡", "愛知"],
    ["京都", "大阪", "三重", "滋賀", "兵庫", "奈良", "和歌山"],
    ["鳥取", "島根", "岡山", "広島", "山口"],
    ["徳島", "香川", "愛媛", "高知"],
    ["福岡", "佐賀", "長崎", "大分", "熊本", "宮崎", "鹿児島", "沖縄"]
  ];

  // 地方のセレクトボックスが選択された際の処理
  areaSelect.addEventListener("change", function () {
    // 都道府県のセレクトボックスを空にする
    prefSelect.innerHTML = "";

    // 「選択してください」が選択された際は処理をここれ中断
    if (this.value == "") return;

    // 選択した地方以下の都道府県のリスト
    var list = prefList[this.value];
    // 都道府県のリストから選択項目を作成
    for (var i = 0; i < list.length; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.text = list[i];
      prefSelect.appendChild(option);
    }
  });
});