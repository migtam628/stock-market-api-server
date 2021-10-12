import { Mover } from "./../types.d";
import axios from "axios";
import { TD_API_KEY } from "../constants";

const GetMovers = (req: any, res: any) => {
  let direction: "up" | "down" | null = req.query.direction;
  let change: "percent" | "value" | null = req.query.change;

  let url1 = `https://api.tdameritrade.com/v1/marketdata/$COMPX/movers?apikey=${TD_API_KEY}${
    direction ? "&direction=" + direction : ""
  }${change ? "&change=" + change : ""}`;
  let url2 = `https://api.tdameritrade.com/v1/marketdata/$DJI/movers?apikey=${TD_API_KEY}${
    direction ? "&direction=" + direction : ""
  }&change=${change ? "&change=" + change : ""}`;
  let url3 = `https://api.tdameritrade.com/v1/marketdata/$SPX.X/movers?apikey=${TD_API_KEY}${
    direction ? "&direction=" + direction : ""
  }&change=${change ? "&change=" + change : ""}`;

  try {
    Promise.all([
      axios.get(url1).then((r) => r.data),
      axios.get(url2).then((r) => r.data),
      axios.get(url3).then((r) => r.data),
    ]).then((data: Mover[][]) =>
      res.send([...data[0], ...data[1], ...data[2]])
    );
  } catch (error) {
    res.send(error);
  }
};

module.exports = GetMovers;
