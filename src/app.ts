import express, {
  type Express,
  type NextFunction,
  type Request,
  type Response,
} from "express";

import { adminMiddleWare,userMiddleWare } from "./middleware/auth.ts";

const app: Express = express();

app.get(
  "/admin/getAllData",
  adminMiddleWare,
  (req: Request, res: Response, next: NextFunction) => {
    res.send("All User Data fetched successfully");
  }
);

app.delete(
  "/admin/deleteUser/:id",
  adminMiddleWare,
  (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;
    res.send(`User with ID ${userId} deleted successfully`);
  }
);

app.post(
  "/admin/addUser",
  adminMiddleWare,
  (req: Request, res: Response, next: NextFunction) => {
    res.send("New User added successfully");
  }
);

app.post('/user/login', (req: Request, res: Response, next: NextFunction) => {
  res.send("User logged in successfully");
});
app.get('/user/getProfile', userMiddleWare, (req: Request, res: Response, next: NextFunction) => {
  res.send("User profile fetched successfully");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});