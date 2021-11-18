import axios, { AxiosRequestConfig } from "axios";

module.exports = (req: any, res: any) => {
  // https://financialmodelingprep.com/api/v3/quote/BBIG?apikey=2eb9a1881dcf390f428615b17ca72c0a
  const symbol = req.query.symbol;
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.FIN_MOD_PREP_API_KEY}`;
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get(url, options)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
