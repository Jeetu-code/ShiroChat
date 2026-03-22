import {conversation} from '../models/conversations.models';
import{AppError} from '../utils/AppError';

type userConversation_props = { 
userId:string;
recieverId:string;
};
export const userConversation = async(data:userConversation_props) => { 
const existing = await conversation.findOne({members:{$all:[data.userId , data.recieverId]}});
if(existing){ 
return existing;
}
await conversation.create({members:[data.userId, data.recieverId]});
};

export const getConversations = async(userId:string) => { 
const user = await conversation.find({members:userId}).populate("members" , "name email");
return user;
};
