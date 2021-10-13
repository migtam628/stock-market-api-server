export function setListenToPort(app: any, port: any) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
