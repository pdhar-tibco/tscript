"use strict";
function BaseLog(logger) {
    return (target, methodName, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const returnValue = originalMethod.apply(this, args);
            logger.log(`Called '${methodName}'\n` +
                `Arguments: ${JSON.stringify(args)}\n` +
                `Return value: ${returnValue}`);
        };
        return descriptor;
    };
}
exports.BaseLog = BaseLog;
//# sourceMappingURL=base-log.js.map