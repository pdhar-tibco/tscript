"use strict";
class AbstractTestClass {
}
exports.AbstractTestClass = AbstractTestClass;
class TestClass extends AbstractTestClass {
    constructor(start) {
        super();
        this.myNumberProperty = 253;
        this.myunionProperty = false;
        this.myunionProperty = start;
    }
    myMethod(myParameter) {
        return `Test: ${myParameter}`;
    }
    toString() {
        return "";
    }
    getValue() {
        return {};
    }
}
exports.TestClass = TestClass;
//# sourceMappingURL=testclass.js.map