// https://api.polygon.io/vX/reference/tickers/BBIG?apiKey=4KIH8LX0Iwgs8SL3eQpZNtjpbLGUjiQg

import axios from "axios";
import fs from "fs";

const GetCompanyDetails = async (req: any, res: any) => {
  let symbol: any = req.query.symbol;
  let URL = `https://api.polygon.io/vX/reference/tickers/${symbol?.toUpperCase()}?apiKey=${
    process.env.POLYGON_API_KEY
  }`;
  if (symbol?.length > 0) {
    axios
      .get(URL)
      .then((response: any) => {
        res.status(200).json(response.data ? response.data : { response });
      })
      .catch((error: any) => {
        res.status(400).json({
          status: "error",
          code: 429,
          message: "Please provide a valid symbol",
        });
      });
  } else {
    res.status(400).json({
      status: "error",
      code: 401,
      message: "No symbol provided",
    });
  }
};

module.exports = GetCompanyDetails;
