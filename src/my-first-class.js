"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.profile = function () {
        return "name: " + this.name + ", age: " + this.age;
    };
    return Person;
}());
var taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Person();
