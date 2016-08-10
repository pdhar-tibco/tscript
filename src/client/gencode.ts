import * as fs from "fs";
import * as path from "path";
import {getGeneratedCode} from "server-bridge";

const clientSideCode = getGeneratedCode({
    files: [path.resolve(__dirname, "../server/noteroutes.ts")],
    classMapping: { "NoteRoutes": "NoteApi" },
    libraryName: "server-bridge-superagent-client"
});

// write it to a file in the client application
fs.writeFile(path.join(__dirname, "server.ts"), clientSideCode);