import {BaseLog} from "./base-log";
import {MainFactory} from "../factory/main-factory";

export function Log() {
    return BaseLog(MainFactory.getLogger());
}
