"use strict";
const base_log_1 = require("./base-log");
const main_factory_1 = require("../factory/main-factory");
function ConsoleLog() {
    return base_log_1.BaseLog(main_factory_1.MainFactory.getFileLogger());
}
exports.ConsoleLog = ConsoleLog;
//# sourceMappingURL=file-log.js.map