import {User} from '../models/auth.models';
import {AppError} from '../utils/AppError';
import {hashedPassword, comparePassword} from '../utils/bcrypt';
import { createToken} from '../utils/jwt';
type signup_prop = { 
name:string;
email:string;
password:string;
mobile:number;
};

export const userSignup = async(data:signup_prop) => { 
const existingUser = await User.findOne({email:data.email});
if(existingUser){ 
throw new AppError('User exists', 409);
}
const hashedPasswd = await hashedPassword(data.password); 
return await User.create({name:data.name, email:data.email, password:hashedPasswd, mobile:data.mobile});
};

type signin_prop = { 
email:string;
password:string;
};

export const userSignin = async(data:signin_prop) => { 
const existingUser = await User.findOne({email:data.email});
if(!existingUser){
throw new AppError('User does not Exists, Signup first', 409);
}
const comparePasswd = comparePassword(data.password, existingUser.password);
if(!comparePasswd){
throw new AppError('wrong password', 409);
}

const token = createToken(existingUser.id, existingUser.email);
return token;
};
