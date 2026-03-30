"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversation = void 0;
const mongoose_1 = require("mongoose");
const conversationSchema = new mongoose_1.Schema({
    members: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "chatusers",
            required: true
        },
    ]
}, { timestamps: true });
exports.conversation = (0, mongoose_1.model)("conversations", conversationSchema);
