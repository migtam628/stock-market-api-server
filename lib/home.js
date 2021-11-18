"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HOME_MODULE = function (req, res) {
    res.json({
        message: "Welcome to ThePicks Financial API",
        status: "success",
        code: 200,
    });
};
exports.default = HOME_MODULE;
