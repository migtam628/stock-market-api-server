import axios from "axios";

const FindStock = (req: any, res: any) => {
  let symbol: any = req.query.symbol;
  let url = `https://api.tdameritrade.com/v1/marketdata/${symbol}/quotes?apikey=ROUWGIYAGOEXQCPASWX4IZTJFXG007RY`;
  if (symbol?.length > 0) {
    //    try {
    axios
      .get(url)
      .then((response: any) => {
        res.send(response.data);
      })
      .catch((error: any) => {
        res.send(error);
      });
  } else {
    res({
      error: true,
      status: 400,
      data: null,
      message: "Please provide a valid symbol",
    });
  }
};

module.exports = FindStock;