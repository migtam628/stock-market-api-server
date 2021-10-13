import axios, { AxiosRequestConfig } from "axios";

const getOwnerInfo = (req: any, res: any) => {
  let symbol = req.query.symbol;
  let owner = req.query.owner;
  let country = req.query.country || "us";
  const url = `https://api.fintel.io/data/v/0.0/so/${country}/${symbol}/${owner}`;
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-API-KEY": "sk_9fb3aee7b14f4e4c9117f2c6377059a7",
    },
  };
  if (!symbol || !owner) {
    res.status(401).json({ error: "symbol and owner are required" });
  } else if (!country) {
    res.status(401).json({ error: "country is required" });
  } else if (!symbol) {
    res.status(401).json({ error: "symbol is required" });
  }

  try {
    axios
      .get(url, options)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json({ error: error, status: 500, code: "error" });
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getOwnerInfo;
