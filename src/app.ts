import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import dataBase from "./config/database.js";
import User from "./models/user.js";
const app: Express = express();
app.use(express.json());
app.post('/signup', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Handle signup logic here
    const user = new User({ firstName: req.body.firstName, lastName: req.body.lastName, emailId: req.body.emailId, password: req.body.password, age: req.body.age, gender: req.body.gender });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});
const startServer = async () => {
  try {
    await dataBase();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
