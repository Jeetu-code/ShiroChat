import {userConversation, getConversations} from '../services/conversations.services';
import {catchAsync} from '../utils/catchAsync';

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
await userConversation(data);
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
