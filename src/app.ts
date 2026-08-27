import express, { type Express, type NextFunction, type Request, type Response } from "express";
const app: Express = express();

app.use('/users', [(req: Request, res: Response, next: NextFunction) => {

  console.log(`Request received: ${req.method} ${req.url}`);
  console.log(`Request headers: ${JSON.stringify(req.headers)}`);

  next(new Error("Error: Something went wrong in the first middleware"));
  // res.send("Hello, World!");
}, (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`Error occurred: ${err.message}`);
  //  res.status(500).send("Internal Server Error");
  next(err);
}], (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(`3Request received: ${req.method} ${req.url}`);
  console.log(`3Request headers: ${JSON.stringify(req.headers)}`);
  console.error(`3Error occurred: ${err}`);
  res.send("3rd Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});