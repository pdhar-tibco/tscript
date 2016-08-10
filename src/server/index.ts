//index.ts
import * as express from "express";
import * as bodyParser from "body-parser";
import {initializeRoutes} from "server-bridge-express";
import {NoteRoutes} from "./noteroutes";
import {MainFactory} from "../factory/main-factory";

const SERVER_PORT = 8082;
const app = express();
const router = express.Router();
const logger = MainFactory.getLogger();

app.use(bodyParser.json());

const allowAnyDomain: express.RequestHandler = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};

const logRequests: express.RequestHandler = (req, res, next) => {
    logger.logRequest(req);
    next();
};

app.use(allowAnyDomain);
app.use(logRequests);

initializeRoutes(router, [NoteRoutes]);
app.use(bodyParser.json());
app.use("/", router);

const server = app.listen(SERVER_PORT, () => {
    console.log(`Running on port ${server.address().port}`);
});
