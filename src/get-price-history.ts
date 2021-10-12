import axios from "axios";
const GetPriceHistory = (req: any, res: any) => {
  let {
    symbol = "TSLA",
    frequencyType = "minute",
    period,
    start = "10/10/2021",
    end = "10/11/2021",
    frequency = 1,
    periodType = "day",
    needExtendedHoursData = true,
  }: IOptions = req.query;

  // https://api.tdameritrade.com/v1/marketdata/BBIG/pricehistory?apikey=ROUWGIYAGOEXQCPASWX4IZTJFXG007RY&periodType=day&frequencyType=minute
  let url = `https://api.tdameritrade.com/v1/marketdata/${symbol}/pricehistory?apikey=ROUWGIYAGOEXQCPASWX4IZTJFXG007RY&periodType=${periodType}${
    start && end ? "" : "&period=" + period
  }&frequencyType=${frequencyType}${
    frequency ? "&frequency=" + frequency : ""
  }${end ? "&endDate=" + toTimestamp(end) : ""}${
    start ? "&startDate=" + toTimestamp(start) : ""
  }${
    needExtendedHoursData
      ? "&needExtendedHoursData=" + needExtendedHoursData
      : ""
  }`;

  try {
    axios.get(url).then((response) => {
      res.json(response.data);
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = GetPriceHistory;

const toTimestamp: any = (strDate: string) => Date.parse(strDate) / 1000;
const toDateTime: any = (timestamp: number) =>
  new Date(timestamp * 1000).toLocaleString();

interface IOptions {
  symbol: string;
  start: string;
  end: string;
  period: number;
  frequency: number;
  periodType: "year" | "month" | "day" | "ytd";
  frequencyType: "minute" | "daily" | "weekly" | "monthly";
  needExtendedHoursData: boolean;
}
