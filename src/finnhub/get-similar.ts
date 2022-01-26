// https://finnhub.io/api/v1/stock/peers?symbol=BBIG&token=c4401l2ad3iftpcmq33g
import axios from "axios";
import { FINNHUB_API_KEY } from "../constants";

const GetSimilar = (req: any, res: any) => {
  let symbol: string | undefined | null = req.query.symbol;
  let url = `https://finnhub.io/api/v1/stock/peers?symbol=${symbol}&token=${FINNHUB_API_KEY}`;
  if (symbol?.length! > 0) {
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
  } else {
    res.status(400).json({
      message: "Please provide a symbol",
    });
  }
};

module.exports = GetSimilar;
