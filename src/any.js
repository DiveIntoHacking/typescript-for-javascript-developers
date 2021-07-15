"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var url = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
axios_1.default.get(url).then(function (response) {
    var data;
    data = response.data;
    console.log(data);
});
