import axios from "axios";
import { TIINGO_API_KEY } from "../constants";

const GetCryptoDailyPrices = (req: any, res: any) => {
  let symbol: string | undefined | null = req.query.symbol;
  let startDate: string | undefined | null = req.query.startDate;
  let endDate: string | undefined | null = req.query.endDate;
  let resampleFreq:
    | "1min"
    | "5min"
    | "15min"
    | "30min"
    | "1hour"
    | "2hour"
    | "4hour"
    | "8hour"
    | "12hour"
    | "1day"
    | "5day"
    | "10day"
    | undefined
    | null = req.query.resampleFreq;

  // https://api.tiingo.com/tiingo/crypto/prices?tickers=<ticker>&startDate=2019-01-02&resampleFreq=5min
  let url = `https://api.tiingo.com/tiingo/crypto/prices?tickers=${symbol}&token=${TIINGO_API_KEY}&format=json${
    startDate ? "&startDate=" + startDate : ""
  }${endDate ? "&endDate=" + endDate : ""}${
    resampleFreq ? "&resampleFreq=" + resampleFreq : ""
  }`;

  try {
    axios
      .get(url)
      .then((response: any) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(400).json({
          message: error.message,
        });
      });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

module.exports = GetCryptoDailyPrices;
