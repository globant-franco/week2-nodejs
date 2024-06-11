import express, { Request, Response, NextFunction } from "express";
const morgan = require("morgan");
import userRouter from "./routes/userRoutes";

const app = express();
app.use(morgan("dev")); // used to log request to console
// This middleware will parse the JSON data in the request body and make it accessible in your route handlers as req.body.
app.use(express.json());

app.use("/api/v1/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome");
});

// Middleware to handle 404 requests
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

export default app;
