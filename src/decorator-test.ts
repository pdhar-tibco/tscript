import {Log} from "./decorator/log";

export class DecoratorTest {

    constructor() { }

    @Log()
    doSomething(str: string): void {
        console.log(`TEST` + str);
    }


}

new DecoratorTest().doSomething("Hello");

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    };
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    };
}

class C {
    @f()
    @g()
    method() { }
}