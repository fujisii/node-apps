const name = "Make";
const add = function (a, b) {
  return a + b;
};


// {} ←カーリープレイシスと読む
// カーリープレイシスの中に「定義したい名前: 値」を記述する
// 最後のカンマはつけてもつけなくてもOK
module.exports = {
  name: name,
  add: add,
};
