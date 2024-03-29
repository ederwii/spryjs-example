"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var spryjs_1 = require("@codiks/spryjs");
var _1 = __importDefault(require("./"));
var mongoose_1 = require("mongoose");
var spryjs_2 = __importDefault(require("@codiks/spryjs"));
var schema = new mongoose_1.Schema(_1.default);
var model = spryjs_2.default.createModel('Book', schema);
var BookService = /** @class */ (function () {
    function BookService(service) {
        if (service === void 0) { service = new spryjs_1.BaseService(model, 'Book'); }
        this.service = service;
    }
    BookService.prototype.Read = function (body, params, query) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = params.id;
                        console.log(id);
                        return [4 /*yield*/, model.findById(id).then(function (b) {
                                b.reads++;
                                b.save();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    BookService.prototype.Get = function () {
        return this.service.Get();
    };
    BookService.prototype.GetById = function (id) {
        return this.service.GetById(id);
    };
    BookService.prototype.Create = function (payload) {
        payload.name = payload.name + " - visit mybook.com";
        payload.reads = 0;
        return this.service.Create(payload);
    };
    BookService.prototype.Delete = function (id) {
        return this.service.Delete(id);
    };
    BookService.prototype.Patch = function (operations, id) {
        return this.service.Patch(operations, id);
    };
    BookService.prototype.GetByKeyword = function (keyword) {
        return this.service.GetByKeyword(keyword);
    };
    BookService.prototype.GetByKeywordMatch = function (keyword) {
        return this.service.GetByKeywordMatch(keyword);
    };
    BookService.prototype.GetByQuery = function (params, fields, options) {
        return this.service.GetByQuery(params, fields, options);
    };
    BookService.prototype.GetCount = function () {
        return this.service.GetCount();
    };
    BookService.prototype.Update = function (id, payload) {
        return this.service.Update(id, payload);
    };
    return BookService;
}());
exports.default = BookService;
