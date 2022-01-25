import axios from "axios";
import { database } from "firebase-admin";
import { TD_API_KEY } from "../constants";

/**
 * @param {string} market
 * @returns {IHoursResponse | IErrorResponse}
 * @beta
 * @example
 * ```
 * const { GetMarketHours } = require("@tda-api/client");
 * GetMarketHours("EQUITY");
 * ```
 * @example
 * ```
 * const app = require('express')()
 * app.get("/api/market-hours", require("PATH_TO/get-market-hours"));
 * app.listen(3000)
 *
 * "https://localhost:3000/api/market-hours?market=EQUITY"
 *
 *
 * RESPOSNE:
 * {
 *      "category": "string",
 *      "date": "string",
 *      "exchange": "string",
 *      "isOpen": false,
 *      "marketType": "'BOND' or 'EQUITY' or 'FOREX' or 'FUTURE' or 'OPTION' or 'UNKNOWN'",
 *      "product": "string",
 *      "productName": "string",
 *      "sessionHours": "object"
 *  }
 * ```
 *
 *  */

const GetMarketHours = (req: any, res: any) => {
  let MARKET:
    | "BOND"
    | "EQUITY"
    | "ETF"
    | "F|EX"
    | "FUTURE"
    | "FUTURE_OPTION"
    | "INDEX"
    | "INDICAT|"
    | "MUTUAL_FUND"
    | "OPTION"
    | "UNKNOWN" = req.query.market;
  let url = `https://api.tdameritrade.com/v1/marketdata/${MARKET}/hours`;
  if (MARKET.length > 0) {
    try {
      axios
        .get(url)
        .then((response) => {
          res.json(response.data);
          return response.data;
        })
        .catch((error) => {
          res.json(error);
          return error;
        });
    } catch (error) {
      res.json(error);
    }
  }
};

module.exports = GetMarketHours;

interface IHoursResponse {
  category: string;
  date: string;
  exchange: string;
  isOpen: false;
  marketType:
    | "BOND"
    | "EQUITY"
    | "ETF"
    | "F|EX"
    | "FUTURE"
    | "FUTURE_OPTION"
    | "INDEX"
    | "INDICAT|"
    | "MUTUAL_FUND"
    | "OPTION"
    | "UNKNOWN";
  product: string;
  productName: string;
  sessionHours: any;
}

// https://api.tdameritrade.com/v1/instruments?apikey=${TD_API_KEY}&symbol=bbig&projection=fundamental
