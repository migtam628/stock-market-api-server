require("dotenv").config();
import * as functions from "firebase-functions";
import express from "express";
import { initialize, setListenToPort } from "./constants";
import Routes from "./routes";

const app = express();

initialize(app);
Routes.map(({ path, module }: any) => {
  app.get(path, module);
});

// setListenToPort(app, process.env._PORT);

export const financialApi = functions.https.onRequest(app);
  