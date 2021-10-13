import { Schema, model, NativeError, connect } from "mongoose";
const bodyParser = require("body-parser");
const cors = require("cors");
const app = require("express")();

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

const UserSchema = new Schema({
  _id: String,
  name: String,
  email: String,
  phone: String,
  user: Object,
  contacts: Array,
  date_registered: String,
  transactions: Array,
});
const UserModel = model("user", UserSchema);

type ArrayType = any[];
type ObjectType = ObjectConstructor;

app.get("/findAll", async (req: any, res: any) => {
  let url: any = req.query.url;
  await ConnectMongoDB(url);
  await UserModel.find({}, (err, docs) => {
    if (err) res.json({ code: 500, status: "BAD", err });
    else res.json({ code: 200, status: "OK", docs });
  });
});

app.get("/findOne", async (req: any, res: any) => {
  let _id: any = req.query._id;
  let url: any = req.query.url;
  await ConnectMongoDB(url);
  await UserModel.findOne({ _id }, (err: any, doc: any) => {
    if (err) res.json({ code: 500, status: "BAD", err });
    else {
      if (doc) res.json({ code: 200, status: "OK", doc });
      else res.json({ code: 404, status: "BAD", msg: "Not Found" });
    }
  }).exec();
});

app.get("/delete", async (req: any, res: any) => {
  let _id: any = req.query._id;
  let url: any = req.query.url;
  await ConnectMongoDB(url).then((res) => {
    console.log(res);
  });
  await UserModel.findOneAndDelete({ _id }, {}, (err: any, doc: any) => {
    if (err) res.json({ code: 500, status: "BAD", err });
    else res.json({ code: 200, status: "OK", doc });
  }).exec();
});

app.post("/insert", async (req: any, res: any) => {
  let url: any = req.query.url;
  let doc: any = req.body.doc;
  await ConnectMongoDB(url);
  await UserModel.insertMany(doc?.length > 0 ? doc : [doc], {}, (err, doc) => {
    console.log(doc);
    if (err) res.json({ code: 500, status: "BAD", err });
    else res.json({ code: 200, status: "OK", body: doc });
  });
});

app.post("/update", async (req: any, res: any) => {
  let _id: any = req.query._id;
  let url: any = req.query.url;
  let doc: ArrayType | ObjectType = req.body.doc;
  await ConnectMongoDB(url).then((res) => {
    console.log(res);
  });
  UserModel.updateOne({ _id }, doc, {}, (err, doc) => {
    if (err) res.json({ code: 500, status: "BAD", err });
    else res.json({ code: 200, status: "OK", doc });
  });
});

app.post("/replace", async (req: any, res: any) => {
  let _id: any = req.query._id;
  let url: any = req.query.url;
  let doc: ArrayType | ObjectType = req.body.doc;
  await ConnectMongoDB(url).then((res) => {
    console.log(res);
  });
  UserModel.replaceOne({ _id }, doc, { upsert: true }, (err, doc) => {
    if (err) res.json({ code: 500, status: "BAD", err });
    else res.json({ code: 200, status: "OK", doc });
  });
});

export const mongoose = functions.https.onRequest(app);
// app.listen(3000, () => console.log("http://localhost:3000"));

async function ConnectMongoDB(url?: string) {
  await connect(
    url ||
      "mongodb+srv://admin:xx00xx00@payfastcluster.1ng8x.mongodb.net/PayFast?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
}

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
