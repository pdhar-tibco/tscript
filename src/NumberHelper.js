"use strict";
class NumberHelper {
    static sumParams(...numbers) {
        return numbers.reduce((a, b) => { return a + b; });
    }
}
exports.NumberHelper = NumberHelper;
NumberHelper.sumParams(1, 2, 4, 5, 6);
var nums = [1, 3, 6, 4, 5];
var newNums = [8, ...nums];
NumberHelper.sumParams(...newNums);
let [x, y, ...remaining] = [1, 2, 3, 4];
[x, y] = [y, x];
//# sourceMappingURL=NumberHelper.js.map