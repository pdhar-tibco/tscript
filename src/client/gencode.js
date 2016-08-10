"use strict";
const fs = require("fs");
const path = require("path");
const server_bridge_1 = require("server-bridge");
const clientSideCode = server_bridge_1.getGeneratedCode({
    files: [path.resolve(__dirname, "../server/noteroutes.ts")],
    classMapping: { "NoteRoutes": "NoteApi" },
    libraryName: "server-bridge-superagent-client"
});
// write it to a file in the client application
fs.writeFile(path.join(__dirname, "server.ts"), clientSideCode);
//# sourceMappingURL=gencode.js.map