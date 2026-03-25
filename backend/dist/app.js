"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = __importDefault(require("./configs/db"));
const cors_1 = __importDefault(require("cors"));
const ws_1 = __importDefault(require("ws"));
const socketServer_1 = __importDefault(require("./ws/socketServer"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.F_PORT || "*",
    methods: ["GET", "POST", "PUT", "UPDATE", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
const port = process.env.PORT || 3000;
const server = http_1.default.createServer(app);
const wss = new ws_1.default.Server({ server });
(0, socketServer_1.default)(wss);
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const friendRqst_routes_1 = __importDefault(require("./routes/friendRqst.routes"));
const conversations_routes_1 = __importDefault(require("./routes/conversations.routes"));
const globalError_1 = __importDefault(require("./middlewares/globalError"));
app.use('/auth', auth_routes_1.default);
app.use('/friends', friendRqst_routes_1.default);
app.use('/conversations', conversations_routes_1.default);
app.use(globalError_1.default);
const startServer = async () => {
    try {
        await (0, db_1.default)(); // ensure DB connects first
        server.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
    catch (err) {
        console.error("Startup error:", err);
        process.exit(1); // crash properly with logs
    }
};
startServer();
