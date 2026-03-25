"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: Number, required: true, unique: true },
    friends: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'chatusers',
        }]
}, { timestamps: true });
exports.User = (0, mongoose_1.model)('chatusers', userSchema);
