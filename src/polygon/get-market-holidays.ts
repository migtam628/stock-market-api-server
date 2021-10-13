import axios from "axios";
import { POLYGON_API_KEY } from "../constants";

const getMarketHolidays = (req: any, res: any) => {
  let url =
    "https://api.polygon.io/v1/marketstatus/upcoming?apiKey=" + POLYGON_API_KEY;
  try {
    axios
      .get(url)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = getMarketHolidays;
