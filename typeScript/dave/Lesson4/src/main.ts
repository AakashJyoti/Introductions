// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  album: stringOrNumberArray;
};

type userId = stringOrNumber;

// interface PostId = stringOrNumber // this not work because type and interfaces are deferent from each other

// Literal types
let myName: "Aakash";

let userName: "Aakash" | "Jyoti" | "Astro";
userName = "Astro";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const lofMsg = (message: any): void => {
  console.log(message);
};

lofMsg("Hello");
lofMsg(add(2, 3));
// lofMsg(add("2", 4));

let Subtract = (c: number, d: number): number => c - d;

type mathFunction = (a: number, b: number) => number;
let multiply: mathFunction = (c, d) => c * d;

interface mathFunctionAliases {
  (a: number, b: number): number;
}
let multiplyAliases: mathFunctionAliases = (a, b) => a + b;
console.log(multiplyAliases(4, 5));

// optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => a + b + c;

console.log(addAll(5, 3));
console.log(sumAll(5, 3));

// Rest parameters
const total = (...numS: number[]): number =>
  numS.reduce((prev, curr) => prev + curr);

console.log(total(1, 2, 3, 4));

// Never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of never type
const numberOfString = (value: number | string): string => {
  if (isNumber(value)) return "string";
  if (isNumber(value)) return "number";
  throw new Error("This should never happen !");
};
