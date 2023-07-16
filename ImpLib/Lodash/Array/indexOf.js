const _ = require("lodash");

const arr = [1, 2, 3, 4, 5];

const result_a = _.indexOf(arr, 3);
const result_b = _.indexOf(arr, 4, 2);

console.log({ result_a, result_b });
