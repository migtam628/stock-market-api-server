// https://finnhub.io/api/v1/search?q=apple&token=c4401l2ad3iftpcmq33g
import axios from "axios";
import { FINNHUB_API_KEY } from "../constants";

const GetSearch = (req: any, res: any) => {
  let search: string | undefined | null = req.query.search;
  //   https://finnhub.io/api/v1/search?q=bbig&token=c4401l2ad3iftpcmq33g
  let url = `https://finnhub.io/api/v1/search?q=${search}&token=${FINNHUB_API_KEY}`;
  if (search?.length! > 0) {
    try {
      axios
        .get(url)
        .then((response: any) => {
          res.status(200).json(response.data);
        })
        .catch((error) => {
          res.status(400).json({
            message: error.message,
          });
        });
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  } else {
    res.status(400).json({
      message: "Please provide a query",
    });
  }
};

module.exports = GetSearch;
