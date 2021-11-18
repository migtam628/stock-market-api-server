"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var GetNews = function (req, res) {
    var symbol = req.query.symbol;
    var url = "https://api.polygon.io/v2/reference/news?ticker=" + (symbol === null || symbol === void 0 ? void 0 : symbol.toUpperCase()) + "&apiKey=" + constants_1.POLYGON_API_KEY;
    if ((symbol === null || symbol === void 0 ? void 0 : symbol.length) === 0) {
        res.status(400).json({
            message: "Please provide a symbol",
        });
    }
    else {
        try {
            axios_1.default
                .get(url)
                .then(function (response) {
                res.status(200).json(response.data);
            })
                .catch(function (error) {
                res.status(400).json({
                    message: error.message,
                });
            });
        }
        catch (error) {
            res.status(400).json({
                error: error,
            });
        }
    }
};
module.exports = GetNews;
