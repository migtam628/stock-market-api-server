import axios, { AxiosRequestConfig } from "axios";
import { FINTEL_API_KEY } from "../constants";
const getSecOwenership = (req: any, res: any) => {
  let symbol = (req.query.symbol = "tsla");
  let country = (req.query.country = "us");
  const urlpremium = `https://api.fintel.io/data/v/0.0/so/${country}/${symbol}`;
  const urlweb = `https://api.fintel.io/web/v/0.0/so/${country}/${symbol}`;
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-API-KEY": FINTEL_API_KEY as any,
    },
  };

  if (!symbol && !country) {
    res.status(400).json({
      code: 400,
      status: "error",
      msg: "Please provide a symbol and a country",
    });
  } else if (!symbol) {
    res
      .status(400)
      .json({ code: 400, status: "error", msg: "Please provide a symbol" });
  } else if (!country) {
    res
      .status(400)
      .json({ code: 400, status: "error", msg: "Please provide a country" });
  }
  axios
    .get(urlpremium, options)
    .then((response: any) => {
      res.send(response.data);
    })
    .catch((error: any) => {
      res.send(error);
    });
};

module.exports = getSecOwenership;
