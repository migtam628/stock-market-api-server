import HOME_MODULE from "./home";
import { IRoutes } from "./types";

const Routes: IRoutes = [
  { path: "/", module: HOME_MODULE },
  { path: "/td-movers", module: require("./td/get-movers") },
  { path: "/td-stock", module: require("./td/find-stock") },
  { path: "/td-fundamentals", module: require("./td/get-fundamentals") },
  { path: "/td-prices", module: require("./td/get-price-history") },
  { path: "/poly-news", module: require("./polygon/get-news") },
  {
    path: "/poly-company-details",
    module: require("./polygon/get-company-details"),
  },
  { path: "/poly-financials", module: require("./polygon/get-financials") },
  {
    path: "/poly-market-status",
    module: require("./polygon/get-market-status"),
  },
  {
    path: "/poly-stock-splits",
    module: require("./polygon/get-stock-splits"),
  },
  {
    path: "/poly-market-holidays",
    module: require("./polygon/get-market-holidays"),
  },
  {
    path: "/fintel-short-volume",
    module: require("./fintel/get-sec-short-vol"),
  },
  {
    path: "/fintel-stock-filings",
    module: require("./fintel/get-stock-filings"),
  },
  {
    path: "/fintel-sec-ownership",
    module: require("./fintel/get-sec-ownership"),
  },
  {
    path: "/fintel-institutional-holdings",
    module: require("./fintel/get-institutional-holdings"),
  },
  { path: "/fintel-owner-info", module: require("./fintel/get-owner-info") },
  {
    path: "/fintel-inside-trades",
    module: require("./fintel/get-inside-trades"),
  },
  {
    path: "/fintel-stock-reg-filings",
    module: require("./fintel/get-stock-reg-filings"),
  },
  { path: "/fmp-filings", module: require("./fmp/get-sec-filings") },
  { path: "/fmp-float", module: require("./fmp/get-shares-float") },
  { path: "/fmp-actives", module: require("./fmp/get-most-actives") },
  {
    path: "/fmp-growth",
    module: require("./fmp/get-financial-growth"),
  },
  {
    path: "/fmp-enterprise",
    module: require("./fmp/get-enterprise-value"),
  },
  {
    path: "/fmp-rating",
    module: require("./fmp/get-historical-rating"),
  },
  {
    path: "/fmp-crypto",
    module: require("./fmp/get-crypto-quote"),
  },
  {
    path: "/fmp-gainers",
    module: require("./fmp/get-gainers"),
  },
  {
    path: "/fmp-losers",
    module: require("./fmp/get-losers"),
  },
  {
    path: "/fmp-sectors",
    module: require("./fmp/get-sectors-performace"),
  },
  {
    path: "/fmp-earnings",
    module: require("./fmp/get-earnings-surprises"),
  },
  {
    path: "/fmp-quote",
    module: require("./fmp/get-quote"),
  },
  {
    path: "/fmp-chart",
    module: require("./fmp/get-historical-chart"),
  },
  {
    path: '/fmp-crypto-chart',
    module: require('./fmp/get-crypto-chart')
  }
];

export default Routes;
