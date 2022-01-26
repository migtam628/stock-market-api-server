// https://finnhub.io/api/v1/calendar/ipo?from=2022-01-01&to=2022-01-26&token=c4401l2ad3iftpcmq33g

// create a new file called get-ipo-calendar.ts
// Language: typescript
// Path: src/finnhub/get-ipo-calendar.ts


import axios from "axios";
import { FINNHUB_API_KEY } from "../constants";

const GetIpoCalendar = (req: any, res: any) => {
  let startDate: string | undefined | null = req.query.startDate;
  let endDate: string | undefined | null = req.query.endDate;
  let url = `https://finnhub.io/api/v1/calendar/ipo?from=${startDate}&to=${endDate}&token=${FINNHUB_API_KEY}`;
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

module.exports = GetIpoCalendar;