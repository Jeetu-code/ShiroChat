import {Schema,model} from "mongoose";

const messageSchema = new Schema({
conversationId:{
type:Schema.Types.ObjectId,
ref:"conversations",
required:true,
},
sender:{
type:Schema.Types.ObjectId,
ref:"chatuser",
required:true,
},
text:{
type:String,
required:true
},

},{timestamps:true});

export const Message = model("messages",messageSchema);
