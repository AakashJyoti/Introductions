const _ = require("lodash");

const arr_a = [1.2, 2.1, 3.2, 4.3];
const compArr_a = [2.3, 3.4];
const result_a = _.differenceBy(arr_a, compArr_a, Math.floor);
console.log(result_a);

const arr_b = [{ x: 1 }, { x: 2 }, { x: 1, y: 1 }, { x: 1, y: 2 }];
const compArr_b = [{ x: 1 }];
const result_b = _.differenceBy(arr_b, compArr_b, "x");
console.log(result_b);
