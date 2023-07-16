const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6];

const result_a = _.drop(arr);
const result_b = _.drop(arr, 2);
const result_c = _.drop(arr, 4);
const result_d = _.drop(arr, 0);

console.log({ result_a, result_b, result_c, result_d });
