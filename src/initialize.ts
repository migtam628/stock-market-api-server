import cors from "cors";

export function initialize(app: any) {
  app.use(cors());
}
