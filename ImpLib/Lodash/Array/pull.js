const _ = require("lodash");

let arr = ["a", "b", "c", "d", "e", "f", "g", "a"];

const result = _.pull(arr, "a");
console.log(result);
