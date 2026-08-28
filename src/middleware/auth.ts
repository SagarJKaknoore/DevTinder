import { Request, Response, NextFunction } from "express";

const adminMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = "Sagar";

  if (user === "Sagar") {
    console.log("Admin Access Granted");
    next();
  } else {
    res.status(403).send("Access Denied");
  }
};
const userMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = "Sagar";

  if (user === "Sagar") {
    console.log("User Access Granted");
    next();
  } else {
    res.status(403).send("Access Denied");
  }
};

export { adminMiddleWare, userMiddleWare };