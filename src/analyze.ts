const v8 = require("v8");

export function analyze(name: string, size: number, callback: (size: number) => IterableIterator<number> | number[]) {
    let start = process.hrtime();
    let heapstart = v8.getHeapStatistics()["total_heap_size"];
    for (let i of callback(size)) {
        // maxHeap = Math.max(process.memoryUsage().heapUsed,maxHeap )
    }


    let elapsed = process.hrtime(start);
    let totalTime = (elapsed[1]) / 1000000;
    let heapend = v8.getHeapStatistics()["total_heap_size"];
    console.log(`Analyzing ${name} with size of ${size}`);
    console.log(`Total time : ${totalTime} ms`);
    console.log(`Total Heap Size:${heapend - heapstart}`);
}