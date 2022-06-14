var text = "JavaScript";


// 27 変数への代入とその確認方法
var variableNumber = 1234;
console.log(variableNumber);

var variableText = "Text";
console.log(variableText);

var variableBoolean = true;
console.log(variableBoolean);

var add = 10 + 20;
console.log(add);

var min = 20 - 10;
console.log(min);

var kakeru = 50 * 2;
console.log(kakeru);

var waru = 20 / 2;
console.log(waru);

var oneTwoThreeFour = "12" + "34";
console.log(oneTwoThreeFour);


// 28 if文
var q1 = true;
if (q1 === true) {
  console.log(q1);
};

var number = 100;
if (number === 100) {
  console.log(number);
};

var q3 = "JavaScript";
if (q3 === "JavaScript") {
  console.log(q3);
};


// 29 else
// 1.elseを使用する時の注意点
//   elseの前にコードを書かない
// 2.JavaScriptで実装した時の確認ポイント
//   コンソールにエラーがないか確認する

var number = 100;
if (number === 100) {
  console.log(number);
} else {
  console.log("falseの処理");
};

var text = "JS";
if (text === "JS") {
  console.log(text);
} else {
  console.log("falseの処理");
};


// 30 条件分岐
var number = 100;
if (number === 100) {
  console.log("条件Aの処理");
} else if (number === 10) {
  console.log("条件Bの処理");
} else {
  console.log("それ以外の処理");
};


// 31 論理演算子
var num1 = 10;
var num2 = 20;
if (num1 == 10 && num2 == 20) {
  console.log("Aの処理");
} else {
  console.log("Bの処理");
};

if (num1 == 10 || num2 == 20) {
  console.log("Aの処理");
} else {
  console.log("Bの処理");
};

var numNot = 10;
if (!numNot === 10) {
  console.log("Aの処理");
} else {
  console.log("Bの処理");
};


// 32 関係演算子
var x = 5
var y = 3
if (x > y) {
  console.log("xはyより大きい");
};
if (x < y) {
  console.log("xはyより小さい");
};
if (x >= y) {
  console.log("xはyより大きい");
};
if (x <= y) {
  console.log("xはyより小さい");
};


// 33 三項演算子
var bln = true;
var resultBln = bln ? "Aの処理" : "Bの処理";
console.log(resultBln);

var num = 6;
var resultNum = 5 < num ? "trueの処理" : "falseの処理";
console.log(resultNum);

var num = 4;
var resultNum = 5 < num ? "trueの処理" : "falseの処理";
console.log(resultNum);

var num = 10;
var resultNum = 10 <= num ? "trueの処理" : "falseの処理";
console.log(resultNum);

var text = "";
var resultText = text === "" ? "trueの処理" : "falseの処理";
console.log(resultText);


// 34 配列とオブジェクト
var animal = ["dog", "bird", "rat"];
console.log(animal[0]);
console.log(animal[2]);

// keyはプロパティ名
// valueは値
// プロパティとはあらかじめ設定しておいた値に名前をつけたもの

var dog = {
  name: "太郎",
  age: 2,
  bleed: "チワワ",
}
console.log(dog);

var dogs = [
  {
    name: "lien",
    age: "4",
    bleed: "bostonTerier"
  },
  {
    name: "gummo",
    age: "2",
    bleed: "burselgrifon"
  },
  {
    name: "rosie",
    age: "5",
    bleed: "ToyPoodle"
  }
]
console.log(dogs[0].name);
console.log(dogs[2].bleed);


// 35 ループ処理
for (var i = 0; i < 10; i++) {
  console.log(i);
};

var animals = ["dog", "cat", "bird"];
for (i in animals) {
  console.log(animals[i]);
};

var dogs = [
  {name: "lien", age: "4", bleed: "bostonTerier"},
  {name: "gummo", age: "2", bleed: "burselgrifon"},
  {name: "rosie", age: "5", bleed: "ToyPoodle"}
];
for (dog of dogs) {
  console.log(dog);
};


// 36 関数(function)
function loveDog() {
  alert("犬が好きです")
};
loveDog();

var addNumber = function () {
  return 1 + 2;
};
console.log(addNumber());

// 変数が適用される範囲のこと


// 37 変数と定数
// 1. var、let、constの使用についてまとめてください。
// var:変数の再代入、再宣言が行える。
// let:変数の再代入はできるが、再宣言はできない。
// const:変数の再代入、再宣言できない。

// 2. なぜvarを使わない理由をまとめてください。
// 容易に再代入、再宣言ができ流ので宣言した変数に対して何が入って来るか分からなくなる。バグの温床になるから。

// 3. 定数とは?
// 再割り当て できない、「読み取り専用」である。


// 38 命名規則
// 1. 命名規則を従う理由をまとめてください。
// 適当な名前にしてしまうとあとで見返した時にどう言った役割なのかが分からくなるから。
// 複数人で開発時、それぞれが自由に名前をつけてしまうと統一性のないものができてしまから。

// 2. ケバブケースを使用したclass名を書いてください。
// class="nav-contents"

// 3. スネークケースを使用したclass名を書いてください。
// class="nav_contents"

// 4. キャメルケースを使用した変数名を書いてください。
// navContents


// 39 メソッド・引数・コールバック関数
// function sumNum(x) {
//   const result = x + 1
//   console.log(result);
// };
// sumNum(1);

// function sumNum(x, y) {
//   const result = x + y
//   console.log(result);
// };
// sumNum(5, 10);

// function showText(x) {
//   console.log(x);
// };
// showText(`引数`);


// function apple(price, func) {
//   const name = "リンゴ";
//   func(name, price);
// }
// const price = function fruit(name, price) {
//   console.log(name + "の値段は" + price + "円です。");
// }
// apple(198, price);


function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result;
};
console.log(fruit("リンゴ", 198));


// 40
const mainTitle = document.getElementById("main-title");
console.log(mainTitle);

const contents = document.getElementsByClassName("contents");
console.log(contents);

// idで指定したwrapperを取得
const wrapper = document.getElementById("wrapper")
// 挿入するHTML要素
const newBox = `<div class="new-box">new-box要素</div>`
// setTimeoutはJavaScriptが用意している関数です・
setTimeout(function () {
// wrapper要素内先頭にnewBoxに代入されたHTML要素を挿入
  wrapper.insertAdjacentHTML("afterbegin", newBox);
// wrapper要素の直後にnewBoxに代入されたHTML要素を挿入
  wrapper.insertAdjacentHTML("afterend", newBox);
}, 3000);

// idで指定したparentを取得
const parent = document.getElementById("parent");
// idで指定したchildを取得
const child = document.getElementById("child");
setTimeout(function () {
// 3秒後に#child要素が削除される
parent.removeChild(child)
}, 3000);

