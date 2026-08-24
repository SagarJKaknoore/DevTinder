import express from "express";

const app = express();

app.use("/user", (req, res) => {
  res.send("Hello World");
});
app.get("/user", (req, res) => {
  res.send("Hello User");
});
app.post("/user", (req, res) => {
  res.send("User created");
});
app.patch("/user", (req, res) => {
  res.send("User updated");
});
app.delete("/user", (req, res) => {
  res.send("User deleted");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});