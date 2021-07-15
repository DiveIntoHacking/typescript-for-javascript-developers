"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var taro = new Person('Taro', 30);
console.log(taro);
var profile = ['Ham', 43];
var ham = new (Person.bind.apply(Person, __spreadArray([void 0], profile)))();
console.log(ham);
