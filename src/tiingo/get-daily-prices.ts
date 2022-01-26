import axios from "axios";
import { TIINGO_API_KEY } from "../constants";

/**
 *
 * @param req - Express request object
 * @param res - Express response object
 * @returns - Returns a list of prices of the specified symbol

 */
const GetDailyPrices = (req: any, res: any) => {
  let symbol: string | undefined | null = req.query.symbol;
  let startDate: string | undefined | null = req.query.startDate;
  let endDate: string | undefined | null = req.query.endDate;
  let resampleFreq:
    | "daily"
    | "weekly"
    | "monthly"
    | "annually"
    | undefined
    | null = req.query.resampleFreq || "daily";
  let url = `https://api.tiingo.com/tiingo/daily/${symbol}/prices?token=${TIINGO_API_KEY}&format=json${
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

module.exports = GetDailyPrices;
