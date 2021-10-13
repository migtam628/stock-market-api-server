import axios, { AxiosRequestConfig } from "axios";
import { FINTEL_API_KEY } from "../constants";

const getSecShortVol = (Req: any, Res: any) => {
  let symbol: string = Req.query.symbol;
  let country: "us" | "ca" | "jp" | "ch" | "uk" = Req.query.country || "us";
  const url = `https://api.fintel.io/web/v/0.0/ss/${country}/${symbol}`;
  const options: AxiosRequestConfig = {
    method: "GET",
    url: url,
    headers: {
      Accept: "application/json",
      "X-API-KEY": FINTEL_API_KEY as any,
    },
  };
  if (symbol?.length > 0) {
    try {
      axios
        .request(options)
        .then((res) => res.data)
        .then((data) => {
          Res.status(200).json(data);
        })
        .catch((err) => {
          Res.status(400).json(err);
        });
    } catch (error) {
      Res.json(error);
    }
  } else {
    Res.json({
      error: "Please provide a valid symbol",
      code: 400,
      status: "error",
    });
  }
};

module.exports = getSecShortVol;
