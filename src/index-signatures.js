"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile = { name: 'Ham', underTwenty: false };
// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
