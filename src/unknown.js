"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kansu = function () { return 43; };
var numberAny = kansu();
var numberUnknown = kansu();
var sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
    var sumUnknown = numberUnknown + 10;
}
