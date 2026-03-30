import {Schema , model} from 'mongoose';

const userSchema = new Schema(
	{
	name:{type:String, required:true },
	email:{type:String, required:true, unique:true},
	password:{type:String, required:true},
	mobile:{type:Number, required:true, unique:true},
	friends:[{
		type:Schema.Types.ObjectId,
		ref:'chatusers',
	}]
	},{timestamps:true}
);

export const User = model('chatusers' , userSchema);
