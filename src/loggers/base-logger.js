"use strict";
class BaseLogger {
    logRequest(msg) {
        this.log(new Date().toLocaleTimeString + ":" + msg);
    }
}
exports.BaseLogger = BaseLogger;
//# sourceMappingURL=base-logger.js.map