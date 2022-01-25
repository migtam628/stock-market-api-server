"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
/**
 *
 *  @param {string} symbol
 * @returns {void}
 * @beta
 * @example
 * ```
 * const { GetFundamentals } = require("@tda-api/client");
 * GetFundamentals("AAPL");
 * ```
 * @example
 * ```
 * const app = require('express')()
 * app.get("/api/fundamentals", require("PATH_TO/get-fundamentals"));
 * app.listen(3000)
 *
 * "https://localhost:3000/api/fundamentals?symbol=AAPL"
 *
 *
 *
 */
var GetFundamentals = function (req, res) {
    var symbol = req.query.symbol;
    var url = "https://api.tdameritrade.com/v1/instruments?apikey=" + constants_1.TD_API_KEY + "&symbol=" + symbol + "&projection=fundamental";
    if (symbol.length > 0) {
        try {
            axios_1.default
                .get(url)
                .then(function (response) {
                res.json(response.data);
                return response.data;
            })
                .catch(function (error) {
                res.json(error);
                return error;
            });
        }
        catch (error) {
            res.json(error);
        }
    }
};
module.exports = GetFundamentals;
// https://api.tdameritrade.com/v1/instruments?apikey=${TD_API_KEY}&symbol=bbig&projection=fundamental
