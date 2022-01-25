import axios from "axios";
import { TD_API_KEY } from "../constants";

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

const GetPriceHistory = (req: any, res: any) => {
  let {
    symbol = "BBIG",
    frequencyType = "daily",
    periodType = "day",
    period = 60,
    start = "09/05/2021",
    end = "12/30/2021",
    frequency = 5,
    needExtendedHoursData = true,
  }: IOptions = req.query;

  let url = `https://api.tdameritrade.com/v1/marketdata/${symbol?.toUpperCase()}/pricehistory?apikey=${TD_API_KEY}&periodType=${periodType}&frequencyType=${frequencyType}${
    start && end ? "" : "&period=" + period
  }${frequency ? "&frequency=" + frequency : ""}${
    end ? "&endDate=" + toTimestamp(end) * 1000 : ""
  }${start ? "&startDate=" + toTimestamp(start) * 1000 : ""}${
    needExtendedHoursData
      ? "&needExtendedHoursData=" + needExtendedHoursData
      : ""
  }`;

  try {
    axios.get(url).then((response: any) => {
      let newRes = { candles: [], symbol: "", emty: true };
      let result = response.data.candles.map((stock: any) => {
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
  } catch (error) {
    res.json(error);
  }
};

module.exports = GetPriceHistory;

const toTimestamp: any = (strDate: string) => Date.parse(strDate) / 1000;
const toDateTime: any = (timestamp: number) =>
  new Date(timestamp).toLocaleString();

interface IOptions {
  symbol: string;
  start: string;
  end: string;
  period: number;
  frequency: 1 | 5 | 10 | 15 | 30 | 60;
  periodType: "year" | "month" | "day" | "ytd";
  frequencyType: "minute" | "daily" | "weekly" | "monthly";
  needExtendedHoursData: boolean;
}

let neww: IResponse = {
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
  return neww.candles.map((stock: any) => {
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

// response:
export interface IResponse {
  candles: {
    close: number;
    datetime: string;
    high: number;
    low: number;
    open: number;
    volume: number;
  }[];
  empty?: boolean;
  symbol?: string;
}
