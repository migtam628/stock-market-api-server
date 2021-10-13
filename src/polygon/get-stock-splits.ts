import axios from "axios";
import { POLYGON_API_KEY } from "../constants";

const getStockSplits = (req: any, res: any) => {
  let symbol = req.query.symbol;
  let url = `https://api.polygon.io/v2/reference/splits/${symbol}?apiKey=${POLYGON_API_KEY}`;
  if (!symbol) {
    res.status(400).json({
      code: 400,
      status: "error",
      error: "Missing symbol",
    });
  } else {
    axios
      .get(url)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(400).json({
          code: 400,
          status: "error",
          error: error,
        });
      });
  }
};

module.exports = getStockSplits;
