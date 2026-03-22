import {Schema, model} from 'mongoose';

const conversationSchema = new Schema( 
{
  members:[ 
  { 
	type:Schema.Types.ObjectId,
	ref:"chatusers",
	required:true
  },
  ]
},{timestamps:true});

export const conversation = model("conversations", conversationSchema);
