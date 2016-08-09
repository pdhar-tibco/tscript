class MyWaitClass {
    testCallback() {
        console.log("Getting value...");
        this.getValueCallback((returnedVal) => {
            console.log(returnedVal);
        })
    }

    testPromise() {
        console.log("Getting value...");
        this.getValue().then((returnedVal) => {
            console.log(returnedVal);
        });
    }

    async test() {
        console.log("Getting value...");
        const returnedValue = await this.getValue();
        console.log(returnedValue);
    }

    getValueCallback(callback:(returnedVal:number)=> void) {
        setTimeout(()=>{
            callback(5);
        },1000);
    }

    async getValue() {
        return new Promise<number>((resolve) => {

            setTimeout(() => {
                resolve(5);
            }, 1000);
        });
    }
}

new MyWaitClass().testCallback();
new MyWaitClass().testPromise();
new MyWaitClass().test();

