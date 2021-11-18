import cors from "cors";
const bodyParser = require("body-parser");

export function initialize(app: any) {
  
  app.set("Access-Control-Allow-Methods", "GET");
  app.set("Access-Control-Allow-Origin", "*");
  app.set("Access-Control-Allow-Headers", "Content-Type");
  app.set("Content-Type", "text/html");
  app.set("Content-Type", "application/x-www-form-urlencoded");
  app.set("Content-Type", "application/json");
  app.set("Connection", "keep-alive");

  app.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.raw());
}
