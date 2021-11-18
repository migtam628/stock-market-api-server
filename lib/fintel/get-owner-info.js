"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var getOwnerInfo = function (req, res) {
    var symbol = req.query.symbol;
    var owner = req.query.owner;
    var country = req.query.country || "us";
    var url = "https://api.fintel.io/data/v/0.0/so/" + country + "/" + symbol + "/" + owner;
    var options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-API-KEY": constants_1.FINTEL_API_KEY,
        },
    };
    if (!symbol || !owner) {
        res.status(401).json({ error: "symbol and owner are required" });
    }
    else if (!country) {
        res.status(401).json({ error: "country is required" });
    }
    else if (!symbol) {
        res.status(401).json({ error: "symbol is required" });
    }
    try {
        axios_1.default
            .get(url, options)
            .then(function (response) {
            res.status(200).json(response.data);
        })
            .catch(function (error) {
            res.status(500).json({ error: error, status: 500, code: "error" });
        });
    }
    catch (error) {
        res.status(500).json({ error: error, status: 500, code: "error" });
    }
};
module.exports = getOwnerInfo;
