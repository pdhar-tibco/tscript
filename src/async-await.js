var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class MyWaitClass {
    testCallback() {
        console.log("Getting value...");
        this.getValueCallback((returnedVal) => {
            console.log(returnedVal);
        });
    }
    testPromise() {
        console.log("Getting value...");
        this.getValue().then((returnedVal) => {
            console.log(returnedVal);
        });
    }
    test() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Getting value...");
            const returnedValue = yield this.getValue();
            console.log(returnedValue);
        });
    }
    getValueCallback(callback) {
        setTimeout(() => {
            callback(5);
        }, 1000);
    }
    getValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(5);
                }, 1000);
            });
        });
    }
}
new MyWaitClass().testCallback();
new MyWaitClass().testPromise();
new MyWaitClass().test();
//# sourceMappingURL=async-await.js.map