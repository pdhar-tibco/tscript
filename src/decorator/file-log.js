"use strict";
const base_log_1 = require("./base-log");
const main_factory_1 = require("../factory/main-factory");
function FileLog() {
    return base_log_1.BaseLog(main_factory_1.MainFactory.getFileLogger());
}
exports.FileLog = FileLog;
//# sourceMappingURL=file-log.js.map