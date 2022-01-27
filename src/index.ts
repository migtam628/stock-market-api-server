require("dotenv").config();
import * as functions from "firebase-functions";
import express from "express";
import { initialize, setListenToPort } from "./constants";
import Routes from "./routes";
// import createSockerIO from "./socketio";
import uuid from "uuid";
import { streamAllFilings } from "./sec-api/stream-all-filings";

const app = express();

initialize(app);
Routes.map(({ path, module }: any) => {
  app.get(path, module);
});


// setListenToPort(app, process.env.PORT);


export const financialApi = functions.https.onRequest(app);
// export const financialApiOnCall = functions.https.onCall((data, context) => {
// });
