import axios, { AxiosRequestConfig } from "axios";

const getFilings = (req: any, res: any) => {
  let symbol = req.query.symbol || "AAPL";
  let country = req.query.country || "us";
  const url = `https://api.fintel.io/web/v/0.0/sf/${country}/${symbol}`;
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-API-KEY": "sk_9fb3aee7b14f4e4c9117f2c6377059a7",
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

module.exports = getFilings;
