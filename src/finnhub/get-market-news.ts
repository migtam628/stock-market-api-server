import { FINTEL_API_KEY } from "../constants";

export const getMarketNews = (req: any, res: any) => {
  const { symbol } = req.query;
  if (symbol) {
    const url =
      "https://api.finnhub.io/v1/stock/news?symbol=" +
      symbol +
      "&token=" +
      FINTEL_API_KEY;
    const options: any = {
      method: "GET",
      headers: { Accept: "application/json", "X-API-KEY": FINTEL_API_KEY },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error);
      });
  }
};
