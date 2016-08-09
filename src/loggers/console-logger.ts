import {BaseLogger} from "./base-logger";
export class ConsoleLogger extends BaseLogger {
     log(str:string) {
         console.log(str);
     }
     
}