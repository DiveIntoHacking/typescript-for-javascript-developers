"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function error(message) {
    throw new Error(message);
}
try {
    var result = error('test');
    console.log({ result: result });
}
catch (error) {
    console.log({ error: error });
}
var foo = undefined;
var bar = error('only me!');
