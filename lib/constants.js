"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.FIN_MOD_PREP_API_KEY = exports.POLYGON_API_KEY = exports.FINNHUB_API_KEY = exports.FINTEL_API_KEY = exports.TD_API_KEY = exports.setListenToPort = exports.initialize = void 0;
var listen_1 = require("./listen");
Object.defineProperty(exports, "setListenToPort", { enumerable: true, get: function () { return listen_1.setListenToPort; } });
var initialize_1 = require("./initialize");
Object.defineProperty(exports, "initialize", { enumerable: true, get: function () { return initialize_1.initialize; } });
exports.TD_API_KEY = process.env.TD_API_KEY, exports.FINTEL_API_KEY = process.env.FINTEL_API_KEY, exports.FINNHUB_API_KEY = process.env.FINNHUB_API_KEY, exports.POLYGON_API_KEY = process.env.POLYGON_API_KEY, exports.FIN_MOD_PREP_API_KEY = process.env.FIN_MOD_PREP_API_KEY, exports.PORT = process.env.PORT;
