// create a new file in the src/sec-api/stream-all-filings.ts
// Language: typescript
// Path: src/sec-api/stream-all-filings.ts
import axios, { AxiosRequestConfig } from "axios";
import * as queryApi from "sec-api";
import { SEC_API_KEY } from "../constants";

const streamAllFilings = (req: any, res: any) => {

  const url: any = `https://api.sec-api.io/?token=${SEC_API_KEY}`;

  //create a axios post request with the url above with headers
  const config: AxiosRequestConfig = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  axios(url, config)
    .then((response: any) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json({
        message: error.message,
      });
    });
};

export { streamAllFilings };
