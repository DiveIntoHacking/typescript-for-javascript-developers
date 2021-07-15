"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function double(value) {
    console.log(typeof value);
    if (typeof value === 'number') {
        return value * 2;
    }
    else {
        return value + value;
    }
}
console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
