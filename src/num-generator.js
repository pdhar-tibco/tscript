"use strict";
function* getNumbers() {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
}
exports.getNumbers = getNumbers;
function getNumberArray(size) {
    let a = [];
    for (let i = 0; i < size; i++) {
        a.push(i);
    }
    return a;
}
exports.getNumberArray = getNumberArray;
function* numberGenerator(size) {
    for (let i = 0; i < size; i++) {
        yield i;
    }
}
exports.numberGenerator = numberGenerator;
//# sourceMappingURL=num-generator.js.map