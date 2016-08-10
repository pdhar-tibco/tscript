import {BaseLogger} from "../loggers/base-logger";
import {MainFactory} from "../factory/main-factory";

export function BaseLog(logger: BaseLogger) {

    return (target:any, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const returnValue = originalMethod.apply(this, args);

            logger.log(`Called '${methodName}'\n` +
                `Arguments: ${JSON.stringify(args)}\n` +
                `Return value: ${returnValue}`);
        };

        return descriptor;
    };
}