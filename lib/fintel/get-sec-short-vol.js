"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var getSecShortVol = function (Req, Res) {
    var symbol = Req.query.symbol;
    var country = Req.query.country || "us";
    var url = "https://api.fintel.io/web/v/0.0/ss/" + country + "/" + symbol;
    var options = {
        method: "GET",
        url: url,
        headers: {
            Accept: "application/json",
            "X-API-KEY": constants_1.FINTEL_API_KEY,
        },
    };
    if ((symbol === null || symbol === void 0 ? void 0 : symbol.length) > 0) {
        try {
            axios_1.default
                .request(options)
                .then(function (res) { return res.data; })
                .then(function (data) {
                Res.status(200).json(data);
            })
                .catch(function (err) {
                Res.status(400).json(err);
            });
        }
        catch (error) {
            Res.json(error);
        }
    }
    else {
        Res.json({
            error: "Please provide a valid symbol",
            code: 400,
            status: "error",
        });
    }
};
module.exports = getSecShortVol;
