require("dotenv").config();
import express from "express";
import cors from "cors";
import { setListenToPort } from "./listen";
import { setRoutes } from "./routes";
import { setHeaders } from "./headers";

const app = express();
app.use(cors());

setRoutes(app);
setHeaders(app);
setListenToPort(app, process.env.PORT);
