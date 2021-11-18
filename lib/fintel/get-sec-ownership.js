"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var getSecOwenership = function (req, res) {
    var symbol = (req.query.symbol = "tsla");
    var country = (req.query.country = "us");
    var urlpremium = "https://api.fintel.io/data/v/0.0/so/" + country + "/" + symbol;
    var urlweb = "https://api.fintel.io/web/v/0.0/so/" + country + "/" + symbol;
    var options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-API-KEY": constants_1.FINTEL_API_KEY,
        },
    };
    if (!symbol && !country) {
        res.status(400).json({
            code: 400,
            status: "error",
            msg: "Please provide a symbol and a country",
        });
    }
    else if (!symbol) {
        res
            .status(400)
            .json({ code: 400, status: "error", msg: "Please provide a symbol" });
    }
    else if (!country) {
        res
            .status(400)
            .json({ code: 400, status: "error", msg: "Please provide a country" });
    }
    axios_1.default
        .get(urlpremium, options)
        .then(function (response) {
        res.json(response.data);
    })
        .catch(function (error) {
        res.json(error);
    });
};
module.exports = getSecOwenership;
