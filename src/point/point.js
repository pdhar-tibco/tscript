'use strict';
const fs = require("fs");
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p2 = p1.add(p2);
console.log(JSON.stringify(p2));
// function foo() {
//     console.log(this);
// }
// foo();
// let bar = { foo };
// bar.foo();
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add(point) {
        var p2d = super.add(point);
        return new Point3D(p2d.x, p2d.y, this.z + point.z);
    }
}
//////////////////////////////////////////////////////
class Something {
    constructor() {
        Something.instances++;
    }
}
Something.instances = 0;
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);
//////////////////////////////////////////////////////
class Foobase {}
var foo = new Foobase();
console.log(foo.x);
// foo.y
// foo.z 
class FooChild extends Foobase {
    constructor() {
        super();
        this.x; //OK
        // this.y
        this.z;
    }
}
//
//
class Foo {
    constructor(x) {
        this.x = x;
    }
}
class FooNew {
    constructor(x) {
        this.x = x;
        this.members = [];
        this.members.push(x);
    }
}
// var foosa = {};
// foosa.bar = 123;
// foosa.__proto__.bar = 456;
// console.log(foosa.bar);
// delete foosa.bar;
// console.log(foosa.bar);
// delete foosa.__proto__.bar;
// console.log(foosa.bar);
// function Foosa() { }
// console.log(Foosa.prototype);
// console.log(Foosa.prototype.constructor === Foosa);
class Base {
    constructor() {
        this.log = () => { console.log('Hello World'); };
    }
}
class Child extends Base {
    logWorld() { this.log(); };
}
var child = new Child();
child.logWorld();
class Person {
    constructor(age) {
        this.age = age;
        this.growOld = () => { this.age++; };
    }
}
var person = new Person(20);
setTimeout(person.growOld, 1000);
setTimeout(function() { console.log(person.age); }, 2000);
class Adder {
    constructor(a) {
        this.a = a;
        this.add = (b) => {
            return this.a + b;
        };
    }
}
class ExtendedAdder extends Adder {
    constructor(...args) {
        super(...args);
        this.superAdd = this.add;
        this.add = (b) => {
            return this.superAdd(b);
        };
    }
}

function iTakeItAll(first, second, ...allOthers) {
    console.log(allOthers);
}
iTakeItAll('foo', 'bar');
iTakeItAll('foo', 'bar', 'bas', 'qux'); {
    let xx = 123;
    if (true) {
        let xx = 456;
    }
    console.log(xx);
}
var index = 0;
var array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log(index);
var funcs = [];
for (var i = 0; i < 3; i++) {
    (function(x) {
        funcs.push(function() {
            console.log(x);
        });
    })(i);
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
} {
    const FOO = '123';
    if (true) {
        const FOO = 123;
    }
    const BAR = { x: 1, y: 2 };
    BAR.x = 5;
    console.log(BAR);
} {
    var rect = { x: 0, y: 10, width: 15, height: 20 };
    let { x, y, width, height } = rect;
    console.log(x, y, width, height);
    const obj = { some_prop: "some_prop" };
    const { "some_prop": someProp } = obj;
    console.log(someProp === "some_prop");
    var foox = { barx: { bas: 123 } };
    var { barx: { bas } } = foox;
    console.log(bas);
}

function loadJSON(filename, cb) {
    fs.readFile(filename, function(err, data) {
        if (err) {
            cb(err);
        } else {
            try {
                var parsed = JSON.parse(data);
            } catch (error) {
                cb(error);
            }
            cb(null, parsed);
        }
    });
}
loadJSON('bad.json', function(err, data) {
    if (err)
        console.log('bad.json error', err.message);
    else
        console.log(data);
});

const es6_promise_1 = require('es6-promise');
const promise = new es6_promise_1.Promise((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log("I get called:", res === 123);
});
promise.catch((err) => {});
const promise1 = new es6_promise_1.Promise((resolve, reject) => {
    reject(new Error("Something bad happened"));
});
promise1.then((res) => {});
promise1.catch((err) => {
    console.log('I get called:', err.message);
});
es6_promise_1.Promise.resolve(123).then((res) => {
    console.log(res);
    return 456;
}).then((res) => {
    console.log(res);
    return es6_promise_1.Promise.resolve(666);
}).then((res) => {
    console.log(res);
    return es6_promise_1.Promise.resolve(333);
});

function returnPromise() {
    return new es6_promise_1.Promise((resolve) => {
        setTimeout(() => resolve("Hello World!"), 1000);
    });
}
es6_promise_1.Promise.resolve(1234567).then((res) => {
    console.log(res);
    return returnPromise();
}).then((res) => {
    console.log(res);
});

function readFileAsync(filename) {
    return new es6_promise_1.Promise((resolve, reject) => {
        fs.readFile(filename, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

function loadJSONAsync(filename) {
    return readFileAsync(filename).then((res) => {
        return JSON.parse(res);
    });
}
loadJSONAsync('tsconfig.json').then((val) => {
    console.log(val);
}).then((res) => {
    console.log(res);
    return loadJSONAsync('msconfig.json');
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log("err:", err.message);
});

function loadItem(id) {
    return new es6_promise_1.Promise((resolve) => {
        console.log("Loading item:", id);
        setTimeout(() => {
            resolve({ id: id });
        }, 1000);
    });
}
let item1, item2, item3;
loadItem('1').then((res) => {
    item1 = res;
    return loadItem('2');
}).then((res) => {
    item2 = res;
    console.log('done');
});
es6_promise_1.Promise.all([loadItem('1'), loadItem('2'), loadItem('3')]).then((res) => {
    [item1, item2, item3] = res;
    console.log('done', res);
}); {
    let [x, , ...remaining] = [1, 2, 3, 4, 5, 6];
    console.log(x, remaining);
} {
    let input = [1, 2];
    let [a, b] = input;
    [a, b] = [b, a];
} {
    var someArray = [9, 2, 5];
    for (let item in someArray) {
        console.log(item);
    }
    for (let item of someArray) {
        console.log(item);
    }
}

function* infiniteSequence():number {
    var i = 0;
    while (true) {
        yield i++;
    }
}
var iterator = infiniteSequence();
let x = iterator.next();

while (x < 20) {
    x = iterator.next();
    console.log(x);
}