import {BaseLog} from "./base-log";
import {MainFactory} from "../factory/main-factory";

export function ConsoleLog() {
    return BaseLog(MainFactory.getConsoleLogger());
}