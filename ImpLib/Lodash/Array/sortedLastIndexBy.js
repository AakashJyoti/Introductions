const _ = require("lodash");

const arr = [{ x: 4 }, { x: 4 }, { x: 5 }, { x: 5 }, { x: 6 }];
const result = _.sortedLastIndexBy(arr, { x: 5 }, "x");

console.log(result);
