"use strict";
const config_1 = require("../config/config");
const loggers_1 = require("../loggers/loggers");
class MainFactory {
    static getLogger() {
        return MainFactory.getConsoleLogger();
    }
    static getFileLogger() {
        return MainFactory.fileLogger || (MainFactory.fileLogger = new loggers_1.FileLogger(config_1.default.LOG.FILE));
    }
    static getConsoleLogger() {
        return MainFactory.consoleLogger || (MainFactory.consoleLogger = new loggers_1.ConsoleLogger());
    }
}
exports.MainFactory = MainFactory;
//# sourceMappingURL=main-factory.js.map