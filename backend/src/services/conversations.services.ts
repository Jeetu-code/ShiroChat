import {conversation} from '../models/conversations.models';
import {Message} from '../models/message.models';
import{AppError} from '../utils/AppError';
import {Types} from "mongoose";
type userConversation_props = { 
userId:Types.ObjectId;
recieverId:Types.ObjectId;
message:string;
};

type userprop = {
userId:Types.ObjectId;
receiverId:Types.ObjectId;
}
export const userConversation = async(data:userConversation_props) => { 
const existing = await conversation.findOne({members:{$all:[data.userId , data.recieverId]}});
console.log(existing,"from conv search convid");
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
return user;
};

export const getAllMessages = async(ConvId:string)=>{
const msgs = await Message.find({conversationId:ConvId});
console.log(msgs,"all msgs form services");
return msgs;
}
export const getConvId = async(data:userprop)=>{
const existing = await conversation.findOne({members:{$all:[data.userId,data.receiverId]}});
if(!existing){
throw new Error("Conversation not found!");
}
return existing;
}
