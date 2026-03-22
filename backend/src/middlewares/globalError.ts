import {Request, Response, NextFunction} from 'express';
import {AppError} from '../utils/AppError';
const globalError = (err:Error, req:Request, res:Response, next:NextFunction) => { 
console.log(err.message, "Error from global Error");
const statusCode = (err as AppError).statusCode || 500;
return res.status(statusCode).json({message:err.message || "Internal Server Error"});
};

export default globalError;
