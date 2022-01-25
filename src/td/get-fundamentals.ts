import axios from "axios";
import { TD_API_KEY } from "../constants";

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
const GetFundamentals = (req: any, res: any) => {
  let symbol = req.query.symbol;
  let url = `https://api.tdameritrade.com/v1/instruments?apikey=${TD_API_KEY}&symbol=${symbol}&projection=fundamental`;
  if (symbol.length > 0) {
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

module.exports = GetFundamentals;
// https://api.tdameritrade.com/v1/instruments?apikey=${TD_API_KEY}&symbol=bbig&projection=fundamental
