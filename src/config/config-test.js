"use strict";
const config_1 = require("./config");
const path = require("path");
const currentDir = path.resolve(__dirname);
// deep clone
const testConfig = JSON.parse(JSON.stringify(config_1.default));
// test specific changes to configuration
testConfig.STORAGE.DIR = path.join(currentDir, "../storage/data-tests");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = testConfig;
//# sourceMappingURL=config-test.js.map