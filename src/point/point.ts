'use strict';
import fs = require("fs");

class Point {
    constructor(public x: number, public y: number) {

    }
    add(point: Point) {
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
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    add(point: Point3D): any {
        var p2d = super.add(point);
        return new Point3D(p2d.x, p2d.y, this.z + point.z);
    }
}
//////////////////////////////////////////////////////
class Something {
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}

var s1 = new Something();
var s2 = new Something();

console.log(Something.instances)
//////////////////////////////////////////////////////
class Foobase {
    public x: number;
    private y: number;
    protected z: number;
}
var foo = new Foobase();
console.log(foo.x)
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
    x: number;

    constructor(x: number) {
        this.x = x;
    }
}
class FooNew {
    members: number[] = [];
    constructor(public x: number) {
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
    log = () => { console.log('Hello World') };
}

class Child extends Base {
    logWorld() { this.log(); };
}

var child = new Child();
child.logWorld();

class Person {
    constructor(public age: number) { }
    growOld = () => { this.age++; };
}
var person = new Person(20);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000);

class Adder {
    constructor(public a: string) { }
    add = (b: string): string => { return this.a + b };
}
class ExtendedAdder extends Adder {
    private superAdd = this.add;
    add = (b: string): string => { return this.superAdd(b) }
}

function iTakeItAll(first: string, second: string, ...allOthers: string[]) {
    console.log(allOthers);
}
iTakeItAll('foo', 'bar');
iTakeItAll('foo', 'bar', 'bas', 'qux');
{
    let xx = 123;
    if (true) {
        let xx = 456;
    }
    console.log(xx);
}

var index = 0
var array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log(index);

var funcs: any = []
for (var i = 0; i < 3; i++) {
    (function (x: number) {
        funcs.push(function () {
            console.log(x);
        });

    })(i);

}
for (var j = 0; j < 3; j++) {
    funcs[j]();
}

{
    const FOO = '123';
    if (true) {
        const FOO = 123;
    }
    const BAR = { x: 1, y: 2 };
    BAR.x = 5;
    console.log(BAR);
}


{
    var rect = { x: 0, y: 10, width: 15, height: 20 };
    let { x, y, width, height} = rect;
    console.log(x, y, width, height);
    const obj = { some_prop: "some_prop" };
    const {"some_prop": someProp} = obj;
    console.log(someProp === "some_prop");

    var foox = { barx: { bas: 123 } };
    var {barx: {bas}} = foox;
    console.log(bas);
}

{



    function loadJSON(filename: string, cb: (error: Error, param?: string) => void) {
        fs.readFile(filename, function (err: Error, data: any) {
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

    loadJSON('bad.json', function (err: Error, data: string) {
        if (err) console.log('bad.json error', err.message);
        else console.log(data);
    })
}

/// <reference path="es6-promise.d.ts" />

// import rsvp = require('es6-promise');
// rsvp.polyfill(); // Test for polyfill method existence
// var Promise = rsvp.Promise;
import { Promise } from 'es6-promise';

const promise = new Promise<number>((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log("I get called:", res === 123);
})
promise.catch((err: Error) => {

});

const promise1 = new Promise<any>((resolve, reject) => {
    reject(new Error("Something bad happened"));
});
promise1.then((res) => {

});
promise1.catch((err: Error) => {
    console.log('I get called:', err.message);
});

Promise.resolve(123).then((res: number) => {
    console.log(res);
    return 456;
}).then((res: number) => {
    console.log(res);
    return Promise.resolve(666);
}).then((res: number) => {
    console.log(res);
    return Promise.resolve(333);
})

function returnPromise(): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => resolve("Hello World!"), 1000);
    });
}
Promise.resolve(1234567).then((res: number) => {
    console.log(res);
    return returnPromise();
}).then((res) => {
    console.log(res);
})

function readFileAsync(filename: string): Promise<any> {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err: Error, result: Buffer) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

function loadJSONAsync(filename: string): Promise<any> {
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
}).catch((err: Error) => {
    console.log("err:", err.message);
});

function loadItem(id: string): Promise<{ id: string }> {
    return new Promise((resolve) => {
        console.log("Loading item:", id);
        setTimeout(() => {
            resolve({ id: id });
        }, 1000);

    });

}

let item1: { id: string }, item2: { id: string }, item3: { id: string };
loadItem('1').then((res) => {
    item1 = res;
    return loadItem('2');
}).then((res) => {
    item2 = res;
    console.log('done');
})

Promise.all([loadItem('1'), loadItem('2'), loadItem('3')]).then((res) => {
    [item1, item2, item3] = res;
    console.log('done', res);
})

{
    var [x, y, ...remaining] = [1, 2, 3, 4];
    console.log(x, y, remaining); // 1, 2, [3,4]    
}
{
    var x = 1, y = 2;
    [x, y] = [y, x];
    console.log(x, y); // 2,1
}


{
    var someArray: number[] = [9, 2, 5];
    for (let item in someArray) {
        console.log(item);
    }
    for (let item of someArray) {
        console.log(item);
    }
}

// function* infiniteSequence() {
//     var i = 0;
//     while (true) {
//         if (i > 20) {
//             break;
//         }
//         yield i++;
//     }
// }
// var iterator = infiniteSequence();
// while (true) {
//     console.log(iterator.next());
// }