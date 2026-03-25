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

type decodedType={
email:string,
userId:string
}


export default function SocketServer(wss:WebSocketServer){
wss.on("connection",(socket:CustomerSocket,req:IncomingMessage)=>{

try{
const url = new URL(req.url || "","http://localhost");
const token = url.searchParams.get("token");

if(!token ){
console.error("Token is missing");
socket.close();
return;
}
if(!token || ! process.env.JWT_SECRET){
console.error("JWT_SECRET IS MISSING");
socket.close();
return;
}


const decoded:decodedType = jwt.verify(token ,process.env.JWT_SECRET) as decodedType;

socket.user ={email:decoded.email,userId:decoded.userId};

Chathandler(socket);
console.log(decoded);

}catch(err){
console.log(err);
socket.close();
}


});

}
