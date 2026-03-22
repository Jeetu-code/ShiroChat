import {catchAsync} from '../utils/catchAsync';
import {userSignup, userSignin} from '../services/auth.services';
export const signup = catchAsync(async(req, res)=> { 
const data = req.body;
if(!data){ 
return res.status(401).json({message:"Name, email, password all required"});
}
await userSignup(data);
res.status(201).json({message:"user signup successfully"});
});

export const signin = catchAsync(async(req, res) => { 
const data = req.body;
if(!data){
return res.status(401).json({message:'Name, email, password all required'});
}
const token = await userSignin(data);
res.status(200).json({message:"user signin successfully", token});
});
