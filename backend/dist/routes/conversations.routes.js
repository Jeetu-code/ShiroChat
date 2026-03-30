"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = (0, express_1.default)();
const conversations_controllers_1 = require("../controllers/conversations.controllers");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
route.post('/', auth_middlewares_1.auth, conversations_controllers_1.createConversation);
route.get('/', auth_middlewares_1.auth, conversations_controllers_1.allConversations);
exports.default = route;
