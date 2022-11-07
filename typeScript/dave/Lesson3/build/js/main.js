"use strict";
// Arrays
let stringArr = ["one", "two", "three"];
let guitars = ["Bag", "Black", 700];
let mixedData = ["TV", 300, true];
let test = [];
stringArr[0] = "john";
stringArr.push("70");
guitars[0] = 90;
guitars.push(700);
guitars[2] = "Hello";
guitars.push("guide");
// Defining
let brands;
let product;
let mixed;
brands = ["he"];
// Tuple
// define type in specific locked in element position and specific length of array
let myTuple;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = brands;
myObj = {};
const exObj = { prop1: "Dave", prop2: true };
exObj.prop1 = "42";
exObj.prop2 = false;
let evh = {
    name: "EDY",
    active: false,
    album: [3030, 1998, "HIGH"],
};
let jp = {
    name: "none",
    active: true,
    album: [1289, 1389, "BELLOW"],
};
evh = jp;
const godDay = (def) => {
    console.log(def.name);
};
godDay({ name: "Cup" });
const dam = (hal) => {
    console.log(hal.name);
    console.log(hal.age);
};
dam({ name: "Int", age: 46 });
// Enums
// Unlike most TypeScript features, Enums are not a type-level addition but something added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
