// https://api.polygon.io/v2/reference/financials/TSLA?limit=20&apiKey=4KIH8LX0Iwgs8SL3eQpZNtjpbLGUjiQg

import axios from "axios";
import { POLYGON_API_KEY } from "../constants";

const getFinancials = async (req: any, res: any) => {
  let symbol = req.query.symbol || "TSLA";
  let limit = req.query.limit || 20;
  // "reportPeriod" || "calendarDate" || "-reportPeriod" || "-calendarDate"
  let sort = req.query.sort || "reportPeriod";

  const URL = `https://api.polygon.io/v2/reference/financials/${symbol}?limit=${limit}&apiKey=${POLYGON_API_KEY}`;
  if (!symbol) {
    res.status(400).send({ error: "Symbol is required" });
    return;
  }

  if (!limit) {
    res.status(400).send({ error: "Limit is required" });
    return;
  }

  try {
    axios
      .get(URL)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getFinancials;
