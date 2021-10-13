export function setListenToPort(app: any) {
  let port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
