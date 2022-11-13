"use strict";
// Classes
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);
console.log(Dave.name);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lof", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
////////////////////////////////////
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    static getCount() {
        return Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(john.id);
console.log(Steve.id);
console.log(Amy.id);
////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((e) => typeof e === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not a array of string");
    }
}
const MyBands = new Bands();
MyBands.data = ["One", "Two", "There"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Four"];
console.log(MyBands.data);
