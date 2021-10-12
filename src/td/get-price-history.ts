import axios from "axios";
import { TD_API_KEY } from "../constants";
const GetPriceHistory = (req: any, res: any) => {
  let {
    symbol = "BBIG",
    frequencyType = "minute",
    periodType = "day",
    period = 1,
    start = "10/05/2021, 7:00:00 AM",
    end = "10/11/2021, 5:00:00 PM",
    frequency = 1,
    needExtendedHoursData = true,
  }: IOptions = req.query;

  let url = `https://api.tdameritrade.com/v1/marketdata/${symbol}/pricehistory?apikey=${TD_API_KEY}&periodType=${periodType}&frequencyType=${frequencyType}${
    start && end ? "" : "&period=" + period
  }${frequency ? "&frequency=" + frequency : ""}${
    end ? "&endDate=" + toTimestamp(end) *1000 : ""
  }${start ? "&startDate=" + toTimestamp(start) * 1000 : ""}${
    needExtendedHoursData
      ? "&needExtendedHoursData=" + needExtendedHoursData
      : ""
  }`;

  try {
    console.log(toTimestamp(start)*1000, toTimestamp(end)*1000);

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
