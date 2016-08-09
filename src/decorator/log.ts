import {BaseLog} from "./base-log";
import {MainFactory} from "../factory/main-factory.ts";

export function Log() {
    return BaseLog(MainFactory.getLogger());
}
