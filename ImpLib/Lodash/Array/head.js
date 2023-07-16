const _ = require("lodash");

const arr = [1, 2, 3, 4, 5];

const result_a = _.head(arr);
const result_b = _.head([]);

console.log({ result_a, result_b });
