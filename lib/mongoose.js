"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = require("express")();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(cors({
    origin: "*",
}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
var UserSchema = new mongoose_1.Schema({
    _id: String,
    name: String,
    email: String,
    phone: String,
    user: Object,
    contacts: Array,
    date_registered: String,
    transactions: Array,
});
var UserModel = mongoose_1.model("user", UserSchema);
app.get("/findAll", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = req.query.url;
                // await ConnectMongoDB(url);
                return [4 /*yield*/, UserModel.find({}, function (err, docs) {
                        if (err)
                            res.json({ code: 500, status: "BAD", err: err });
                        else
                            res.json({ code: 200, status: "OK", docs: docs });
                    })];
            case 1:
                // await ConnectMongoDB(url);
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.get("/findOne", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.query._id;
                url = req.query.url;
                // await ConnectMongoDB(url);
                return [4 /*yield*/, UserModel.findOne({ _id: _id }, function (err, doc) {
                        if (err)
                            res.json({ code: 500, status: "BAD", err: err });
                        else {
                            if (doc)
                                res.json({ code: 200, status: "OK", doc: doc });
                            else
                                res.json({ code: 404, status: "BAD", msg: "Not Found" });
                        }
                    }).exec()];
            case 1:
                // await ConnectMongoDB(url);
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.get("/delete", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.query._id;
                url = req.query.url;
                // await ConnectMongoDB(url).then((res) => {
                //   console.log(res);
                // });
                return [4 /*yield*/, UserModel.findOneAndDelete({ _id: _id }, {}, function (err, doc) {
                        if (err)
                            res.json({ code: 500, status: "BAD", err: err });
                        else
                            res.json({ code: 200, status: "OK", doc: doc });
                    }).exec()];
            case 1:
                // await ConnectMongoDB(url).then((res) => {
                //   console.log(res);
                // });
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.post("/insert", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var url, doc;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = req.query.url;
                doc = req.body.doc;
                // await ConnectMongoDB(url);
                return [4 /*yield*/, UserModel.insertMany((doc === null || doc === void 0 ? void 0 : doc.length) > 0 ? doc : [doc], {}, function (err, doc) {
                        console.log(doc);
                        if (err)
                            res.json({ code: 500, status: "BAD", err: err });
                        else
                            res.json({ code: 200, status: "OK", body: doc });
                    })];
            case 1:
                // await ConnectMongoDB(url);
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.post("/update", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, url, doc;
    return __generator(this, function (_a) {
        _id = req.query._id;
        url = req.query.url;
        doc = req.body.doc;
        // await ConnectMongoDB(url).then((res) => {
        //   console.log(res);
        // });
        UserModel.updateOne({ _id: _id }, doc, {}, function (err, doc) {
            if (err)
                res.json({ code: 500, status: "BAD", err: err });
            else
                res.json({ code: 200, status: "OK", doc: doc });
        });
        return [2 /*return*/];
    });
}); });
app.post("/replace", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, url, doc;
    return __generator(this, function (_a) {
        _id = req.query._id;
        url = req.query.url;
        doc = req.body.doc;
        // await ConnectMongoDB(url).then((res) => {
        //   console.log(res);
        // });
        UserModel.replaceOne({ _id: _id }, doc, { upsert: true }, function (err, doc) {
            if (err)
                res.json({ code: 500, status: "BAD", err: err });
            else
                res.json({ code: 200, status: "OK", doc: doc });
        });
        return [2 /*return*/];
    });
}); });
// export const mongoose = functions.https.onRequest(app);
app.listen(3000, function () { return console.log("http://localhost:3000"); });
// async function ConnectMongoDB(url?: string) {
//   await connect(
//     url ||
//       "mongodb+srv://admin:xx00xx00@payfastcluster.1ng8x.mongodb.net/PayFast?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     }
//   );
// }
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.json("Hello from Firebase!");
// });
