"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
const auth_controllers_1 = require("../controllers/auth.controllers");
route.post('/signup', auth_controllers_1.signup);
route.post('/signin', auth_controllers_1.signin);
exports.default = route;
