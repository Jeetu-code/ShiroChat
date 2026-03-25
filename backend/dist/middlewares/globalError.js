"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalError = (err, req, res, next) => {
    console.log(err.message, "Error from global Error");
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({ message: err.message || "Internal Server Error" });
};
exports.default = globalError;
