"use strict";
class MyOtherClass {
}
exports.MyOtherClass = MyOtherClass;
class NumberHelper {
    static sumParams(...numbers) {
        return numbers.reduce((a, b) => { return a + b; });
    }
    static formatAsCurrency(val) {
        return val == null ? "" : "$" + val.toFixed(2);
    }
    static parseString(val) {
        return NumberHelper.isNumber(val) ? parseFloat(val) : null;
    }
    static toString(val) {
        if (typeof val === "number") {
            return val.toString();
        }
        else {
            return NumberHelper.isNumber(val) ? val : null;
        }
    }
    static isNumber(val) {
        return !isNaN(parseInt(val, 10));
    }
}
exports.NumberHelper = NumberHelper;
//# sourceMappingURL=number-helper.js.map