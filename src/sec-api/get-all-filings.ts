//  create a new file in the src/sec-api/get-filings.ts
// Language: typescript
// Path: src/sec-api-all-filings.ts
// Compare this snippet from src/fintel/get-stock-reg-filings.ts:
import axios, { AxiosRequestConfig } from "axios";
import * as queryApi from "sec-api";

const getAllFilings = async (req: any, res: any) => {
  const url =
    "https://api.sec-api.io/?token=95f4b80d68e1d7dddc347a78436abefbda27a89b1a7abe050cc2b86665bd729b";

  axios(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response: any) => {
      res.status(200).json(response.data);
    })
    .catch((error: any) => {
      res.status(400).json({
        message: error.message,
      });
    });
};
export { getAllFilings };
