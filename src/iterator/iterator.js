'use strict';
class Component {
    constructor(name) {
        this.name = name;
    }
}
class Frame {
    constructor(name, component) {
        this.name = name;
        this.component = component;
        this.pointer = 0;
    }
    next() {
        if (this.pointer < this.component.length) {
            return {
                done: false,
                value: this.component[this.pointer++]
            };
        }
        else {
            return {
                done: true
            };
        }
    }
}
let frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")]);
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
var html = `<div>${lyrics}</div>`;
console.log(html);
var say = "a bird in hand > two in the bush";
var html2 = htmlEscape `<div>I would just like to say:${say}</div>`;
function htmlEscape(literals, ...placeholders) {
    console.log("lit:", literals, "ph:", placeholders);
    let result = "";
    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    result += literals[literals.length - 1];
    return result;
}
console.log(html2);
function myFunction(x, y, z) { console.log(x, y, z); }
var args = [0, 1, 2];
myFunction(...args);
function restFunction(...x) {
    console.log(JSON.stringify(x));
}
var restargs = [0, 1, 2];
myFunction(...restargs);
var list = [1, 2];
list = [...list, 4, 5];
console.log(list);
let someValue = "this is a string";
let strlen = someValue.length;
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 9] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
let col = Color.Blue;
console.log(col);
var AnimalFlags;
(function (AnimalFlags) {
    AnimalFlags[AnimalFlags["None"] = 0] = "None";
    AnimalFlags[AnimalFlags["HasClaws"] = 1] = "HasClaws";
    AnimalFlags[AnimalFlags["CanFly"] = 2] = "CanFly";
    AnimalFlags[AnimalFlags["EatsFish"] = 4] = "EatsFish";
    AnimalFlags[AnimalFlags["Endangered"] = 8] = "Endangered";
    AnimalFlags[AnimalFlags["EndangeredFlyingClawedFishEating"] = 15] = "EndangeredFlyingClawedFishEating";
})(AnimalFlags || (AnimalFlags = {}));
function printAnimalAbilities(animal) {
    let animalFlags = animal.flags;
    if (animalFlags & AnimalFlags.HasClaws) {
        console.log('animal has claws');
    }
    if (animalFlags & AnimalFlags.CanFly) {
        console.log('animal can fly');
    }
    if (animalFlags == AnimalFlags.None) {
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
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
var Weekday;
(function (Weekday) {
    function isBusinessDay(day) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
    Weekday.isBusinessDay = isBusinessDay;
})(Weekday || (Weekday = {}));
const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
