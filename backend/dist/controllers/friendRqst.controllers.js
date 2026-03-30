"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allFriends = exports.addFriends = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const friendRqst_services_1 = require("../services/friendRqst.services");
exports.addFriends = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { mobile } = req.body;
    if (!mobile) {
        return res.status(401).json({ message: 'Invalid credientials' });
    }
    const userId = req.user.userId;
    const mobileNo = Number(mobile);
    const data = {
        userId,
        mobileNo
    };
    await (0, friendRqst_services_1.createFriends)(data);
    res.status(200).json({ message: "User added successfully" });
});
exports.allFriends = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const userId = req.user.userId;
    if (!userId) {
        return res.status(404).json({ message: "User not found" });
    }
    const user = await (0, friendRqst_services_1.listFriends)(userId);
    res.status(200).json({ message: "All friends", user });
});
