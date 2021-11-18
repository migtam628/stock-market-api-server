"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var FindStock = function (req, res) {
    var symbol = req.query.symbol;
    var url = "https://api.tdameritrade.com/v1/marketdata/" + symbol + "/quotes?apikey=" + constants_1.TD_API_KEY;
    if ((symbol === null || symbol === void 0 ? void 0 : symbol.length) > 0) {
        //    try {
        axios_1.default
            .get(url)
            .then(function (response) {
            res.json(response.data);
        })
            .catch(function (error) {
            res.json(error);
        });
    }
    else {
        res({
            error: true,
            status: 400,
            data: null,
            message: "Please provide a valid symbol",
        });
    }
};
module.exports = FindStock;
