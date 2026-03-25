"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversations = exports.userConversation = void 0;
const conversations_models_1 = require("../models/conversations.models");
const message_models_1 = require("../models/message.models");
const userConversation = async (data) => {
    const existing = await conversations_models_1.conversation.findOne({ members: { $all: [data.userId, data.recieverId] } });
    if (!existing) {
        const membersId = await conversations_models_1.conversation.create({ members: [data.userId, data.recieverId] });
        console.log(membersId);
        const message = await message_models_1.Message.create({ conversationId: membersId._id, sender: data.userId, text: data.message });
        console.log(message);
        return message;
    }
    const message = await message_models_1.Message.create({ conversationId: existing._id, sender: data.userId, text: data.message });
    console.log(message);
    return message;
};
exports.userConversation = userConversation;
const getConversations = async (userId) => {
    const user = await conversations_models_1.conversation.find({ members: userId }).populate("members", "name email");
    if (!user) {
        throw new Error("Unauthorized");
    }
    const chat = await message_models_1.Message.find({ conversationId: user[0]._id });
    return chat;
};
exports.getConversations = getConversations;
