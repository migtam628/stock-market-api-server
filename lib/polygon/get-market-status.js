"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var getMarketStatus = function (req, res, next) {
    var url = "https://api.polygon.io/v1/marketstatus/now?apiKey=" + constants_1.POLYGON_API_KEY;
    try {
        axios_1.default.get(url).then(function (response) {
            res.status(200).json({
                status: "success",
                data: response.data,
            });
        });
    }
    catch (error) { }
};
module.exports = getMarketStatus;
