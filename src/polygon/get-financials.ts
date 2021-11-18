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
    res.status(400).json({ error: "Symbol is required" });
    return;
  }

  if (!limit) {
    res.status(400).json({ error: "Limit is required" });
    return;
  }

  try {
    axios
      .get(URL)
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        res.json(error);
      });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = getFinancials;
