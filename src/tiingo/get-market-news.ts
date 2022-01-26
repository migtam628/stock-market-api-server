import axios from "axios";
import { TIINGO_API_KEY } from "../constants";

/**
 * 
 * @param req - Express request object
 * @param res - Express response object
 * @returns - Returns a list of news of the specified symbols
 * 
 * 
*/
const GetMarketNews = (req: any, res: any) => {
  let symbols: string | undefined | null = req.query.symbol;
  let tickers: string | undefined | null = symbols && "&tickers=" + symbols;
  let url = `https://api.tiingo.com/tiingo/news?token=${TIINGO_API_KEY}${tickers ? tickers : ""}`;

  console.log({ symbols, tickers });

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

module.exports = GetMarketNews;
