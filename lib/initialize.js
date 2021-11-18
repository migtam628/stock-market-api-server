"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
var cors_1 = __importDefault(require("cors"));
var bodyParser = require("body-parser");
function initialize(app) {
    app.set("Access-Control-Allow-Methods", "GET");
    app.set("Access-Control-Allow-Origin", "*");
    app.set("Access-Control-Allow-Headers", "Content-Type");
    app.set("Content-Type", "text/html");
    app.set("Content-Type", "application/x-www-form-urlencoded");
    app.set("Content-Type", "application/json");
    app.set("Connection", "keep-alive");
    app.set("X-Powered-By", "Express");
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(cors_1.default({
        origin: "*",
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
}
exports.initialize = initialize;
