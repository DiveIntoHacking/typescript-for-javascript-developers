"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fooCompatible;
var barCompatible = 'TypeScript';
console.log(typeof fooCompatible);
fooCompatible = barCompatible;
console.log(typeof fooCompatible);
var fooIncompatible;
var barIncompatible = 1;
// fooIncompatible = barIncompatible;
var fooString;
var barString = 'string';
fooString = barString;
var fooStringLiteral = 'fooStringLiteral';
fooString = fooStringLiteral;
var fooNumber;
var fooNumberLiteral = 1976;
fooNumber = fooNumberLiteral;
var Person = /** @class */ (function () {
    function Person(age, name) {
        this.age = age;
        this.name = name;
    }
    return Person;
}());
var me;
me = new Person(43, 'HamSan');
console.log({ me: me });
