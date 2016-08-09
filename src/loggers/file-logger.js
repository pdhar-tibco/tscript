"use strict";
const base_logger_1 = require("./base-logger");
const fs = require("fs");
const os = require("os");
class FileLogger extends base_logger_1.BaseLogger {
    constructor(fileName) {
        super();
        this.fileName = fileName;
    }
    log(msg, finishedCallback) {
        fs.appendFile(this.fileName, new Date().toLocaleDateString() + ":" + msg + os.EOL, finishedCallback);
    }
}
exports.FileLogger = FileLogger;
//# sourceMappingURL=file-logger.js.map