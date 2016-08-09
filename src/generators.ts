function selectiveBold(strings:string[],...values:any[]) {
    let str="";
    // console.log(strings);
    // console.log(values);
    for(let i=0; i < strings.length; i++) {
        str += strings[i];
        if(i < values.length) {
            str +=  "<b>"+values[i]+"</b>";
        }
    }
    return str;
}


const formatted = selectiveBold `The current unix timestamp is ${Date.now()}`;
console.log(formatted);

function* getNames() {
    console.log("2");
    yield "John";
    console.log("4");
    let myValue = yield "Stephanie";
    console.log(`6 passed in value:${myValue}`);
}

const nameGenerator  = getNames();
console.log("1");
console.log(`3 ${nameGenerator.next().value}`);
console.log(`5 ${nameGenerator.next().value}`);
console.log(`7 Done ? ${nameGenerator.next(964).done}`);
console.log(".....")
function* get10Numbers() {
    for(let i=0; i < 10; i++) {
        yield i;
    }
}

for(let num of get10Numbers()){
    console.log(num);
}