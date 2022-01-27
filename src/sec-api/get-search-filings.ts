// create a file in the src/sec-api/get-search-filings.ts
// Language: typescript
// Path: src/sec-api/get-search-filings.ts

import { SEC_API_KEY } from "../constants";

const { fullTextSearchApi } = require("sec-api");

export async function getSearchFilings(req: any, res: any) {
  const search = /* `'${req.query.search}` ||  */ '"AAPL"';
  const startDate = /* req.query.startDate || */ "2021-01-01";
  const endDate = /* req.query.endDate || */ "2022-01-26";
  const formTypes = /* req.query.formTypes || */ "*";
  fullTextSearchApi.setApiKey(SEC_API_KEY);

  const query = {
    query: search,
    formTypes: formTypes,
    startDate: startDate,
    endDate: endDate,
  };

  const filings = await fullTextSearchApi.getFilings(query);

  res.status(200).json(filings);
}
