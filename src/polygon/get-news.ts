import axios from "axios";
import { POLYGON_API_KEY } from "../constants";

const GetNews = (req: any, res: any) => {
  let symbol: string | undefined | null = req.query.symbol;
  let url = `https://api.polygon.io/v2/reference/news?ticker=${symbol?.toUpperCase()}&apiKey=${POLYGON_API_KEY}`;
  if (symbol?.length === 0) {
    res.status(400).send({
      message: "Please provide a symbol",
    });
  } else {
    try {
      axios
        .get(url)
        .then((response: any) => {
          res.status(200).send(response.data);
        })
        .catch((error) => {
          res.status(400).send({
            message: error.message,
          });
        });
    } catch (error) {
      res.status(400).send({
        error,
      });
    }
  }
};

module.exports = GetNews;
