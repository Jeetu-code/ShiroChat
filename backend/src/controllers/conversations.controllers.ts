import {userConversation,getConvId,getAllMessages, getConversations} from '../services/conversations.services';
import {catchAsync} from '../utils/catchAsync';
import {Types} from "mongoose";
export const createConversation = catchAsync(async(req, res) => { 
const {reciever} = req.body;
if(!reciever){ 
return res.status(401).json({message:"Unauthorized request"});
}
const userId = req.user!.userId;
const recieverId = reciever as string;
const data = { 
userId,
recieverId
};
res.status(200).json({message:"Conversation created successfully"});
}); 

export const allConversations = catchAsync(async(req, res) => { 
const userId = req.user!.userId;
if(!userId){ 
return res.status(404).json({message:"Conversation not found"});
}
const conversations = await getConversations(userId);
res.status(200).json({message:"All conversations", conversations});
});

export const allmessages = catchAsync(async(req,res)=>{
const ConversationId=req.params.id;
if(!ConversationId){
res.status(404).json({message:"id not found"});
}
console.log(ConversationId,"from controllers");
const messages = await getAllMessages(ConversationId as string);
return res.status(200).json({message:"success",data:messages});
});

export const convId = catchAsync(async(req,res)=>{
const userId = req.user!.userId;
const {receiver} = req.body;
console.log(receiver,"above ");
const receiverId = receiver as string;
if(!userId ){
return res.status(404).json({message:"user not found"});
}
const data = { 
userId:new Types.ObjectId(userId),
receiverId:new Types.ObjectId(receiverId)
};
console.log(data,"form here");
const conversationId = await getConvId(data);
res.status(200).json({message:"success",data:conversationId});
});
