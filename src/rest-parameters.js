"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducer = function (accumulator, currentValue) {
    console.log({ accumulator: accumulator, currentValue: currentValue });
    return accumulator + currentValue;
};
var sum = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values.reduce(reducer);
};
console.log(sum(1, 2, 3, 4, 5));
