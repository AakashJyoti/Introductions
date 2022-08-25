"use strict";
//  tsc fileName    // to compile into javaSript
//  tsc --watch fileName
//  tsc --init      //to setip config file
console.log("...Hello TypesScript...");
// // --- Basic Types
let id = 7;
let company = "Jabba";
let isPublished = false;
let data = "kachi Mitti";
data = 4;
let ids1 = [1, 2, 3, 4, 5];
let ids = [1, 2, 3, 4, 5];
ids.push("kia bhai");
// // --- Tuple
let person = [1, "Jabba", true];
// // --- Tuple Array
let employee;
employee = [
    [1, "bakri"],
    [2, "murgi"],
    [3, "machli"],
];
// // --- Union
let chid = 6;
chid = "backlol";
// // --- Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// console.log(Direction.Up);
// console.log(Direction.Down);
// console.log(Direction.Left);
// console.log(Direction.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2.Up);
// console.log(Direction2.Down);
// console.log(Direction2.Left);
// console.log(Direction2.Right);
// // --- Object
const user = {
    id: 7,
    name: "Aakash",
};
const user2 = {
    id: 3,
    name: "Jabba",
};
// console.log(user2);
// // --- Type Assertions
let cid = 1;
let customerId = cid; //One way
let customerId2 = cid; // Another way
// // --- Functions
function addNum(x, y) {
    return x + y;
}
function shoutOut(message) {
    console.log(message);
}
shoutOut("Bhag");
