"use strict";
const config_default_1 = require("./config-default");
const config_test_1 = require("./config-test");
let config;
switch (process.env.NODE_ENV) {
    case "test":
        config = config_test_1.default;
        break;
    default:
        config = config_default_1.default;
        break;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config;
//# sourceMappingURL=config.js.map