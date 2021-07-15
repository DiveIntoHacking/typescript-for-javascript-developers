"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Me = /** @class */ (function () {
    function Me() {
    }
    Me.work = function () {
        //     "Hey, guys! This is Atsushi! Are you interested in TypeScript? Let's dive into TypeScript!";
        return "Hey, guys! This is " + this.firstName + "! Are you interested in TypeScript? Let's dive into TypeScript!";
    };
    Me.isProgrammer = true;
    Me.firstName = 'Atsushi';
    Me.lastName = 'Ishida';
    return Me;
}());
// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
