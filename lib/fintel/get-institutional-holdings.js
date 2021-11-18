"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var getInstitutionalHoldings = function (req, res) {
    var owner = req.query.owner;
    var url = "https://api.fintel.io/web/v/0.0/i/" + owner;
    var options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-API-KEY": constants_1.FINTEL_API_KEY,
        },
    };
    if (!owner) {
        res
            .status(400)
            .json({ error: "owner is required", code: 400, status: "error" });
    }
    try {
        axios_1.default
            .get(url, options)
            .then(function (response) {
            res.status(200).json(response.data);
        })
            .catch(function (error) {
            res
                .status(500)
                .json({ error: error.message, code: 500, status: "error" });
        });
    }
    catch (error) {
        res.status(500).json({ error: error, code: 500, status: "error" });
    }
};
module.exports = getInstitutionalHoldings;
