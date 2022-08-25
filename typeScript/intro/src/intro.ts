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

function shoutOut(message: string | number): void {
  console.log(message);
}

shoutOut("Bhag");
