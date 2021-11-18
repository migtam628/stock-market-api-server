"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var getMarketHolidays = function (req, res) {
    var url = "https://api.polygon.io/v1/marketstatus/upcoming?apiKey=" + constants_1.POLYGON_API_KEY;
    try {
        axios_1.default
            .get(url)
            .then(function (response) {
            res.status(200).json(response.data);
        })
            .catch(function (error) {
            res.status(400).json(error);
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
};
module.exports = getMarketHolidays;
