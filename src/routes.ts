import {
  TD_GET_FUNDAMENTALS_MODULE,
  TD_GET_MOVERS_MODULE,
  TD_GET_PRICE_HISTORY_MODULE,
  TD_GET_STOCK_MODULE,
  HOME_MODULE,
  POLYGON_GET_NEWS_MODULE,
  POLYGON_GET_COMPANY_DETAILS_MODULE,
  POLYGON_GET_FINANCIALS_MODULE,
  POLYGON_GET_MARKET_STATUS_MODULE,
  FINTEL_GETS_SEC_SHORT_VOL_MODULE,
  FINTEL_GET_STOCK_FILINGS_MODULE,
  FINTEL_GET_OWNER_INFO_MODULE,
  FINTEL_GET_SEC_OWNERSHIP_MODULE,
  FINTEL_GET_INSTITUTIONAL_HOLDINGS_MODULE,
  FINTEL_GET_INSIDE_TRADES_MODULE,
  FINTEL_GET_STOCK_REG_FILINGS_MODULE,
} from "./constants";

export function setRoutes(app: any) {
  app.get("/", HOME_MODULE);

  // TD FUNCTIONS
  app.get("/td-movers", TD_GET_MOVERS_MODULE);
  app.get("/td-stock", TD_GET_STOCK_MODULE);
  app.get("/td-fundamentals", TD_GET_FUNDAMENTALS_MODULE);
  app.get("/td-prices", TD_GET_PRICE_HISTORY_MODULE);

  // POLYGON FUNCTIONS
  app.get("/poly-news", POLYGON_GET_NEWS_MODULE);
  app.get("/poly-company-details", POLYGON_GET_COMPANY_DETAILS_MODULE);
  app.get("/poly-financials", POLYGON_GET_FINANCIALS_MODULE);
  app.get("/poly-market-status", POLYGON_GET_MARKET_STATUS_MODULE);

  app.get("/fintel-short-volume", FINTEL_GETS_SEC_SHORT_VOL_MODULE);
  app.get("/fintel-stock-filings", FINTEL_GET_STOCK_FILINGS_MODULE);
  app.get("/fintel-sec-ownership", FINTEL_GET_SEC_OWNERSHIP_MODULE); 
  app.get("/fintel-institutional-holdings", FINTEL_GET_INSTITUTIONAL_HOLDINGS_MODULE); 
  app.get("/fintel-owner-info", FINTEL_GET_OWNER_INFO_MODULE);
  app.get("/fintel-inside-trades", FINTEL_GET_INSIDE_TRADES_MODULE);
  app.get("/fintel-stock-reg-filings", FINTEL_GET_STOCK_REG_FILINGS_MODULE);
}
