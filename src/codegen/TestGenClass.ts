import {TestInterface} from "./testclass";


export abstract class TestGenClass implements TestInterface {
    myProperty1: string;
    myProperty2 = 4;

    // myMethod is here
    myMethod(myParam: string) {
        if (myParam != null && myParam.length > 40) {
            alert(myParam);
        }

        return myParam;
    }
}
