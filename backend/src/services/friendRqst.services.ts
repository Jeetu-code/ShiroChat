import {AppError} from '../utils/AppError';
import {User} from '../models/auth.models';
type userRequest_prop = { 
userId:string;
mobileNo:number;
};
export const createFriends = async(data:userRequest_prop) => { 
const friend = await User.findOne({mobile:data.mobileNo});
if(!friend){ 
throw new AppError("User not found", 404);
}
if(friend._id.toString() === data.userId){ 
throw new AppError("Cannot add yourself", 401);
}
await User.findByIdAndUpdate(data.userId,{$addToSet:{friends:friend._id}}, {new:true});

await User.findByIdAndUpdate(friend._id, {$addToSet:{friends:data.userId}},{new:true});
};



export const listFriends = async(userId:string) => { 
const friends = await User.find({_id:userId}).populate("friends", "name email").select("friends");
return friends;
};
