import {BaseLog} from "./base-log";
import {MainFactory} from "../factory/main-factory";

export function FileLog() {
    return BaseLog(MainFactory.getFileLogger());
}