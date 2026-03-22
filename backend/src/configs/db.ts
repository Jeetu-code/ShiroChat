import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async() => { 
try{ 
if(!MONGODB_URI){ 
throw new Error("Uri not found");
}
await mongoose.connect(MONGODB_URI);
console.log('Database connected');
}catch(err){
console.log(err, "Error");
process.exit(1);
}
};

export default connectDB;
