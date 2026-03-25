import {WebSocketServer,WebSocket} from "ws";
import {IncomingMessage} from "http";
import	jwt from "jsonwebtoken"; 
import Chathandler from "./handleChat";
interface CustomerSocket extends WebSocket {
user?:{
email:string;
userId:string;
},
}




export default function SocketServer(wss:WebSocketServer){
wss.on("connection",(socket:CustomerSocket,req:IncomingMessage)=>{

const token = new URL(req.url || "","http://localhost:8080").searchParams.get("token");

type decodedType={
email:string,
userId:string
}

try{
const decoded:decodedType = jwt.verify(token as string,process.env.JWT_SECRET!) as decodedType;

socket.user ={email:decoded.email,userId:decoded.userId};

Chathandler(socket);
console.log(decoded);

}catch(err){
console.log(err);
}


});

}
