import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Start working with express");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
