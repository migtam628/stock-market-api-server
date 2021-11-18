// https://financialmodelingprep.com/api/v3/enterprise-values/BBIG?limit=40&apikey=705e63025fe8503267b6cbdd8035e7a0
import axios, { AxiosRequestConfig } from "axios";

const getEnterpriseValue = (req: any, res: any) => {
  let symbol = req.query.symbol;
  const url =
    `https://financialmodelingprep.com/api/v3/enterprise-values/${symbol.toUpperCase()}?limit=40&apikey=` +
    process.env.FIN_MOD_PREP_API_KEY;
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  if (symbol.length > 0) {
    try {
      axios
        .get(url, options)
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

module.exports = getEnterpriseValue;
