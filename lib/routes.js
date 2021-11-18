"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
var constants_1 = require("./constants");
function setRoutes(app) {
    app.get("/", constants_1.HOME_MODULE);
    // TD FUNCTIONS
    app.get(constants_1.TD_GET_MOVERS_ROUTE, constants_1.TD_GET_MOVERS_MODULE);
    app.get(constants_1.TD_GET_STOCK_ROUTE, constants_1.TD_GET_STOCK_MODULE);
    app.get(constants_1.TD_GET_FUNDAMENTALS_ROUTE, constants_1.TD_GET_FUNDAMENTALS_MODULE);
    app.get(constants_1.TD_GET_PRICE_HISTORY_ROUTE, constants_1.TD_GET_PRICE_HISTORY_MODULE);
    app.get(constants_1.POLYGON_GET_NEWS_ROUTE, constants_1.POLYGON_GET_NEWS_MODULE);
    app.get(constants_1.POLYGON_GET_COMPANY_DETAILS_ROUTE, constants_1.POLYGON_GET_COMPANY_DETAILS_MODULE);
    app.get(constants_1.POLYGON_GET_FINANCIALS_ROUTE, constants_1.POLYGON_GET_FINANCIALS_MODULE);
    app.get(constants_1.POLYGON_GET_MARKET_STATUS_ROUTE, constants_1.POLYGON_GET_MARKET_STATUS_MODULE);
    app.get(constants_1.POLYGON_GET_STOCK_SPLITS_ROUTE, constants_1.POLYGON_GET_STOCK_SPLITS_MODULE);
    app.get(constants_1.POLYGON_GET_MARKET_HOLIDAYS_ROUTE, constants_1.POLYGON_GET_MARKET_HOLIDAYS_MODULE);
    app.get(constants_1.FINTEL_GETS_SEC_SHORT_VOL_ROUTE, constants_1.FINTEL_GETS_SEC_SHORT_VOL_MODULE);
    app.get(constants_1.FINTEL_GET_STOCK_FILINGS_ROUTE, constants_1.FINTEL_GET_STOCK_FILINGS_MODULE);
    app.get(constants_1.FINTEL_GET_SEC_OWNERSHIP_ROUTE, constants_1.FINTEL_GET_SEC_OWNERSHIP_MODULE);
    app.get(constants_1.FINTEL_GET_INSTITUTIONAL_HOLDINGS_ROUTE, constants_1.FINTEL_GET_INSTITUTIONAL_HOLDINGS_MODULE);
    app.get(constants_1.FINTEL_GET_OWNER_INFO_ROUTE, constants_1.FINTEL_GET_OWNER_INFO_MODULE);
    app.get(constants_1.FINTEL_GET_INSIDE_TRADES_ROUTE, constants_1.FINTEL_GET_INSIDE_TRADES_MODULE);
    app.get(constants_1.FINTEL_GET_STOCK_REG_FILINGS_ROUTE, constants_1.FINTEL_GET_STOCK_REG_FILINGS_MODULE);
}
exports.setRoutes = setRoutes;
