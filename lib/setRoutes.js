"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function setRoutes(app) {
    app.get("/", constants_1.HOME_MODULE);
    // TD FUNCTIONS
    app.get("/td-movers", constants_1.TD_GET_MOVERS_MODULE);
    app.get("/td-stock", constants_1.TD_GET_STOCK_MODULE);
    app.get("/td-fundamentals", constants_1.TD_GET_FUNDAMENTALS_MODULE);
    app.get("/td-prices", constants_1.TD_GET_PRICE_HISTORY_MODULE);
    // POLYGON FUNCTIONS
    app.get("/poly-news", constants_1.POLYGON_GET_NEWS_MODULE);
    app.get("/poly-company-details", constants_1.POLYGON_GET_COMPANY_DETAILS_MODULE);
}
module.exports = setRoutes;
