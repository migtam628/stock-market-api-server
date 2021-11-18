"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var getStockSplits = function (req, res) {
    var symbol = req.query.symbol;
    var url = "https://api.polygon.io/v2/reference/splits/" + symbol + "?apiKey=" + constants_1.POLYGON_API_KEY;
    if (!symbol) {
        res.status(400).json({
            code: 400,
            status: "error",
            error: "Missing symbol",
        });
    }
    else {
        axios_1.default
            .get(url)
            .then(function (response) {
            res.status(200).json(response.data);
        })
            .catch(function (error) {
            res.status(400).json({
                code: 400,
                status: "error",
                error: error,
            });
        });
    }
};
module.exports = getStockSplits;
