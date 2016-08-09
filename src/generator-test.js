"use strict";
const num_generator_1 = require("./num-generator");
const analyze_1 = require("./analyze");
let size = 10000000;
analyze_1.analyze("array", size, num_generator_1.getNumberArray);
analyze_1.analyze("generator", size, num_generator_1.numberGenerator);
for (let num of num_generator_1.getNumbers()) {
    console.log(num);
}
//# sourceMappingURL=generator-test.js.map