import {WebSocketServer,WebSocket} from "ws";
import mongoose from "mongoose";
import {userConversation} from "../services/conversations.services";
type userData={
email:string,
userId:string,
}

interface CustomSocket extends WebSocket{
user?:userData;
}

type ChatMessage={
type: "chat";
id:string;
email:string;
message:string;
}

const users = new Map<string,Set<CustomSocket>>();
export default function Chathandler(socket:CustomSocket){
if(!socket.user) return;
const senderEmail = socket.user.email ;
if(!users.has(senderEmail)){
users.set(senderEmail,new Set());
}

users.get(senderEmail)!.add(socket);

console.log("Acitve users : ",Array.from(users.keys()));
console.log("connected : ",socket.user?.email);

socket.on("message", async (data) => {
  let parsed: ChatMessage;

  try {
    parsed = JSON.parse(data.toString());
  } catch {
    socket.send(JSON.stringify({ error: "Invalid JSON" }));
    return;
  }

  if(parsed.type === "chat"){
    if(!socket.user) return;

    const receiversEmail = users.get(parsed.email);

    const senderId = socket.user.userId;
    const receiversId = parsed.id;

    await userConversation({
      userId: new mongoose.Types.ObjectId(senderId),
      recieverId: new mongoose.Types.ObjectId(receiversId),
      message: parsed.message
    });

    const payload = {
      sender: senderId,
      text: parsed.message,
      createdAt: new Date().toISOString()
    };

    socket.send(JSON.stringify(payload));

    if(receiversEmail && receiversEmail.size > 0){
      receiversEmail.forEach(sock=>{
        if(sock !== socket){
          sock.send(JSON.stringify(payload));
        }
      });
    } else {
      socket.send(JSON.stringify({
        type: "status",
        data: { to: parsed.email, status: "offline" }
      }));
    }
  }
});socket.on("close",(data)=>{
const set = users.get(senderEmail);
if(set){
set.delete(socket);
if(set.size === 0){
users.delete(senderEmail);
}
}
console.log("Disconnected :",socket.user?.email);
});
}
