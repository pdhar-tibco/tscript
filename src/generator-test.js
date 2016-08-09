"use strict";
const num_generator_1 = require("./num-generator");
const analyze_1 = require("./analyze");
let size = 100000000;
// analyze("array",size,getNumberArray);
analyze_1.analyze("generator", size, num_generator_1.numberGenerator);
// for(let num of getNumbers()){
//     console.log(num);
// }
//# sourceMappingURL=generator-test.js.map