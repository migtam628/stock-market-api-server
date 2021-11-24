import axios from "axios";
import { TD_API_KEY } from "../constants";

module.exports = (req: any, res: any) => {
  let symbol = req.query.symbol;
  let url = `https://api.tdameritrade.com/v1/instruments?apikey=${TD_API_KEY}&symbol=${symbol}&projection=fundamental`;
  if (symbol.length > 0) {
    try {
      axios
        .get(url)
        .then((response) => {
          res.json(response.data);
        })
        .catch((error) => {
          res.json(error);
        });
    } catch (error) {
      res.json(error);
    }
  }
};


// https://api.tdameritrade.com/v1/instruments?apikey=${TD_API_KEY}&symbol=bbig&projection=fundamental
