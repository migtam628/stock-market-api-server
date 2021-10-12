import axios from "axios";
import { FINTEL_API_KEY } from "../constants";

const getInsideTrades = (req: any, res: any, next: any) => {
  let symbol = req.query.symbol = 'tsla';
  let country = req.query.country = 'us';
  const url = "https://api.fintel.io/web/v/0.0/n/" + country + "/" + symbol;
  const options = {
    method: "GET",
    headers: { Accept: "application/json", "X-API-KEY": FINTEL_API_KEY },
  };
  if (!symbol && !country) {
    res.status(400).send({
      message: "Please provide symbol and country",
    });
  } else if (!symbol) {
    res.status(400).send({
      message: "Please provide symbol",
    });
  } else if (!country) {
    res.status(400).send({
      message: "Please provide country",
    });
  } else {
    axios
      .get(url, options as any)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  }
};

module.exports = getInsideTrades;
