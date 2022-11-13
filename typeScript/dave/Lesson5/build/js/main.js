"use strict";
// Convert to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful because TypeScript sees no problem here bt it have a problem
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string;
10;
// DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
