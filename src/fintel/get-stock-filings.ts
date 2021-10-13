import axios, { AxiosRequestConfig } from "axios";

const getFilings = (req: any, res: any) => {
  let symbol = req.query.symbol;
  let country = req.query.country || "us";
  const url = `https://api.fintel.io/data/v/0.0/so/${country}/${symbol}/bo`;
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-API-KEY": "sk_9fb3aee7b14f4e4c9117f2c6377059a7",
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
