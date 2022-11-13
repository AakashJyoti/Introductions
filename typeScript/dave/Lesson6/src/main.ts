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
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);
console.log(Dave.name);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lof", 25);
console.log(Sara.getLang());
// console.log(Sara.lang);

///////////////////////////////////

// Implementing a Interface to a class
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

////////////////////////////////////
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count);
console.log(john.id);
console.log(Steve.id);
console.log(Amy.id);

////////////////////////////////
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((e) => typeof e === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not a array of string");
  }
}

const MyBands = new Bands();
MyBands.data = ["One", "Two", "There"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Four"];
console.log(MyBands.data);
