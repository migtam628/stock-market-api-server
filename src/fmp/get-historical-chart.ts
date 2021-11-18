// https://financialmodelingprep.com/api/v3/historical-chart/5min/BBIG?apikey=2eb9a1881dcf390f428615b17ca72c0a
// https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line&apikey=2eb9a1881dcf390f428615b17ca72c0a
import axios, { AxiosRequestConfig } from "axios";

const getHistoricalChart = (req: any, res: any) => {
  let symbol = req.query.symbol;
  let timeframe = req.query.timeframe;
  const url =
    `https://financialmodelingprep.com/api/v3/${timeframe ? 'historical-chart' : 'historical-price-full'}/${timeframe && timeframe }/${symbol.toUpperCase()}?apikey=` +
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

module.exports = getHistoricalChart;
