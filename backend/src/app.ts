import express from 'express';
import http from "http";
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './configs/db';
import cors from "cors";
import WebSocket from "ws";
import SocketServer from "./ws/socketServer";
const app = express();
app.use(express.json());
app.use(cors({
	origin:"http://localhost:5173",
	methods:["GET","POST","PUT","UPDATE","DELETE"],
	allowedHeaders:["Content-Type","Authorization"],
	credentials:true
}));
connectDB();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

SocketServer(wss);

import userRoutes from './routes/auth.routes';
import friendRqstRoutes from './routes/friendRqst.routes';
import conversationRoutes from './routes/conversations.routes';
import globalError from './middlewares/globalError';
app.use('/auth', userRoutes);
app.use('/friends', friendRqstRoutes);
app.use('/conversations', conversationRoutes);
app.use(globalError);
server.listen(port , async() => { 
console.log(`Server running on port ${port}`);
});

