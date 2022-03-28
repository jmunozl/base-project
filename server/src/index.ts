import express, { Request, Response } from "express";

const app = express();

app.get("/hello", (req: Request, res: Response) => {
  res.send({ message: "Hello Base Project" });
});

app.listen(3000, () => {
  console.log("server started");
});
