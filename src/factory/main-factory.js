"use strict";
const loggers_1 = require("../loggers/loggers");
class MainFactory {
    static getLogger() {
        return MainFactory.getConsoleLogger();
    }
    static getFileLogger() {
        return MainFactory.fileLogger || (MainFactory.fileLogger = new loggers_1.FileLogger());
    }
    static getConsoleLogger() {
        return MainFactory.consoleLogger || (MainFactory.consoleLogger = new loggers_1.ConsoleLogger());
    }
}
exports.MainFactory = MainFactory;
//# sourceMappingURL=main-factory.js.map