import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.set("Access-Control-Allow-Methods", "GET");
app.set("Access-Control-Allow-Origin", "*");
app.set("Access-Control-Allow-Headers", "Content-Type");
app.set("Content-Type", "text/html");
app.set("Content-Type", "application/x-www-form-urlencoded");
app.set("Content-Type", "application/json");
app.set("Connection", "keep-alive");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/movers", require("./td/get-movers"));
app.get("/stock", require("./td/find-stock"));
app.get("/fundamentals", require("./td/get-fundamentals"));
app.get("/prices", require("./td/get-price-history"));

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
