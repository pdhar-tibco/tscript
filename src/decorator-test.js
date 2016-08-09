"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const log_1 = require("./decorator/log");
class DecoratorTest {
    constructor() {
    }
    doSomething(str) {
        console.log(`TEST` + str);
    }
}
__decorate([
    log_1.Log
], DecoratorTest.prototype, "doSomething", null);
exports.DecoratorTest = DecoratorTest;
new DecoratorTest().doSomething("Hello");
//# sourceMappingURL=decorator-test.js.map