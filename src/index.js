"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** dotenv */
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var spryjs_1 = __importDefault(require("@codiks/spryjs"));
var constants_1 = require("./constants");
var config_1 = __importDefault(require("./entities/book/config"));
/**Initialize SpryJs */
spryjs_1.default.init(constants_1.PORT).then(function (app) {
    /** Enable MongoDB. Need to pass connection string as a parameter*/
    spryjs_1.default.useMongo("" + constants_1.MONGO_CS);
    /** Enable morgan middleware */
    spryjs_1.default.useMorgan();
    /** Enable authentication. This will create the /api/user endpoint with the default user schema
     * (username, password). POST action will act as the register endpoint. The body must contain a JSON object
     * with username and password variables. Once registered,
     */
    spryjs_1.default.useAuthentication(constants_1.AUTH_CONFIG);
    /** Register Book entity. This will create the CRUD endpoints for /bm
     * using Book entity for persistance.
     * Notice that some enpoints are protected for only authorized users
     */
    spryjs_1.default.registerEntity(config_1.default).then(function () {
        // All set! Full CRUD with custom routes has been created and registered.
        spryjs_1.default.mapUserProperty('code', 'book', 'registeredBy');
    });
});
