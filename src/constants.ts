import { setRoutes } from "./routes";
import { initialize } from "./initialize";

export { initialize, setRoutes };

export const TD_API_KEY = process.env.TD_API_KEY,
  FINTEL_API_KEY = process.env.FINTEL_API_KEY,
  FINNHUB_API_KEY = process.env.FINNHUB_API_KEY,
  POLYGON_API_KEY = process.env.POLYGON_API_KEY;

export const TD_GET_MOVERS_ROUTE = "/td-movers",
  TD_GET_FUNDAMENTALS_ROUTE = "/td-fundamentals",
  TD_GET_STOCK_ROUTE = "/td-stock",
  TD_GET_PRICE_HISTORY_ROUTE = "/td-prices";

export const POLYGON_GET_NEWS_ROUTE = "/poly-news",
  POLYGON_GET_COMPANY_DETAILS_ROUTE = "/poly-company-details",
  POLYGON_GET_FINANCIALS_ROUTE = "/poly-financials",
  POLYGON_GET_MARKET_STATUS_ROUTE = "/poly-market-status",
  POLYGON_GET_STOCK_SPLITS_ROUTE = "/poly-stock-splits",
  POLYGON_GET_MARKET_HOLIDAYS_ROUTE = "/poly-market-holidays";

export const FINTEL_GET_SEC_OWNERSHIP_ROUTE = "/fintel-sec-ownership",
  FINTEL_GETS_SEC_SHORT_VOL_ROUTE = "/fintel-short-volume",
  FINTEL_GET_INSTITUTIONAL_HOLDINGS_ROUTE = "/fintel-institutional-holdings",
  FINTEL_GET_INSIDE_TRADES_ROUTE = "/fintel-inside-trades",
  FINTEL_GET_STOCK_REG_FILINGS_ROUTE = "/fintel-stock-reg-filings",
  FINTEL_GET_OWNER_INFO_ROUTE = "/fintel-owner-info",
  FINTEL_GET_STOCK_FILINGS_ROUTE = "/fintel-stock-filings";

export const TD_GET_STOCK_MODULE = require("./td/get-stock"),
  TD_GET_PRICE_HISTORY_MODULE = require("./td/get-prices"),
  TD_GET_MOVERS_MODULE = require("./td/get-movers"),
  TD_GET_FUNDAMENTALS_MODULE = require("./td/get-fundamentals");

export const FINTEL_GET_SEC_OWNERSHIP_MODULE = require("./fintel/get-sec-ownership"),
  FINTEL_GETS_SEC_SHORT_VOL_MODULE = require("./fintel/get-sec-short-vol"),
  FINTEL_GET_INSTITUTIONAL_HOLDINGS_MODULE = require("./fintel/get-institutional-holdings"),
  FINTEL_GET_INSIDE_TRADES_MODULE = require("./fintel/get-inside-trades"),
  FINTEL_GET_STOCK_REG_FILINGS_MODULE = require("./fintel/get-stock-reg-filings"),
  FINTEL_GET_STOCK_FILINGS_MODULE = require("./fintel/get-stock-filings"),
  FINTEL_GET_OWNER_INFO_MODULE = require("./fintel/get-owner-info");

export const POLYGON_GET_NEWS_MODULE = require("./polygon/get-news"),
  POLYGON_GET_COMPANY_DETAILS_MODULE = require("./polygon/get-company-details"),
  POLYGON_GET_FINANCIALS_MODULE = require("./polygon/get-financials"),
  POLYGON_GET_MARKET_STATUS_MODULE = require("./polygon/get-market-status"),
  POLYGON_GET_STOCK_SPLITS_MODULE = require("./polygon/get-stock-splits"),
  POLYGON_GET_MARKET_HOLIDAYS_MODULE = require("./polygon/get-market-holidays");

import HOME_MODULE from "./home";
export { HOME_MODULE };
