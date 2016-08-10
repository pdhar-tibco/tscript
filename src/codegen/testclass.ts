export interface TestInterface {
    toString(): string;
}

export abstract class AbstractTestClass implements TestInterface {
    abstract getValue(): Object;
}

export class TestClass extends AbstractTestClass {
    myStringProperty: string;
    myNumberProperty = 253;
    myunionProperty: string | number | boolean = false;

    constructor(start: boolean) {
        super();
        this.myunionProperty = start;
    }

    myMethod(myParameter: string) {
        return `Test: ${myParameter}`;
    }

    toString(): string {
        return "";
    }

    getValue(): Object {
        return {};
    }

}