import { NextFunction, Request, Response } from "express";
import HttpError from "../utils/HttpError";

export default async function errorHandler(error: HttpError, req: Request, res: Response, next: NextFunction) {
    console.error(`Error at root: `, error);
    res.status(error.statusCode).json({error: error.message});
    return next()
}