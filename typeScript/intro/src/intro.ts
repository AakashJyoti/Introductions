//  tsc fileName    // to compile into javaSript
//  tsc --watch fileName
//  tsc --init      //to setip config file

console.log("...Hello TypesScript...");

// // --- Basic Types
let id: number = 7;
let company: string = "Jabba";
let isPublished: boolean = false;
let data: any = "kachi Mitti";

data = 4;

let ids1: number[] = [1, 2, 3, 4, 5];
let ids: any[] = [1, 2, 3, 4, 5];

ids.push("kia bhai");

// // --- Tuple
let person: [number, string, boolean] = [1, "Jabba", true];

// // --- Tuple Array
let employee: [number, string][];

employee = [
  [1, "bakri"],
  [2, "murgi"],
  [3, "machli"],
];

// // --- Union
let chid: number | string = 6;

chid = "backlol";

// // --- Enum

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// console.log(Direction.Up);
// console.log(Direction.Down);
// console.log(Direction.Left);
// console.log(Direction.Right);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// console.log(Direction2.Up);
// console.log(Direction2.Down);
// console.log(Direction2.Left);
// console.log(Direction2.Right);

// // --- Object
const user: {
  id: number;
  name: string;
} = {
  id: 7,
  name: "Aakash",
};

// console.log(user);

type user2 = {
  id: number;
  name: string;
};

const user2 = {
  id: 3,
  name: "Jabba",
};

// console.log(user2);

// // --- Type Assertions
let cid: any = 1;

let customerId = <Number>cid; //One way
let customerId2 = cid as number; // Another way

// // --- Functions

function addNum(x: number, y: number): number {
  return x + y;
}

// void

function shoutOut(message: string | number): void {
  // console.log(message);
}

shoutOut("Bhag");

// // --- Interfaces

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user3: UserInterface = {
  id: 3,
  name: "Jabba",
};

// type can be used with Unions and Premetives
// use ? when valus in not defined
// use readonly when value is not wanna to be changed

interface Mathfun {
  (x: number, y: number): number;
}

const add: Mathfun = (x: number, y: number): number => x + y;
const sub: Mathfun = (x: number, y: number): number => x - y;

//  // --- Clases

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now register`;
  }
}

const brad = new Person(2, "Nemora Nemora");
const jj = new Person(7, "typescript Nemora");

// can be set Public, Private, Protected

console.log(brad, jj);
console.log(brad.register());

// --- SubClasses

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Navneet", "Chai wala");

//  // --- Genierics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["abba", "Dabbba", "jabba"]);

