export class MyOtherClass {

}
export class NumberHelper {
    static sumParams(...numbers:number[]){
        return numbers.reduce((a,b)=>{ return a+b; });
    }
    static formatAsCurrency(val:number):string{
        return val == null ? "" : "$"+val.toFixed(2);
    }

    static parseString(val:string){
        return NumberHelper.isNumber(val)? parseFloat(val):null;
    }

    static toString(val : number | string) :string {
        if(typeof val === "number") {
            return val.toString();
        } else {
            return NumberHelper.isNumber(val) ? val: null;
        }
    }

    static isNumber(val:string):boolean {
        return !isNaN(parseInt(val,10));
    }
}








