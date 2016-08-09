"use strict";
const path = require("path");
const currentDir = path.resolve(__dirname);
const CONFIG = {
    SERVER: {
        DIR: currentDir,
        PORT: process.env.PORT || 8082
    },
    STORAGE: {
        DIR: path.join(currentDir, "../storage/data"),
        FOOD_ITEMS_FILE: "food-items",
        ORDERS_FILE: "orders"
    },
    LOG: {
        FILE: path.join(currentDir, "../log/log.txt")
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CONFIG;
//# sourceMappingURL=config-default.js.map