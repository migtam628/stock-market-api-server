import axios from "axios";
import { FINNHUB_API_KEY } from "../constants";

const GetMarketNews = (req: any, res: any) => {
  let symbol: string | undefined | null = req.query.symbol || "AAPL";
  let category: string | undefined | null = req.query.category || "general";
  let url = `https://finnhub.io/api/v1/news?category=${category}&token=${FINNHUB_API_KEY}`;
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

module.exports = GetMarketNews;
