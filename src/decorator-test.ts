import {Log} from "./decorator/log"

export class DecoratorTest {

    constructor() {}

    @Log
    doSomething(str:string):void {
        console.log(`TEST`+str);
    }


}

new DecoratorTest().doSomething("Hello");