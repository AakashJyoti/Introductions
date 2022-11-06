// Basic defines
let myName: string;
let cost: number;
let isLoading: boolean;
let album: any;

myName = "Coco";
cost = 9;
isLoading = false;
album = true;

// Union defines
let postId: number | string;
let isActive: number | boolean;
let getValue: string | boolean;

postId = 89;
postId = "duster";
isActive = 0;
isActive = true;
getValue = "ram";
getValue = false;

// function
const sum = (a: boolean, b: string) => a + b;

console.log(sum(true, "7"));

// type REGEX
let re: RegExp = /\w+/g;
// re = regular expression
// /g = global
