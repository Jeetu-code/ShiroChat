"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    conversationId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "conversations",
        required: true,
    },
    sender: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "chatuser",
        required: true,
    },
    text: {
        type: String,
        required: true
    },
}, { timestamps: true });
exports.Message = (0, mongoose_1.model)("messages", messageSchema);
