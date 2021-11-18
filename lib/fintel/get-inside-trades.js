"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var getInsideTrades = function (req, res, next) {
    var symbol = req.query.symbol = 'tsla';
    var country = req.query.country = 'us';
    var url = "https://api.fintel.io/web/v/0.0/n/" + country + "/" + symbol;
    var options = {
        method: "GET",
        headers: { Accept: "application/json", "X-API-KEY": constants_1.FINTEL_API_KEY },
    };
    if (!symbol && !country) {
        res.status(400).json({
            message: "Please provide symbol and country",
        });
    }
    else if (!symbol) {
        res.status(400).json({
            message: "Please provide symbol",
        });
    }
    else if (!country) {
        res.status(400).json({
            message: "Please provide country",
        });
    }
    else {
        axios_1.default
            .get(url, options)
            .then(function (response) {
            res.status(200).json(response.data);
        })
            .catch(function (error) {
            res.status(400).json(error);
        });
    }
};
module.exports = getInsideTrades;
