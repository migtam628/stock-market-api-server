// https://finnhub.io/api/v1/calendar/earnings?from=2022-01-01&to=2022-03-09&token=c4401l2ad3iftpcmq33g&symbol=AAPL

// create a new file called get-earnings.ts
// Language: typescript
// Path: src/finnhub/get-earnings.ts

import axios from "axios";
import { FINNHUB_API_KEY } from "../constants";

const GetEarnings = (req: any, res: any) => {
  let symbol: string | undefined | null = req.query.symbol;
  let startDate: string | undefined | null = req.query.startDate;
  let endDate: string | undefined | null = req.query.endDate;
  let url = `https://finnhub.io/api/v1/calendar/earnings?from=${startDate}&to=${endDate}&token=${FINNHUB_API_KEY}${
    symbol ? "&symbol=" + symbol : ""
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

module.exports = GetEarnings;
// https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=c4401l2ad3iftpcmq33g

// create a new file called get-stock-profile2.ts
// Language: typescript
// Path: src/finnhub/get-stock-profile2.ts
// Compare this snippet from src/finnhub/get-stock-news.ts:
//
//
// // https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=c4401l2ad3iftpcmq33g
//
// // create a new file called get-stock-profile2.ts
// // Language: typescript
// // Path: src/finnhub/get-stock-profile2.ts
//
// import axios from "axios";
// import { FINNHUB_API_KEY } from "../constants";
//
