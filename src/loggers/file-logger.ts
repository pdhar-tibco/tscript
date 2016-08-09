import {BaseLogger} from "./base-logger";
import * as fs from "fs";
import * as os from "os";
export class FileLogger extends BaseLogger {

    constructor(private fileName:string) {
        super();
    }

    log(msg:string,finishedCallback?: (err:NodeJS.ErrnoException)=> void) {
        fs.appendFile(this.fileName,new Date().toLocaleDateString()+":"+msg+os.EOL,finishedCallback);
    }

}

