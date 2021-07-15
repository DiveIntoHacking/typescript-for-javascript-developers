"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debugProfile = function (name, age) {
    console.log({ name: name, age: age });
};
debugProfile('Ham', 43);
var profile = ['Gloria', 76];
debugProfile.apply(void 0, profile);
