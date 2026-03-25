import {conversation} from '../models/conversations.models';
import {Message} from '../models/message.models';
import{AppError} from '../utils/AppError';
import {Types} from "mongoose";
type userConversation_props = { 
userId:Types.ObjectId;
recieverId:Types.ObjectId;
message:string;
};
export const userConversation = async(data:userConversation_props) => { 
const existing = await conversation.findOne({members:{$all:[data.userId , data.recieverId]}});
if(!existing){ 
const membersId=await conversation.create({members:[data.userId, data.recieverId]});
console.log(membersId);
const message = await Message.create({conversationId:membersId._id,sender:data.userId,text:data.message});
console.log(message);
return message;
}
const message = await Message.create({conversationId:existing._id,sender:data.userId,text:data.message});
console.log(message);
return message;
};

export const getConversations = async(userId:string) => { 
const user = await conversation.find({members:userId}).populate("members" , "name email");
if(!user){
throw new Error("Unauthorized");
}
const chat = await Message.find({conversationId:user[0]._id});
return chat;
};
