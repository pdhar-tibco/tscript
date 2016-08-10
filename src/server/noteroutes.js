"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const server_bridge_1 = require("server-bridge");
class NoteRoutes extends server_bridge_1.Routes {
    // uses the method name for the path if none specified: /notes/getAll
    getAll() {
        console.log("Client requested to get all the notes.");
        // if you need to do any async work here then return a Promise instead
        return NoteRoutes.memoryNoteStorage;
    }
    getAllWithText(params) {
        const { text } = params;
        console.log(`Client requested to get all the note containing text: ${text}.`);
        return NoteRoutes.memoryNoteStorage.filter(n => n.text.indexOf(text) >= 0);
    }
    add(note) {
        console.log("Client requested to add a note.");
        NoteRoutes.memoryNoteStorage.push(note);
    }
}
NoteRoutes.memoryNoteStorage = [{ text: "AAA", creationDate: new Date() }];
__decorate([
    server_bridge_1.Get()
], NoteRoutes.prototype, "getAll", null);
__decorate([
    server_bridge_1.Get("/")
], NoteRoutes.prototype, "getAllWithText", null);
__decorate([
    server_bridge_1.Post("/")
], NoteRoutes.prototype, "add", null);
exports.NoteRoutes = NoteRoutes;
//# sourceMappingURL=noteroutes.js.map