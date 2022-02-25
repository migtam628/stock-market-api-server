import axios, { AxiosRequestConfig } from "axios";
// https://financialmodelingprep.com/api/v3/actives?apikey=705e63025fe8503267b6cbdd8035e7a0
//financialmodelingprep.com/api/v3/sec_filings/BBIG?limit=500&apikey=705e63025fe8503267b6cbdd8035e7a0

const getFilings = (req: any, res: any) => {
  let symbol = req.query.symbol;
  const url =
    `https://financialmodelingprep.com/api/v3/sec_filings/${symbol.toUpperCase()}?limit=500&apikey=` +
    process.env.FIN_MOD_PREP_API_KEY;
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      //   "X-API-KEY": "sk_9fb3aee7b14f4e4c9117f2c6377059a7",
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

module.exports = getFilings;
