const _ = require("lodash");

let arr = ["a", "b", "c", "d", "e", "f", "g"];

const result_a = _.nth(arr, 1);
const result_b = _.nth(arr, -3);

console.log({ result_a, result_b });
