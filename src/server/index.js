"use strict";
//index.ts
const express = require("express");
const bodyParser = require("body-parser");
const server_bridge_express_1 = require("server-bridge-express");
const noteroutes_1 = require("./noteroutes");
const main_factory_1 = require("../factory/main-factory");
const SERVER_PORT = 8082;
const app = express();
const router = express.Router();
const logger = main_factory_1.MainFactory.getLogger();
app.use(bodyParser.json());
const allowAnyDomain = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};
const logRequests = (req, res, next) => {
    logger.logRequest(req);
    next();
};
app.use(allowAnyDomain);
app.use(logRequests);
server_bridge_express_1.initializeRoutes(router, [noteroutes_1.NoteRoutes]);
app.use(bodyParser.json());
app.use("/", router);
const server = app.listen(SERVER_PORT, () => {
    console.log(`Running on port ${server.address().port}`);
});
//# sourceMappingURL=index.js.map