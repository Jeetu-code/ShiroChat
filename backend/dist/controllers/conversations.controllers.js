"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allConversations = exports.createConversation = void 0;
const conversations_services_1 = require("../services/conversations.services");
const catchAsync_1 = require("../utils/catchAsync");
exports.createConversation = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { reciever } = req.body;
    if (!reciever) {
        return res.status(401).json({ message: "Unauthorized request" });
    }
    const userId = req.user.userId;
    const recieverId = reciever;
    const data = {
        userId,
        recieverId
    };
    res.status(200).json({ message: "Conversation created successfully" });
});
exports.allConversations = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const userId = req.user.userId;
    if (!userId) {
        return res.status(404).json({ message: "Conversation not found" });
    }
    const conversations = await (0, conversations_services_1.getConversations)(userId);
    res.status(200).json({ message: "All conversations", conversations });
});
