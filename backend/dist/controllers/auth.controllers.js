"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const auth_services_1 = require("../services/auth.services");
exports.signup = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = req.body;
    console.log(req.body);
    if (!data) {
        return res.status(401).json({ message: "Name, email, password all required" });
    }
    await (0, auth_services_1.userSignup)(data);
    res.status(201).json({ message: "user signup successfully" });
});
exports.signin = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = req.body;
    if (!data) {
        return res.status(401).json({ message: 'Name, email, password all required' });
    }
    const token = await (0, auth_services_1.userSignin)(data);
    res.status(200).json({ message: "user signin successfully", token });
});
