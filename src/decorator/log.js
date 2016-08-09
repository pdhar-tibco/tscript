"use strict";
const base_log_1 = require("./base-log");
const main_factory_ts_1 = require("../factory/main-factory.ts");
function Log() {
    return base_log_1.BaseLog(main_factory_ts_1.MainFactory.getLogger());
}
exports.Log = Log;
//# sourceMappingURL=log.js.map