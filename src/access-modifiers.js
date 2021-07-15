"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
    Person.prototype.profile = function () {
        return "name: " + this.name + ", age: " + this.age;
    };
    return Person;
}());
var Android = /** @class */ (function (_super) {
    __extends(Android, _super);
    function Android(name, age, nationality) {
        return _super.call(this, name, age, nationality) || this;
    }
    Android.prototype.profile = function () {
        return "name: " + this.name + ", age: " + this.age + ", nationality: " + this.nationality;
    };
    return Android;
}(Person));
var taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();
