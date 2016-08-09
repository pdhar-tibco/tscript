"use strict";
const base_logger_1 = require("./base-logger");
class ConsoleLogger extends base_logger_1.BaseLogger {
    log(str) {
        console.log(str);
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=console-logger.js.map