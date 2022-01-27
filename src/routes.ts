import HOME_MODULE from "./home";
import { getAllFilings } from "./sec-api/get-all-filings";
import { getSearchFilings } from "./sec-api/get-search-filings";

const Routes: IRoutes = [
  { path: "/", module: HOME_MODULE },
  {
    path: "/sec-api-all-filings",
    module: getAllFilings,
  },
  {
    path: "/sec-api-get-search-filings",
    module: getSearchFilings,
  },
  { path: "/finn-market-news", module: require("./finnhub/get-market-news") },
  {
    path: "/finn-ipo-calendar",
    module: require("./finnhub/get-ipo-calendar"),
  },
  { path: "/finn-earnings", module: require("./finnhub/get-earnings") },
  {
    path: "/finn-stock-metrics",
    module: require("./finnhub/get-stock-metrics"),
  },
  {
    path: "/finn-sec-filings",
    module: require("./finnhub/get-sec-filings"),
  },
  { path: "/finn-stock-news", module: require("./finnhub/get-stock-news") },
  { path: "/finn-similar", module: require("./finnhub/get-similar") },
  {
    path: "/finn-stock-profile",
    module: require("./finnhub/get-stock-profile"),
  },
  {
    path: "/finn-search",
    module: require("./finnhub/get-search"),
  },
  { path: "/tiingo-market-news", module: require("./tiingo/get-market-news") },
  {
    path: "/tiingo-daily-prices",
    module: require("./tiingo/get-daily-prices"),
  },
  {
    path: "/tiingo-crypto-prices",
    module: require("./tiingo/get-crypto-prices"),
  },
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
    path: "/fmp-crypto-chart",
    module: require("./fmp/get-crypto-chart"),
  },
];

export default Routes;
