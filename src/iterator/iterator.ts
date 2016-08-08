'use strict';

class Component  {
    constructor(public name: string) { }
}

class Frame implements Iterator<Component> {

    private pointer = 0;
    
    constructor(public name: string, public component: Component[]) {}

    public next(): IteratorResult<Component> {
        if(this.pointer < this.component.length) {
            return {
                done : false,
                value: this.component[this.pointer++]
            }
        } else {
            return {
                done: true
            }
        }
    }

}

let frame = new Frame("Door",[new Component("top"),new Component("bottom"),new Component("left"),new Component("right")])
let itres1 = frame.next();
let itres2 = frame.next();
let itres3 = frame.next();
let itres4 = frame.next();
let itres5 = frame.next();
console.log(itres1.value);
console.log(itres2.value);
console.log(itres3.value);
console.log(itres4.value);
console.log(itres5.value);

var lyrics = 'Never gonna give you up';
var html =`<div>${lyrics}</div>`;
console.log(html);

var say="a bird in hand > two in the bush";
var html2 = htmlEscape `<div>I would just like to say:${say}</div>`
function htmlEscape(literals,...placeholders:string[]):any {
    console.log("lit:",literals,"ph:",placeholders);
    let result = "";
    for(let i=0; i<placeholders.length;i++){
        result+=literals[i];
        result+=placeholders[i]
        .replace(/&/g,'&amp;')
        .replace(/"/g,'&quot;')
        .replace(/'/g,'&#39;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;');

    }
    result += literals[literals.length -1 ];
    return result;
}
console.log(html2);

function myFunction(x:number, y:number, z:number) { console.log(x,y,z);}
var args:number[] = [0, 1, 2];
(<any>myFunction)(...args);

function restFunction(...x:number[]){
    console.log(JSON.stringify(x));
}
var restargs:number[] = [0,1,2];
(<any>myFunction)(...restargs)

var list:number[] = [1,2];
list = [...list,4,5]; 
console.log(list);
let someValue:any = "this is a string";
let strlen:number = (<string>someValue).length;
enum Color {Red = 5, Green=3, Blue=9};
let c: Color = Color.Green;
let col:number = Color.Blue;
console.log(col);

enum AnimalFlags {
    None           = 0,
    HasClaws       = 1 << 0,
    CanFly         = 1 << 1,
    EatsFish       = 1 << 2,
    Endangered     = 1 << 3,
    EndangeredFlyingClawedFishEating = HasClaws | CanFly | EatsFish | Endangered,
}

interface Animal {
    flags:AnimalFlags;
}

function printAnimalAbilities(animal:Animal):void {
    let animalFlags = animal.flags;

    if(animalFlags & AnimalFlags.HasClaws) {
        console.log('animal has claws');
    }
    if(animalFlags & AnimalFlags.CanFly) {
        console.log('animal can fly');
    }
    if(animalFlags == AnimalFlags.None) {
        console.log('none');
    }
}

var animal = { flags: AnimalFlags.None };
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal); // animal has claws
animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal); // animal has claws, animal can fly

enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
namespace Weekday {
    export function isBusinessDay(day: Weekday) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true