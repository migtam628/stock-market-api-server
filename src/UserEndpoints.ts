export const URL =
  "https://us-central1-iwatchtv.cloudfunctions.net/financialApi";

export const Endpoints: TEndpoints = {
  secApiFilings: {
    name: "secApiFilings",
    path: "/sec-api-all-filings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/sec-api-all-filings?symbol=AAPL",
  },
  finnEarnings: {
    name: "finn-earnings",
    path: "/finn-earnings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-earnings?symbol=AAPL",
  },
  finnCandles: {
    name: "finn-candles",
    path: "/finn-candles",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-candles?symbol=AAPL&startDate=2022-01-01&endDate=2022-02-25",
  },
  finnNews: {
    name: "finn-market-news",
    path: "/finn-market-news",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-market-news",
  },
  finnIpoCalendar: {
    name: "finn-ipo-calendar",
    path: "/finn-ipo-calendar",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-ipo-calendar",
  },
  finnStockMetrics: {
    name: "finn-stock-metrics",
    path: "/finn-stock-metrics",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-stock-metrics?symbol=AAPL",
  },
  finnSecFilings: {
    name: "finn-sec-filings",
    path: "/finn-sec-filings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-sec-filings?symbol=AAPL",
  },
  finnStockNews: {
    name: "finn-stock-news",
    path: "/finn-stock-news",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-stock-news?symbol=AAPL",
  },
  finnSimilar: {
    name: "finn-similar",
    path: "/finn-similar",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-similar?symbol=AAPL",
  },
  finnStockProfile: {
    name: "finn-stock-profile",
    path: "/finn-stock-profile",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-stock-profile?symbol=AAPL",
  },
  finnSearch: {
    name: "finn-search",
    path: "/finn-search",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-search?search=AAPL",
  },
  tiingoMarketNews: {
    name: "tiingo-market-news",
    path: "/tiingo-market-news",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/tiingo-market-news",
  },
  tiingoDailyPrices: {
    name: "tiingo-daily-prices",
    path: "/tiingo-daily-prices",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/tiingo-daily-prices",
  },
  tiingoCryptoPrices: {
    name: "tiingo-crypto-prices",
    path: "/tiingo-crypto-prices",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/tiingo-crypto-prices",
  },
  finnMarketNews: {
    name: "finn-market-news",
    path: "/finn-market-news",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/finn-market-news",
  },
  tdMovers: {
    name: "td-movers",
    path: "/td-movers",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/td-movers",
  },
  tdStocks: {
    name: "td-stock",
    path: "/td-stock",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/td-stock?symbol=AAPL",
  },
  tdFundamentals: {
    name: "td-fundamentals",
    path: "/td-fundamentals",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/td-fundamentals?symbol=AAPL",
  },
  tdPrices: {
    name: "td-prices",
    path: "/td-prices",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/td-prices?symbol=AAPL&startDate=2019-01-01&endDate=2019-06-01",
    // TODO: SET PARAMETERS CORRECTLY
  },
  polyNews: {
    name: "poly-news",
    path: "/poly-news",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-news?symbol=AAPL",
  },
  polyCompanyDetails: {
    name: "poly-company-details",
    path: "/poly-company-details",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-company-details?symbol=AAPL",
  },
  polyFinancials: {
    name: "poly-financials",
    path: "/poly-financials",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-financials?symbol=AAPL",
  },
  polyMarketStatus: {
    name: "poly-market-status",
    path: "/poly-market-status",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-market-status?symbol=AAPL",
  },
  polyStockSplits: {
    name: "poly-stock-splits",
    path: "/poly-stock-splits",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-stock-splits?symbol=AAPL",
  },
  polyMarketHolidays: {
    name: "poly-market-holidays",
    path: "/poly-market-holidays",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/poly-market-holidays",
  },
  fintelShortVolume: {
    name: "fintel-short-volume",
    path: "/fintel-short-volume",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-short-volume?symbol=AAPL",
  },
  fintelStockFilings: {
    name: "fintel-stock-filings",
    path: "/fintel-stock-filings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-stock-filings?symbol=AAPL",
  },
  fintelSecOwnership: {
    name: "fintel-sec-ownership",
    path: "/fintel-sec-ownership",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-sec-ownership?symbol=AAPL",
  },
  fintelInstitutionalHolding: {
    name: "fintel-institutional-holdings",
    path: "/fintel-institutional-holdings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-institutional-holdings?symbol=AAPL",
    // TODO: MISSING OWNERSHIP
  },
  fintelOwnerInfo: {
    name: "fintel-owner-info",
    path: "/fintel-owner-info",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-owner-info?symbol=AAPL",
    // TODO: MISSING OWNERSHIP
  },
  fintelInsideTrades: {
    name: "fintel-inside-trades",
    path: "/fintel-inside-trades",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-inside-trades?symbol=AAPL",
  },
  fintelStockRegFiling: {
    name: "fintel-stock-reg-filing",
    path: "/fintel-stock-reg-filing",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fintel-stock-reg-fielings?symbol=AAPL",
    // TODO: MISSING OWNERSHIP
  },
  fmpFilings: {
    name: "fmp-filings",
    path: "/fmp-filings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-filings?symbol=AAPL",
  },
  fmpFloat: {
    name: "fmp-float",
    path: "/fmp-float",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-float?symbol=AAPL",
  },
  fmpActives: {
    name: "fmp-actives",
    path: "/fmp-actives",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-actives?symbol=AAPL",
  },
  fmpGrowth: {
    name: "fmp-growth",
    path: "/fmp-growth",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-growth?symbol=AAPL",
  },
  fmpEnterprise: {
    name: "fmp-enterprise",
    path: "/fmp-enterprise",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-enterprise?symbol=AAPL",
  },
  fmpRating: {
    name: "fmp-rating",
    path: "/fmp-rating",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-rating?symbol=AAPL",
  },
  fmpCrypto: {
    name: "fmp-crypto",
    path: "/fmp-crypto",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-crypto?symbol=AAPL",
  },

  fmpSectors: {
    name: "fmp-gainers",
    path: "/fmp-gainers",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-gainers",
  },
  fmpLosers: {
    name: "fmp-losers",
    path: "/fmp-losers",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-losers",
  },
  fmpGainers: {
    name: "fmp-sectors",
    path: "/fmp-sectors",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-sectors",
  },
  fmpEarnings: {
    name: "fmp-earnings",
    path: "/fmp-earnings",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-earnings?symbol=AAPL",
  },
  fmpQuote: {
    name: "fmp-quote",
    path: "/fmp-quote",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-quote?symbol=AAPL",
  },
  fmpChart: {
    name: "fmp-chart",
    path: "/fmp-chart",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-chart?symbol=AAPL",
  },
  fmpCryptoChart: {
    name: "fmp-crypto-chart",
    path: "/fmp-crypto-chart",
    example:
      "https://us-central1-iwatchtv.cloudfunctions.net/financialApi/fmp-crypto-chart?symbol=AAPL",
  },
};
