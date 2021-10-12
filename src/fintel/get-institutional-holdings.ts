import axios, { AxiosRequestConfig } from "axios";
import { FINTEL_API_KEY } from "../constants";

const getInstitutionalHoldings = (req: any, res: any) => {
  let owner = req.query.owner;

  const url = "https://api.fintel.io/web/v/0.0/i/" + owner;
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-API-KEY": FINTEL_API_KEY as any,
    },
  };

  if (!owner) {
    res
      .status(400)
      .json({ error: "owner is required", code: 400, status: "error" });
  }
  try {
    axios
      .get(url, options)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res
          .status(500)
          .json({ error: error.message, code: 500, status: "error" });
      });
  } catch (error) {
    res.status(500).json({ error: error, code: 500, status: "error" });
  }
};

module.exports = getInstitutionalHoldings;
