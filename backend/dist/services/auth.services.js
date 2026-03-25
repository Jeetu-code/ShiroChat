"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignin = exports.userSignup = void 0;
const auth_models_1 = require("../models/auth.models");
const AppError_1 = require("../utils/AppError");
const bcrypt_1 = require("../utils/bcrypt");
const jwt_1 = require("../utils/jwt");
const userSignup = async (data) => {
    const existingUser = await auth_models_1.User.findOne({ email: data.email });
    if (existingUser) {
        throw new AppError_1.AppError('User exists', 409);
    }
    const hashedPasswd = await (0, bcrypt_1.hashedPassword)(data.password);
    return await auth_models_1.User.create({ name: data.name, email: data.email, password: hashedPasswd, mobile: data.mobile });
};
exports.userSignup = userSignup;
const userSignin = async (data) => {
    const existingUser = await auth_models_1.User.findOne({ email: data.email });
    if (!existingUser) {
        throw new AppError_1.AppError('User does not Exists, Signup first', 409);
    }
    const comparePasswd = (0, bcrypt_1.comparePassword)(data.password, existingUser.password);
    if (!comparePasswd) {
        throw new AppError_1.AppError('wrong password', 409);
    }
    const token = (0, jwt_1.createToken)(existingUser.id, existingUser.email);
    return token;
};
exports.userSignin = userSignin;
