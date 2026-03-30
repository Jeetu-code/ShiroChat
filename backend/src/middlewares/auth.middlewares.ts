import {Request, Response, NextFunction} from 'express';
import {AppError} from '../utils/AppError';
import {verifyToken, AuthPayload} from '../utils/jwt';
export const auth = async(req:Request, res:Response, next:NextFunction) => { 
try{ 
const tokenHead = req.headers?.authorization; 
console.log(tokenHead,"hererere");
if(!tokenHead || !tokenHead.startsWith('Bearer')){ 
throw new AppError("invalid token", 401); 
}

const token = tokenHead.split(" ")[1];
const decoded = verifyToken(token) as AuthPayload; 
req.user = { 
userId:decoded.userId,
email:decoded.email
};
next();
}catch(err){
res.status(401).json({message:"invlaid or expired token"});}
};
