import CONFIG from "../config/config"
import {BaseLogger,ConsoleLogger,FileLogger} from "../loggers/loggers";

export class MainFactory {

    private static consoleLogger:ConsoleLogger;
    private static fileLogger:FileLogger;

    public static getLogger():BaseLogger {
        return MainFactory.getConsoleLogger();
    }

    public static getFileLogger():FileLogger {
        return MainFactory.fileLogger || (MainFactory.fileLogger = new FileLogger(CONFIG.LOG.FILE));
    }

    public static getConsoleLogger():ConsoleLogger {
        return MainFactory.consoleLogger || (MainFactory.consoleLogger = new ConsoleLogger());
    }
}