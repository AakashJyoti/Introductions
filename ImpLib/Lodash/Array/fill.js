const _ = require("lodash");

const arr_a = [1, 2, 3, 4, 5];
const arr_b = [1, 2, 3, 4, 5];

const result_a = _.fill(arr_a, "a");
const result_b = _.fill(Array(4), 2);
const result_c = _.fill(arr_b, "*", 1, 3);

console.log({ result_a, result_b, result_c });
