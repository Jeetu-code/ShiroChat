"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SocketServer;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const handleChat_1 = __importDefault(require("./handleChat"));
function SocketServer(wss) {
    wss.on("connection", (socket, req) => {
        try {
            const url = new URL(req.url || "", "http://localhost");
            const token = url.searchParams.get("token");
            if (!token) {
                console.error("Token is missing");
                socket.close();
                return;
            }
            if (!token || !process.env.JWT_SECRET) {
                console.error("JWT_SECRET IS MISSING");
                socket.close();
                return;
            }
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            socket.user = { email: decoded.email, userId: decoded.userId };
            (0, handleChat_1.default)(socket);
            console.log(decoded);
        }
        catch (err) {
            console.log(err);
            socket.close();
        }
    });
}
