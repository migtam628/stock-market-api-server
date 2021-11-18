import axios, { AxiosRequestConfig } from "axios";
//financialmodelingprep.com/api/v3/actives?apikey=705e63025fe8503267b6cbdd8035e7a0
//financialmodelingprep.com/api/v3/sec_filings/BBIG?limit=500&apikey=705e63025fe8503267b6cbdd8035e7a0

const getEarningsSurprises = (req: any, res: any) => {
  let symbol = req.query.symbol;
  const url =
    `https://financialmodelingprep.com/api/v3//earnings-surprises/${symbol.toUpperCase()}?apikey=` +
    process.env.FIN_MOD_PREP_API_KEY;
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
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
};

module.exports = getEarningsSurprises;
