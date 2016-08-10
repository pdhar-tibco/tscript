import { sayHello } from "./greet";

console.log(sayHello("TypeScript"));

function selectiveBold(strings: string[], ...values: any[]) {
    let str = "";
    console.log(strings);
    console.log(values);
    for (let i = 0; i < strings.length; i++) {
        str += strings[i];
        if (i < values.length) {
            str += "<b>" + values[i] + "</b>";
        }
    }
    return str;
}


const formatted = selectiveBold`The current unix timestamp is ${Date.now()}`;
console.log(formatted);