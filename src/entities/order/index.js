"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orderConfig = {
    name: 'Order',
    path: 'order',
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
    }
};
exports.default = orderConfig;
