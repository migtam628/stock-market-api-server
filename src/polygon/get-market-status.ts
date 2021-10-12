import axios from "axios";
import { POLYGON_API_KEY } from "../constants";

const getMarketStatus = (req: any, res: any, next: any) => {
  let url = `https://api.polygon.io/v1/marketstatus/now?apiKey=${POLYGON_API_KEY}`;
  try {
    axios.get(url).then((response) => {
      res.status(200).json({
        status: "success",
        data: response.data,
      });
    });
  } catch (error) {}
};

module.exports = getMarketStatus;
