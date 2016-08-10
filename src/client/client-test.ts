import {NoteApi} from "./server";

const notes = new NoteApi({ urlPrefix: "http://localhost:8082" });

notes.getAll().then((notes) => {
    console.log(notes);
});
