const _ = require("lodash");

let arr = ["a", "b", "c", "d", "e", "f", "g", "a"];
let pullArr = ["a", "e", "g"];

const result = _.pullAll(arr, pullArr);
console.log(result);
