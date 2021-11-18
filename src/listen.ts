export function setListenToPort(app: any, port: any) {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
}
