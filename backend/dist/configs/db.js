"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = process.env.MONGODB_URI;
const connectDB = async () => {
    try {
        if (!MONGODB_URI) {
            throw new Error("Uri not found");
        }
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('Database connected');
    }
    catch (err) {
        console.log(err, "Error");
        process.exit(1);
    }
};
exports.default = connectDB;
