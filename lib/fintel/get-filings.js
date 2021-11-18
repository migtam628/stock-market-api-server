"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var getFilings = function (req, res) {
    var url = "https://api.fintel.io/data/v/0.0/so/us/BBIG/bo";
    var options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-API-KEY": "sk_9fb3aee7b14f4e4c9117f2c6377059a7",
        },
    };
    try {
        axios_1.default.get(url, options).then(function (response) {
            res.send(response.data);
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Something went wrong",
            error: error,
        });
    }
};
module.exports = getFilings;
