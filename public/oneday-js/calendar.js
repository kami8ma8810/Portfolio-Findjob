//==========データの保存・参照==========
//localStorageを利用
// var storage = localStorage;

// //storageキー「foo」で「bar」を保存
// storage.setItem("foo", "bar");
// // 次の書き方でも同じ
// //storage.foo="bar";
// //storage.["foo"]="bar";

// //保存したデータを参照
// console.log(storage.getItem("foo"));
// // 次の書き方でも同じ
// //console.log(storage.foo);
// //console.log(storage["foo"]);

// //==========保存したデータの削除==========
// // localStorageを利用
// var storage = localStorage;
// // storageにキー：foo で bar を保存
// storage.setItem("foo", "bar");
// // 次の書き方でも同じ
// //storage.foo    = "bar";
// //storage["foo"] = "bar";

// // データを削除
// storage.removeItem("foo");

// // 保存したデータを参照
// console.log(storage.getItem("foo"));
// // 次の書き方でも同じ
// //console.log(storage.foo);
// //console.log(storage["foo"]);

// //==========日付を取得する==========
// // 日付オブジェクトのインスタンスを生成
// var date = new Date();
// // 年月日を取得
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// // 取得した曜日を漢字の曜日に置き換える
// var weekdays = ["日", "月", "火", "水", "木", "金", "土"];
// var weekday = weekdays[date.getDay()];
// var str = "今日は" + year + "年" + month + "月" + day + "日(" + weekday + ") です";
// console.log(str);

// //==========指定した日付を取得する==========
// // 日付オブジェクトのインスタンスを 2020/12/7 の日付で生成
// var date = new Date(2020, 12, 7);

// // 日にちを1日にセット
// date.setDate(1);

// // 年月日を取得
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// // 取得した曜日を漢字の曜日に置き換える
// var weekdays = ["日", "月", "火", "水", "木", "金", "土"];
// var weekday = weekdays[date.getDay()];
// var str = "今日は" + year + "年" + month + "月" + day + "日(" + weekday + ") です";
// console.log(str);

window.addEventListener("DOMContentLoaded", function () {
  // 本日の日付を取得
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var today = date.getDate();

  // 当月1日の日付を取得
  var firstDate = new Date(year, month - 1, 1);
  // 翌月の0日を指定して当月の月末日を取得
  var lastDate = new Date(year, month, 0);

  // 当月の表示
  var table_title = year + "年 " + month + "月";
  var captionHtml = "<caption>" + table_title + "</caption>";

  // 曜日の行を作成
  var weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  var weekdaysStr = "<tr>";
  for (var i = 0; i < 7; i++) {
    if (i == 0) {
      weekdaysStr += "<td class='sun'>" + weekdays[i] + "</td>";
    } else if (i == 6) {
      weekdaysStr += "<td class='sat'>" + weekdays[i] + "</td>";
    } else {
      weekdaysStr += "<td>" + weekdays[i] + "</td>";
    }
  }
  weekdaysStr += "</tr>";

  // カレンダーの日付セル部分を作成
  var htmlStr = "<tr>";
  // 当月１日の曜日
  var startWeekDay = firstDate.getDay();
  // 1日までを空白で埋める
  for (var i = 0; i < startWeekDay; i++) {
    htmlStr += "<td>&nbsp;</td>";
  }

  // 1日から月末日までループ
  for (var i = 1; i <= lastDate.getDate(); i++) {
    // 当月i日の日付オブジェクトを生成
    var date = new Date(year, month - 1, i);
    // i日の曜日を取得
    var weekDay = date.getDay();
    var dateStr = year + "." + month + "." + i;

    // 日を取得
    var cellStr = date.getDate();
    // 日曜日の場合は行の開始なのでtr開始タグ
    if (weekDay == 0) htmlStr += "<tr>";

    if (weekDay == 0) {
      htmlStr += "<td class='sun'>";
    } else if (weekDay == 6) {
      htmlStr += "<td class='sat'>";
    } else {
      htmlStr += "<td>";
    }
    htmlStr += cellStr + "</a></td>";

    // 土曜日の場合は行の終わりなのでtr終了タグ
    if (weekDay == 6) htmlStr += "</tr>\n";
  }

  // 月末日の曜日
  var lastDayWeek = lastDate.getDay();
  // 月末日が土曜日でない場合は 空白のセルでテーブルを埋める
  if (lastDayWeek != 6) {
    // 月末日の翌日の曜日から土曜日までをfor文で回す
    for (var i = lastDayWeek + 1; i <= 6; i++) {
      htmlStr += "<td>&nbsp;</td>";
    }
    htmlStr += "</tr>";
  }
  //tableタグで画面に表示
  document.getElementById("calendar").innerHTML = "<table>" + captionHtml + weekdaysStr + htmlStr + "</table>";
});