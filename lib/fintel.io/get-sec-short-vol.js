"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var getSecShortVol = function (Req, Res) {
    var url = "";
    try {
        axios_1.default
            .get(url)
            .then(function (res) { return res.data; })
            .then(function (data) {
            Res.send(data);
        });
    }
    catch (error) {
        Res.send(error);
    }
};
module.exports = getSecShortVol;
