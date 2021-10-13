require("dotenv").config();
import express from "express";
import { CORS, ROUTES, HEADERS, LISTEN_TO_PORT } from "./constants";

const app = express();

CORS(app);
ROUTES(app);
HEADERS(app);
LISTEN_TO_PORT(app, process.env.PORT);
