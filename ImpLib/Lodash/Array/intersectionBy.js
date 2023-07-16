const _ = require("lodash");

const arr_a1 = [1.2, 2.3, 3.4, 4.5];
const arr_a2 = [3.2, 4.3, 5.4, 6.5];

const arr_b1 = [{ x: 1 }, { y: 1 }, { x: 1, y: 1 }];
const arr_b2 = [{ x: 1, y: 1 }];

const result_a = _.intersectionBy(arr_a1, arr_a2, Math.floor);
const result_b = _.intersectionBy(arr_b1, arr_b2, "x");

console.log({ result_a, result_b });
