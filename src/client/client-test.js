"use strict";
const server_1 = require("./server");
const notes = new server_1.NoteApi({ urlPrefix: "http://localhost:8082" });
notes.getAll().then((notes) => {
    console.log(notes);
});
//# sourceMappingURL=client-test.js.map