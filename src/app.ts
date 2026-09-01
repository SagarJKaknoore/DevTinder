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
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});
app.get('/getAllUsers', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Handle fetching users logic here
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});
app.get(
  '/getUserByEmail',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.query.email;

      if (!email || typeof email !== 'string') {
        return res.status(400).json({
          message: 'Email is required',
        });
      }

      const user = await User.findOne({ emailId: email });

      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  }
);

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
