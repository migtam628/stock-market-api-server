declare module "sec-api";

interface Mover {
  change: number;
  description: string;
  direction: string;
  last: number;
  symbol: string;
  totalVolume: number;
}

interface IRoute {
  path: string;
  module: any;
}

type IRoutes = IRoute[];

type TEndpoints = {
  [key in EndpointChoices]?: IEndpoints;
};

interface IEndpoints {
  name: string;
  path: string;
  example: string;
}

enum EndpointChoices {
  finnMarketNews = "finnMarketNews",
  finnIpoCalendar = "finnIpoCalendar",
  finnEarnings = "finnEarnings",
  finnStockMetrics = "finnStockMetrics",
  finnStockNews = "finnStockNews",
  finnSecFilings = "finnSecFilings",
  finnSimilar = "finnSimilar",
  finnStockProfile = "finnStockProfile",
  finnSearch = "finnSearch",
  tiingoMarketNews = "tiingoMarketNews",
  tiingoDailyPrices = "tiingoDailyPrices",
  tiingoCryptoPrices = "tiingoCryptoPrices",
  finnNews = "finnNews",
  tdMovers = "tdMovers",
  tdStocks = "tdStocks",
  tdFundamentals = "tdFundamentals",
  tdPrices = "tdPrices",
  polyNews = "polyNews",
  polyCompanyDetails = "polyCompanyDetails",
  polyFinancials = "polyFinancials",
  polyMarketStatus = "polyMarketStatus",
  polyStockSplits = "polyStockSplits",
  polyMarketHolidays = "polyMarketHolidays",
  fintelShortVolume = "fintelShortVolume",
  fintelStockFilings = "fintelStockFilings",
  fintelSecOwnership = "fintelSecOwnership",
  fintelInstitutionalHolding = "fintelInstitutionalHolding",
  fintelOwnerInfo = "fintelOwnerInfo",
  fintelInsideTrades = "fintelInsideTrades",
  fintelStockRegFiling = "fintelStockRegFiling",
  fmpFilings = "fmpFilings",
  fmpFloat = "fmpFloat",
  fmpActives = "fmpActives",
  fmpGrowth = "fmpGrowth",
  fmpEnterprise = "fmpEnterprise",
  fmpRating = "fmpRating",
  fmpCrypto = "fmpCrypto",
  fmpSectors = "fmpSectors",
  fmpLosers = "fmpLosers",
  fmpGainers = "fmpGainers",
  fmpEarnings = "fmpEarnings",
  fmpQuote = "fmpQuote",
  fmpChart = "fmpChart",
  fmpCryptoChart = "fmpCryptoChart",
}
