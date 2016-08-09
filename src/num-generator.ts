
export function* getNumbers() {
    for(let i=0; i < 10; i++) {
        yield i;
    }
}



export function getNumberArray(size:number):number[] {
    let a :number[] = [];
    for (let i =0 ; i < size; i++) {
        a.push(i);
    }
    return a;
}

export function* numberGenerator(size:number){
    for(let i=0; i < size; i++) {
        yield i;
    }
}