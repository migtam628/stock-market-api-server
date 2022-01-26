// https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=c4401l2ad3iftpcmq33g

// create a new file called get-stock-metrics.ts
// Language: typescript
// Path: src/finnhub/get-stock-metrics.ts
// Compare this snippet from src/finnhub/get-stock-news.ts:
import axios from "axios";
import { FINNHUB_API_KEY } from "../constants";

const GetStockMetrics = (req: any, res: any) => {
  let symbol: string | undefined | null = req.query.symbol;
  let url = `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${FINNHUB_API_KEY}`;
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

module.exports = GetStockMetrics;
//
// https://finnhub.io/api/v1/stock/profile?symbol=AAPL&token=c4401l2ad3iftpcmq33g

// create a new file called get-stock-profile.ts
// Language: typescript
// Path: src/finnhub/get-stock-profile.ts
// Compare this snippet from src/finnhub/get-stock-news.ts:
