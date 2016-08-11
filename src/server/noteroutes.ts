import {Use, Get, Post, Routes} from "server-bridge";
import {Note} from "../common/note";

@Use("/notes")
export class NoteRoutes extends Routes {
    static memoryNoteStorage: Note[] = [{ text: "AAA", creationDate: new Date() }];

    // uses the method name for the path if none specified: /notes/getAll
    @Get()
    getAll() {
        console.log("Client requested to get all the notes.");
        // if you need to do any async work here then return a Promise instead
        return NoteRoutes.memoryNoteStorage;
    }

    @Get("/")
    getAllWithText(params: { text: string; }) { // query parameters need to be stored in an object
        const {text} = params;
        console.log(`Client requested to get all the note containing text: ${text}.`);
        return NoteRoutes.memoryNoteStorage.filter(n => n.text.indexOf(text) >= 0);
    }

    @Post("/")
    add(note: Note) {
        console.log("Client requested to add a note.");
        NoteRoutes.memoryNoteStorage.push(note);
    }
}