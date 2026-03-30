"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listFriends = exports.createFriends = void 0;
const AppError_1 = require("../utils/AppError");
const auth_models_1 = require("../models/auth.models");
const createFriends = async (data) => {
    const friend = await auth_models_1.User.findOne({ mobile: data.mobileNo });
    if (!friend) {
        throw new AppError_1.AppError("User not found", 404);
    }
    if (friend._id.toString() === data.userId) {
        throw new AppError_1.AppError("Cannot add yourself", 401);
    }
    await auth_models_1.User.findByIdAndUpdate(data.userId, { $addToSet: { friends: friend._id } }, { new: true });
    await auth_models_1.User.findByIdAndUpdate(friend._id, { $addToSet: { friends: data.userId } }, { new: true });
};
exports.createFriends = createFriends;
const listFriends = async (userId) => {
    const friends = await auth_models_1.User.find({ _id: userId }).populate("friends", "name email").select("friends");
    return friends;
};
exports.listFriends = listFriends;
