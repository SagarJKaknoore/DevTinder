import express, { type Express, type Request, type Response } from "express";
const app: Express = express();

app.use(express.json());

app.get("/user", (req: Request, res: Response) => {
  res.send("Hello User");
});

app.post("/user", (req: Request, res: Response) => {
  res.send("User created");
});

app.patch("/user", (req: Request, res: Response) => {
  res.send("User updated");
});

app.delete("/user", (req: Request, res: Response) => {
  res.send("User deleted");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
app.get('/', (req: Request, res: Response) => {
  res.send('root');
});

app.get('/about', (req: Request, res: Response) => {
  res.send('about');
});

app.get('/random.text', (req: Request, res: Response) => {
  res.send('random.text');
});
app.get(/a/, (req: Request, res: Response) => {
  res.send('/a/');
});
app.get(/.*fly$/, (req: Request, res: Response) => {
  res.send('/.*fly$/');
});
app.get('/users/:userId/books/:bookId', (req: Request, res: Response) => {
  res.send(req.params);
});