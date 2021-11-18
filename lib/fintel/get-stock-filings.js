"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var getFilings = function (req, res) {
    var symbol = req.query.symbol;
    var country = req.query.country || "us";
    var url = "https://api.fintel.io/data/v/0.0/so/" + country + "/" + symbol + "/bo";
    var options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-API-KEY": "sk_9fb3aee7b14f4e4c9117f2c6377059a7",
        },
    };
    if (symbol.length > 0) {
        try {
            axios_1.default
                .get(url, options)
                .then(function (response) {
                res.json(response.data);
            })
                .catch(function (error) {
                res.json(error);
            });
        }
        catch (error) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: "Something went wrong",
                error: error,
            });
        }
    }
    else {
        res.status(400).json({
            status: "error",
            code: 400,
            message: "Please provide a symbol",
        });
    }
};
module.exports = getFilings;
