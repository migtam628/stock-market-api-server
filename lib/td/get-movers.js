"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var GetMovers = function (req, res) {
    var direction = req.query.direction;
    var change = req.query.change;
    var url1 = "https://api.tdameritrade.com/v1/marketdata/$COMPX/movers?apikey=" + constants_1.TD_API_KEY + (direction ? "&direction=" + direction : "") + (change ? "&change=" + change : "");
    var url2 = "https://api.tdameritrade.com/v1/marketdata/$DJI/movers?apikey=" + constants_1.TD_API_KEY + (direction ? "&direction=" + direction : "") + "&change=" + (change ? "&change=" + change : "");
    var url3 = "https://api.tdameritrade.com/v1/marketdata/$SPX.X/movers?apikey=" + constants_1.TD_API_KEY + (direction ? "&direction=" + direction : "") + "&change=" + (change ? "&change=" + change : "");
    try {
        Promise.all([
            axios_1.default.get(url1).then(function (r) { return r.data; }),
            axios_1.default.get(url2).then(function (r) { return r.data; }),
            axios_1.default.get(url3).then(function (r) { return r.data; }),
        ]).then(function (data) {
            return res.json(__spreadArrays(data[0], data[1], data[2]));
        });
    }
    catch (error) {
        res.json(error);
    }
};
module.exports = GetMovers;
