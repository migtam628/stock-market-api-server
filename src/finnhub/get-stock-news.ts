// https://finnhub.io/api/v1/company-news?symbol=bbig&from=2022-01-01&to=2022-01-25&token=c4401l2ad3iftpcmq33g
import axios from "axios";
import { FINNHUB_API_KEY } from "../constants";

const GetStockNews = (req: any, res: any) => {
  let symbol: string | undefined | null = req.query.symbol;
  let startDate: string | undefined | null = req.query.startDate;
  let endDate: string | undefined | null = req.query.endDate;

  let url = `https://finnhub.io/api/v1/company-news?symbol=${symbol}&token=${FINNHUB_API_KEY}${
    startDate ? "&from=" + startDate : ""
  }${endDate ? "&to=" + endDate : ""}`;
  
  if (symbol?.length === 0) {
    res.status(400).json({
      message: "Please provide a symbol",
    });
  } else {
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
  }
};

module.exports = GetStockNews;
