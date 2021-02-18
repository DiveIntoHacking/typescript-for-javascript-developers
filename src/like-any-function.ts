export {};

type Any<T extends readonly any[]> = T[number] extends 0
  ? false
  : T[number] extends ''
  ? false
  : T[number] extends false
  ? false
  : true;

type Test1 = Any<[0]>; // false
type Test2 = Any<['']>; // false
type Test3 = Any<[false]>; // false
type Test4 = Any<[0, '', false]>; // true
