export {};

// yearはnumber型のデータを返す関数です。
const year = (): number => {
  return 2019;
};

// sayYearは() => numberという型の関数を返す関数です。
const sayYear = (): (() => number) => {
  return year;
};

// 以下は様々なものに対してtypeofを実行し、その結果を画面に出力した例です。
// この結果だけでも、様々な型が表示されることが分かります。
console.log(year()); // => 2019
console.log(typeof year()); // => number
console.log(typeof year); // => function
console.log(sayYear()); // => [Function: year]
console.log(typeof sayYear()); // => function
console.log(typeof sayYear()()); // => number
console.log(typeof sayYear); // => function

type TYear = ReturnType<typeof year>; // => type TYear = number
type TSayYear = ReturnType<typeof sayYear>; // => type TSayYear = () => number
