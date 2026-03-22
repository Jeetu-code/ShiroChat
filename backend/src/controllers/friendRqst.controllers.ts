import {catchAsync} from '../utils/catchAsync';
import {createFriends, listFriends} from '../services/friendRqst.services';
export const addFriends = catchAsync(async(req,res) => {
const {mobile} = req.body;
if(!mobile){
return res.status(401).json({message:'Invalid credientials'});
}
const userId = req.user!.userId;
const mobileNo = Number(mobile);
const data = { 
userId,
mobileNo
};
await createFriends(data);
res.status(200).json({message:"User added successfully"});
});


export const allFriends = catchAsync(async(req,res) => { 
const userId = req.user!.userId;
if(!userId){
return res.status(404).json({message:"User not found"});
}
const user = await listFriends(userId);
res.status(200).json({message:"All friends", user});
});
