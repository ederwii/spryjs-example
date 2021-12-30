"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_CONFIG = exports.MONGO_CS = exports.SALT = exports.TOKEN_SECRET = exports.PORT = void 0;
var user_model_1 = __importDefault(require("./entities/user.model"));
exports.PORT = process.env.PORT;
exports.TOKEN_SECRET = process.env.TOKEN_SECRET;
exports.SALT = process.env.SALT;
exports.MONGO_CS = process.env.MONGO_CS;
exports.AUTH_CONFIG = {
    tokenSecret: process.env.TOKEN_SECRET || '',
    salt: process.env.SALT || '',
    model: user_model_1.default,
    expiresIn: 86400,
    route: '/user'
};
