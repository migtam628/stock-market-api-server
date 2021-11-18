// https://financialmodelingprep.com/api/v3/quote/BTCUSD?apikey=705e63025fe8503267b6cbdd8035e7a0
import axios, { AxiosRequestConfig } from "axios";

const getCryptoQuote = (req: any, res: any) => {
  let crypto = req.query.crypto || "BTCUSD";
  const url =
    `https://financialmodelingprep.com/api/v3/quote/${crypto.toUpperCase()}?&apikey=` +
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

module.exports = getCryptoQuote;
