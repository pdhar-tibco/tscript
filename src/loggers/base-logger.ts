
export abstract class BaseLogger {
    abstract log(msg:string):void;

    logRequest(msg:string) {
        this.log(new Date().toLocaleTimeString+":"+ msg);
    }

}