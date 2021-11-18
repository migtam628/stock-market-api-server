require("dotenv").config();
import * as functions from "firebase-functions";
import express from "express";
import { setRoutes } from "./constants";
import { initialize } from "./initialize";

const app = express();

initialize(app);
setRoutes(app);

export const financialApi = functions.https.onRequest(app);
// export const financialApiOnCall = functions.https.onCall((data, context) => {
// });
