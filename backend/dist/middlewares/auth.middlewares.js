"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const AppError_1 = require("../utils/AppError");
const jwt_1 = require("../utils/jwt");
const auth = async (req, res, next) => {
    try {
        const tokenHead = req.headers?.authorization;
        console.log(tokenHead, "hererere");
        if (!tokenHead || !tokenHead.startsWith('Bearer')) {
            throw new AppError_1.AppError("invalid token", 401);
        }
        const token = tokenHead.split(" ")[1];
        const decoded = (0, jwt_1.verifyToken)(token);
        req.user = {
            userId: decoded.userId,
            email: decoded.email
        };
        next();
    }
    catch (err) {
        res.status(401).json({ message: "invlaid or expired token" });
    }
};
exports.auth = auth;
