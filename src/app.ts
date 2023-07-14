import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

import mongoose from "mongoose";
import httpStatus from "http-status";
import routes from "../src/app/routes/index";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const { ValidationError } = mongoose.Error;

// route
app.use("/api/v1", routes);

// test
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Welcome to The Book Oasis",
  });
});

// error handler middleware
app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Api not found",
    errorMessages: [{ path: req.originalUrl, message: "Api not found" }],
  });
});

export default app;
