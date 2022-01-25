"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
/**
 * Returns the average of two numbers.
 *
 * @remarks This gets price history for a given symbol.
 * @param {request} req - The request object.
 * @param {response} res - The response object.
 * @param {IOptions} req.query - The request object.
 * @returns {void}
 *
 * @example
 * ```
 * const { GetPriceHistory } = require("@tda-api/client");
 * GetPriceHistory("AAPL");
 * ```
 * @example
 * ```
 * const app = require('express')()
 * app.get("/api/price-history", require("PATH_TO/get-price-history"));
 * app.listen(3000)
 * ```
 *
 * "http://localhost:3000/api/price-history?symbol=AAPL"
 *
 *
 * @beta
 */
var GetPriceHistory = function (req, res) {
    var _a = req.query, _b = _a.symbol, symbol = _b === void 0 ? "BBIG" : _b, _c = _a.frequencyType, frequencyType = _c === void 0 ? "daily" : _c, _d = _a.periodType, periodType = _d === void 0 ? "day" : _d, _e = _a.period, period = _e === void 0 ? 60 : _e, _f = _a.start, start = _f === void 0 ? "09/05/2021" : _f, _g = _a.end, end = _g === void 0 ? "12/30/2021" : _g, _h = _a.frequency, frequency = _h === void 0 ? 5 : _h, _j = _a.needExtendedHoursData, needExtendedHoursData = _j === void 0 ? true : _j;
    var url = "https://api.tdameritrade.com/v1/marketdata/" + (symbol === null || symbol === void 0 ? void 0 : symbol.toUpperCase()) + "/pricehistory?apikey=" + constants_1.TD_API_KEY + "&periodType=" + periodType + "&frequencyType=" + frequencyType + (start && end ? "" : "&period=" + period) + (frequency ? "&frequency=" + frequency : "") + (end ? "&endDate=" + toTimestamp(end) * 1000 : "") + (start ? "&startDate=" + toTimestamp(start) * 1000 : "") + (needExtendedHoursData
        ? "&needExtendedHoursData=" + needExtendedHoursData
        : "");
    try {
        axios_1.default.get(url).then(function (response) {
            var newRes = { candles: [], symbol: "", emty: true };
            var result = response.data.candles.map(function (stock) {
                return {
                    open: stock.open,
                    high: stock.high,
                    low: stock.low,
                    close: stock.close,
                    volume: stock.volume,
                    datetime: toDateTime(stock.datetime),
                };
            });
            newRes.candles = result;
            newRes.symbol = response.data.symbol;
            newRes.emty = response.data.empty;
            res.json(newRes);
        });
    }
    catch (error) {
        res.json(error);
    }
};
module.exports = GetPriceHistory;
var toTimestamp = function (strDate) { return Date.parse(strDate) / 1000; };
var toDateTime = function (timestamp) {
    return new Date(timestamp).toLocaleString();
};
var neww = {
    candles: [
        {
            open: 1.5,
            high: 2.5,
            low: 0.5,
            close: 1.0,
            volume: 100,
            datetime: "2019-01-01T00:00:00.000Z",
        },
        {
            open: 1.5,
            high: 2.5,
            low: 0.5,
            close: 1.0,
            volume: 100,
            datetime: "2019-01-01T00:00:00.000Z",
        },
        {
            open: 1.5,
            high: 2.5,
            low: 0.5,
            close: 1.0,
            volume: 100,
            datetime: "2019-01-01T00:00:00.000Z",
        },
        {
            open: 1.5,
            high: 2.5,
            low: 0.5,
            close: 1.0,
            volume: 100,
            datetime: "2019-01-01T00:00:00.000Z",
        },
        {
            open: 1.5,
            high: 2.5,
            low: 0.5,
            close: 1.0,
            volume: 100,
            datetime: "2019-01-01T00:00:00.000Z",
        },
        {
            open: 1.5,
            high: 2.5,
            low: 0.5,
            close: 1.0,
            volume: 100,
            datetime: "2019-01-01T00:00:00.000Z",
        },
        {
            open: 1.5,
            high: 2.5,
            low: 0.5,
            close: 1.0,
            volume: 100,
            datetime: "2019-01-01T00:00:00.000Z",
        },
        {
            open: 1.5,
            high: 2.5,
            low: 0.5,
            close: 1.0,
            volume: 100,
            datetime: "2019-01-01T00:00:00.000Z",
        },
    ],
    symbol: "BBIG",
    empty: false,
};
function getMockReponse() {
    return neww.candles.map(function (stock) {
        return {
            open: stock.open,
            high: stock.high,
            low: stock.low,
            close: stock.close,
            volume: stock.volume,
            datetime: toDateTime(stock.datetime),
        };
    });
}
