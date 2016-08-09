"use strict";
const base_log_1 = require("./base-log");
const main_factory_1 = require("../factory/main-factory");
function ConsoleLog() {
    return base_log_1.BaseLog(main_factory_1.MainFactory.getConsoleLogger());
}
exports.ConsoleLog = ConsoleLog;
//# sourceMappingURL=console-log.js.map