const HOME_MODULE = (req: any, res: any) => {
  res.json({
    message: "Welcome to ThePicks Financial API",
    status: "success",
    code: 200,
  });
};

export default HOME_MODULE;
