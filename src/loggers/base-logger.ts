import * as express from "express";

export abstract class BaseLogger {
    abstract log(msg: string): void;

    logMessage(msg: string) {
        this.log(new Date().toLocaleTimeString + ":" + msg);
    }

    logRequest(req: express.Request) {
        this.log(`Request from ${req.ip} to ${req.originalUrl}`);
    }

}