"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = __importDefault(require("../book/service"));
var bookService = new service_1.default();
var bookConfig = {
    service: bookService,
    name: 'Book',
    path: 'bm',
    keyword: 'code',
    config: {
        post: {
            isPrivate: true
        },
        delete: {
            isPrivate: true
        },
        put: {
            isPrivate: true
        },
        patch: {
            isDisabled: true
        }
    },
    routes: [{
            verb: "post",
            cb: bookService.Read,
            ispv: true,
            route: 'read/:id'
        }]
};
exports.default = bookConfig;
