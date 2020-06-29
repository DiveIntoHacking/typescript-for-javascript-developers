export {};

// 本モジュールではアロー関数を使用した場合のオーバーロードの書き方について紹介します。

// 以下は、関数の型の例です。
// この関数の型は、省略形の関数の型と言います。
// そして、関数の型のことを、呼び出しシグネチャーとか呼び出し署名と呼んだりもします。
type KansuType = (name: string) => void;
const kansu: KansuType = (name: string) => {
  console.log(name);
};
kansu('Ham');

// 以下は、省略形ではない、関数の型の例です。
type AnotherKansuType = {
  (name: string): void;
};
const anotherKansu: AnotherKansuType = (name: string) => {
  console.log(name);
};
anotherKansu('Ham');

// アロー関数の形式でオーバーロードの呼び出しシグネチャーを表現する場合、
// 省略形ではない方の形式で関数の型を定義する必要があります。
// overloads.ts で紹介した関数をアロー関数に置き換えると以下のようになります。
type Double = {
  (value: number): number;
  (value: string): string;
};

const double: Double = (value: any): any => {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
};

console.log(double(100));
console.log(double('Go '));
// 今回のようにアロー関数の場合でも、呼び出しシグネチャーで、引数の型としてnumberとstringを定義しているため
// 以下のような呼び出しはコンパイルエラーとなります。
// console.log(double(true));
