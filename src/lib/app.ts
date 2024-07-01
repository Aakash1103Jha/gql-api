import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import HttpError from "../utils/HttpError";
import errorHandler from "../middlewares/errorHandler";
import { createServer } from "http";

export const expressApp = express();
const app = createServer(expressApp);

expressApp.disable("x-powered-by");

expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: false }));

expressApp.get("/", async (_: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json("🚀 🚀 🚀");
  } catch (error) {
    console.error(`Error at root: `, error);
    return next(new HttpError((error as Error).message, 500));
  }
});

expressApp.use(errorHandler);

export default app;
