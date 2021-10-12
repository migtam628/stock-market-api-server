
export function setHeaders(app: any) {
  app.set("Access-Control-Allow-Methods", "GET");
  app.set("Access-Control-Allow-Origin", "*");
  app.set("Access-Control-Allow-Headers", "Content-Type");
  app.set("Content-Type", "text/html");
  app.set("Content-Type", "application/x-www-form-urlencoded");
  app.set("Content-Type", "application/json");
  app.set("Connection", "keep-alive");
}
