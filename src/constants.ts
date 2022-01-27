import { setListenToPort } from "./listen";
import { initialize } from "./initialize";

export { initialize, setListenToPort };

export const TD_API_KEY = process.env.TD_API_KEY,
  FINTEL_API_KEY = process.env.FINTEL_API_KEY,
  FINNHUB_API_KEY = process.env.FINNHUB_API_KEY,
  POLYGON_API_KEY = process.env.POLYGON_API_KEY,
  FIN_MOD_PREP_API_KEY = process.env.FIN_MOD_PREP_API_KEY,
  TIINGO_API_KEY = process.env.TIINGO_API_KEY,
  SEC_API_KEY = process.env.SEC_API_KEY,
  PORT = process.env.PORT;
