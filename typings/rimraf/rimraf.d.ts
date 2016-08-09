declare module "rim-raf" {

    function rimraf(path: string, callback: (error: Error) => void): void;

    module rimraf {
        export function sync(path: string): void;
    }

    export  = rimraf
    
}


declare module "say-hello" {
    function sayHello(name: string): void;
    export = sayHello;
}
