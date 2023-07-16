const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6];

const result_a = _.dropRight(arr);
const result_b = _.dropRight(arr, 2);
const result_c = _.dropRight(arr, 4);
const result_d = _.dropRight(arr, 0);

console.log({ result_a, result_b, result_c, result_d });
