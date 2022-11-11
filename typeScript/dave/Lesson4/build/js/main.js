"use strict";
// interface PostId = stringOrNumber // this not work because type and interfaces are deferent from each other
// Literal types
let myName;
let userName;
userName = "Astro";
// Functions
const add = (a, b) => {
    return a + b;
};
const lofMsg = (message) => {
    console.log(message);
};
lofMsg("Hello");
lofMsg(add(2, 3));
// lofMsg(add("2", 4));
let Subtract = (c, d) => c - d;
let multiply = (c, d) => c * d;
let multiplyAliases = (a, b) => a + b;
console.log(multiplyAliases(4, 5));
// optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => a + b + c;
console.log(addAll(5, 3));
console.log(sumAll(5, 3));
// Rest parameters
const total = (...numS) => numS.reduce((prev, curr) => prev + curr);
console.log(total(1, 2, 3, 4));
// Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never type
const numberOfString = (value) => {
    if (isNumber(value))
        return "string";
    if (isNumber(value))
        return "number";
    throw new Error("This should never happen !");
};
