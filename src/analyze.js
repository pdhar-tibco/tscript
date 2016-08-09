"use strict";
const v8 = require("v8");
function analyze(name, size, callback) {
    let start = process.hrtime();
    let heapstart = v8.getHeapStatistics()["total_heap_size"];
    for (let i of callback(size)) {
    }
    let elapsed = process.hrtime(start);
    let totalTime = (elapsed[1]) / 1000000;
    let heapend = v8.getHeapStatistics()["total_heap_size"];
    console.log(`Analyzing ${name} with size of ${size}`);
    console.log(`Total time : ${totalTime} ms`);
    console.log(`Total Heap Size:${heapend - heapstart}`);
}
exports.analyze = analyze;
//# sourceMappingURL=analyze.js.map