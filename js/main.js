//================================================================
//#Save をクリックした際に #text に入力したデータをlocalStorageへ保存する
//================================================================
$("#save").on("click", function () {
  const sarch = $("#kensakumado").val(); //変数名input...#kensakumadoの値を取得（.val()取得）
  const text = $("#memoran").val(); //変数名text...#memoranの値を取得（.val()取得）
  const date = {
    title: sarch,
    text: text,
  };
  console.log(date);
  // const jsonDate = JSON.stringify(date);
  // localStorage.setItem("memo", jsonDate);
});

//================================================================
//localStorage記述と指示

//データ登録	localStorage.setItem(key, value);
//データ取得	localStorage.getItem(key);
//データ更新	localStorage.setItem(key, value);
//データ削除	localStorage.removeItem(key);
//データ全削除	localStorage.clear();
//データの長さ	localStorage.length;
//データの順番	localStorage.key(インデックス);

//================================================================

//====================================================
//#clear をクリックした際にlocalStorage内のデータを削除する
//====================================================
// $("#clear").on("click", function () {
//   //localStorage.removeItem("memo"); //localStorage内の保存データを削除
//   $("#kensakumado").val(""); // #inputの値を""（文字なし）で上書き
//   $("#memoran").val(""); // #text_areaの値を""（文字なし）で上書き
// });

//===========================================================================
//localStorage内にデータが保存されている場合、その値を #input #text_area に表示させる
//===========================================================================
// if (localStorage.getItem("memo")) {
//   const jsonDate = localStorage.getItem("memo");
//   const date = JSON.parse(jsonDate);
//   console.log(date);
//   $("#kensakumado").val(date.title); // #inputの値に.valで呼び出した値を入力 (date.title)
//   $("#memoran").val(date.text); // #text_areaの値に.valで呼び出した値を入力 (date.text)
// }
