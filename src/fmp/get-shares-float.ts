import axios, { AxiosRequestConfig } from "axios";
import { FIN_MOD_PREP_API_KEY } from "../constants";

//financialmodelingprep.com/api/v3/sec_filings/BBIG?limit=500&apikey=705e63025fe8503267b6cbdd8035e7a0

const getFloat = (req: any, res: any) => {
  let symbol: any  = req.query.symbol;
  let url = `https://financialmodelingprep.com/api/v4/shares_float?symbol=${symbol.toUpperCase()}&apikey=${
    FIN_MOD_PREP_API_KEY
  }`;
  const options: AxiosRequestConfig = {
    url:url,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  if (symbol.length > 0) {
    try {
      axios
        .request(options)
        .then((response) => {
          res.json(response.data);
        })
        .catch((error) => {
          res.json(error);
        });
    } catch (error) {
      res.status(500).json({
        status: "error",
        code: 500,
        message: "Something went wrong",
        error: error,
      });
    }
  } else {
    res.status(400).json({
      status: "error",
      code: 400,
      message: "Please provide a symbol",
    });
  }
};

module.exports = getFloat;
