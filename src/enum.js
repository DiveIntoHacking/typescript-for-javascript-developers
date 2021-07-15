"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["February"] = 2] = "February";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["May"] = 5] = "May";
    Months[Months["Jun"] = 6] = "Jun";
    Months[Months["July"] = 7] = "July";
    Months[Months["August"] = 8] = "August";
    Months[Months["September"] = 9] = "September";
    Months[Months["October"] = 10] = "October";
    Months[Months["November"] = 11] = "November";
    Months[Months["December"] = 12] = "December";
})(Months || (Months = {}));
console.log(Months.January);
console.log(Months.February);
console.log(Months.December);
// const MonthsJs = {
//   January: 0,
//   February: 1
// };
//
// console.log(MonthsJs.January);
// console.log(MonthsJs.February);
var COLORS;
(function (COLORS) {
    COLORS["RED"] = "#FF0000";
    COLORS["WHITE"] = "#FFFFFF";
    COLORS["GREEN"] = "#008000";
    COLORS["BLUE"] = "#0000FF";
    //  YELLOW = '#FFFF00',
    COLORS["BLACK"] = "#000000";
})(COLORS || (COLORS = {}));
var green = COLORS.GREEN;
console.log({ green: green });
(function (COLORS) {
    COLORS["YELLOW"] = "#FFFF00";
    COLORS["GRAY"] = "#808080";
})(COLORS || (COLORS = {}));
COLORS.YELLOW;
