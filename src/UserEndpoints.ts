export const URL =
  "https://us-central1-iwatchtv.cloudfunctions.net/financialApi";
export const Endpoints: {
  name: string;
  path: string;
  example: string;
}[] = [
  {
    name: "td-movers",
    path: "/td-movers",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/td-movers",
  },
  {
    name: "td-stock",
    path: "/td-stock",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/td-stock?symbol=AAPL",
  },
  {
    name: "td-fundamentals",
    path: "/td-fundamentals",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/td-fundamentals?symbol=AAPL",
  },
  {
    name: "td-prices",
    path: "/td-prices",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/td-prices?symbol=AAPL&startDate=2019-01-01&endDate=2019-06-01",
    // TODO: SET PARAMETERS CORRECTLY
  },
  {
    name: "poly-news",
    path: "/poly-news",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-news?symbol=AAPL",
  },
  {
    name: "poly-company-details",
    path: "/poly-company-details",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-company-details?symbol=AAPL",
  },
  {
    name: "poly-financials",
    path: "/poly-financials",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-financials?symbol=AAPL",
  },
  {
    name: "poly-market-status",
    path: "/poly-market-status",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-market-status?symbol=AAPL",
  },
  {
    name: "poly-stock-splits",
    path: "/poly-stock-splits",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-stock-splits?symbol=AAPL",
  },
  {
    name: "poly-market-holidays",
    path: "/poly-market-holidays",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-market-holidays",
  },
  {
    name: "poly-stock-splits",
    path: "/poly-stock-splits",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-stock-splits?symbol=AAPL",
  },
  {
    name: "poly-market-holidays",
    path: "/poly-market-holidays",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-market-holidays",
  },
  {
    name: "fintel-short-volume",
    path: "/fintel-short-volume",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-short-volume?symbol=AAPL",
  },
  {
    name: "fintel-stock-filings",
    path: "/fintel-stock-filings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-stock-filings?symbol=AAPL",
  },
  {
    name: "fintel-sec-ownership",
    path: "/fintel-sec-ownership",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-sec-ownership?symbol=AAPL",
  },
  {
    name: "fintel-institutional-holdings",
    path: "/fintel-institutional-holdings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-institutional-holdings?symbol=AAPL",
    // TODO: MISSING OWNERSHIP
  },
  {
    name: "fintel-owner-info",
    path: "/fintel-owner-info",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-owner-info?symbol=AAPL",
    // TODO: MISSING OWNERSHIP
  },
  {
    name: "fintel-inside-trades",
    path: "/fintel-inside-trades",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-inside-trades?symbol=AAPL",
  },
  {
    name: "fintel-stock-reg-filing",
    path: "/fintel-stock-reg-filing",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-stock-reg-filing?symbol=AAPL",
    // TODO: MISSING OWNERSHIP
  },
  {
    name: "fmp-filings",
    path: "/fmp-filings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-filings?symbol=AAPL",
  },
  {
    name: "fmp-float",
    path: "/fmp-float",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-float?symbol=AAPL",
  },
  {
    name: "fmp-actives",
    path: "/fmp-actives",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-actives?symbol=AAPL",
  },
  {
    name: "fmp-actives",
    path: "/fmp-actives",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-actives?symbol=AAPL",
  },
  {
    name: "fmp-growth",
    path: "/fmp-growth",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-growth?symbol=AAPL",
  },
  {
    name: "fmp-enterprise",
    path: "/fmp-enterprise",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-enterprise?symbol=AAPL",
  },
  {
    name: "fmp-rating",
    path: "/fmp-rating",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-rating?symbol=AAPL",
  },
  {
    name: "fmp-crypto",
    path: "/fmp-crypto",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-crypto?symbol=AAPL",
  },

  {
    name: "fmp-gainers",
    path: "/fmp-gainers",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-gainers",
  },
  {
    name: "fmp-losers",
    path: "/fmp-losers",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-losers",
  },
  {
    name: "fmp-sectors",
    path: "/fmp-sectors",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-sectors",
  },
  {
    name: "fmp-earnings",
    path: "/fmp-earnings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-earnings?symbol=AAPL",
  },
  {
    name: "fmp-quote",
    path: "/fmp-quote",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-quote?symbol=AAPL",
  },
  {
    name: "fmp-chart",
    path: "/fmp-chart",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-chart?symbol=AAPL",
  },
  {
    name: "fmp-crypto-chart",
    path: "/fmp-crypto-chart",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-crypto-chart?symbol=AAPL",
  },
];
